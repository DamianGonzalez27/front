# 1. Imagen base para construir la aplicación
FROM node:20-alpine AS builder

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar archivos necesarios
COPY package.json package-lock.json ./  

# 4. Instalar dependencias
RUN npm ci  

# 5. Copiar el resto del código fuente
COPY . .  

# 6. Construir la aplicación
RUN npm run build  

# 7. Eliminar dependencias de desarrollo (opcional para reducir tamaño)
RUN npm prune --production  

# 8. Imagen base para producción
FROM node:20-alpine  

# 9. Directorio de trabajo
WORKDIR /app  

# 10. Copiar archivos necesarios desde la imagen de construcción
COPY --from=builder /app/package.json ./  
COPY --from=builder /app/node_modules ./node_modules  
COPY --from=builder /app/.next ./.next  
COPY --from=builder /app/public ./public  

# 11. Configurar variables de entorno (puerto y modo)
ENV PORT=3000  
ENV NODE_ENV=production  

# 12. Exponer el puerto
EXPOSE 3000  

# 13. Comando para ejecutar la aplicación
CMD ["node", ".next/standalone/server.js"]
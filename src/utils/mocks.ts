// Función para generar productos de prueba
export const generateMockProducts = (count: number): Product[] => {
  const categories = ["Electrónica", "Hogar", "Juguetes", "Ropa"];
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      name: `Producto ${i}`,
      description: `Descripción del producto ${i}`,
      price: Math.floor(Math.random() * 1000) + 100,
      stock: Math.floor(Math.random() * 50),
    });
  }
  return products;
};
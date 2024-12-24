import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useLocalStorage from "@/hooks/useStorage";
import { newTheme } from "@/utils/themes";
import {
  AppContextType,
  ThemeContextType,
  AppContextProviderProps,
} from "@/types/contexts";

const AppContext = createContext<AppContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [session, setSession] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [themeStorage, setThemeStorage] = useLocalStorage("isDark", false);

  // Se asegura de cargar el tema almacenado
  useEffect(() => {
    setIsDark(themeStorage);
  }, [themeStorage]);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
    setThemeStorage(!isDark);
  }, [setThemeStorage]);

  // Memoiza el tema
  const customTheme = useMemo(
    () => newTheme(isDark ? "dark" : "light"),
    [isDark]
  );

  const appContextValue = useMemo(
    () => ({
      session,
      setSession,
      isDark,
      setIsDark,
    }),
    [session, setSession, isDark, setIsDark]
  );

  const themeContextValue = useMemo(
    () => ({
      toggleTheme,
      mode: (isDark ? "dark" : "light") as "dark" | "light",
    }),
    [toggleTheme, isDark]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

// Hook para sesión
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext debe usarse dentro de un AppContextProvider"
    );
  }
  return context;
};

// Hook para tema
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext debe usarse dentro de un AppContextProvider"
    );
  }
  return context;
};

export default useAppContext;

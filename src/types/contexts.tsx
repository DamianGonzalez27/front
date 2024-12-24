import { ReactNode } from "react";

export interface AppContextType {
  session: boolean;
  setSession: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export interface AppContextProviderProps {
  children: ReactNode;
}

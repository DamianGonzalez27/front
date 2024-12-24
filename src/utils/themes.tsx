import { createTheme } from "@mui/material";

export const newTheme = (mode: any) => {
  const newTheme = createTheme({
    palette: {
      mode,
    },
    typography: {
      h1: {
        color: "red",
      },
    },
  });

  return newTheme;
};

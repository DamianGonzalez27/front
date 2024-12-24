import { IconButton, Switch, ButtonGroup } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import useAppContext, { useThemeContext } from "../../contexts/general";

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeContext();
  const { isDark } = useAppContext();

  return (
    <ButtonGroup>
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        inputProps={{ "aria-label": "controlled" }}
        color="secondary"
      />
      <IconButton color="inherit">
        {mode === "light" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </ButtonGroup>
  );
};

export default ThemeToggleButton;

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { BsMenuApp, BsShop } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import ThemeToggleButton from "../inputs/togglerTheme";

/**
 * Componente de la barra de navegacion
 *
 * @returns Navbar
 */
export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <BsMenuApp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Produtos
          </Typography>

          <Box>
            <IconButton href="/cart" color="inherit">
              <FaCartPlus />
            </IconButton>
            <IconButton href="/orders" color="inherit">
              <BsShop />
            </IconButton>
            <ThemeToggleButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { Box, Stack, ListItem, Paper, Typography } from "@mui/material";
import type { NextPageWithLayout } from "./_app";

const Products = [
  {
    id: "1",
    name: "Producto 1",
  },
  {
    id: "2",
    name: "Producto 1",
  },
  {
    id: "3",
    name: "Producto 1",
  },
  {
    id: "4",
    name: "Producto 1",
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Stack spacing={2}>
        {Products.map((item) => {
          return (
            <Paper>
              <Typography>Producto</Typography>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};
export default Home;

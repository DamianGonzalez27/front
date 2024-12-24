import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { CounterInput } from "@/components/inputs/counter";

const Product: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ md: 8, xs: 12 }}>
        <Card>
          <CardContent>
            <Typography>Nombre del producto</Typography>
            <Typography>Descripcion del producto</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <Card>
          <Box
            sx={{
              padding: "10px",
            }}
          >
            <Typography>Reserva con nosotros</Typography>
          </Box>
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle1" fontWeight="medium">
                  Productos en stock: {10}
                </Typography>
              </Box>
              <CounterInput stock={10} />
              <Divider />
              <Button variant="contained" color="success">
                Agregar al carrito
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Product;

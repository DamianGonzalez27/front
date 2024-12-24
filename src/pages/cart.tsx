import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NextPageWithLayout } from "./_app";
import { Products } from "@/utils/constants";
import { ProductCart } from "@/components/cards/product";
import { useState } from "react";

const Cart: NextPageWithLayout = () => {
  const [total, setTotal] = useState<number>(0);

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={{ md: 8, xs: 12 }}>
        <Stack spacing={1}>
          {Products.map((item) => {
            return (
              <ProductCart id={item.id} name={item.name} price={item.price} />
            );
          })}
        </Stack>
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <Card>
          <CardContent>
            <Typography>Total de articulos:</Typography>
            <Typography>Subtotal: </Typography>
            <Typography>Envio: </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              Comprar
            </Button>
          </CardActions>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Cart;

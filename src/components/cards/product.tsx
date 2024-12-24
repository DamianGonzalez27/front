import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { PriceChip } from "../inputs/priceChip";
import { CounterInput } from "../inputs/counter";

const ProductStore = ({ id, name, description, price }: SingleProductProps) => {
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <PriceChip price={price} />
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"product/" + id}
            sx={{ textTransform: "none", fontWeight: "medium" }}
          >
            Ver más
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const ProductCart = ({ id, name, price }: SingleProductProps) => {
  return (
    <Card key={id} sx={{ m: 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">
            {name}
          </Typography>
        </Box>
        <Box>
          <PriceChip price={price} />
        </Box>
        <CounterInput stock={10} />
      </Stack>
    </Card>
  );
};

export { ProductStore, ProductCart };

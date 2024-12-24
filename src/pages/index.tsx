import { Box, Grid2, Skeleton } from "@mui/material";
import type { NextPageWithLayout } from "./_app";
import { ProductStore } from "@/components/cards/product";
import useFetchProducts from "@/hooks/useProducts";

const Home: NextPageWithLayout = () => {
  const { products, loading, error, updateSearchParams, reload } =
    useFetchProducts();
  return (
    <Box border={0}>
      {loading ? (
        <Skeleton animation="pulse" />
      ) : (
        <Grid2 container spacing={2}>
          {products.map((item) => {
            return (
              <Grid2 size={{ xs: 12, sm: 6, xl: 3, md: 4 }}>
                <ProductStore
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  stock={item.stock}
                />
              </Grid2>
            );
          })}
        </Grid2>
      )}
    </Box>
  );
};
export default Home;

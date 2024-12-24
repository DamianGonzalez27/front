import { generateMockProducts } from "@/utils/mocks";
import { useState, useEffect, useCallback } from "react";
import useLocalStorage from "./useStorage";
import Product from "@/pages/product/[id]";

/**
 * Con este hook obtendremos la lista de productos
 */
const useFetchProducts = (
  initialParams: SearchParams = {}
): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<SearchParams>(initialParams);
  const [localProducts, setLocalProducts] = useLocalStorage<Product[]>(
    "products",
    []
  );

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (localProducts.length == 0) {
        const mockData = generateMockProducts(100);

        const filtered = mockData.filter((product) => {
          const matchesQuery = params.query
            ? product.name.toLowerCase().includes(params.query.toLowerCase())
            : true;
          const matchesPrice =
            (params.minPrice ? product.price >= params.minPrice : true) &&
            (params.maxPrice ? product.price <= params.maxPrice : true);
          return matchesQuery && matchesPrice;
        });

        setProducts(filtered);
        setLocalProducts(filtered);
        // const response: AxiosResponse<Product[]> = await axios.get("/api/products", { params });
        // setProducts(response.data);
      } else {
        setProducts(localProducts);
      }
    } catch (err) {
      setError("Error al cargar los productos.");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const updateSearchParams = (newParams: Partial<SearchParams>) => {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  const reload = () => {
    fetchProducts();
  };

  return { products, loading, error, updateSearchParams, reload };
};

export default useFetchProducts;

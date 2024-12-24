interface SingleProductProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  stock?: number;
}

interface PriceChip {
  price: number;
}

interface InitialCounter {
  counter?: number;
  stock: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  updateSearchParams: (newParams: Partial<SearchParams>) => void;
  reload: () => void;
}

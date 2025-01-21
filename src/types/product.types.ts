export interface productState {
  data: null | Product[];
  isFetched: boolean;
  singleProduct: null | Product;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

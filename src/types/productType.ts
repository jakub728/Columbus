export interface Product {
  articleNumber: string;
  brandLogo: string;
  brandName: string;
  description: string;
  gtin: string;
  image: {
    url: string;
    altText: string;
  };
  promotion?: {
    name?: string;
    percentage?: number;
  };
  price: number;
  title: string;
  url: string;
}

export interface ProductResponse {
  products: Product[];
}

export interface CartProduct {
  title: string;
}

export interface Cart {
  count: number;
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  emptyCart: () => void;
}

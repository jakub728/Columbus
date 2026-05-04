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


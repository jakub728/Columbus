export interface Product {
  articleNumber: string;
  brandLogo: string;
  brandName: string;
  description: string;
  gtin: string;
  image: {
    url: string;
    aleText: string;
  };
  promotion: {
    name: string;
    precentage: number;
  };
  title: string;
  url: string;
}

export interface ProductResponse {
  products: Product[];
}

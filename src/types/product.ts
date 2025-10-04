export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
  quantityAvailable?: number;
  selectedOptions: SelectedOption[];
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  images: Image[];
  variants: ProductVariant[];
  options: ProductOption[];
  priceRange?: {
    minVariantPrice: Money;
  };
  seo?: {
    title: string;
    description: string;
  };
}
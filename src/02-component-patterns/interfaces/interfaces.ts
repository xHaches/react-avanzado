import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[]
  }
  
export interface Product {
    id: string;
    title: string;
    img?: string;
}
  
export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void
  }

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
    Title: ({ title }: {
        title?: string | undefined;
    }) => JSX.Element;
    Image: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element;
    Buttons: () => JSX.Element;
}
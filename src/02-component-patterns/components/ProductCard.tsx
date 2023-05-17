import styles from '../styles/styles.module.css';
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties
}

export const ProductCard = ({product, children, className, style}: Props) => {

  const {counter, increaseBy} = useProduct(); 

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div 
        className={ `${styles.productCard} ${className}`}
        style={ style }  
      >
          {children}
      </div>
    </Provider>
  )
}
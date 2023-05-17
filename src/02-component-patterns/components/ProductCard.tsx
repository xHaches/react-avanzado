import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({product, children}: ProductCardProps) => {

  const {counter, increaseBy} = useProduct(); 

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={ styles.productCard }>
          {children}
      </div>
    </Provider>
  )
}
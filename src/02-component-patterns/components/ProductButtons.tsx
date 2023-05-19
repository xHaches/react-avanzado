import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties
}

export const CountLabel = ({counter}: {countLabel: string, counter: number}) => {
    return (
        <div className={styles.countLabel}> { counter } </div>
    )
}

export const ButtonMinus = ({increaseBy, className}: {buttonMinus: string, increaseBy: (value: number) => void, className?: string}) => {
    return (
        <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>-</button>
    )
}

export const ButtonAdd = ({increaseBy, className}: {buttonAdd: string, increaseBy: (value: number) => void, className?: string}) => {
    return (
        <button className={`${styles.buttonAdd} ${className}`} onClick={() => increaseBy(+1)}>+</button>
    )
}

export const ProductButtons = ({className, style}: Props) => {
    // TODO: maxCount
    const {increaseBy, counter, maxCount} = useContext(ProductContext)
    console.log(maxCount);
    
    const isMaxReached = useCallback(() => {
        return counter === maxCount
    }, [counter, maxCount],)
    
  
    return (
      <div className={`${styles.buttonsContainer} ${className}`} style={style}> 
        <ButtonMinus buttonMinus={styles.buttonMinus} increaseBy={increaseBy} />
        <CountLabel countLabel={styles.countLabel} counter={counter} />
        <ButtonAdd buttonAdd={styles.buttonAdd} increaseBy={increaseBy} className={isMaxReached() ? styles.disabled : '' } />
      </div>
    );
}
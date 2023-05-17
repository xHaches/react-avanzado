import { CSSProperties, useContext } from "react";
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

export const ButtonMinus = ({increaseBy}: {buttonMinus: string, increaseBy: (value: number) => void}) => {
    return (
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
    )
}

export const ButtonAdd = ({increaseBy}: {buttonAdd: string, increaseBy: (value: number) => void}) => {
    return (
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>+</button>
    )
}

export const ProductButtons = ({className, style}: Props) => {

    const {increaseBy, counter} = useContext(ProductContext)
  
    return (
      <div className={`${styles.buttonsContainer} ${className}`} style={style}> 
        <ButtonMinus buttonMinus={styles.buttonMinus} increaseBy={increaseBy} />
        <CountLabel countLabel={styles.countLabel} counter={counter} />
        <ButtonAdd buttonAdd={styles.buttonAdd} increaseBy={increaseBy} />
      </div>
    );
}
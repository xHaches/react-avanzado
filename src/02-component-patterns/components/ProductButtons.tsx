import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

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

export const ProductButtons = () => {

    const {increaseBy, counter} = useContext(ProductContext)
  
    return (
      <div className={styles.buttonsContainer}> 
        <ButtonMinus buttonMinus={styles.buttonMinus} increaseBy={increaseBy} />
        <CountLabel countLabel={styles.countLabel} counter={counter} />
        <ButtonAdd buttonAdd={styles.buttonAdd} increaseBy={increaseBy} />
      </div>
    );
}
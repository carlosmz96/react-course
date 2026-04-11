import { useState } from "react";

// import './ItemCounter.css';

import styles from './ItemCounter.module.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  }

  return (
    <section className={styles['item-row']}>
      <span className={styles['item-text']}
        style={{
          color: count === 1 ? 'red' : 'black'
        }}>
        {name}
      </span>
      <button onClick={handleSubtract}> - </button>
      <span>{count}</span>
      <button onClick={handleAdd}> + </button>
    </section>
  );
};

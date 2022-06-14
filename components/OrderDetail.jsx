import { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({
      customer,
      address,
      total,
      method: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label htmlFor="input-name" className={styles.label}>
            Name Surname
          </label>
          <input
            type="text"
            id="input-name"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="input-number" className={styles.label}>
            Phone Number
          </label>
          <input
            type="text"
            id="input-number"
            placeholder="0821"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="input-address" className={styles.label}>
            Address
          </label>
          <textarea
            rows={5}
            type="text"
            id="input-address"
            placeholder="Jl. Hayam Wuruk"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} type="button" onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;

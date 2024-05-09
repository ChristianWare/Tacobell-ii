"use client";

import { useShoppingCart } from "use-shopping-cart";
import styles from "./ShoppingCartModal.module.css";
import { useState } from "react";
import Close from "../../public/icons/close.svg";

export default function ShoppingCartModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();

  console.log(cartCount);

  return (
    <div className={styles.container}>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`}></div>

      <div className={styles.cartMenu} onClick={toggleCart}>
        <div className={styles.cartCount}>
          Cart <span>0</span>
        </div>
        <div
          className={`${styles.cartContents} ${isOpen ? styles.active : ""}`}
        >
          <Close className={styles.icon} onClick={toggleCart} />
          <div className={styles.header}>Shopping Cart({cartCount})</div>
          <ul className={styles.itemList}>
            {cartCount === 0 ? (
              <p>You don&apos;t have any items</p>
            ) : (
              <p>hey you have some items</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./MenuSection.module.css";
import { simplifiedProduct } from "@/app/interface";
import PreviewCard from "../PreviewCard/PreviewCard";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

interface Props {
  data: simplifiedProduct[];
}

const MenuSection = ({ data }: Props) => {
  // Manually separate products by category
  const drinks = data.filter((product) => product.categoryName === "Drinks");
  const mainDishes = data.filter(
    (product) => product.categoryName === "Main Dishes"
  );
  const breakfast = data.filter(
    (product) => product.categoryName === "Breakfast"
  );
  const dessert = data.filter((product) => product.categoryName === "Desserts");

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* Main Dishes Section */}
          <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>Main Dishes</h2>
            <div className={styles.categoryItems}>
              {mainDishes.map((product) => (
                <PreviewCard
                  data={product}
                  key={product._id}
                  btnType='secondaryii'
                />
              ))}
            </div>
          </div>

          {pathname !== "/" && (
            <>
              {/* Breakfast Section */}
              <div className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Breakfast</h2>
                <div className={styles.categoryItems}>
                  {breakfast.map((product) => (
                    <PreviewCard
                      data={product}
                      key={product._id}
                      btnType='secondaryii'
                    />
                  ))}
                </div>
              </div>

              {/* Dessert Section */}
              <div className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Dessert</h2>
                <div className={styles.categoryItems}>
                  {dessert.map((product) => (
                    <PreviewCard
                      data={product}
                      key={product._id}
                      btnType='secondaryii'
                    />
                  ))}
                </div>
              </div>
              {/* Drinks Section */}
              <div className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>Drinks</h2>
                <div className={styles.categoryItems}>
                  {drinks.map((product) => (
                    <PreviewCard
                      data={product}
                      key={product._id}
                      btnType='secondaryii'
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {pathname === "/" && (
          <div className={styles.btnContainer}>
            <Button text='See Full Menu' href='/menu' btnType='primaryiii' />
          </div>
        )}
      </LayoutWrapper>
    </div>
  );
};

export default MenuSection;

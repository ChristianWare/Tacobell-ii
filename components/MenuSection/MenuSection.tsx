"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./MenuSection.module.css";
import { categoryData, simplifiedProduct } from "@/app/interface";
import PreviewCard from "../PreviewCard/PreviewCard";

interface Props {
  data: simplifiedProduct[];
  categoryData: categoryData[];
}

const MenuSection = ({ data, categoryData }: Props) => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {categoryData.map((category) => {
            const categoryProducts = data.filter(
              (product) => product.categoryName === category.name
            );

            return (
              <div key={category._id} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category.name}</h2>
                <div className={styles.categoryItems}>
                  {categoryProducts.map((product) => (
                    <PreviewCard
                      data={product}
                      key={product._id}
                      btnType='secondaryii'
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default MenuSection;

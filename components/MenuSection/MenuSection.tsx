"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./MenuSection.module.css";
import { categoryData, simplifiedProduct } from "@/app/interface";
import PreviewCard from "../PreviewCard/PreviewCard";
import { useState } from "react";

interface Props {
  data: simplifiedProduct[];
  categoryData: categoryData[];
}

const MenuSection = ({ data, categoryData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredData = selectedCategory
    ? data.filter((product) => product.categoryName === selectedCategory)
    : data;

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div
              className={styles.categoryName}
              onClick={() => setSelectedCategory("")}
            >
              All
            </div>
            {categoryData.map((y) => (
              <h2
                key={y._id}
                className={styles.categoryName}
                onClick={() => setSelectedCategory(y.name)}
              >
                {y.name}
              </h2>
            ))}
          </div>
          <div className={styles.bottom}>
            {filteredData.map((product) => (
              <PreviewCard data={product} key={product._id} />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default MenuSection;

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const filteredData = selectedCategory
    ? data.filter((product) => product.categoryName === selectedCategory)
    : data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div
              className={
                selectedCategory === ""
                  ? styles.activeCategory
                  : styles.categoryName
              }
              onClick={() => setSelectedCategory("")}
            >
              All
            </div>
            {categoryData.map((category) => (
              <h2
                key={category._id}
                className={
                  selectedCategory === category.name
                    ? styles.activeCategory
                    : styles.categoryName
                }
                onClick={() => {
                  setSelectedCategory(category.name);
                  setCurrentPage(1);
                }}
              >
                {category.name}
              </h2>
            ))}
          </div>
          <div className={styles.bottom}>
            {currentItems.map((product) => (
              <PreviewCard
                data={product}
                key={product._id}
                btnType='secondaryii'
              />
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={
                  currentPage === index + 1
                    ? styles.active
                    : styles.paginationBtn
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default MenuSection;

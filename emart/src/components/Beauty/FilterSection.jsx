import React from "react";
import styles from "./FilterSection.module.css";

export const FilterDiv = () => {
  return (
    <>
      <div className={styles.filterdiv}>
        {/* <div className={styles.searchdiv}>
          <p>Filter By:</p>
          <p className="Reset">Reset</p>
        </div>
        <div className={styles.selectdiv}>
          <select>
            <option value="0">Gender All</option>
            <option value="1">All</option>
            <option value="2">Women</option>
            <option value="3">Men</option>
            <option value="4">Kids</option>
          </select>
          <select>
            <option value="0">All</option>
            <option value="1">All</option>
            <option value="2">New</option>
            <option value="3">Pre-Owned</option>
          </select>
          <select>
            <option value="0">Category : Beauty</option>
            <option value="1">All</option>
            <option value="2">Clothing</option>
            <option value="3">Shoes</option>
            <option value="4">Bags</option>
            <option value="5">Accessories</option>
            <option value="6">Home</option>
          </select>
        </div> */}
        <div className="first1">
          <div className={styles.lists}>
            <ui className={styles.high}>Related Category Women</ui>
            {/* <br/> */}
            <ui>Beauty Sale</ui>
            <ui>Beauty</ui>
            <ui>Home</ui>
            <ui>Accessories</ui>
            <ui>Bags</ui>
            <ui>Clothings</ui>
            <ui>Shoes</ui>
            {/* <br/> */}
          </div>
          <div className={styles.lists}>
            <ui className={styles.high}>Related Category Men</ui>
            {/* <br/> */}
            <ui>Beauty Sale</ui>
            <ui>Beauty</ui>
            <ui>Home</ui>
            <ui>Accessories</ui>
            <ui>Bags</ui>
            <ui>Clothings</ui>
            <ui>Shoes</ui>
            {/* <br/> */}
          </div>
          <div className={styles.lists}>
            <ui className={styles.high}>Related Category Kids</ui>
            {/* <br/> */}
            <ui>Beauty Sale</ui>
            <ui>Beauty</ui>
            <ui>Home</ui>
            <ui>Accessories</ui>
            <ui>Bags</ui>
            <ui>Clothings</ui>
            <ui>Shoes</ui>
          </div>
        </div>
      </div>
    </>
  );
};
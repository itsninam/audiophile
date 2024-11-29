import React, { ReactNode } from "react";
import styles from "../components/product/ProductDescription.module.scss";

function MainWrapper({ children }: { children: ReactNode }) {
  return <main className={styles.productContainer}>{children}</main>;
}

export default MainWrapper;

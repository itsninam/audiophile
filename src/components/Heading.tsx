import styles from "./Heading.module.scss";
import { useProduct } from "../contexts/ProductContext";

function Heading() {
  const { locationName } = useProduct();
  return <h2 className={styles.pageHeading}>{locationName}</h2>;
}

export default Heading;

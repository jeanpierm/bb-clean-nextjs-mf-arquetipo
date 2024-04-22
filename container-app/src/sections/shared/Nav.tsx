import styles from "@sections/shared/Nav.module.css";
import { FatherComponentProps } from "../../domain/models/FatherComponentProps";

const Nav = ({ children }: FatherComponentProps) => {
  return (
    <nav className={styles.nav}>
      <h2 style={{ margin: 0 }}>BB-Clean-NextJS-MF</h2>
      <br />
      <span>{children}</span>
    </nav>
  );
};

export default Nav;

import styles from "@sections/shared/Footer.module.css";
import Image from "next/image";
import { FatherComponentProps } from "../../domain/models/FatherComponentProps";

const Footer = ({ children }: FatherComponentProps) => {
  return (
    <footer className={styles.footer}>
      <span>{children}</span>
      <span className={styles.logo}>
        <Image src="/logo-bb.png" alt="Vercel Logo" width={190} height={30} />
      </span>
    </footer>
  );
};

export default Footer;

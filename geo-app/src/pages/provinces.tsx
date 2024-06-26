import styles from "@sections/home/Home.module.css";
import Head from "next/head";
import { Suspense, lazy, useEffect, useState } from "react";
import ProvinceList from "../sections/provinces/ProvinceList";

const Nav =
  typeof window !== "undefined"
    ? // @ts-expect-error is a federated module.
      lazy(() => import("container/nav"))
    : () => null;

const Footer =
  typeof window !== "undefined"
    ? // @ts-expect-error is a federated module.
      lazy(() => import("container/footer"))
    : () => null;

export default function Catalog() {
  const [nav, setNav] = useState(false);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    setNav(true);
    setFooter(true);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav>nav from container-app in geo-app</Nav>
        </Suspense>
      ) : null}

      <main className={styles.main}>
        <h1 className={styles.title}>
          this is the provinces page from geo-app
        </h1>
        {/* <CatalogComponent /> */}
        <br />
        <ProvinceList />
      </main>

      {footer ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Footer>footer from container-app in geo-app</Footer>
        </Suspense>
      ) : null}
    </>
  );
}

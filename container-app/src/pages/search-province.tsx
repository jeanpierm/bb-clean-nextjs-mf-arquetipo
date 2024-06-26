import styles from "@sections/home/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { Suspense, lazy, useEffect, useState } from "react";
import ProvinceSelected from "../sections/provinces/ProvinceSelected";
import Footer from "../sections/shared/Footer";
import Nav from "../sections/shared/Nav";
// @ts-expect-error is a federated module.
import { useStore } from "geo/geoStore";
import { Store } from "../infraestructure/store";

const SearchProvince =
  typeof window !== "undefined"
    ? // @ts-expect-error is a federated module.
      lazy(() => import("geo/searchProvince"))
    : () => null;

export default function Home() {
  const [searchProvince, setSearchProvince] = useState(false);
  const selectedProvince = useStore((state: Store) => state.selectedProvince);

  useEffect(() => {
    setSearchProvince(true);
  }, []);

  useEffect(() => {
    // valor de la provincia seleccionada desde el store del micro app-geo
    console.log(selectedProvince);
  }, [selectedProvince]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>nav from container-app</Nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Search province</h1>
        <p>(Comunicación de estados entre micros utilizando Zustand)</p>

        <br />
        <Link href="/">Go Back</Link>

        <br />
        {searchProvince ? (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchProvince />
          </Suspense>
        ) : null}

        <br />
        <ProvinceSelected province={selectedProvince} />
      </main>
      <Footer>footer from container-app</Footer>
    </>
  );
}

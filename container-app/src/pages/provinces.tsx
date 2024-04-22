import { Suspense, lazy, useEffect, useState } from "react";

const ProvincesPage =
  typeof window !== "undefined"
    ? // @ts-expect-error federated module.
      lazy(() => import("geo/pages/provinces"))
    : () => null;

export default function Provinces() {
  const [provinces, setProvinces] = useState(false);

  useEffect(() => {
    setProvinces(true);
  }, []);

  return (
    <>
      {provinces ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ProvincesPage />
        </Suspense>
      ) : null}
    </>
  );
}

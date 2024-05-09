import { getUser } from "@/application/GetUser";
import Loading from "@/sections/shared/Loading";
import React, { FormEvent, Suspense, lazy, useEffect, useState } from "react";

const CustomerForm =
  typeof window !== "undefined"
    ? // @ts-expect-error federated module.
      lazy(() => import("geo/customerForm"))
    : () => null;

const defaultIsLoading = false;

export default function Juan() {
  const [isLoading, setIsLoading] = useState(defaultIsLoading);
  const [remoteCustomerForm, setRemoteCustomerForm] = useState(false);

  useEffect(() => {
    setRemoteCustomerForm(true);

    return () => {};
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = await getUser();
    setIsLoading(false);

    window.dispatchEvent(new CustomEvent("juan-event", { detail: data }));
    console.log("container-app dispatched juan-event");

    return data;
  };

  // if (isLoading) return <Loading />;

  return (
    <div>
      {isLoading ?? <Loading />}

      <div style={{ display: isLoading ? "none" : "block" }}>
        <h1>Juan Container</h1>
        {remoteCustomerForm ? (
          <Suspense fallback={<Loading />}>
            <CustomerForm onSubmit={handleSubmit} />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
}

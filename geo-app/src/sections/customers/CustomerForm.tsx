import React, { useEffect } from "react";

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
export default function CustomerForm({ onSubmit }: Props) {
  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await onSubmit(event);
    console.log(data);
    // hacer con data lo que se necesite...
  };

  useEffect(() => {
    const juanEvent = (data: any) => {
      console.log("geo-app received juan-event 👹", data.detail);
      // hacer con data lo que se necesite...
    };

    window.addEventListener("juan-event", juanEvent);
    console.log("geo-app added juan-event listener");

    return () => {
      window.removeEventListener("juan-event", juanEvent);
      console.log("geo-app removed juan-event listener");
    };
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>CustomerForm</h2>
      <form onSubmit={onSubmit}>
      {/* <form onSubmit={onSubmitForm}> */}
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

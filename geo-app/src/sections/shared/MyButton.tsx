import React, { lazy, useEffect } from "react";
import { FatherComponentProps } from "../../domain/models/FatherComponentProps";

const MyButton = ({ children }: FatherComponentProps) => {
  console.log("---------loading remote component---------");

  useEffect(() => {
    console.log("HOOKS WORKS");
  }, []);

  const handleClick = async () => {
    console.log("click");

    // evento data quemada
    window.dispatchEvent(
      new CustomEvent("datoQuemado", {
        detail: "Dato quemado enviado por custom event desde geo-app",
      })
    );

    // evento llamar API
    window.dispatchEvent(
      new CustomEvent("fetchUser")
    );
  };

  return (
    <div>
      {/* ejemplo component style */}
      <style jsx>{`
        button {
          background-color: #00828c;
          padding: 1rem 0.85rem;
          border-radius: 0.6rem;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }
        button:hover {
          background-color: #00574f;
        }
      `}</style>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default MyButton;

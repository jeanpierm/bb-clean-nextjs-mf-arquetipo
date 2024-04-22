import { InputHTMLAttributes } from "react";

const InputText = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <style jsx>{`
        input {
          width: 30rem;
          padding: 0.85rem;
          border-radius: 0.6rem;
          border: 1px solid #00828c;
          font-size: 1rem;
        }
      `}</style>
      <input {...props} type="text" />
    </>
  );
};

export default InputText;

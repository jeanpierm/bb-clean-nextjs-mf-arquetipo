import React, { useState } from "react";
import { getProvinceByName } from "../../application/SearchProvinceByName";

const SearchProvinces = () => {
  const [provinceName, setProvinceName] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!provinceName) {
      alert("Ingrese el nombre de una provincia de Ecuador");
      return;
    }
    const province = await getProvinceByName(provinceName);
    if (!province) {
      alert("No se encontró provincia");
      return;
    }
    window.dispatchEvent(
      new CustomEvent("provinceSelected", { detail: province })
    );
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <p>this is a componente from geo-app</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guayas"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchProvinces;

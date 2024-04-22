import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import { getEcuadorianProvinces } from "../../application/GetEcuadorianProvinces";
import { Province } from "../../domain/models/Province";

// ejemplo CSS in JS
const cardStyle: CSSProperties = {
  display: "flex",
  width: "220px",
  border: "1px solid gray",
  flexDirection: "column",
  alignItems: "center",
};

const containerStyle: CSSProperties = {
  display: "flex",
  width: "750px",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "25px",
};

const ProvinceList = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);

  useEffect(() => {
    getEcuadorianProvinces().then((provinces) => {
      setProvinces(provinces);
    });
  }, []);

  return (
    <div>
      <Link href="/">Go Back</Link>
      <div style={containerStyle}>
        {provinces.map((province) => {
          return (
            <div key={province.id} style={cardStyle}>
              <p>{province.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProvinceList;

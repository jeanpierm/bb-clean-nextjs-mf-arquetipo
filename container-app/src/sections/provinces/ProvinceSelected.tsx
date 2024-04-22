import { Province } from "../../domain/models/Province";

interface ProvinceSelectedProps {
  province: Province | null;
}

const ProvinceSelected = ({ province }: ProvinceSelectedProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <p>this is a componente from container-app</p>
      {province ? (
        <>
          <h3>Provincia encontrada</h3>
          <ul>
            <li>ID: {province?.id}</li>
            <li>Nombre: {province?.name}</li>
            <li>Ciudades:</li>
            <ul>
              {province?.cities?.map((city) => (
                <li key={city.id}>
                  ID: {city.id} - Nombre: {city.name}
                </li>
              ))}
            </ul>
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default ProvinceSelected;

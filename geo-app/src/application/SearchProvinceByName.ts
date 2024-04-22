import { Province } from "../domain/models/Province";
import { provinceRepository } from "../infraestructure/repositories/Province.repository";

export async function getProvinceByName(
  name: string
): Promise<Province | null> {
  const provinces = await provinceRepository.getProvinces();
  const provincesFiltered = provinces.filter(
    (province) => province.name.toUpperCase() === name.toUpperCase()
  );
  if (provincesFiltered.length === 0) {
    console.log("No province found");
    return null;
  }
  return provincesFiltered[0];
}

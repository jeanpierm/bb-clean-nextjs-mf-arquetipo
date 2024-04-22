import { Province } from "../../domain/models/Province";
import { provinces } from "../data/provinces";

export const provinceRepository = {
  getProvinces: async (): Promise<Province[]> => {
    // const res = await http.get<Province[]>("http://fake.api/provinces");
    return provinces;
  },
};

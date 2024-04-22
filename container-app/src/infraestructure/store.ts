import { Province } from "../domain/models/Province";

export type Store = {
  selectedProvince: Province | null;
  setSelectedProvince: (province: Province) => void;
};

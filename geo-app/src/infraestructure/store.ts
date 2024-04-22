import { create } from "zustand";
import { Province } from "../domain/models/Province";

type Store = {
  selectedProvince: Province | null;
  setSelectedProvince: (province: Province) => void;
};

export const useStore = create<Store>((set) => ({
  selectedProvince: null,
  setSelectedProvince: (province) => {
    set((_state) => {
      return { selectedProvince: province };
    });
  },
  //   removeItem: (itemName) => {
  //     set((state) => {
  //       const cart = [...state.cart];
  //       const existingIndex = cart.findIndex((item) => item.name === itemName);
  //       if (existingIndex > -1) {
  //         cart.splice(existingIndex, 1);
  //       }
  //       return { cart };
  //     });
  //   },
}));

export default useStore;

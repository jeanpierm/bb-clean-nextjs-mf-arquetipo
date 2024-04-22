import { Province } from "../domain/models/Province";
import { provinceRepository } from "../infraestructure/repositories/Province.repository";

export async function getEcuadorianProvinces(): Promise<Province[]> {
    return provinceRepository.getProvinces();
}
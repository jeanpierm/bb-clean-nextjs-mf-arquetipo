import { User } from "../domain/models/User";
import { userRepository } from "../infraestructure/repositories/User.repository";

export async function getUser(): Promise<User> {
  return userRepository.getUser();
}

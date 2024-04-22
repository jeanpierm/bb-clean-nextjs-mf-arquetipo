import { UserDTO } from "../http/dto/UserDTO";
import { http } from "../http/http";

export const userRepository = {
  getUser: async (): Promise<UserDTO> => {
    return http.get<UserDTO>("https://jsonplaceholder.typicode.com/users/1");
  },
};

import { User } from "../domain/models/User";

export function getNameAndUsernameConcatenated({
  name,
  username,
}: User): string {
  return `${name} ${username}`;
}

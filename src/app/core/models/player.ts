import { Teams } from "./teams";

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  birthYear: number;
  team: number;
}

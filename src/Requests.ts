import { Dog } from "./types";

export const getAllDogs = (): Promise<Dog[]> =>
  fetch("http://localhost:3000/dogs").then((response) => response.json());

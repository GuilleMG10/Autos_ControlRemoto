import { posicionInicial } from "./Funciones";

describe("Funciones", () => {
    it("deberia Devolver a posicion Inicial", () => {
      expect(posicionInicial(5,1)).toEqual([5,1]);
    });
  });
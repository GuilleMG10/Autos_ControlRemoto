import { posicionInicial } from "./Funciones";

describe("Funciones", () => {
    it("deberia Devolver a posicion Inicial", () => {
      expect(posicionInicial(5,1,'N')).toEqual([5,1,'N']);
    });
  });
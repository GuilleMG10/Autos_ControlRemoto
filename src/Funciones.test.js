import { posicionInicial , VerificarFormato_Entrada} from "./Funciones";

describe("Funciones", () => {
    it("deberia Devolver a posicion Inicial", () => {
      expect(posicionInicial(5,1,'N')).toEqual([5,1,'N']);
    });
    it("deberia decir si el formato es correcto", () => {
        expect(VerificarFormato_Entrada(5,1,"N")).toEqual(true);
      });
  });
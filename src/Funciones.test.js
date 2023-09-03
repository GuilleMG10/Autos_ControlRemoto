import { posicionInicial , VerificarFormato_Entrada , Devolver_Comandos , validar_comandos , ejecutar_Comandos_I_D,ejecutar_Comando_A} from "./Funciones";

describe("Funciones", () => {
    it("deberia Devolver a posicion Inicial", () => {
      expect(posicionInicial(5,1,'N')).toEqual([5,1,'N']);
    });
    it("deberia decir si el formato es correcto", () => {
        expect(VerificarFormato_Entrada(5,1,"N")).toEqual(true);
      });
      it("deberia devolver el comando ingresado", () => {
        expect(Devolver_Comandos("AIADAAAIAD")).toEqual("AIADAAAIAD");
      });
      it("deberia devolver si el comando es correcto", () => {
        expect(validar_comandos("AIADAAAIAD")).toEqual(true);
      });
      it(" deberia devolver si el comando NO es correcto", () => {
        expect(validar_comandos("AIASDAAAIAD")).toEqual(false);
      });
      it(" deberia mover la orientacion a la Izquierda", () => {
        expect(ejecutar_Comandos_I_D("I","N")).toEqual(["O"]);
      });
      it(" deberia mover la orientacion a la Derecha", () => {
        expect(ejecutar_Comandos_I_D("D","N")).toEqual(["E"]);
      });
      it(" deberia mover la orientacion a la Derecha", () => {
        expect(ejecutar_Comando_A(5,1,"N")).toEqual([5,2]);
      });
  });
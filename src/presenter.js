import { ejecutar } from "./Funciones";
import { posicionInicial } from "./Funciones";

const com = document.querySelector("#comando");
const form = document.querySelector("#ejecutar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comando=com.value;

  const tamX = parseInt(comando[0]);
  const tamY = parseInt(comando[2]);
   const posX =  parseInt(comando[4]);
   const posY= parseInt(comando[6]);
   const Orientacion = comando[7];
   let comandos=""
   for (let i = 9; i < comando.length; i++)
   {
      comandos+=comando[i];
   }
   div.innerHTML = "<p>"+"LA POSICION INICIA DEL AUTITO ES:" +posicionInicial(posX,posY,Orientacion) + "</p>";
  div.innerHTML += "<p>"+"LA POSICION FINAL DEL AUTITO ES:" +ejecutar(comandos,posX,posY,Orientacion,tamX,tamY) + "</p>";// ejecutar(comandos,posX,posY,Orientacion,tamX,tamY) + "</p>";
});

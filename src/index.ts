import { Soldado } from "./soldado.js";
const soldado1 = new Soldado("Soldado 1");
const soldado2 = new Soldado("Soldado 2");
soldado1.disparar(soldado2);
console.log(`La vida del soldado 2 es: ${soldado2.vida}`);

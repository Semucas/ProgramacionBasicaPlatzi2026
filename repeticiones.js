console.log("V60");
console.log("Kyoto drip");
console.log("Siphon");
console.log("Prensa francesa");


//Lista de métodos, se llaman arrays
const metodos = ["V60", "Kyoto drip", "Siphon", "Presa francesa"];

for (const metodo of metodos) {
    console.log(metodo);
}



// ejemplo de bucle de reservas en un día

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDelDia) {
  totalTazas = totalTazas + cantidad;
}
// ejemplo de un for que corre pero no hace lo que queremos



console.log(totalTazas)
function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

console.log(calcularPrecio(5, 2));
console.log(calcularPrecio(3, 4));
console.log(calcularPrecio(7, 1));


//Una función que decide

function puedeReservar (cantidad) {
    if (cantidad <=2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(puedeReservar(2));

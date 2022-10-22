// Mi idea de proyecto final es poder aplicar javascript al e-commerce que hice en el curso de desarrollo web
// Para el esqueleto html use el index mas basico que tenia armado, en realidad ya tengo toda la pagina armada pero lo queria dejar mas simple para esta entrega
var newLine = "\r";
//le pedimos al usuario el precio del producto, la cantidad y el porcentaje del descuento
const producto = parseFloat(
    prompt(
        "Ingrese el producto que desea comprar: " +
            newLine +
            "1)Caja N1($100) " +
            newLine +
            "2)Caja N2($200) " +
            newLine +
            "3)Caja N3($300) " +
            newLine +
            "4)Caja N4($400)"
    )
);
const cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar: (Descuento en 100 o más unidades)"));
const zonaEntrega = prompt("Ingresa la Zona de entrega de tus productos: (Descuento en toda la zona de CABA)").toUpperCase(); //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//Simulador para calcular el monto total de tu compra
function calcularPrecio(producto, cantidadProducto, zonaEntrega) {
    switch (producto) {
        case 1:
            precioProducto = 100;
            break;
        case 2:
            precioProducto = 200;
            break;
        case 3:
            precioProducto = 300;
            break;
        case 4:
            precioProducto = 400;
            break;
    }

    //Calcula precio de Envio en base a la zona (CABA = $400)
    let costoEnvio = 800;
    if (zonaEntrega == "CABA") {
        costoEnvio = 400;
    }
    //Calculo de Porcentaje de descuento
    let descuento = 0;
    if (cantidadProducto >= 100) {
        descuento = (precioProducto * 20) / 100;
    }

    //se lo aplico al precio
    let precioConDescuento = precioProducto - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de productos
    return precioConDescuento * cantidadProducto + costoEnvio;
}

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(producto, cantidad, zonaEntrega);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");

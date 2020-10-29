var precios1 = [0, 10, 15, 20];
var precios2 = [0, 25, 50, 100];
var precios3 = [0, 100, 150];

var datos = {
  nombre: undefined,
  precio: 500,
  precio1: 0,
  precio2: 0,
  precio3: 0,
};

function cambiarPrecio(valorElegido, array, atributo) {
  var precioAgregado = array[valorElegido];
  datos[atributo] = precioAgregado;
  document.getElementById("precio").innerHTML =
    datos.precio + datos.precio1 + datos.precio2 + datos.precio3;
}

function getOrden() {
  var nombre = prompt("Ingresá tu nombre");
  alert(
    "Gracias " +
      nombre +
      " por tu compra!" +
      " podes ver como quedó tu amigurumi"
  );
  datos.nombre = nombre;
  document.getElementById("nombre").innerHTML = datos.nombre;
}

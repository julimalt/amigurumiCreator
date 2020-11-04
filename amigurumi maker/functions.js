var precios1 = [0, 10, 15, 20];
var precios2 = [0, 25, 50, 100];
var precios3 = [0, 100, 150];

function Datos(nombre, precio, precio1, precio2, precio3) {
  // Atributos
  this.nombre = nombre;
  this.precio = precio;
  this.precio1 = precio1;
  this.precio2 = precio2;
  this.precio3 = precio3;
  // Métodos
  this.cambiarPrecio = function (valorElegido, array, atributo) {
    var precioAgregado = array[valorElegido];
    this[atributo] = precioAgregado;
    document.getElementById("precio").innerHTML =
      this.precio + this.precio1 + this.precio2 + this.precio3;
  };
  this.getOrden = function () {
    var nombre = prompt("Ingresá tu nombre");
    alert(
      "Gracias " +
        nombre +
        " por tu compra!" +
        " podes ver como quedó tu amigurumi"
    );
    this.nombre = nombre;
    document.getElementById("nombre").innerHTML = this.nombre;
    document.getElementById("costoColorPrincipal").innerHTML = this.precio1;
    document.getElementById("costoColorSecundario").innerHTML = this.precio2;
    document.getElementById("costoMedida").innerHTML = this.precio3;
    document.getElementById("precioTotal").innerHTML =
      this.precio + this.precio1 + this.precio2 + this.precio3;
  };
}

var nuevosDatos = new Datos(null, 500, 0, 0, 0);

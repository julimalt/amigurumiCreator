$(document).ready(function () {
  $("#status").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");

  $("#figura").change(function () {
    var amigurumi = "";
    $("#figura option:selected").each(function () {
      amigurumi += $(this).text() + "";
      actualizarLista(amigurumi);
    });
  });

  function actualizarLista(nombre) {
    $.getJSON(
      "https://julimalt.github.io/amigurumicreator/data.json",
      function (data) {
        console.log(nombre);
        const arrayAmigurumi = data.filter((objeto) => objeto.nombre == nombre);
        console.log(JSON.stringify(arrayAmigurumi));

        $("#imgSrc").attr("src", arrayAmigurumi[0].img);

        $("#color").empty();
        $.each(arrayAmigurumi, function (posicion, objeto) {
          $("#color").append(
            "<option value=" + posicion + ">" + objeto.color + "</option>"
          );
        });
        $("#color").change(function () {
          var currentValue = $(this).val();
          $("#imgSrc").attr("src", arrayAmigurumi[currentValue].img);
        });

        $("#btnReservar").click(function () {
          $("#modalAmigurumi").text("Ya enviamos tu solicitud!! ✔");
          $("#modalAmigurumi").css({
            color: "green",
            "text-align": "center",
            "font-weight": 700,
            "margin-top": "16px",
          });
          $("#btnReservar").hide();
        });
      }
    );
  }
});
let precios1 = [0, 10, 15, 20, 25, 30];
let precios2 = [0, 25, 50, 100];
let precios3 = [0, 100, 150];

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
    this.nombre = sessionStorage.nombre;
    if (this.nombre != undefined) {
      document.getElementById("modalSpan").innerHTML =
        "¡Acá está tu Amigurumi personalizado " + this.nombre + " !";
    }
    document.getElementById("nombre").innerHTML = this.nombre;
    document.getElementById("costoColorPrincipal").innerHTML = this.precio1;
    document.getElementById("costoColorSecundario").innerHTML = this.precio2;
    document.getElementById("costoMedida").innerHTML = this.precio3;
    document.getElementById("precioTotal").innerHTML =
      this.precio + this.precio1 + this.precio2 + this.precio3;
    sessionStorage.nombre = "";
    // var string = '{"nombre": "Llama","color": "Blanco"}';
    // var objeto = JSON.parse(string);
    // console.log(objeto.color);
  };
}

var nuevosDatos = new Datos(null, 500, 0, 0, 0);

function guardarNombre(nombre) {
  sessionStorage.nombre = nombre;
}

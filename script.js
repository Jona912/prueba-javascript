
let nombre = prompt('Por favor ingresa tu nombre: ');
let apellido = prompt('Por favor ingresa tu apellido: ');

function suma(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "multiplicacion":
      return num1 * num2;
    case "division":
      return num2 !== 0 ? num1 / num2 : "Error: division por cero";
    default:
      return "Operación no válida";
  }
}

if (nombre === "Jona" && apellido === "Gonzalez") {
  let numero1 = Number(prompt("Por favor ingrese el primer número"));
  let numero2 = Number(prompt("Por favor ingrese el segundo número"));
  let operacion = prompt("¿Qué operación querés hacer? (suma, resta, multiplicacion, division)");

  let numero3 = suma(numero1, numero2, operacion);

  console.log(numero3);

  document.getElementById("contenido").innerHTML = `
    <h1>Hola</h1>
    <p>Bienvenido a la página <strong>${nombre} ${apellido}</strong></p>
    <p>El resultado de la ${operacion} es: <strong>${numero3}</strong></p>
  `;
} else {
  document.getElementById("contenido").innerHTML = `
    <p style="color: red;">Acceso denegado. Solo usuarios autorizados pueden ingresar.</p>
  `;
}

let ensaladaDeFrutas = ['manzana', 'banana', 'anana', 'naranja', 'kiwi'] ;

console.log(`La ensalada de fruta contiene: ${ensaladaDeFrutas}`);

for (let i = 0; i < ensaladaDeFrutas.length; i++) {
console.info (`Las frutas que hay en la ensalada son: ${ensaladaDeFrutas[i]}`);
}

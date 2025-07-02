
let nombre = prompt('Por favor ingresa tu nombre: ');
let apellido = prompt('Por favor ingresa tu apellido: ');

function suma(numero1, numero2) {
    return numero1 + numero2
}

if (nombre === "Jona" && apellido === "Gonzalez") {
 let numero1 = Number(prompt("Por favor ingrese el primer número"));
 let numero2 = Number(prompt("Por favor ingrese el segundo número"));
 let numero3 = suma(numero1,numero2)

 console.log(numero3)

 document.getElementById("contenido").innerHTML = `
  <h1>Hola</h1>
   <p>Bienvenid@ a la página <strong>${nombre} ${apellido}</strong></p>
   <p>El resultado de la suma es: <strong>${numero3}</strong></p>
 `;
} else {
 document.getElementById("contenido").innerHTML = `
   <p style="color: red;">Acceso denegado. Solo usuarios autorizados pueden ingresar.</p>
 `;
}





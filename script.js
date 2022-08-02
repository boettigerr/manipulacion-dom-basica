let h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//Escuchar eventos
form.addEventListener('submit', sumarInputValues); //se pone el nombre de la función, sin comillas porque es un objeto.

function sumarInputValues(event) {
    event.preventDefault(); //Esto es para evitar que el botón con type "submit" recargue la página. Se puede hacer esto o en el index.html se le puede cambiar el type a "button" al botón. Con uno de los trucos es suficiente, no es necesario hacer ambos.
//   pResult.innerHTML = "La suma es: " + (Number(input1.value) + Number(input2.value));
  pResult.innerText = "La suma es: " + (Number(input1.value) + Number(input2.value));
  console.log("La suma es: " + (Number(input1.value) + Number(input2.value)));
}
 

const btnVeces = document.querySelector("#btnVeces");
// const piedra = document.querySelector("#piedra").value;
// const papel = document.querySelector("#papel").value;
// const tijera = document.querySelector("#tijera").value;

const btnEleccion = document.querySelector("#btnEleccion");

const elecciones = document.querySelector("#elecciones");
const p = document.createElement("p");
elecciones.appendChild(p);

const user = document.querySelector("#user");
const span = document.createElement("span");
user.appendChild(span);

let eleccionComputador = Math.floor(Math.random() * 3);

switch (eleccionComputador) {
    case 0:
        eleccionComputador = "piedra";
        break;
    case 1:
        eleccionComputador = "papel";
        break;
    case 2:
        eleccionComputador = "tijera";
        break;
}
console.log(eleccionComputador);

btnEleccion.addEventListener("click", function () {
    let eleccion = document.querySelector("#eleccion").value;
    if (eleccion === "1") {
        console.log("Elegiste piedra");
    } else if (eleccion === "2") {
        console.log("Elegiste papel");
    } else {
        console.log("Elegiste tijera");
    }
});

// btnVeces.addEventListener("click", function () {
//     let veces = document.querySelector("#veces").value;
//     let vecesNum = +veces;

//     for (let i = 1; i <= vecesNum; i++) {
//         // console.log(i);
//     }
// });

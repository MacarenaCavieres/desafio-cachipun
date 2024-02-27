const btnVeces = document.querySelector("#btnVeces");
// const piedra = document.querySelector("#piedra").value;
// const papel = document.querySelector("#papel").value;
// const tijera = document.querySelector("#tijera").value;

const btnEleccion = document.querySelector("#btnEleccion");

const user = document.querySelector("#user");
const parra = document.createElement("p");
user.appendChild(parra);

const computador = document.querySelector("#computador");
const p = document.createElement("p");
computador.appendChild(p);

const resultado = document.querySelector("#resultado");
const parr = document.createElement("p");
resultado.appendChild(parr);

btnEleccion.addEventListener("click", function () {
    let eleccion = document.querySelector("#eleccion").value;
    let eleccionNum = +eleccion;

    if (eleccionNum === 0) {
        user.innerText = "Elegiste Piedra";
        eleccionNum = "Piedra";
    } else if (eleccionNum === 1) {
        user.innerText = "Elegiste Papel";
        eleccionNum = "Papel";
    } else {
        user.innerText = "Elegiste Tijera";
        eleccionNum = "Tijera";
    }

    console.log(eleccionNum);

    let eleccionComputador = Math.floor(Math.random() * 3);

    switch (eleccionComputador) {
        case 0:
            eleccionComputador = "Piedra";
            break;
        case 1:
            eleccionComputador = "Papel";
            break;
        case 2:
            eleccionComputador = "Tijera";
            break;
    }
    computador.innerText = `Computador eligio ${eleccionComputador}`;

    console.log(eleccionComputador);

    if (eleccionComputador === eleccionNum) {
        parr.innerText = "Empate";
    } else if (eleccionComputador === "Piedra" && eleccionNum === "Tijera") {
        parr.innerText = "Gana computador";
    } else if (eleccionComputador === "Papel" && eleccionNum === "Tijera") {
        parr.innerText = "Ganaste";
    } else if (eleccionComputador === "Piedra" && eleccionNum === "Papel") {
        parr.innerText = "Ganaste";
    } else if (eleccionComputador === "Tijera" && eleccionNum === "Papel") {
        parr.innerText = "Gana computador";
    } else if (eleccionComputador === "Papel" && eleccionNum === "Piedra") {
        parr.innerText = "Gana computador";
    } else if (eleccionComputador === "Tijera" && eleccionNum === "Piedra") {
        parr.innerText = "Ganaste";
    } else {
        console.log("error");
    }
});

// btnVeces.addEventListener("click", function () {
//     let veces = document.querySelector("#veces").value;
//     let vecesNum = +veces;

//     for (let i = 1; i <= vecesNum; i++) {
//         // console.log(i);
//     }
// });

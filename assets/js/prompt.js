let times = +prompt("Cuantas veces quiere jugar el juego?");

for (let i = times; i > 0; i--) {
    let play = prompt(`Escriba su jugada:
      piedra
      papel
      tijera`).toLowerCase();

    if (play !== "piedra" && play !== "papel" && play !== "tijera") {
        alert("Eleccion no valida");
    } else {
        let choiceComputer = Math.floor(Math.random() * 3);
        switch (choiceComputer) {
            case 0:
                choiceComputer = "piedra";
                break;
            case 1:
                choiceComputer = "papel";
                break;
            case 2:
                choiceComputer = "tijera";
        }

        alert(`El computador eligio ${choiceComputer}`);

        if (play === choiceComputer) {
            alert("Empate");
        } else if (play === "piedra" && choiceComputer === "papel") {
            alert("Perdiste");
        } else if (play === "piedra" && choiceComputer === "tijera") {
            alert("Ganaste");
        } else if (play === "papel" && choiceComputer === "piedra") {
            alert("Ganaste");
        } else if (play === "papel" && choiceComputer === "tijera") {
            alert("perdiste");
        } else if (play === "tijera" && choiceComputer === "papel") {
            alert("Ganaste");
        } else {
            alert("Perdiste");
        }
    }
}

let righe;
let colonne;
let difficolta;
let numeriEstratti = [];
let bombe = [];
do {
    difficolta = parseInt(prompt("scegli difficolta da 1 a 3"));
} while (difficolta < 1 || difficolta > 3 || isNaN(difficolta));
if (difficolta == 1) {
    //con difficoltà 1 => tra 1 e 100
    righe = 10;
    colonne = 10;
} else if (difficolta == 2) {
    //con difficoltà 2 => tra 1 e 81
    righe = 9;
    colonne = 9;
} else if (difficolta == 3) {
    //con difficoltà 3 => tra 1 e 49
    righe = 7;
    colonne = 7;
}
let totCell = righe * colonne;
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    return Math.floor(Math.random() * range + min);

}
function generateBombs(min, max, registro) {
    while (registro.length < 16) {
        let result = generateRandomNumber(min, max)
        if (!registro.includes(result)) {
            registro.push(result);
        }
    }
    return registro;
}
function creazioneCelle(difficolta) {
    const element = document.createElement("div");
    element.classList.add("cell")
    if (difficolta == 1) {
        element.classList.add("difficolta-1");
    } else if (difficolta == 2) {
        element.classList.add("difficolta-2");
    } else if (difficolta == 3) {
        element.classList.add("difficolta-3");
    }
    return element;
}
bombe = generateBombs(1, totCell, bombe);
console.log(bombe);
for (let index = 1; index <= totCell; index++) {
    const grid = document.getElementById("Grid");
    const cell = creazioneCelle(difficolta, bombe);
    cell.innerText = index;
    cell.id = 'cell-' + index;
    cell.addEventListener('click', function () {
        cell.classList.toggle("bg-acqua");
    })
    grid.appendChild(cell);
}
for (let index = 1; index <= totCell; index++) {
    let verifica = document.getElementById("cell-" + index);
    verifica.addEventListener('click', function () {
        if (verifica.includes(bombe)) {
            verifica.classList.add("bg-red")
        }
    })
}   

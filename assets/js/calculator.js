function clr() {
    document.getElementById("screen").value = "";
    document.getElementById("show").innerHTML = "";
}

function display(y) {
    let x = document.getElementById("screen").value;
    if (y === '') {
        x = x.substring(0, x.length - 1);;
    } else {
        x += y;
    }
    document.getElementById("screen").value = x;
    x = parseInt(x);
}

function solve() {
    let x = document.getElementById("screen").value;
    document.getElementById("show").innerHTML = "";
    document.getElementById("show").appendChild(document.createTextNode(x));
    let y = eval(x);
    document.getElementById("screen").value = y;
}

function percentage() {
    let x = document.getElementById("screen").value;
    let y = x / 100;
    document.getElementById("screen").value = y;
}

function sign() {
    let x = document.getElementById("screen").value;
    if (Math.sign(x) != 0) {
        x *= -1;
    }
    document.getElementById("screen").value = x;
}
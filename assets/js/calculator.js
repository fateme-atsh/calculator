function clr() {
    document.getElementById("screen").value = "";
}

function display(y) {
    let x = document.getElementById("screen").value;
    x += y;
    document.getElementById("screen").value = x;
    x = parseInt(x);
}

function solve() {
    let x = document.getElementById("screen").value;
    console.log(x, eval(x))
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
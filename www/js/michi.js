var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btnNuevoJuego = document.getElementById("btn-nuevo-juego");
var btnSalir = document.getElementById("btn-salir");
var marcador = "X";

function cambio() {
  if (marcador == "X") {
    marcador = "O";
  } else {
    marcador = "X";
  }
}

function ganarX() {
  if (btn1.textContent == "X" & btn2.textContent == "X" & btn3.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn4.textContent == "X" & btn5.textContent == "X" & btn6.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn7.textContent == "X" & btn8.textContent == "X" & btn9.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn1.textContent == "X" & btn4.textContent == "X" & btn7.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn2.textContent == "X" & btn5.textContent == "X" & btn8.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn3.textContent == "X" & btn6.textContent == "X" & btn9.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn1.textContent == "X" & btn5.textContent == "X" & btn9.textContent == "X") {
    alert("gano X");
    reiniciar();
  } else if (btn3.textContent == "X" & btn5.textContent == "X" & btn7.textContent == "X") {
    alert("gano X");
    reiniciar();
  }
}

function ganarO() {
  if (btn1.textContent == "O" & btn2.textContent == "O" & btn3.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn4.textContent == "O" & btn5.textContent == "O" & btn6.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn7.textContent == "O" & btn8.textContent == "O" & btn9.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn1.textContent == "O" & btn4.textContent == "O" & btn7.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn2.textContent == "O" & btn5.textContent == "O" & btn8.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn3.textContent == "O" & btn6.textContent == "O" & btn9.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn1.textContent == "O" & btn5.textContent == "O" & btn9.textContent == "O") {
    alert("gano O");
    reiniciar();
  } else if (btn3.textContent == "O" & btn5.textContent == "O" & btn7.textContent == "O") {
    alert("gano O");
    reiniciar();
  }
}

function reiniciar() {
  btn1.disabled = false;
  btn1.textContent = "";
  btn2.disabled = false;
  btn2.textContent = "";
  btn3.disabled = false;
  btn4.textContent = "";
  btn4.disabled = false;
  btn4.textContent = "";
  btn5.disabled = false;
  btn5.textContent = "";
  btn6.disabled = false;
  btn6.textContent = "";
  btn7.disabled = false;
  btn7.textContent = "";
  btn8.disabled = false;
  btn8.textContent = "";
  btn9.disabled = false;
  btn9.textContent = "";
}

btnNuevoJuego.addEventListener("click", function(){
  reiniciar();
});

btnSalir.addEventListener("click", function(){
  navigator.app.exitApp();
});

btn1.addEventListener("click", function () {
  btn1.textContent = marcador;
  btn1.disabled = true;
  cambio();
  ganarX();
  ganarO()
});

btn2.addEventListener("click", function () {
  btn2.textContent = marcador;
  btn2.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn3.addEventListener("click", function () {
  btn3.textContent = marcador;
  btn3.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn4.addEventListener("click", function () {
  btn4.textContent = marcador;
  btn4.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn5.addEventListener("click", function () {
  btn5.textContent = marcador;
  btn5.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn6.addEventListener("click", function () {
  btn6.textContent = marcador;
  btn6.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn7.addEventListener("click", function () {
  btn7.textContent = marcador;
  btn7.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn8.addEventListener("click", function () {
  btn8.textContent = marcador;
  btn8.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
btn9.addEventListener("click", function () {
  btn9.textContent = marcador;
  btn9.disabled = true;
  cambio();
  ganarX();
  ganarO()
});
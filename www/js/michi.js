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
var botones = document.getElementsByClassName("cuadro");
var fondo = "DarkOrchid";

function cambio() {
  if (marcador == "X") {
    marcador = "O";
  } else {
    marcador = "X";
  }
}
function cambioFondo() {
  if (fondo == "DarkOrchid") {
    fondo = "skyblue";
  } else {
    fondo = "DarkOrchid";
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
  for (i = 0; i < botones.length; i++) {
    botones[i].style.backgroundColor = "chocolate";
    botones[i].disabled = false;
    botones[i].textContent = "";
  }
  marcador = "X";
  fondo = "DarkOrchid"; 
}
function empate() {
    if (btn1.disabled == true && btn2.disabled == true && btn3.disabled == true && btn4.disabled == true && btn5.disabled == true && btn6.disabled == true && btn7.disabled == true && btn8.disabled == true && btn9.disabled == true) {
      alert("empate");
      reiniciar();
    }
}
btnNuevoJuego.addEventListener("click", function(){
  reiniciar();
});

btnSalir.addEventListener("click", function(){
  navigator.app.exitApp();
});

btn1.addEventListener("click", function () {
  btn1.textContent = marcador;
  btn1.style.background = fondo;
  btn1.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});

btn2.addEventListener("click", function () {
  btn2.textContent = marcador;
  btn2.style.background = fondo;
  btn2.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn3.addEventListener("click", function () {
  btn3.textContent = marcador;
  btn3.style.background = fondo;
  btn3.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn4.addEventListener("click", function () {
  btn4.textContent = marcador;
  btn4.style.background = fondo;
  btn4.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn5.addEventListener("click", function () {
  btn5.textContent = marcador;
  btn5.style.background = fondo;
  btn5.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn6.addEventListener("click", function () {
  btn6.textContent = marcador;
  btn6.style.background = fondo;
  btn6.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn7.addEventListener("click", function () {
  btn7.textContent = marcador;
  btn7.style.background = fondo;
  btn7.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn8.addEventListener("click", function () {
  btn8.textContent = marcador;
  btn8.style.background = fondo;
  btn8.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
btn9.addEventListener("click", function () {
  btn9.textContent = marcador;
  btn9.style.background = fondo;
  btn9.disabled = true;
  cambio();
  cambioFondo();
  ganarX();
  ganarO();
  empate();
});
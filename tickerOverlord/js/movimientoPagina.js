
// document.getElementById("Bienvenido").onclick(function () {
//     document.getElementB yId("Bienvenido").style.backgroundColor = 'black';
// });
flag = false;

function cambiarTituloColor() {

    const titulo = document.getElementsByTagName("h1")[0];
    if (flag == false) {
        flag = true;
        titulo.onclick = function () {
            titulo.style.color = "red";
        }
    } else if (flag == true) {
        titulo.onclick = function () {
            titulo.style.color = "white";
        }
    }
};
// const btn = document.querySelector('button');
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

/* Aqui me estoy trayendo el objeto button y canvas, y del canvas estoy sacando su "formato", sobre el cual puedo trabajr */

// let WIDTH = document.documentElement.clientWidth;
// let HEIGHT = document.documentElement.clientHeight;

/**Esto parece ser constantes sobre como sacar la altura y anchura de la pantalla del cleinte */

// canvas.width = WIDTH;
// canvas.height = HEIGHT;
/**EL objeto canvas, accedo a sus propiedades y le doy las constantes del cliente de anchura y altura */

// function random(number) {
//     return Math.floor(Math.random()*number);
// }
/**Una funcion para enerar un numero aleatorio de 0 a n */
// function draw() {
//     ctx.clearRect(0,0,WIDTH,HEIGHT);    Esto comienza en el punto x,y y limpia desde ahi en la anchura y altura indicadas
//     for(let i = 0; i < 100; i++) {
//         ctx.beginPath();    //vacia subrutas y comeinza a dibujar una nueva.
//         ctx.fillStyle = 'rgba(255,0,0,0.5)';
//         ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//         ctx.arc(random(WIDTH),random(HEIGHT),100,90,3*Math.PI,true); El primer valor es donde en x, y el segundo es y,  el largo del radio, el angulo 
/**donde comienza y no se el ultimo */
//         ctx.fill();
//     }
// }

// btn.addEventListener('click',draw);


// function logkey(event){
/**Existe el evento, el cual tiene propiedades y metodos que puedo usar, igual 
que  existe el evento 'keydown'*/
//     console.log(event.key);
// }

// addEventListener('keydown',logkey);
/**ESLINT????????????????????????''' */

// addEventListener('keydown', (event) => {
//     document.getElementById("p1").textContent += event.key;
// })  
/*Estoy escribiendo todas las teclas que se presionan en p, la unica tecla que no sale es espacio. */


/**Prueba con canvas de escribir en lugares aleatorios: */


// const { readFileSync, promises: fsPromises } = require('fs'); *********************



const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

const canvas = document.querySelector("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');
ctx.font = "2em Impact";
const frases = document.querySelector('p').textContent;
const frasesArray = frases.split(".");


let playing = false;
let audio = document.querySelector("audio"); //TRAIGO EL ELEMENTO AUDIO, QUE por defecto esta en preload

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    let color = Math.round(Math.random() * 40);
    return color;
}

function randomColorBG() {
    let isItNightmare = randomNumber(100);
    console.log(isItNightmare);
    switch (true) {  //EL SWITCH (TRUE) permite hacer un switch que funcione con condicionales, evaluara si el condicional es el booleano del switch o no
        case (isItNightmare < 5):
            document.body.style.backgroundImage = "url('dreamCore1.png')";
            break;
        case (isItNightmare > 5 && isItNightmare < 10):
            document.body.style.backgroundImage = "url('dreamCore2.jpg')";
            break;
        case (isItNightmare > 10 && isItNightmare < 15):
            document.body.style.backgroundImage = "url('dreamCore3.jfif')";
            break;
        default:
            document.body.style.background = ` rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }






}

function dibujarFrase() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillText(frasesArray[randomNumber(frasesArray.length)], randomColor(WIDTH), randomNumber(HEIGHT));
    console.log('a');

}



function playMusic() {

    if (playing == false) {
        audio.play();
        playing = true; //LOS ELEMENTOS AUDIOS LOS PEUDO REPRODUCIR, LOS CONSOLE LOG SON DE CONTROL
        console.log("play" + audio.src);
    } else if (playing == true) {
        audio.pause();
        playing = false;
        console.log("pause");
    }


}


addEventListener('keydown', dibujarFrase);
addEventListener('mousemove', dibujarFrase);
addEventListener('keydown', randomColorBG
    //ahora solo llamo una funcion, resto de codigo aqui deprecated        
    /**Esto es una forma de formatear un string con variables (o valores de funciones) */
    // document.body.style.backgroundColor = ` rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`; /**FORMA DE FORMATEAR STRINGS QUE INCLUYEN VARIABLES */
    // console.log(randomColor() + "," + randomColor() + "," + randomColor()); /**-<<<------- log por si aca */
);
addEventListener('mousemove', randomColorBG);//(e) => { 
//cambio el crear funcion interna con unica funcion, resto de codigo DEPRECATED
/**Esto es una forma de formatear un string con variables (o valores de funciones) */
// document.body.style.backgroundColor = ` rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`; /**FORMA DE FORMATEAR STRINGS QUE INCLUYEN VARIABLES */
// console.log(randomColor() + "," + randomColor() + "," + randomColor()); /**-<<<------- log por si aca */
addEventListener('mousemove', playMusic);
addEventListener('keydown', playMusic);
addEventListener('scroll', playMusic);
addEventListener('scroll', dibujarFrase);
addEventListener('scroll', randomColorBG);


/**>Funcionalidad movil */
function doAllOnMobile() {
    randomColorBG();
    dibujarFrase();
    playMusic();
}
addEventListener('touchstart', doAllOnMobile);
addEventListener('touchend', doAllOnMobile);
addEventListener('touchmove', doAllOnMobile);
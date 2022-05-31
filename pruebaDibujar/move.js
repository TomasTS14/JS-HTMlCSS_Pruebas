const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
    return Math.floor(Math.random()*number);
}

function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.arc(random(WIDTH),random(HEIGHT),100,90,3*Math.PI,true);
        ctx.fill();
    }
}

btn.addEventListener('click',draw);


function logkey(event){
    console.log(event.key);
}

addEventListener('keydown',logkey);




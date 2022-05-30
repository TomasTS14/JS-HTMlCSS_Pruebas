
// document.getElementById("Bienvenido").onclick(function () {
//     document.getElementB yId("Bienvenido").style.backgroundColor = 'black';
// });

function changeColor(element) {

    element.style.color = 'red';

}

// const cambioTitulo = () => {
//     flag = false;
//     document.getElementsByTagName("h1")[0].addEventListener('mouseover', () => {
//         if (flag == false) {
//             document.getElementsByTagName("h1")[0].style.color = 'red';
//             flag = true;
//         } else {
//             document.getElementsByTagName("h1")[0].style.color = 'white';
//             flag = false;
//         }

//     })
// }



const divAppearsByScroll = () => {
    let divMovedList = document.getElementsByClassName("divInternoBase");
    for (let i = 0; i < divMovedList.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = divMovedList[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            divMovedList[i].classList.add("active");
        } else {
            divMovedList[i].classList.remove("active");
        }
    }
}   //itero sobre todos los elementos .divInternoBase, consigo a que altura esta la ventana en el momento,
//consigo el punto más alto del elemento, y declaro en relación a ese punto donde debe aparecer el elemento
/*si el actual tope del element esta a una altura menor que
 la altura de la pantalla en el momento - la altura a la que debe aparecer*/

window.addEventListener('scroll', divAppearsByScroll); //cuando scroll en windor, se 

const hueOnPointerOverNavbar = () => {
    const navbar = document.getElementsByClassName("ul")[0];

}

//ESTA FUNCION ES INEFICIENTE, solo es una prueba de como escribir html con javascript.
/*primer creare un elemento al que estilizare un poco, y despues en su interio incluiré
algunos elementos y finalmente lo agregaré a un elemento que si escribi en mi html */
(function () { //esto es la forma de definir y llamar una funcion al mismo tiempo (f(){})();


    let gridElement = document.createElement('div');
    gridElement.style.width = "100%";
    gridElement.style.height = "25%";
    gridElement.style.padding = "0.5em";
    gridElement.classList.add("imageGrid");

    gridElement.innerHTML += `
                <img style="height:20em" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393">
                <img style="height:20em" src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/10/Colorful-Vintage-90s-Event-Poster-Template.jpg">
                <img style="height:20em" src="https://c8.alamy.com/compes/p1yc0t/vivid-diseno-de-poster-evento-fiesta-p1yc0t.jpg">
                <img style="height:20em" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/halloween-club-event-posters-design-template-a83a44073ab251c83c62db2e5dcaf72d_screen.jpg?ts=1636982068">

                `

    // let grid = document.createElement('div');
    // let text = document.createTextNode("22");
    // grid.appendChild(text);



    document.getElementsByClassName('divInternoBase')[1].appendChild(gridElement);

})();


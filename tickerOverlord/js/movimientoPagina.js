
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



const divResizedByScroll = () => {
    let divMovedList = document.getElementsByClassName("divInternoBase");
    for (let i = 0; i < divMovedList.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = divMovedList[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            divMovedList[i].classList.add("active");
        } else {
            divMoved[i].classList.remove("active");
        }
    }
}

window.addEventListener('scroll', divResizedByScroll);



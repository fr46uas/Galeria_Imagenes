var seccionGaleria = document.querySelector('#galeria');


var url = "https://jsonplaceholder.typicode.com/photos";

var miJson = new XMLHttpRequest();

miJson.open('GET', url, true);

miJson.send();

miJson.addEventListener('readystatechange', cargarImagenes);


function cargarImagenes(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {


        var galeria = JSON.parse(event.target.response);
        var listaImagenes = galeria;
        pintarGaleria(listaImagenes);

    }
}





function pintarGaleria(pListaImagenes) {


    var menu = pListaImagenes.slice(1, 54)

    var galeriaMenu = menu[0].thumbnailUrl

    //console.log(galeriaMenu)

    for (i = 1; i < menu.length; i++) {


        galeriaMenu += `<div><img src="${menu[i].thumbnailUrl}" alt=""></div>`
    }

    seccionGaleria.innerHTML += galeriaMenu;

}










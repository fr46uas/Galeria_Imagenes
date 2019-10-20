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

    var contenido = "";
    for (imagen of pListaImagenes) {

        console.log(imagen)
        contenido += `<div><img src="${imagen.thumbnailUrl}" alt=""></div>`
    }

    //seccionGaleria.innerHTML += contenido;
}
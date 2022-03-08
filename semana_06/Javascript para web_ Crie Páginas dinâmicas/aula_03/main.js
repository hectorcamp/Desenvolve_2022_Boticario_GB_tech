//let idElementoAud
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto--------------------------------------------
while (contador < listaDeTeclas.length) {
    
    const instrumento = listaDeTeclas[contador].classList[1]

    console.log;

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla');
    }

    contador = contador + 1;
    
    console.log(contador);

}
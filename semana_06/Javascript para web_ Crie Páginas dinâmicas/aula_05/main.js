//let idElementoAud
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//Enquanto--------------------------------------------
/* while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string-----------------------
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
    
    //console.log(contador);

} */

//com for (para)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        //if ('Espaço') {
             tecla.classList.add('ativa');    
       // }
        
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    con
}

    
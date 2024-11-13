

function cambiarTexto(){

    const selectorTitulo = document.getElementById('titulo');
    const nombreUsuario = prompt("Ingrese su nombre");
    const contenedor = document.getElementById('cont-general');


    // cambiando contenido de una eetiqueta desde js
    selectorTitulo.innerText = "jessica martinez";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong> " + nombreUsuario;
    //cambiando estilos de una etiqueta dede js
    selectorTitulo.style.backgroundColor = "#FFA500";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px"
    //cambiando estrutura  de una etiqueta desde js
    contenedor.classList.add('dia');
}

function circulo(){
    const selectorTitulo = document.getElementById('titulo');
    const circulo = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');

    selectorTitulo.innerText = " Circulo";

    circulo.style.borderRadius = "50%";
    circulo.style.backgroundColor = "blue";
}

function rombo(){

    const selectorTitulo = document.getElementById('titulo');
    const rombo = document.getElementById('figura');
    
    

    selectorTitulo.innerText = " rombo ";

    rombo.style.transform = "rotate(45deg)"
    rombo.style.borderRadius ="0"
    rombo.style.background = "red"
}


function fondo(){

    const fondo = document.getElementById('cont-general');
    fondo.style.background = "purple"
}

function imagen(){

    const imagen = document.getElementById('cont-general');
    imagen.style.backgroundImage =  "url('img/JOSE.png')";
}


function moverArriba() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('top'); 
}

function izquierda(){
    const figura =  document.getElementById('figura');
    figura.classList.toggle('left');
}

function bottom(){
    const figura =  document.getElementById('figura');
    figura.classList.toggle('bottom');
}

function derecha(){
    const figura =  document.getElementById('figura');
    figura.classList.toggle('right');
}

function diagonal() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('diagonal');
}

function animation() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('animation');
}


function fondoDegradado() {
    const contenedor = document.getElementById('cont-general');
    contenedor.classList.toggle('gradient');
}


function estrella() {
    const figura = document.getElementById('figura');
    figura.classList.toggle('estrella');
}





function panelLateral(){
    const panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}

function panelsuperior(){
    const panelsup = document.getElementById('panel-superior');
    panelsup.classList.toggle('active')
}





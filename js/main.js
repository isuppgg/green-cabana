const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-menu__item');
const menu = document.getElementById('open-menu');
const toShow = document.querySelectorAll('.appear');
let newArrToshow = [];
toShow.forEach((item, i) =>{
    newArrToshow[i] = item;
});

window.addEventListener('scroll', ()=> {
    cambiarColor(); 
    mostrarTexto();
});
menu.addEventListener('click', click => openMenu(click));
window.addEventListener('click', click => closeMenu(click));



function cambiarColor(){
    // Comprobar en qué tipo de dispositivo está para asegurar que haya barra flotante
    if(window.innerWidth <  450){
        if(nav.classList.contains('show-menu') == false){
            cambiarMenu();
        }
    }else if(window.scrollY > 90){           
        nav.classList.add('new-nav');
    }else{                                   // Agregramos o quitamos la clase para cambiar el color de la barra flotante
        nav.classList.remove('new-nav')     
    }                                       

}

// Mostrar barra lateral y cambiar color del boton hamburguesa
function openMenu(e){
    nav.classList.toggle('show-menu');
    if(nav.classList.contains('show-menu')){
        menu.style.fill = '#ffff';
    }else{
        cambiarMenu();
    }
}

// Cerrar barra lateral
function closeMenu(e){
    if(e.target != nav && e.target != menu && nav.classList.contains('show-menu')){  
        nav.classList.toggle('show-menu');
    }
}


// Modificar el color del boton hamburguesa para hacerlo visible
function cambiarMenu(){
    if(window.scrollY > 250){
        menu.style.fill =  '#231918';  
    }else{
        menu.style.fill = '#ffff';
    }
}

// Animacion en los textos
function mostrarTexto(){
    for(let i = 0; i < newArrToshow.length; i++){
        let ubicacion = newArrToshow[i].getBoundingClientRect();

       if (ubicacion.top < 550){
            newArrToshow[i].classList.add('texts--move');
        }
    }
}
// Codigo extraido de main.js con modificaciones.

const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-menu__item');
const menu = document.getElementById('open-menu');

// Creando un array con los contenidos a mostrar
const toShow = document.querySelectorAll('.appear');
let newArrToshow = [];
toShow.forEach((item, i) =>{
    newArrToshow[i] = item;
});

menu.addEventListener('click', () => openMenu());
window.addEventListener('click', click => { closeMenu(click); cambiarColor(); });
window.addEventListener('scroll', ()=> {
    mostrarTexto();
    cambiarColor();
});

function openMenu(){
    nav.classList.toggle('show-menu');    
}

// Cerrar barra lateral
function closeMenu(e){
    if(e.target != nav && e.target != menu && nav.classList.contains('show-menu')){  
        nav.classList.toggle('show-menu');
    }
}

// Cambiar color del boton abrir menu solo si la barra lateral es visible
function cambiarColor(){
     if(window.innerWidth <  450){                         // Comprobar si la barra lateral es visible
        if(nav.classList.contains('show-menu') == false){
            menu.style.fill = '#231918';
            if(window.scrollY < 1550){
                menu.style.fill = '#ffff';
            }
        }else{
            menu.style.fill =  '#fff';
        }
    }
}

// Animacion en los textos

function mostrarTexto(){
    for(let i = 0; i < newArrToshow.length; i++){
        let ubicacion = newArrToshow[i].getBoundingClientRect();
        console.log(ubicacion)
        if(ubicacion.top < 350){
            newArrToshow[i].classList.add('show');
        }else if (ubicacion.top < 500){
            newArrToshow[i].classList.add('show');
        }
    }
}
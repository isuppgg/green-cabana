// Codigo de barra lateral extraido de main.js con modificaciones.

const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-menu__item');
const menu = document.getElementById('open-menu');


menu.addEventListener('click', click => openMenu(click));
window.addEventListener('click', click => { closeMenu(click); cambiarColor(); });


function openMenu(e){
    nav.classList.toggle('show-nav');    
}

// Cerrar barra lateral
function closeMenu(e){
    if(e.target != nav && e.target != menu && nav.classList.contains('show-nav')){  
        nav.classList.toggle('show-nav');
    }
}

// Cambiar color del boton abrir menu solo si la barra lateral es visible
function cambiarColor(){
    if(nav.classList.contains('show-nav')){
        menu.style.fill =  '#fff';
    }else{
        menu.style.fill = '#231918';
    }
}


const show = document.querySelectorAll('.appear');
const menus = document.querySelectorAll('.menu__img');
const imgLight = document.querySelector('.img-light');
const newMenuImg = document.getElementById('new-menu-img');
const closeImgLight = document.getElementById('close-img-light');

document.addEventListener('DOMContentLoaded', () =>{
    show.forEach(item => item.classList.add('show'));
});

menus.forEach(item => item.addEventListener('click', () => {
    let src = item.getAttribute('src');
    showBackground(src);
}));

closeImgLight.addEventListener('click', ()=> {
    imgLight.classList.toggle('show-img-light');
    menu.style.display = 'initial';
})


function showBackground(src){
    newMenuImg.setAttribute('src', `${src}`);
    imgLight.classList.toggle('show-img-light');
    menu.style.display = 'none';
}
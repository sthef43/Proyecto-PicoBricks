const barrasPiePagina = document.querySelectorAll('.menu-desplegable')


const iconoCerrarMenuHamburguesa = document.getElementById('cerrar-menu')
const cerrarMenus = document.querySelectorAll('.cerrar-menus')

const barrasMenu = document.getElementById('barras-menu')
const menuBusqueda = document.getElementById('busqueda-menu')
const menuUsuario = document.getElementById('usuario-menu')
const menuShop = document.getElementById('shop-menu')
const formularioPregunta = document.getElementById('botones-en-pantalla-pregunta')



const linksAbrirMenuLearn = document.querySelector('#abrir-sub-menu-learn')
const linkAbrirMenuEducation = document.querySelector('#abrir-sub-menu-education')
const linkAbrirMenuShop = document.querySelector('#abrir-sub-menu-shop')
const cerrarSubMenuLearn = document.querySelector('#cerrar-menu-learn')
const cerrarSubMenuEducation = document.querySelector('#cerrar-menu-education')
const cerrarSubMenuShop = document.querySelector('#cerrar-menu-shop')

barrasMenu.addEventListener('click',abrirMenuHamburguesa)
menuBusqueda.addEventListener('click',abrirMenuBusqueda)
menuUsuario.addEventListener('click',abrirMenuUsuario)
menuShop.addEventListener('click',abrirMenuShop)
formularioPregunta.addEventListener('click',abrirFormulario)
iconoCerrarMenuHamburguesa.addEventListener('click',cerrarMenuHamburguesa)

linksAbrirMenuLearn.addEventListener('click',menuLearn)
linkAbrirMenuEducation.addEventListener('click',menuEducation)
linkAbrirMenuShop.addEventListener('click',subMenuShop)
cerrarSubMenuLearn.addEventListener('click',cerrarMenuLearn)
cerrarSubMenuEducation.addEventListener('click',cerrarMenuEduaction)
cerrarSubMenuShop.addEventListener('click',cerrarMenuShop)

function abrirMenuHamburguesa(){
    document.querySelector('.menu-hamburguesa').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuBusqueda(){
    document.querySelector('.menu-usuario-busqueda').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuUsuario(){
    document.querySelector('.menu-usuario-mobile').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuShop(){
    document.querySelector('.menu-shop-mobile').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
    console.log("asas")
}
function abrirFormulario(){
    document.querySelector('.container-formulario-pregunta').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}

function cerrarMenuHamburguesa(){
    document.querySelector('.menu-hamburguesa').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'relative'
    document.querySelector('.iconos-en-pantalla').style.display = 'flex'
}




function menuLearn(){
    document.querySelector('#sub-menu-learn').classList.toggle('active')
}
function menuEducation(){
    document.querySelector('#sub-menu-education').classList.toggle('active')
}
function subMenuShop(){
    document.querySelector('#sub-menu-shop').classList.toggle('active')
}
function cerrarMenuLearn(){
    document.querySelector('#sub-menu-learn').classList.toggle('active')
}
function cerrarMenuEduaction(){
    document.querySelector('#sub-menu-education').classList.toggle('active')
}
function cerrarMenuShop(){
    document.querySelector('#sub-menu-shop').classList.toggle('active')
}


//Links Desplegables Del Footer
barrasPiePagina.forEach(Desplegable => {
    Desplegable.addEventListener('click', () =>{
        Desplegable.classList.toggle('active')
    })
});

cerrarMenus.forEach(cerrarmenu => {
    cerrarmenu.addEventListener('click',() =>{
        if (document.querySelector('.menu-usuario-busqueda').classList.contains('active')){
            document.querySelector('.menu-usuario-busqueda').classList.toggle('active')
        }
        if (document.querySelector('.menu-usuario-mobile').classList.contains('active')){
            document.querySelector('.menu-usuario-mobile').classList.toggle('active')
        }
        if (document.querySelector('.menu-shop-mobile').classList.contains('active')){
            document.querySelector('.menu-shop-mobile').classList.toggle('active')
        }
        if (document.querySelector('.container-formulario-pregunta').classList.contains('active')){
            document.querySelector('.container-formulario-pregunta').classList.toggle('active')
        }
        cerrarmenu.classList.toggle('active')
        document.querySelector('.fondo-opaco').classList.toggle('active')
        document.body.style.position = 'relative'
        document.querySelector('.iconos-en-pantalla').style.display = 'flex'
        console.log(cerrarmenu)
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const carrusel = document.querySelector('.cards-direction')
    const carruselCard = document.querySelectorAll('.card-reseña')
    var index = 0
    var intervalo;


    function cambiarImagen() {
        index = (index + 1) % carruselCard.length;
        actualizarCarrusel();
        }
    
        function actualizarCarrusel() {
        carrusel.style.transform = 'translateX(' + (-index * 60) + '%)';
        }
    
        function iniciarCarruselAutomatico() {
        intervalo = setInterval(cambiarImagen, 3000);
        } 
    iniciarCarruselAutomatico()
})
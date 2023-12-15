//VARIABLES DE LOS ICONOS DE LA BARRA DE NAVEGACION DEL MODO MOBILE
const barrasPiePagina = document.querySelectorAll('.menu-desplegable')
const iconoCerrarMenuHamburguesa = document.getElementById('cerrar-menu')
const cerrarMenus = document.querySelectorAll('.cerrar-menus')
const barrasMenu = document.getElementById('barras-menu')
const menuBusqueda = document.getElementById('busqueda-menu')
const menuUsuario = document.getElementById('usuario-menu')
const menuShop = document.getElementById('shop-menu')


//FORMULARIO DEL BOTON PREGUNTA
const formularioPregunta = document.getElementById('botones-en-pantalla-pregunta')


//VARIABLES DE LOS SUBMENUS DEL MENU HAMBURGUESA
const linksAbrirMenuLearn = document.querySelector('#abrir-sub-menu-learn')
const linkAbrirMenuEducation = document.querySelector('#abrir-sub-menu-education')
const linkAbrirMenuShop = document.querySelector('#abrir-sub-menu-shop')
const cerrarSubMenuLearn = document.querySelector('#cerrar-menu-learn')
const cerrarSubMenuEducation = document.querySelector('#cerrar-menu-education')
const cerrarSubMenuShop = document.querySelector('#cerrar-menu-shop')


//EVENTOS PARA ABRIR LOS MENUS DE LA BARRA DE NAVEGACION DEL MODO MOBILE
barrasMenu.addEventListener('click',abrirMenuHamburguesa)
menuBusqueda.addEventListener('click',abrirMenuBusqueda)
menuUsuario.addEventListener('click',abrirMenuUsuario)
menuShop.addEventListener('click',abrirMenuShop)
formularioPregunta.addEventListener('click',abrirFormulario)
iconoCerrarMenuHamburguesa.addEventListener('click',cerrarMenuHamburguesa)

//EVENTOS PARA ABRIR LOS SUBMENUS DENTRO DEL MENU HAMBURGUESA
linksAbrirMenuLearn.addEventListener('click',menuLearn)
linkAbrirMenuEducation.addEventListener('click',menuEducation)
linkAbrirMenuShop.addEventListener('click',subMenuShop)
cerrarSubMenuLearn.addEventListener('click',cerrarMenuLearn)
cerrarSubMenuEducation.addEventListener('click',cerrarMenuEduaction)
cerrarSubMenuShop.addEventListener('click',cerrarMenuShop)

function abrirMenuHamburguesa(){
    //FUNCION PARA ABRIR EL MENU HAMBURGUESA
    document.querySelector('.menu-hamburguesa').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuBusqueda(){
    //FUNCION PARA ABRIR EL MENU DE BUSQUEDA
    document.querySelector('.menu-usuario-busqueda').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuUsuario(){
    //FUNCION PARA ABRIR EL MENU DE USUARIO
    document.querySelector('.menu-usuario-mobile').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}
function abrirMenuShop(){
    //FUNCION PARA ABRIR EL MENU DE CARRITO
    document.querySelector('.menu-shop-mobile').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
    console.log("asas")
}

function cerrarMenuHamburguesa(){
    //FUNCION PARA CERRAR EL MENU HAMBURGUESA
    document.querySelector('.menu-hamburguesa').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'relative'
    document.querySelector('.iconos-en-pantalla').style.display = 'flex'
}

function abrirFormulario(){
    //FUNCION PARA ABRIR EL FORMULARIO
    document.querySelector('.container-formulario-pregunta').classList.toggle('active')
    document.querySelector('.fondo-opaco').classList.toggle('active')
    document.body.style.position = 'fixed'
    document.querySelector('.iconos-en-pantalla').style.display = 'none'
}


//FUNCIONES PARA ABRIR Y CERRAR LOS SUB MENUS

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

//FUNCIONES PARA ABRIR Y CERRAR LOS SUB MENUS

//Links Desplegables Del Footer
barrasPiePagina.forEach(Desplegable => {
    Desplegable.addEventListener('click', () =>{
        Desplegable.classList.toggle('active')
    })
});

//FUNCION PARA CERRAR LOS MENUS DEL MODO MOBILE
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


//FUNCION PARA QUE LAS IMAGENES SE CORRAN EN EL CARRUSEL
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

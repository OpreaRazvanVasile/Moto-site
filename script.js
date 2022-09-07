"use strict"
//nav Variabile
// work In Progress

const motorcyclesNavTop = document.getElementById('motorcycles_top');
const scootersNavTop = document.getElementById('scooters_top');
const tricycleNavTop = document.getElementById('tricycle_top');
const atvNavTop = document.getElementById('atv_top');
const snowNavTop = document.getElementById('snow_top');
const accessoriesNavTop = document.getElementById('accessories_top');
const motorcycles = document.getElementById('motorcycles');
const scooters = document.getElementById('scooters');
const tricycle = document.getElementById('tricycle');
const atv = document.getElementById('atv');
const snow = document.getElementById('snow');
const accessories = document.getElementById('accessories');
const navigaitionEl = document.querySelector('.navigation');
//header variabile

const logIn = document.getElementById('log_in');
const head = document.querySelector('.hed');
const singUp = document.getElementById('sing_up');




const menu = document.querySelector('.menu');
const home = document.getElementById('home');
const navEmty = document.querySelector('.nav_element')
const motoLogo = document.getElementById('moto_logo')

const allElementsNav = [motorcyclesNavTop, scootersNavTop, tricycleNavTop, atvNavTop, snowNavTop, accessoriesNavTop]
const allElementsMain = [motorcycles, scooters, tricycle, atv, snow, accessories]
// home.style.color='red';

//Contact Page















// HOVER EFECT
function hover(element) {
    element.style.marginTop = '-17vh';
    element.style.opacity = '0.7';
    element.style.borderRadius = '25%';
    element.style.objectFit = 'cover';
    element.style.height = '45vh';
    element.style.filter = 'blur(0px)';
    element.style.boxShadow = '0px 0px 100px 0px rgb(49, 255, 17)';
    element.style.transition = 'margin-top 1s ease,height 2.4s,border-radius 3s ease-in-out,filter 3s ease-in,opacity 2s';

}
function hoverMenu(element) {
    element.style.boxShadow = '0px 0px 100px 0px rgb(49, 255, 17)';
    element.style.width = '21%';
    element.style.transition = 'boxShadow 0.3s  ease-in-out,width 0.4s  ease-in'
}
function hoverOver(element) {
    element.style.display = 'inherit';
    element.style.backgroundSize = '100% 100%';
    element.style.width = '17%';
    element.style.marginTop = '-1vh';
    element.style.opacity = '1';
    element.style.borderRadius = '0%';
    element.style.objectFit = 'cover';
    element.style.height = '30vh';
    element.style.boxShadow = '0px 0px 0px 0px rgb(0, 0, 0)';
    element.style.transition = 'margin-top 2s ease,height 2.4s,border-radius 3s ease-in-out,filter 3s ease-in,opacity 2s';
}
//hover on page
function hoverOverFunction() {
    hoverOver(motorcycles) || hoverOver(scooters) || hoverOver(tricycle) || hoverOver(atv) || hoverOver(snow) || hoverOver(accessories)
}
document.addEventListener('mouseover', hoverOverFunction)

//hoverMainMenu 

function hoverMainMenu(element) {
    element.addEventListener('mouseenter', function () {
        hoverMenu(element)
    })
}

hoverMainMenu(motorcycles)

hoverMainMenu(motorcycles) || hoverMainMenu(scooters) || hoverMainMenu(tricycle) || hoverMainMenu(atv) || hoverMainMenu(snow) || hoverMainMenu(accessories)


// //Mouse HoverEvents

allElementsNav.forEach(nav => {
    //mouseHover
    nav.addEventListener('mouseenter', function (e) {
        if (e.target === motorcyclesNavTop) {
            hover(motorcycles);
        }
        else if (e.target === scootersNavTop) {
            hover(scooters)
        }
        else if (e.target === tricycleNavTop) {
            hover(tricycle)
        }
        else if (e.target === atvNavTop) {
            hover(atv)
        }
        else if (e.target === snowNavTop) {
            hover(snow)
        }
        else {
            hover(accessories)
        }
    })

    //clickMenuHoverRemove
    nav.addEventListener('click', hoverOverFunction)

})


motoLogo.addEventListener('click', function () {
    location.reload()
})


// mainMenu

function motoHtmlManipulation() {
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="road">Road
    <a href='#'id="naked">Naked
    <a href='#'id="superSport">SuperSport
    <a href='#'id="offroad">Offroad

    </div>`
}

function scootersHtmlManipulation() {
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="urban">Urban Mobilty
    <a href='#'id="superSport">SuperSport
    </div>`
}
function tricycleHtmlManipulation() {
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="superSport">SuperSport
    <a href='#'id="urban">Urban 
    </div>`
}
function atvHtmlManipulation() {
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="utility">Utility
    <a href='#'id="leisure">Leisure
    <a href='#'id="sport">Sport
    </div>`
}
function snowHtmlManipulation() {
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="crossover">Crossover
    <a href='#'id="mountain">Mountain
    <a href='#'id="trail">Trail
    <a href='#'id="utility">Utility
    </div>`
}
function accessoriesHtmlManipulation(){
    navEmty.innerHTML = `<div class="motor">
    <a href='#'id="cycling">Cycling
    <a href="#"id="yamalube">Yamalube
    <a href='#'id="life">Life Vest
    <a href='#'id="gadgets">Gadgets
    </div>`
    }
function navigationStyle(){
    navigaitionEl.style.height = '2vh';
    navigaitionEl.style.position = 'absolute';
    document.querySelector('.menu-animation').style.display='none'
    

}
allElementsNav.forEach(function (nav) {
    nav.addEventListener('click', function (e) {
        navigationStyle()
       
        if (e.target === motorcyclesNavTop) motoHtmlManipulation()
        else if (e.target === scootersNavTop) scootersHtmlManipulation()
        else if (e.target === tricycleNavTop) tricycleHtmlManipulation()
        else if (e.target === atvNavTop) atvHtmlManipulation()
        else if (e.target === snowNavTop) scootersHtmlManipulation()
       else if (e.target === accessoriesNavTop) accessoriesHtmlManipulation()
       
    })
})


//menu
allElementsMain.forEach(function (main) {

    main.addEventListener('click', function (e) {
        navigationStyle()
        if (e.target === motorcycles) motoHtmlManipulation()
        else if (e.target === scooters) scootersHtmlManipulation()
        else if (e.target === tricycle) tricycleHtmlManipulation()
        else if (e.target === atv) atvHtmlManipulation()
        else if (e.target === snow) scootersHtmlManipulation()
       else if (e.target === accessories) accessoriesHtmlManipulation()

    })
})




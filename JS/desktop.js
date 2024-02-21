const icone = document.getElementById('icone');
const icone1 = document.getElementById('icone1');
const icone2 = document.getElementById('icone2');
const icone3 = document.getElementById('icone3');
const cardJs = document.getElementById('cardJs');
const cardJs1 = document.getElementById('cardJs1');
const cardJs2 = document.getElementById('cardJs2');
const cardJs3 = document.getElementById('cardJs3');
const textoJs = document.getElementById('textoJS');
const textoJs1 = document.getElementById('textoJS1');
const textoJs2 = document.getElementById('textoJS2');
const textoJs3 = document.getElementById('textoJS3');
const pJS = document.getElementById('pJS');
const p1JS = document.getElementById('p1JS');
const p2JS = document.getElementById('p2JS');
const p3JS = document.getElementById('p3JS');
const textHome = document.getElementById('textLigandoOMundo');

function mouseOver ()   {
    if(window.innerWidth > 1000){
    icone.style.display = 'none';
    cardJs.style.background = 'purple';
    textoJs.style.color = 'white';
    textoJs.style.textAlign = 'justify';
    textoJs.style.display = 'flex';
    textoJs.style.animation = "showDesc 0.5s"
    pJS.style.display = 'flex';

}
}
function mouseOut(){
    
    icone.style.display = 'flex';
    icone.style.animation = "showIconDesktop 0.2s"
    cardJs.style.background = 'transparent';
    textoJs.style.display = 'none';
    textoJs.style.animation = "none"
    pJS.style.display = 'none';



}
function mouseOver1()   {
    if(window.innerWidth > 1000){
    icone1.style.display = 'none';
    cardJs1.style.background = 'purple';
    textoJs1.style.color = 'white';
    textoJs1.style.textAlign = 'justify';
    textoJs1.style.display = 'flex';
    textoJs1.style.animation = "showDesc 0.5s"
    p1JS.style.display = 'flex';

}
}
function mouseOut1(){
    icone1.style.animation = "showIconDesktop 0.2s"
    icone1.style.display = 'flex';
    cardJs1.style.background = 'transparent';
    textoJs1.style.display = 'none';
    textoJs1.style.animation = "none"
    p1JS.style.display = 'none';



}function mouseOver2()   {
    if(window.innerWidth > 1000){
    icone2.style.display = 'none';
    cardJs2.style.background = 'purple';
    textoJs2.style.color = 'white';
    textoJs2.style.textAlign = 'justify';
    textoJs2.style.display = 'flex';
    textoJs2.style.animation = "showDesc 0.5s"
    p2JS.style.display = 'flex';

}
}
function mouseOut2(){
    icone2.style.animation = "showIconDesktop 0.2s"
    icone2.style.display = 'flex';
    cardJs2.style.background = 'transparent';
    textoJs2.style.display = 'none';
    textoJs2.style.animation = "none"
    p2JS.style.display = 'none';



}function mouseOver3()   {
    if(window.innerWidth > 1000){
    icone3.style.display = 'none';
    cardJs3.style.background = 'purple';
    textoJs3.style.color = 'white';
    textoJs3.style.textAlign = 'justify';
    textoJs3.style.animation = "showDesc 0.5s"
    textoJs3.style.display = 'flex';
    p3JS.style.display = 'flex';

}
}
function mouseOut3(){
    icone3.style.animation = "showIconDesktop 0.2s"
    icone3.style.display = 'flex';
    cardJs3.style.background = 'transparent';
    textoJs3.style.display = 'none';
    textoJs3.style.animation = "none"
    p3JS.style.display = 'none';



}


if(window.innerWidth <1000){
    textHome.classList.add('display-2')
}
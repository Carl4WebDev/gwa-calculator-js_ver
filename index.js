// let form = document.forms['my-form']  

let enterSubject = document.getElementById('enter-subject')
let enterPrelim = document.getElementById('enter-prelim')
let enterMidterm = document.getElementById('enter-midterm')
let enterPrefinal = document.getElementById('enter-prefinal')
let enterFinals = document.getElementById('enter-finals')
let enterUnit = document.getElementById('enter-unit')
let addButton = document.getElementById('add-button')

addButton.addEventListener('click',() => {
    let gradesInfo = {enterSubject, enterPrelim, enterMidterm, enterPrefinal, enterFinals, enterUnit}
    resultBox(gradesInfo)
});

function resultBox(gradesInfo){
    gradesInfo = {enterSubject, enterPrelim, enterMidterm, enterPrefinal, enterFinals, enterUnit}



    const resultBox = document.getElementById('result-box');
    const newBox = document.createElement('div');
    newBox.className = 'box bg-warning';
    newBox.innerHTML = "HELLO HELLO"
    resultBox.appendChild(newBox);
}
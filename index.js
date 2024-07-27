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

    const finalGrade = (enterPrelim.value * 0.20) + (enterMidterm.value * 0.20) + (enterPrefinal.value * 0.20) + (enterFinals.value * 0.40)

    // console.log(finalGrade)
    const resultBox = document.getElementById('result-box');
    const newBox = document.createElement('div');
    const span = document.createElement('span')
    newBox.className = 'box row';

    const classDesignSubject = "fw-bold fs-6 d-flex flex-column text-break justify-content-evenly align-content-center"
    const classDesignGrades = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center"
    // const classP = "fs-3 d-flex text-break justify-content-center align-content-center text-primary"
    // const classDesignSubject = ""
    // const classDesignGrades = ""
    const classP = "text-break text-primary"
    const classDesignFinalGrades = "fw-bolder fs-4 d-flex text-break justify-content-evenly align-content-center"
    newBox.innerHTML = `
        <div class="col-2"> 
            <span class="${classDesignSubject}"><span>Subject:</span>      <p class="${classP}">${enterSubject.value} </p>   </span> 
        </div>
        <div class="col-2"> 
            <span class="${classDesignGrades}"><span>Prelim:</span>        <p class="${classP}">${enterPrelim.value} </p>  </span> 
        </div>
        <div class="col-2"> 
            <span class="${classDesignGrades}"><span>Midterm:</span>       <p class="${classP}">${enterMidterm.value} </p> </span> 
        </div>
        <div class="col-2"> 
            <span class="${classDesignGrades}"><span>Prefinal:</span>      <p class="${classP}">${enterPrefinal.value} </p> </span> 
        </div>
        <div class="col-2"> 
            <span class="${classDesignGrades}"><span>Finals:</span>        <p class="${classP}">${enterFinals.value} </p> </span> 
        </div>
        <div class="col-2"> 
            <span class="${classDesignGrades}"><span>Course Unit:</span>  <p class="${classP}">${enterUnit.value} </p> </span> 
        </div>
        <div class="col-12 bg-warning justify-content-center align-content-center rounded"> 
            <span class="${classDesignFinalGrades}"><span>Final Grade:</span>  <p>${90} </p> </span> 
        </div>

    `
    // newBox.innerHTML = `<span> ${enterSubject} - ${enterPrelim}</span> ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd`
    newBox.appendChild(span)
    resultBox.appendChild(newBox);
}
// let form = document.forms['my-form']  

let enterSubject = document.getElementById('enter-subject')
let enterPrelim = document.getElementById('enter-prelim')
let enterMidterm = document.getElementById('enter-midterm')
let enterPrefinal = document.getElementById('enter-prefinal')
let enterFinals = document.getElementById('enter-finals')
let enterUnit = document.getElementById('enter-unit')
let addButton = document.getElementById('add-button')

let creditPointsPerCourse = []
let courseUnit = [] 


addButton.addEventListener('click',() => {
    let gradesInfo = {enterSubject, enterPrelim, enterMidterm, enterPrefinal, enterFinals, enterUnit}
    resultBox(gradesInfo)
});

function popUpwarning(){
    let popUpWarning = document.getElementById('popup-warning')
    const popUp = document.createElement('div')
    popUp.className = "d-flex bg-white justify-content-center align-content-center p-3 fw-bolder fs-2 text-danger"
    popUp.innerHTML = `
        <span> All input are required! </span>
    `
    popUpWarning.appendChild(popUp)
}

function resultBox(gradesInfo){
    gradesInfo = {enterSubject, enterPrelim, enterMidterm, enterPrefinal, enterFinals, enterUnit}

    const finalGrade = parseFloat((enterPrelim.value * 0.20) + (enterMidterm.value * 0.20) + (enterPrefinal.value * 0.20) + (enterFinals.value * 0.40)).toFixed(2)
    let finalGradeConversion;
    courseUnit.push(parseFloat(enterUnit.value))

    if(finalGrade >= 97.50 && finalGrade <= 100){
        finalGradeConversion = 1.00;
        creditPointsPerCourse.push(1.00) 
    }
    else if(finalGrade >= 94.50 && finalGrade <= 97.49){
        finalGradeConversion = 1.25;
        creditPointsPerCourse.push(1.25) 
    }
    else if(finalGrade >= 91.50 && finalGrade <= 94.49){
        finalGradeConversion = 1.50;
        creditPointsPerCourse.push(1.50) 
    }
    else if(finalGrade >= 88.50 && finalGrade <= 91.49){
        finalGradeConversion = 1.75;
        creditPointsPerCourse.push(1.75)
    }
    else if(finalGrade >= 85.50 && finalGrade <= 88.49){
        finalGradeConversion = 2.00;
        creditPointsPerCourse.push(2.00) 
    }
    else if(finalGrade >= 82.50 && finalGrade <= 85.49){
        finalGradeConversion = 2.25;
        creditPointsPerCourse.push(2.25) 
    }
    else if(finalGrade >= 79.50 && finalGrade <= 82.49){
        finalGradeConversion = 2.50;
        creditPointsPerCourse.push(2.50) 
    }
    else if(finalGrade >= 76.50 && finalGrade <= 79.49){
        finalGradeConversion = 2.75;
        creditPointsPerCourse.push(2.75) 
    }
    else if(finalGrade >= 74.50 && finalGrade <= 76.49){
        finalGradeConversion = 3.00;
        creditPointsPerCourse.push(3.00) 
    }
    else if(finalGrade == 74.49){
        finalGradeConversion = 5.00;
        creditPointsPerCourse.push(5.00) 
    }
    else if(finalGrade < 74.49){
        finalGradeConversion = "failed"
    }
    for(i = 0; i < creditPointsPerCourse.length; i++){
        console.log(creditPointsPerCourse[i])
    }

    console.log(creditPointsPerCourse)
    console.log(courseUnit)
    const resultBox = document.getElementById('result-box');
    const newBox = document.createElement('div');
    const span = document.createElement('span')
    newBox.className = 'box row';

    const classDesignSubject = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center"
    const classDesignGrades = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center"
    const classP = "text-break text-primary"
    const classDesignFinalGrades = "fw-bolder fs-4 d-flex text-break justify-content-evenly align-content-center text-primary"
    newBox.innerHTML = `
        <div class="col-2 fw-bold fs-6"> 
            <span>Subject:</span> 
            <span class="${classDesignSubject}"><p class="${classP}">${enterSubject.value} </p>   </span> 
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
            <span class="${classDesignFinalGrades}"><span>Final Grade:</span>  <p class="text-primary">${finalGrade}(${finalGradeConversion})</p> </span> 
        </div>
    `
    let creditPointsPerCourseSum = creditPointsPerCourse.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let courseUnitSum = courseUnit.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(courseUnitSum)
    console.log(creditPointsPerCourseSum)
    newBox.appendChild(span)
    resultBox.appendChild(newBox);
}
// let enterSubject = document.getElementById('enter-subject');
// let enterPrelim = document.getElementById('enter-prelim');
// let enterMidterm = document.getElementById('enter-midterm');
// let enterPrefinal = document.getElementById('enter-prefinal');
// let enterFinals = document.getElementById('enter-finals');
// let enterUnit = document.getElementById('enter-unit');
// let addButton = document.getElementById('add-button');
// let removeButton = document.getElementById('remove-button');

// let creditPointsPerCourse = [];
// let courseUnits = [];
// let finalGradeConversions = []; 

// addButton.addEventListener('click', () => {
//     if (validateInputs()) {
        
//         let gradesInfo = {
//             subject: enterSubject.value,
//             prelim: parseFloat(enterPrelim.value),
//             midterm: parseFloat(enterMidterm.value),
//             prefinal: parseFloat(enterPrefinal.value),
//             finals: parseFloat(enterFinals.value),
//             unit: parseFloat(enterUnit.value)
//         };
                
//         resultBox(gradesInfo);
//         enterSubject.value = "";
//         enterPrelim.value = "";
//         enterMidterm.value = "";
//         enterPrefinal.value = "";
//         enterFinals.value = "";
//         enterUnit.value = "";
//     } else {
//         let warning = "All inputs are required!"
//         popUpWarning(warning);
//     }
// });

// removeButton.addEventListener('click', () => {
//     removeLastGradeEntry();
// });

// function validateInputs() {
//     return (
//         enterSubject.value.trim() !== '' &&
//         !isNaN(parseFloat(enterPrelim.value)) &&
//         !isNaN(parseFloat(enterMidterm.value)) &&
//         !isNaN(parseFloat(enterPrefinal.value)) &&
//         !isNaN(parseFloat(enterFinals.value)) &&
//         !isNaN(parseFloat(enterUnit.value))
//     );
// }

// function popUpWarning(warning) {
//     let popUpWarning = document.getElementById('popup-warning');
//     const popUp = document.createElement('div');

//     popUp.className = "d-flex bg-white justify-content-center align-content-center p-3 fw-bolder fs-2 text-danger z-3 popup-main";
//     popUp.innerHTML = `<span>${warning}</span>`;
//     popUpWarning.appendChild(popUp);

//     setTimeout(() => {
//         popUpWarning.removeChild(popUp);
//     }, 3000);
// }

// function resultBox(gradesInfo) {
//     const finalGrade = parseFloat(
//         (gradesInfo.prelim * 0.20) +
//         (gradesInfo.midterm * 0.20) +
//         (gradesInfo.prefinal * 0.20) +
//         (gradesInfo.finals * 0.40)
//     ).toFixed(2);

//     let finalGradeConversion;

//     if (finalGrade >= 97.50 && finalGrade <= 100) {
//         finalGradeConversion = 1.00;
//     } else if (finalGrade >= 94.50 && finalGrade <= 97.49) {
//         finalGradeConversion = 1.25;
//     } else if (finalGrade >= 91.50 && finalGrade <= 94.49) {
//         finalGradeConversion = 1.50;
//     } else if (finalGrade >= 88.50 && finalGrade <= 91.49) {
//         finalGradeConversion = 1.75;
//     } else if (finalGrade >= 85.50 && finalGrade <= 88.49) {
//         finalGradeConversion = 2.00;
//     } else if (finalGrade >= 82.50 && finalGrade <= 85.49) {
//         finalGradeConversion = 2.25;
//     } else if (finalGrade >= 79.50 && finalGrade <= 82.49) {
//         finalGradeConversion = 2.50;
//     } else if (finalGrade >= 76.50 && finalGrade <= 79.49) {
//         finalGradeConversion = 2.75;
//     } else if (finalGrade >= 74.50 && finalGrade <= 76.49) {
//         finalGradeConversion = 3.00;
//     } else if (finalGrade == 74.49) {
//         finalGradeConversion = 5.00;
//     } else if (finalGrade < 74.49) {
//         finalGradeConversion = 0;
//     }

//     let currentCreditPoints = parseFloat((finalGradeConversion * gradesInfo.unit).toFixed(2));
//     creditPointsPerCourse.push(currentCreditPoints);
//     courseUnits.push(gradesInfo.unit);
//     finalGradeConversions.push(finalGradeConversion); 

//     updateGWA();

//     const resultBox = document.getElementById('result-box');
//     const newBox = document.createElement('div');
//     newBox.className = 'box row';

//     const classDesignSubject = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center";
//     const classDesignGrades = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center ";
//     const classP = "text-break text-primary";
//     const classDesignFinalGrades = "fw-bolder fs-4 d-flex text-break justify-content-evenly align-content-center text-primary";
//     newBox.innerHTML = `
//         <div class="col-2 fw-bold fs-6">
//             <span>Subject:</span>
//             <span class="${classDesignSubject}"><p class="${classP}">${gradesInfo.subject}</p></span>
//         </div>
//         <div class="col-2">
//             <span class="${classDesignGrades}"><span>Prelim:</span><p class="${classP}">${gradesInfo.prelim}</p></span>
//         </div>
//         <div class="col-2">
//             <span class="${classDesignGrades}"><span>Midterm:</span><p class="${classP}">${gradesInfo.midterm}</p></span>
//         </div>
//         <div class="col-2">
//             <span class="${classDesignGrades}"><span>Prefinal:</span><p class="${classP}">${gradesInfo.prefinal}</p></span>
//         </div>
//         <div class="col-2">
//             <span class="${classDesignGrades}"><span>Finals:</span><p class="${classP}">${gradesInfo.finals}</p></span>
//         </div>
//         <div class="col-2">
//             <span class="${classDesignGrades}"><span>Course Unit:</span><p class="${classP}">${gradesInfo.unit}</p></span>
//         </div>
//         <div class="col-12 bg-warning justify-content-center align-content-center rounded">
//             <span class="${classDesignFinalGrades}"><span>Final Grade:</span><p class="text-primary">${finalGrade}(${finalGradeConversion})</p></span>
//         </div>
//     `;
//     resultBox.appendChild(newBox);
// }

// function updateGWA() {
//     let displayGWA = document.getElementById('display-gwa');

//     let totalCreditPointsPerCourse = creditPointsPerCourse.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     let totalCourseUnits = courseUnits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//     let gwa = parseFloat(totalCreditPointsPerCourse / totalCourseUnits).toFixed(2);

//     displayGWA.innerText = gwa;
// }

// function removeLastGradeEntry() {
//     if (creditPointsPerCourse.length === 0) {
//         let warnning = "No left to remove!"
//         popUpWarning(warnning)
//         return;
//     }

//     creditPointsPerCourse.pop();
//     courseUnits.pop();
//     finalGradeConversions.pop(); 

//     const resultBox = document.getElementById('result-box');
//     if (resultBox.lastChild) {
//         resultBox.removeChild(resultBox.lastChild);
//     }

//     updateGWA();
// }


let enterSubject = document.getElementById('enter-subject');
let enterPrelim = document.getElementById('enter-prelim');
let enterMidterm = document.getElementById('enter-midterm');
let enterPrefinal = document.getElementById('enter-prefinal');
let enterFinals = document.getElementById('enter-finals');
let enterUnit = document.getElementById('enter-unit');
let addButton = document.getElementById('add-button');
let removeButton = document.getElementById('remove-button');

let creditPointsPerCourse = [];
let courseUnits = [];
let finalGradeConversions = [];

addButton.addEventListener('click', () => {
    if (validateInputs()) {
        let gradesInfo = {
            subject: enterSubject.value,
            prelim: parseFloat(enterPrelim.value),
            midterm: parseFloat(enterMidterm.value),
            prefinal: parseFloat(enterPrefinal.value),
            finals: parseFloat(enterFinals.value),
            unit: parseFloat(enterUnit.value)
        };

        saveGradeToLocalStorage(gradesInfo);
        resultBox(gradesInfo);
        enterSubject.value = "";
        enterPrelim.value = "";
        enterMidterm.value = "";
        enterPrefinal.value = "";
        enterFinals.value = "";
        enterUnit.value = "";
    } else {
        let warning = "All inputs are required!";
        popUpWarning(warning);
    }
});

removeButton.addEventListener('click', () => {
    removeLastGradeEntry();
});

window.addEventListener('load', () => {
    let gradesData = JSON.parse(localStorage.getItem('gradesData')) || [];
    gradesData.forEach((grade) => {
        resultBox(grade);
    });
});

function validateInputs() {
    return (
        enterSubject.value.trim() !== '' &&
        !isNaN(parseFloat(enterPrelim.value)) &&
        !isNaN(parseFloat(enterMidterm.value)) &&
        !isNaN(parseFloat(enterPrefinal.value)) &&
        !isNaN(parseFloat(enterFinals.value)) &&
        !isNaN(parseFloat(enterUnit.value))
    );
}

function popUpWarning(warning) {
    let popUpWarning = document.getElementById('popup-warning');
    const popUp = document.createElement('div');

    popUp.className = "d-flex bg-white justify-content-center align-content-center p-3 fw-bolder fs-2 text-danger z-3 popup-main";
    popUp.innerHTML = `<span>${warning}</span>`;
    popUpWarning.appendChild(popUp);

    setTimeout(() => {
        popUpWarning.removeChild(popUp);
    }, 3000);
}

function resultBox(gradesInfo) {
    const finalGrade = parseFloat(
        (gradesInfo.prelim * 0.20) +
        (gradesInfo.midterm * 0.20) +
        (gradesInfo.prefinal * 0.20) +
        (gradesInfo.finals * 0.40)
    ).toFixed(2);

    let finalGradeConversion;

    if (finalGrade >= 97.50 && finalGrade <= 100) {
        finalGradeConversion = 1.00;
    } else if (finalGrade >= 94.50 && finalGrade <= 97.49) {
        finalGradeConversion = 1.25;
    } else if (finalGrade >= 91.50 && finalGrade <= 94.49) {
        finalGradeConversion = 1.50;
    } else if (finalGrade >= 88.50 && finalGrade <= 91.49) {
        finalGradeConversion = 1.75;
    } else if (finalGrade >= 85.50 && finalGrade <= 88.49) {
        finalGradeConversion = 2.00;
    } else if (finalGrade >= 82.50 && finalGrade <= 85.49) {
        finalGradeConversion = 2.25;
    } else if (finalGrade >= 79.50 && finalGrade <= 82.49) {
        finalGradeConversion = 2.50;
    } else if (finalGrade >= 76.50 && finalGrade <= 79.49) {
        finalGradeConversion = 2.75;
    } else if (finalGrade >= 74.50 && finalGrade <= 76.49) {
        finalGradeConversion = 3.00;
    } else if (finalGrade == 74.49) {
        finalGradeConversion = 5.00;
    } else if (finalGrade < 74.49) {
        finalGradeConversion = 0;
    }

    let currentCreditPoints = parseFloat((finalGradeConversion * gradesInfo.unit).toFixed(2));
    creditPointsPerCourse.push(currentCreditPoints);
    courseUnits.push(gradesInfo.unit);
    finalGradeConversions.push(finalGradeConversion);

    updateGWA();

    const resultBox = document.getElementById('result-box');
    const newBox = document.createElement('div');
    newBox.className = 'box row';

    const classDesignSubject = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center";
    const classDesignGrades = "fw-bold fs-6 d-flex text-break justify-content-evenly align-content-center ";
    const classP = "text-break text-primary";
    const classDesignFinalGrades = "fw-bolder fs-4 d-flex text-break justify-content-evenly align-content-center text-primary";
    newBox.innerHTML = `
        <div class="col-2 fw-bold fs-6">
            <span>Subject:</span>
            <span class="${classDesignSubject}"><p class="${classP}">${gradesInfo.subject}</p></span>
        </div>
        <div class="col-2">
            <span class="${classDesignGrades}"><span>Prelim:</span><p class="${classP}">${gradesInfo.prelim}</p></span>
        </div>
        <div class="col-2">
            <span class="${classDesignGrades}"><span>Midterm:</span><p class="${classP}">${gradesInfo.midterm}</p></span>
        </div>
        <div class="col-2">
            <span class="${classDesignGrades}"><span>Prefinal:</span><p class="${classP}">${gradesInfo.prefinal}</p></span>
        </div>
        <div class="col-2">
            <span class="${classDesignGrades}"><span>Finals:</span><p class="${classP}">${gradesInfo.finals}</p></span>
        </div>
        <div class="col-2">
            <span class="${classDesignGrades}"><span>Course Unit:</span><p class="${classP}">${gradesInfo.unit}</p></span>
        </div>
        <div class="col-12 bg-warning justify-content-center align-content-center rounded">
            <span class="${classDesignFinalGrades}"><span>Final Grade:</span><p class="text-primary">${finalGrade}(${finalGradeConversion})</p></span>
        </div>
    `;
    resultBox.appendChild(newBox);
}

function updateGWA() {
    let displayGWA = document.getElementById('display-gwa');

    let totalCreditPointsPerCourse = creditPointsPerCourse.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let totalCourseUnits = courseUnits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let gwa = parseFloat(totalCreditPointsPerCourse / totalCourseUnits).toFixed(2);

    displayGWA.innerText = gwa;
}

function removeLastGradeEntry() {
    if (creditPointsPerCourse.length === 0) {
        let warning = "No left to remove!";
        popUpWarning(warning);
        return;
    }

    creditPointsPerCourse.pop();
    courseUnits.pop();
    finalGradeConversions.pop();

    const resultBox = document.getElementById('result-box');
    if (resultBox.lastChild) {
        resultBox.removeChild(resultBox.lastChild);
    }

    let gradesData = JSON.parse(localStorage.getItem('gradesData')) || [];
    gradesData.pop();
    localStorage.setItem('gradesData', JSON.stringify(gradesData));

    updateGWA();
}

function saveGradeToLocalStorage(gradesInfo) {
    let gradesData = JSON.parse(localStorage.getItem('gradesData')) || [];
    gradesData.push(gradesInfo);
    localStorage.setItem('gradesData', JSON.stringify(gradesData));
}

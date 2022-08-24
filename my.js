const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps =  document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step")

console.log(nextBtns)

let formStepNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum++;
        updateFormSteps(); 
        updateProgressBar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum--;
        updateFormSteps(); 
        updateProgressBar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    })

    formSteps[formStepNum].classList.add("form-step-active");
}; 

function updateProgressBar() {
    Array.from(progressSteps).forEach((progressStep, idx) => {
        if(idx < formStepNum + 1){
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    
}

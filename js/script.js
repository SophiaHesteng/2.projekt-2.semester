//console.log("Helle from Script"); Koblingen er sket

//Variabler

const startButton = document.querySelector(".startknap");

const btns = document.querySelectorAll("button");

const scenarios = document.querySelectorAll(".scenario");

const feedback = document.querySelectorAll(".feedback");

//Funktioner

const nextScenario = (e) => {
        console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Start deling her":
            //console.log("start deling her was clicked");
            scenarios[1].classList.add("active");
    }
}


//EventListener
 
for(const button of btns) {
    button.addEventListener("click", nextScenario);
}
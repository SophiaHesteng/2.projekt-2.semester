//console.log("Helle from Script"); Koblingen er sket

//Variabler

const startButton = document.querySelector(".startknap");

const btns = document.querySelectorAll("button");

const scenarios = document.querySelectorAll(".scenario");

const feedbacks = document.querySelectorAll(".feedback");

//Funktioner

const nextScenario = (e) => {
        console.log(e.target.textContent);
    switch (e.target.textContent) {
        case "Start deling her":
            console.log("Start deling her was clicked");
            scenarios[1].classList.add("active");
        break;

        case "Du opretter et hotspot fra din mobil":
            console.log("Du opretter et hotspot fra din mobil was clicked");
            scenarios[1].classList.remove("active");
            scenarios[2].classList.add("active");
            
        break;

        case "Du deler linket, men uden at begrænse adgangen":
            console.log("Du deler linket, men uden at begrænse adgangen was clicked");
            scenarios[2].classList.remove("active");
            scenarios[3].classList.add("active");
        break;
    }
}


//EventListener
 
for(const button of btns) {
    button.addEventListener("click", nextScenario);
}
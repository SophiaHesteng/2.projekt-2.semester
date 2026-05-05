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
            scenarios[2].classList.remove("active");
            scenarios[3].classList.remove("active");
            scenarios[4].classList.remove("active");
            scenarios[5].classList.remove("active");
            scenarios[6].classList.remove("active");
            scenarios[7].classList.remove("active");
            scenarios[8].classList.remove("active");
            scenarios[9].classList.remove("active");
            scenarios[10].classList.remove("active");
        break;
// --------------------- Hotspot
        case "Du opretter et hotspot fra din mobil":
            console.log("Du opretter et hotspot fra din mobil was clicked");
            scenarios[1].classList.remove("active");
            scenarios[2].classList.add("active");
            
        break;

        case "Du begrænser adgangen med en kode fra starten og sikrer at kun din gruppe har adgang":
            console.log("Du begrænser adgangen med en kode fra starten og sikrer at kun din gruppe har adgang was clicked");
            scenarios[2].classList.remove("active");
            scenarios[3].classList.add("active");
        break;

        case "Du deler filerne uden kontrol med kode":
            console.log("Du deler filerne uden kontrol med kode was clicked");
            scenarios[2].classList.remove("active");
            scenarios[4].classList.add("active");
        break;

// --------------------- Email
        case "Du sender noterne gennem email":
            console.log("Du sender noterne gennem email was clicked");
            scenarios[1].classList.remove("active");
            scenarios[2].classList.remove("active");
            scenarios[5].classList.add("active");
        break;

        case "Du uploader til clouden og sender link":
            console.log("Du uploader til clouden og sender link was clicked");
            scenarios[5].classList.remove("active");
            scenarios[6].classList.add("active");
        break;

        case "Du sender filerne direkte i emailen":
            console.log("Du sender filerne direkte i emailen was clicked");
            scenarios[5].classList.remove("active");
            scenarios[7].classList.add("active");
        break;

// --------------------- Privat netværk & USB
        case "Du venter til at du kommer hjem på dit private netværk eller medbringer et USB-stik":
            console.log("Du venter til at du kommer hjem på dit private netværk eller medbringer et USB-stik was clicked");
            scenarios[1].classList.remove("active");
            scenarios[8].classList.add("active");
        break;

        case "Du fortæller gruppen at du deler alle filerne når du kommer hjem":
            console.log("Du fortæller gruppen at du deler alle filerne når du kommer hjem was clicked");
            scenarios[8].classList.remove("active");
            scenarios[9].classList.add("active");
        break;

        case "Du lægger filerne på et USB-stik og i deler den vej":
            console.log("Du lægger filerne på et USB-stik og i deler den vej was clicked");
            scenarios[8].classList.remove("active");
            scenarios[10].classList.add("active");
        break;

// --------------------- Offentligt WiFi


        }
}


//EventListener
 
for(const button of btns) {
    button.addEventListener("click", nextScenario);
}
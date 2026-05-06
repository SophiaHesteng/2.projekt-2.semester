//console.log("Helle from Script"); Koblingen er sket

//Variabler

const startButton = document.querySelector(".startknap");

const btns = document.querySelectorAll("button");

const forfra = document.querySelectorAll(".forfra");

const scenarios = document.querySelectorAll(".scenario");

const feedbacks = document.querySelectorAll(".feedback");

//Funktioner

const nextScenario = (e) => {
        console.log(e.target.textContent);
    switch (e.target.textContent) {
        case "Start deling her":
            console.log("Start deling her was clicked");
            scenarios.forEach(s => s.classList.remove("active"));
            scenarios[1].classList.add("active");
            scenarios[1].scrollIntoView({
            behavior: "smooth"});
        break;

        case "Start forfra":
            console.log("Start forfra was clicked");
            scenarios.forEach(s => s.classList.remove("active"));
            scenarios[0].classList.add("active");
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
        case "Du logger på caféens offentlige WiFi":
            console.log("Du logger på caféens offentligt WiFi was clicked");
            scenarios[1].classList.remove("active");
            scenarios[11].classList.add("active");
        break;

        case "Hvad så nu?":
            console.log("Hvad så nu? was clicked");
            scenarios[11].classList.remove("active");
            scenarios[12].classList.add("active");
        break;

        case "Du ignorer den og begynder at uploade jeres filer":
            console.log("Du ignorer den og begynder at uploade jeres filer was clicked");
            scenarios[12].classList.remove("active");
            scenarios[16].classList.add("active");
        break;

        case "Hvad gør du nu?":
            console.log("Hvad gør du nu? was clicked");
            scenarios[16].classList.remove("active");
            scenarios[17].classList.add("active");
        break;

        case "Du ignorer den nye advarsel":
            console.log("Du ignorer den nye advarsel was clicked");
            scenarios[17].classList.remove("active");
            scenarios[18].classList.add("active");
        break;

        case "Du tjekker din sikkerhed med det samme":
            console.log("Du tjekker din sikkerhed med det samme was clicked");
            scenarios[12].classList.remove("active");
            scenarios[13].classList.add("active");
        break;

        case "Du afbryder forbindelsen til WiFi":
            console.log("Du afbryder forbindelsen til WiFi was clicked");
            scenarios[13].classList.remove("active");
            scenarios[1].classList.add("active");
        break;

        case "Du opdager at din VPN ikke er aktiveret":
            console.log("Du opdager at din VPN ikke er aktiveret was clicked");
            scenarios[13].classList.remove("active");
            scenarios[14].classList.add("active");
        break;

        case "Du skynder dig at aktiverer din VPN og kan nu dele filerne sikkert":
            console.log("Du skynder dig at aktiverer din VPN og kan nu dele filerne sikkert was clicked");
            scenarios[14].classList.remove("active");
            scenarios[15].classList.add("active");
        break;

        case "Du reagerer på advarslen":
            console.log("Du reagerer på advarslen was clicked");
            scenarios[17].classList.remove("active");
            scenarios[19].classList.add("active");
        break;
        }
}

//EventListener
 
for(const button of btns) {
    button.addEventListener("click", nextScenario);
}

for (const link of forfra) {
    link.addEventListener("click", nextScenario);
}
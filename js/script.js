const kmDaPerc = document.getElementById("km");
const etaUtente = document.getElementById("eta");
const bottoneGenera = document.getElementById("bottone");
const prezzoFin = document.getElementById("prezzo");



bottoneGenera.addEventListener("click", (event) => {
    event.preventDefault();

    let costo = (parseInt(kmDaPerc.value) * 0.21);

    if (parseInt(etaUtente.value) < 18) {
        costo = costo - ((costo * 20) / 100);
    } else if (parseInt(etaUtente.value) > 65) {
        costo = costo - ((costo * 40) / 100);
    }
    else {
        costo = costo;
    }   

    prezzoFin.innerHTML = costo.toFixed(2);

    console.log("il prezzo è: ", prezzoFin);

    console.log("il prezzo è: ", costo.toFixed(2));

    kmDaPerc.value = "";
    etaUtente.value = "";

});


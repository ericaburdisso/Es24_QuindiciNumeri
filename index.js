window.addEventListener("load", function () {

    creamatrice();
    caricamatrice();

})

function creamatrice() {
    const wrapper = document.getElementById("wrapper");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i / 4}-${i % 4}`;
            wrapper.appendChild(div);
        }

    }
}
function divClick() {

    const i = this.id.split('-')[1];
    const j = this.id.split('-')[2];

    //cella sopra
    if (j - 1 >= 0) {
        const sopra = document.getElementById(`div-${i}-${j - 1}`);

        if (sopra.textContent == "") {
            scambiaDiv(this, sopra);
            return;
        }

    }
    //cella destra
    if (j + 1 < 4) {
        const destra = document.getElementById(`div-${i}-${j + 1}`);
        if (sopra.textContent == "") {
            scambiaDiv(this, destra);
            return;
        }
    }

    //cella sotto
    if(i+1>=0)
    {
        const sotto=document.getElementById(`div-${i}-${j - 1}`);

        if(sotto==textContent=="")
        {

        }
    }
}
function scambiaDiv(piena, vuota) {
    vuota.textContent = piena.textContent;
    vuota.style.backgroundColor = "blue";

    piena.textContent = "";
    piena.style.backgroundColor = null;
}

function caricamatrice() {
    for (let cont = 1; cont <= 15; cont++) {
        do {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);
            divRnd = document.getElementById(`div-${i}-${j}`);
        } while (divRnd.textContent != " ");

        divRnd.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    }
}


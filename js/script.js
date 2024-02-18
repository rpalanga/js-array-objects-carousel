
/*

Milestone 0:
Come nel primo carosello realizzato,
 focalizziamoci prima sulla creazione del markup statico: 
 costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider. 

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti
 letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra,
 la nuova immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima
e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa
per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo 
(3 secondi) l’immagine attiva dovrà cambiare alla successiva in automatico.

BONUS 3:
Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.


*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const contImage = document.querySelector("#mainImage");
// const slidercontainerImage = document.querySelector("#Slider-image");


for (let i = 0; i < images.length; i++) {

    const img = images[i].image;
    const titolo = images[i].title;
    const testo = images[i].text;

    contImage.innerHTML += `
    <div class="Contain-Element ">
        <img src="./${img}" >
        <div id="description" >

            <h2>${titolo}</h2>
            <p>${testo}</p>

        </div>

    </div>
     
    `
    // slidercontainerImage.innerHTML +=`
    // <div class="Contain-slider my-h" >
    //     <img src="./${img}" class="img-fluid w-100 h-100 object-fit-cover">
        
    // </div>
    // `
    
}

document.querySelector("#mainImage .Contain-Element:nth-of-type(1)").className += "active";


let slideNumber = 1;

document.querySelector("#up-arrow").addEventListener("click", function() {

    

    if (slideNumber < images.length) {

        
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.remove("active");

        
        slideNumber++;

       
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.add("active");

        

    } else {

         
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.remove("active");

        
        slideNumber = 1;

       
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.add("active");

    }

});

document.querySelector("#down-arrow").addEventListener("click", function() {

    

    if (slideNumber > 1) {

        
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.remove("active");

        
        slideNumber--;

        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

         
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.remove("active");

        
        slideNumber = images.length;

        
        document.querySelector(`#mainImage .Contain-Element:nth-of-type(${slideNumber})`).classList.add("active");

    }

});

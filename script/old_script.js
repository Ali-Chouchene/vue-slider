/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.

Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
*/

//! ARRAY FORNITO
const data = [
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


//! START
const gallery = document.getElementById("gallery");
const thumbs = document.getElementById("thumbnails");



//!preparo variabile vuota nella quale scrivero l'HTML
let galleryCode = ``;

//!ciclo for con il quale prendero manmano ogni oggetto
for (let i = 0; i < data.length; i++) {
    //!costante che mi da l'oggetto attuale
    const currentI = data[i];

    //!monto ogni elemento
    galleryCode += `<img src="${currentI.image}"><div class="text position-absolute bottom-0 start-50 translate-middle text-white">
    <h2>${currentI.title}</h2>
    <h5>${currentI.text}</h5>
    </div>`;
    gallery.innerHTML = galleryCode;
};
gallery.innerHTML = galleryCode;

//!preparo variabile vuota nella quale scrivero l'HTML
let thumbsCode = `<i id="prev" class="fa-solid fa-circle-arrow-up fa-2xl"></i>`;

//!ciclo for con il quale prendero manmano ogni oggetto
for (let i = 0; i < data.length; i++) {
    //!costante che mi da l'oggetto attuale
    const currentI = data[i];

    //!monto ogni elemento
    thumbsCode += `<div class="thumbs"><img src="${currentI.image}"></div> `;
};

thumbsCode += `<i id="next" class="fa-solid fa-circle-arrow-down fa-2xl"></i>`;
thumbs.innerHTML = thumbsCode;



//!METTO LA PRIMA IMMAGINE IN DISPLAY BLOCK
//recupero le immagini
const images = document.querySelectorAll("#gallery img");



let currentImage = 0;
images[currentImage].classList.add("active");

//!thumbs
const thumb = document.querySelectorAll("#thumbnails img");
thumb[currentImage].classList.add("active");

//!text
const imgtext = document.querySelectorAll("#gallery .text");
imgtext[currentImage].classList.add("active");

//!bottoni
const next = document.getElementById("next");
const prev = document.getElementById("prev");



//!faccio funzionare i bottoni
next.addEventListener("click", function () {
    images[currentImage].classList.remove("active");
    thumb[currentImage].classList.remove("active");
    imgtext[currentImage].classList.remove("active");

    currentImage++;

    //far ripartire quando finiscono le foto
    if (currentImage === images.length) currentImage = 0;

    images[currentImage].classList.add("active");
    thumb[currentImage].classList.add("active");
    imgtext[currentImage].classList.add("active");
});
prev.addEventListener("click", function () {
    images[currentImage].classList.remove("active");
    thumb[currentImage].classList.remove("active");
    imgtext[currentImage].classList.remove("active");


    currentImage--;

    //far ripartire quando finiscono le foto
    if (currentImage < 0) currentImage = images.length - 1;

    images[currentImage].classList.add("active");
    thumb[currentImage].classList.add("active");
    imgtext[currentImage].classList.add("active");
});


//! thumb cliccabili
for (let i = 0; i < thumb.length; i++) {
    const currentThumb = thumb[i];

    currentThumb.addEventListener("click", function () {
        images[currentImage].classList.remove("active");
        thumb[currentImage].classList.remove("active");
        imgtext[currentImage].classList.remove("active");

        currentImage = i;

        images[currentImage].classList.add("active");
        thumb[currentImage].classList.add("active");
        imgtext[currentImage].classList.add("active");

    });

}


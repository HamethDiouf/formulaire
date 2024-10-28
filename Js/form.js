const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


// Nom d'utilisateur

inpUtilisateur.addEventListener('input', (e) => {

    if (e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "icone/check.png";
        allSpan[0].style.display = "none";
    }  else {
        allImg[0].style.display = "inline";
        allImg[0].src = "icone/error.png";
        allSpan[0].style.display = "inline";
    }
})


// Validation email

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0) {

        allImg[1].style.display = "inline";
        allImg[1].src = "icone/check.png";
        allSpan[1].style.display = "none";

    } 
    
    else if(e.target.value.search(regexEmail) === -1) {

        allImg[1].style.display = "inline";
        allImg[1].src = "icone/error.png";
        allSpan[1].style.display = "inline";

    }
})


// Validation mot de passe

let valeurInput;
let specialCar = /[^a-zA-Z0-9]/;
let alphabet = /[a-z]/i;
const chiffres = /[0-9]/

// Object

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inpMdp.addEventListener('input', (e) => {

    valeurInput = e.target.value;

    if(valeurInput.search(specialCar) !== -1) {
        objValidation.symbole = 1;
    }
    if(valeurInput.search(alphabet) !== -1) {
        objValidation.lettre = 1;
    }
    if(valeurInput.search(chiffres) !== -1) {
        objValidation.chiffre = 1;
    }
    console.log(objValidation);

    if(e.inputType = 'deleteContentBackWard') {

        if(valeurInput.search(specialCar) !== -1) {
            objValidation.symbole = 1;
        }
        if(valeurInput.search(alphabet) !== -1) {
            objValidation.lettre = 1;
        }
        if(valeurInput.search(chiffres) !== -1) {
            objValidation.chiffre = 1;
        }
    }

    let testAll = 0;
    for(const property in objValidation) {
        if(objValidation[property] > 0) {
            testAll++;
        }
    }

    if(testAll < 3) {
        allSpan[2].style.display = 'inline';
        allImg[2].style.display = 'inline';
        allImg[2].src = "icone/error.png";
    }  else {
        allSpan[2].style.display = 'none';
        allImg[2].src = "icone/check.png";
    }

    // force mdp
    if(valeurInput.length <= 6 && valeurInput.length >= 0) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    } 
    
    else if(valeurInput.length > 6 && valeurInput.length <= 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'none';
    } 
    
    else if(valeurInput.length > 9) {
        allLigne[0].style.display = 'block';
        allLigne[1].style.display = 'block';
        allLigne[2].style.display = 'block';
    }

    else if(valeurInput.length === 0) {
        allLigne[0].style.display = 'none';
        allLigne[1].style.display = 'none';
        allLigne[2].style.display = 'none';
    }
})


// confirmation

inpConfirme.addEventListener('input', (e) => {
    
    if(e.target.value.length === 0) {
        allImg[3].style.display = 'inline';
        allImg[3].src = "icone/error.png";   
    }
    else if(e.target.value === valeurInput) {
        allImg[3].style.display = 'inline';
        allImg[3].src = "icone/check.png";
    } else {
        allImg[3].style.display = 'inline';
        allImg[3].src = "icone/error.png";
    }
})
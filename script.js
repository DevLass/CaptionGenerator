let lang = 1;
let text = document.querySelector(".text");
let i = 0;
let brSubtitles = [
    "(Sr K) - Eu não sou milionário, eu sou irresponsável.",
    "(Sant) - Embriagou-se a noite, encarou dias Lúcido.",
    "(Sant) - Trazendo a tempestade em busca de bonança.",
    "(Sant) - O silêncio do lado bom não garante que ele não existe.",
    "(Sant) - Existir na prática é outra teoria.",
    "(Sant) - Louco pra morrer cantando a vida.",
    "7",
    "8",
    "9",
    "10",
];
let enSubtitles = [
    "Girls just wanna have fun",
    "Limited edition",
    "Love songs is a curse",
    "In my rose-tinted dreams",
    "Spend a summer or a lifetime with me",
    "It beats for you, so listen close",
    "Hey! Why you been calling this late?",
    "All mine",
    "Thunderbolts and lightning, very, very frightening me",
    "Tradition is the corpse of wisdom",
];
const tUp = document.querySelector(".thumbs-up");
const tDown = document.querySelector(".thumbs-down");
const refresh_button = document.querySelector(".refresh-button");
const copy_button = document.querySelector(".copy-button");
const info_button = document.querySelector(".info-button");
const lang_button = document.querySelector(".lang-button");
const back_button = document.querySelector(".back-button");

function back() {
    console.log(previous);
    if (lang % 2) {
        // English
        text.innerText = enSubtitles[previous];
    } else {
        // Portugues
        text.innerText = brSubtitles[previous];
    }

    back_button.classList.add("thumbs-animation");

    setTimeout(() => {
        back_button.classList.remove("thumbs-animation");
    }, 500);
}

function copy() {
    console.log(text.innerText);
    let copy_text = text.innerText;
    navigator.clipboard.writeText(copy_text);
    if (lang % 2) {
        // English
        text.innerText = "Copied!";
    } else {
        // Portugues
        text.innerText = "Copiado!";
    }

    setTimeout(() => {
        if (lang % 2) {
            // English
            text.innerText = enSubtitles[i];
        } else {
            // Portugues
            text.innerText = brSubtitles[i];
        }
    }, 1000);

    copy_button.classList.add("thumbs-animation");

    setTimeout(() => {
        copy_button.classList.remove("thumbs-animation");
    }, 500);
}

function refresh() {
    refresh_button.classList.add("rotate-center");

    setTimeout(() => {
        refresh_button.classList.remove("rotate-center");
    }, 500);
}

function thumbs_up_animation() {
    console.log("click");
    tUp.classList.add("thumbs-animation");
    tUp.classList.remove("thumbs-up-hover");
    tUp.style.backgroundColor = "#52AA5E";
    tDown.style.backgroundColor = "";
    tDown.classList.add("thumbs-down-hover");

    setTimeout(() => {
        tUp.classList.remove("thumbs-animation");
    }, 500);
}

function thumbs_down_animation() {
    console.log("click");
    tDown.classList.add("thumbs-animation");
    tDown.classList.remove("thumbs-down-hover");
    tDown.style.backgroundColor = "#FE5F55";
    tUp.style.backgroundColor = "";
    tUp.classList.add("thumbs-up-hover");

    setTimeout(() => {
        tDown.classList.remove("thumbs-animation");
    }, 500);
}

function about_button() {
    if (lang % 2) {
        // English
        text.innerText = "About";
    } else {
        // Portugues
        text.innerText = "Sobre";
    }

    info_button.classList.add("thumbs-animation");

    setTimeout(() => {
        info_button.classList.remove("thumbs-animation");
    }, 500);
}

function change_lang() {
    lang = lang + 1;
    if (lang % 2) {
        // English
        text.innerText = enSubtitles[i];
    } else {
        // Portugues
        text.innerText = brSubtitles[i];
    }

    lang_button.classList.add("thumbs-animation");

    setTimeout(() => {
        lang_button.classList.remove("thumbs-animation");
    }, 500);
}

let previous;
let number = 0;
function random_text() {
    previous = number;
    number = [Math.floor(Math.random() * 10)];
    i = 0;
    if (lang % 2) {
        // English
        while (number != i) {
            i++;
        }
        text.innerText = enSubtitles[i];
    } else {
        // Portugues
        while (number != i) {
            i++;
        }
        text.innerText = brSubtitles[i];
    }
}

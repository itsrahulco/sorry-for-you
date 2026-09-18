/* ================================
   OPEN LETTER
================================ */

function openLetter() {

    document.getElementById("hero")
        .classList.add("hidden");

    document.getElementById("letter")
        .classList.remove("hidden");

}


/* ================================
   SHOW QUESTION
================================ */

function showQuestion() {

    document.getElementById("letter")
        .classList.add("hidden");

    document.getElementById("question")
        .classList.remove("hidden");

}


/* ================================
   YES BUTTON
================================ */

function forgive() {

    document.getElementById("question")
        .classList.add("hidden");

    document.getElementById("final")
        .classList.remove("hidden");

    createCelebration();

}


/* ================================
   RUNNING NO BUTTON 😂
================================ */

const noButton =
    document.getElementById("noButton");

noButton.addEventListener(
    "mouseover",
    moveButton
);

noButton.addEventListener(
    "touchstart",
    moveButton
);

function moveButton() {

    const maxX =
        window.innerWidth - 150;

    const maxY =
        window.innerHeight - 100;

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    noButton.style.position =
        "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";
}


/* ================================
   FLOATING HEARTS
================================ */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        ["❤️","💗","💕","💖","💘","💝"]
        [Math.floor(Math.random() * 6)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* Create hearts continuously */

setInterval(
    createHeart,
    500
);


/* ================================
   CELEBRATION
================================ */

function createCelebration() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 50);

    }

}
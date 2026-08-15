// ===============================
// COUNTDOWN
// ===============================

const birthday = new Date("August 25, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthday - now;

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ===============================
// SURPRISE MESSAGE
// ===============================

const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const typingText = document.getElementById("typingText");

const birthdayMessage = `
Happy Birthday, Hasan! ❤️

Today is not just another day.
It is the day someone incredibly special
came into this world.

You are more than just a special person
to me. You are my happiness, my comfort,
my favourite person and my beautiful reason
to smile.

May your life always be filled with happiness,
success, peace and endless love.

I hope every dream in your heart comes true
and every year ahead becomes more beautiful
than the last.

I am really very sorry for everything 
I did that hurt you.Please forgive me.
I never wanted to hurt you, 
and I truly regret my mistakes. ❤️


Thank you for being you.

Happy Birthday, زوجي العزيز. ❤️

Always remember that someone is always
praying for your happiness and cheering
for your success.

I love you. ❤️
`;

button.addEventListener("click", () => {

    message.classList.add("show");

    button.innerHTML = "🤗😘";

    button.disabled = true;

    typeMessage();

    createConfetti();

    // Scroll to message
    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 500);
});


// ===============================
// TYPING EFFECT
// ===============================

function typeMessage() {

    let index = 0;

    typingText.innerHTML = "";

    function type() {

        if (index < birthdayMessage.length) {

            if (birthdayMessage[index] === "\n") {
                typingText.innerHTML += "<br>";
            } else {
                typingText.innerHTML += birthdayMessage[index];
            }

            index++;

            setTimeout(type, 25);
        }
    }

    type();
}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        ["❤️", "💗", "💕", "💖", "💘"][
            Math.floor(Math.random() * 5)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "❤️", "💖", "🎊"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            Math.random() * 30 + "vh";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.zIndex = "20";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(100vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: Math.random() * 3000 + 2000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


// ===============================
// BIRTHDAY MUSIC
// ===============================

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

// Start music when surprise is opened
button.addEventListener("click", () => {

    music.play()
        .then(() => {
            musicPlaying = true;
            musicBtn.innerHTML = "🔊";
        })
        .catch(() => {
            console.log("Music could not start automatically.");
        });

});


// Music button
musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "🎵";

        musicPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML = "🔊";

        musicPlaying = true;
    }
});
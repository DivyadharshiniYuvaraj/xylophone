const keys = document.querySelectorAll(".key");

// keyboard mapping
const keyMap = {
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    a: "A",
    b: "B"
};

// play sound function
function playSound(note) {

    const audio = new Audio(`sounds/${note}.wav`);
    audio.play();

    // visual press effect
    document.querySelectorAll(".key").forEach(k => {
        if (k.dataset.note === note) {
            k.classList.add("active");
            setTimeout(() => k.classList.remove("active"), 150);
        }
    });
}

// mouse click
keys.forEach(key => {
    key.addEventListener("click", () => {
        playSound(key.dataset.note);
    });
});

// keyboard press
document.addEventListener("keydown", (e) => {
    const note = keyMap[e.key.toLowerCase()];
    if (note) {
        playSound(note);
    }
});
const createButton = document.querySelector(".cards-container > button");
const modal = document.querySelector("dialog");
const closeModalButton = document.querySelector("#X");
const submit = document.querySelector("form");
const notecards = document.querySelector(".notecards");
const notecard = document.querySelector(".notecard");
const arrow = document.querySelector(".dropdown img");
const checkboxes = document.querySelector(".checkboxes");
const study = document.querySelector("#study");
const hero = document.querySelector(".hero");
const desc = document.querySelector("#desc");
const title = document.querySelector("#title");

if (hero) {
    hero.addEventListener("click", () => {
        desc.classList.toggle("active");
        title.classList.toggle("hidden");
    })
}

if (createButton && modal) {
    createButton.addEventListener("click", () => {
        modal.show();
    });
}
if (closeModalButton && modal) {
    closeModalButton.addEventListener("click", () => {
        modal.close();
    });
}

let flashcards = [];
let subjects = [];
const addWordButton = () => {
    if (!notecards) return;
    notecards.innerHTML = ``;
    flashcards.forEach(card => {
        const btn = document.createElement("button");
        btn.classList.add("words");
        btn.id = String(card.id);
        btn.textContent = card.word;
        notecards.appendChild(btn);
    })
};

loadNotecards();
addWordButton();
function saveNotecards() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    localStorage.setItem("subjects", JSON.stringify(subjects));
}
function loadNotecards() {
    const cards = localStorage.getItem("flashcards");
    flashcards = cards ? JSON.parse(cards) : [];
    const subject = localStorage.getItem("subjects");
    subjects = subject ? JSON.parse(subject) : [];
}




if (submit) {
    submit.addEventListener("submit", (e) => {
        e.preventDefault();
        let def = document.querySelector("#definition").value || "";
        let word = document.querySelector("#word").value || "";
        let subject = document.querySelector("#subject").value.toLowerCase() || "";
        modal.close();
        const id = Date.now();

        let flashcard = {
            id: id,
            word: word,
            definition: def,
            subject: subject,
            time: 0, 
        };

        flashcards.push(flashcard);
        addWordButton(flashcard.word, id);
        
        if (subject && !subjects.includes(subject)) {
            subjects.push(subject);
        }
        saveNotecards();
    });
}

if (document.querySelector(".dropdown-container")) {
    if (subjects) {
        subjects.forEach(sub => {
            document.querySelector(".checkboxes").innerHTML += `<div class="checkbox-container"><input class="checkbox" type="checkbox" name="${sub}" id="${sub}">
            <label for="${sub}">${sub}</label></div>`;
        })
    }
}


let currentNote = null;
if (notecards && notecard) {
    notecards.addEventListener("click", (e) => {
        if (!e.target.classList.contains("words")) return;
        if(currentNote) {
            currentNote.classList.remove("active");
        }

        let id = e.target.id;
        const selectedCard = flashcards.find(c => c.id === Number(id));
        notecard.innerHTML = `<h1>${selectedCard.word}</h1>
        <p>${selectedCard.definition}</p>`;
        currentNote = e.target;
        currentNote.classList.add("active");
    });
}

if (arrow && checkboxes) {
    arrow.addEventListener("click", () => {
        checkboxes.classList.toggle("active");
        arrow.classList.toggle("active");
    });
};

let i = 0;
let activeSubjects = [];
let activeFlashcards = [];
if(checkboxes) {
    checkboxes.addEventListener("change", () => {
        activeSubjects = [];
        activeFlashcards = [];
        i = 0;
        document.querySelectorAll(".checkboxes input").forEach(box => {
            if(box.checked) {
                activeSubjects.push(box.id);
            }
        });
        activeFlashcards = flashcards.filter((flashcard) => {
            return activeSubjects.includes(flashcard.subject);
        })
        if(activeSubjects.length === 0) {
            document.querySelector(".study-notecard").innerHTML = `<h1>Select a Subject Above to Start Studying</h1>`;
        } else if(activeFlashcards.length === 0) {
            document.querySelector(".study-notecard").innerHTML = `<h1>Create Flashcards to Start Studying</h1>`;
        } else {
            updateNotecard(activeFlashcards[i].word,activeFlashcards[i].definition);
        }
    });
}

const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
if(back) {
    back.addEventListener("click", () => {
        if(i != 0) {
            i -= 1;
            updateNotecard(activeFlashcards[i].word,activeFlashcards[i].definition);
        }
    })
}
if(forward) {
    forward.addEventListener("click", () => {
        if(i != activeFlashcards.length -1) {
            i += 1;
            updateNotecard(activeFlashcards[i].word,activeFlashcards[i].definition);
        }
    })
}

function updateNotecard(word, def) {
    const studyNotecard = document.querySelector(".study-notecard");
    studyNotecard.innerHTML = `<h1>${word}</h1>
    <p>${def}</p>`;
}
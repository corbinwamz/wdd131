export function updateNotecard(word, def) {
    const studyNotecard = document.querySelector(".study-notecard");
    studyNotecard.innerHTML = `<h1>${word}</h1>
    <p>${def}</p>`;
}
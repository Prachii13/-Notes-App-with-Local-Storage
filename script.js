function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const input = document.getElementById("note-input");
  const notes = getNotes();
  if (input.value.trim() !== "") {
    notes.push(input.value);
    saveNotes(notes);
    input.value = "";
    displayNotes();
  }
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

function displayNotes() {
  const notesList = document.getElementById("notes-list");
  const notes = getNotes();
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    notesList.innerHTML += `
      <div class="note">
        ${note}
        <button onclick="deleteNote(${index})">X</button>
      </div>
    `;
  });
}

displayNotes();

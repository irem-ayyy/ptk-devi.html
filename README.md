<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Not Uygulaması</title>
    <style>
        /* CSS stil kuralları */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
        }

        .note-container {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .note {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }

        .note input[type="color"] {
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <h1>Not Uygulaması</h1>
    <div class="note-container">
        <div>
            <label for="noteText">Not Ekle:</label>
            <textarea id="noteText"></textarea>
            <input type="color" id="noteColor">
            <button id="addNote">Ekle</button>
        </div>
        <div>
            <label for="filterText">Notları Filtrele:</label>
            <input type="text" id="filterText">
        </div>
        <div id="noteList">
            <!-- Notlar burada listelenecek -->
        </div>
    </div>

    <script>
        // JavaScript kodları
        const noteText = document.getElementById("noteText");
        const noteColor = document.getElementById("noteColor");
        const addNoteBtn = document.getElementById("addNote");
        const filterText = document.getElementById("filterText");
        const noteList = document.getElementById("noteList");

        // Notları saklamak için bir dizi kullanıyoruz
        let notes = [];

        // Not ekleme işlevi
        function addNote() {
            const text = noteText.value;
            const color = noteColor.value;
            if (text.trim() === "") {
                alert("Lütfen bir not girin.");
                return;
            }
            const note = { text, color };
            notes.push(note);
            displayNotes();
            noteText.value = "";
        }

        // Notları listeleme işlevi
        function displayNotes() {
            noteList.innerHTML = "";
            notes.forEach((note, index) => {
                const div = document.createElement("div");
                div.className = "note";
                div.style.backgroundColor = note.color;
                div.innerHTML = `
                    <span>${note.text}</span>
                    <button onclick="deleteNote(${index})">Sil</button>
                `;
                noteList.appendChild(div);
            });
        }

        // Not silme işlevi
        function deleteNote(index) {
            notes.splice(index, 1);
            displayNotes();
        }

        // Notları filtreleme işlevi
        function filterNotes() {
            const searchText = filterText.value.toLowerCase();
            const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(searchText));
            notes = filteredNotes;
            displayNotes();
        }

        // Ekleme butonu tıklanınca not eklemeyi başlat
        addNoteBtn.addEventListener("click", addNote);

        // Filtreleme input'unun değişimini takip et
        filterText.addEventListener("input", filterNotes);

        // Başlangıçta örnek bir not göster
        notes.push({ text: "Bu bir örnek nottur.", color: "#ffcc00" });
        displayNotes();
    </script>
</body>
</html>

async function getRandomVerse() {
    let response = await fetch(' https://labs.bible.org/api/?passage=random&type=json&formatting=plain');
    let jsonResponse = await response.json();
    let verseJson = jsonResponse[0];
    showVerse(verseJson.bookname,verseJson.chapter, verseJson.verse, verseJson.text)
}

function showVerse(book, chapter, verse, text) {
    console.log(book)
    let textElement = document.getElementById('verse-text');
    let verseElement = document.getElementById('verse');

    let combinedVerse = `${book} ${chapter}, ${verse}`;

    textElement.innerText = text;
    verseElement.innerText = combinedVerse;
}


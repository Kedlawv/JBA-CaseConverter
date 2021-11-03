const textField = document.getElementById("textArea");

// readable event handler
const upperCaseButton = document.getElementById("upper-case");
upperCaseButton.addEventListener("click", toUpperCaseSentence);

function toUpperCaseSentence() {
    textField.value = textField.value.toUpperCase();
}

const properCaseButton = document.getElementById("proper-case");
properCaseButton.addEventListener("click", toProperCase);

function toProperCase() {
    const words = textField.value.split(' ');
    const properWords = words.map(w => w.substr(0,1).toUpperCase() + w.substr(1).toLowerCase())
        .join(' ');
    textField.value = properWords;
}

const sentenceCaseButton = document.getElementById("sentence-case");
sentenceCaseButton.addEventListener("click", toSentenceCase);

function toSentenceCase() {
    const sentences = textField.value.split('. ');
    // const sentencesNoWhiteSpace = sentences.map(s => s.trim());
    const capitalizedSentences = sentences.map(w => w.substr(0,1).toUpperCase()
        + w.substr(1).toLowerCase()).join('. ');
    textField.value = capitalizedSentences;
}

// anonymous function passed as an argument to the event listener
document.getElementById("lower-case").addEventListener("click",
    () => textField.value = textField.value.toLowerCase());

// alternative to setting onClick on the html button element
// const saveTextButton = document.getElementById("save-text-file");
// saveTextButton.addEventListener("click", () => download('text.txt', textField.value));


function download(filename, text){

    let anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(text));
    anchorElement.setAttribute('download', filename);

    anchorElement.style.display = 'none';
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(anchorElement);
}


const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

function changeFontSize(event) {
    spanRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener("input", changeFontSize);


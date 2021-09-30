const inputRef = document.querySelector('#validation-input');


const checkSymbolQuantity = () => {
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        return inputRef.setAttribute('class', 'invalid');
    } 
    inputRef.setAttribute('class', 'valid');
}

inputRef.addEventListener('blur', checkSymbolQuantity);

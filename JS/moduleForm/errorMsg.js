 function displayFieldError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.textContent = message;
}

 function clearFieldErrors() {
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(element => element.textContent = '');
}
export{displayFieldError, clearFieldErrors}
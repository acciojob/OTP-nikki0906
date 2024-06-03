//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key >= 0 && event.key <= 9) {
            codeInputs[index].value = event.key;
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        } else if (event.key === 'Backspace') {
            if (index > 0 && codeInputs[index].value === '') {
                codeInputs[index - 1].value = '';
                codeInputs[index - 1].focus();
            } else {
                codeInputs[index].value = '';
            }
        }
    });
});
const buttons = document.querySelectorAll('.edit-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'note-editor.html';
    });
});
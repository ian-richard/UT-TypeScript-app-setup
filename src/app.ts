const button = document.querySelector('button')!;

// null value check ! or if truthy statement
if (button) {
button.addEventListener('click', () => {
    console.log('Clicked');
});
}
const bodyPage = document.body
const hexBtn = document.getElementById('btn-primary');
const rgbBtn = document.getElementById('btn-secondary');
const stringBtn = document.getElementById('btn-success');
const currentBackground = document.getElementById('background-color');



const colorChange = (color = 'blue') => {
    currentBackground.textContent = color;
    bodyPage.style.backgroundColor = color;
}
 

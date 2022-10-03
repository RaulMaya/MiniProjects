const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');
const counterVal = document.getElementById('counting');


const operation = (instance) => {
    if (instance === 'increase') {
        counterVal.innerText = +counterVal.innerText + 1;
    } else if (instance === 'decrease') {
        counterVal.innerText = +counterVal.innerText - 1;
    } else if (instance === 'reset') {
        counterVal.innerText = 0
    }
    if (+counterVal.innerText > 0) {
        counterVal.classList.add('positive')
        counterVal.classList.remove('negative')
        counterVal.classList.remove('zero')
    } else if (+counterVal.innerText < 0) {
        counterVal.classList.add('negative')
        counterVal.classList.remove('positive')
        counterVal.classList.remove('zero')
    } else {
        counterVal.classList.add('zero')
        counterVal.classList.remove('positive')
        counterVal.classList.remove('negative')
    }
} 

increaseBtn.addEventListener('click', operation.bind(null, 'increase'))
decreaseBtn.addEventListener('click', operation.bind(null, 'decrease'))
resetBtn.addEventListener('click', operation.bind(null, 'reset'))
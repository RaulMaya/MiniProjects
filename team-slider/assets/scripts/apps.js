const frontBtn = document.getElementById('front');
const backBtn = document.getElementById('back');
const myList= document.querySelector('ul');
let listItem = myList.firstElementChild
const listLength = myList.querySelectorAll('li').length
let i = 0;

const listItems = myList.querySelectorAll('li')
const arrayList = Array.from(listItems)

console.log(arrayList);
console.log(arrayList[2]);
console.log(arrayList.indexOf(listItem));

function start() {
    listItem.classList.toggle('visible');
}

function nextSlide() {
    const index = arrayList.indexOf(listItem)
    if (index < listLength-1) {
        listItem.classList.toggle('visible');
        listItem.nextElementSibling.classList.toggle('visible');
        listItem = listItem.nextElementSibling;
        const team = listItem.getElementsByClassName('container')[0]['id']
        switch(team) {
            case 'real-madrid':
                document.body.style.backgroundColor = 'white'
                break;
            case 'barcelona':
                document.body.style.backgroundColor = 'blue'
                break;
        }
        console.log(listItem.getElementsByClassName('container')[0]['id'])
    } else {
        listItem.classList.toggle('visible');
        listItem = myList.firstElementChild;
        listItem.classList.toggle('visible');
        console.log(listItem.getElementsByClassName('container'))
    }

}

function backSlide() {
    const index = arrayList.indexOf(listItem)
    if (index === 0) {
        listItem.classList.toggle('visible');
        listItem = myList.lastElementChild;
        listItem.classList.toggle('visible');
    } else {
        listItem.classList.toggle('visible');
        listItem.previousElementSibling.classList.toggle('visible');
        listItem = listItem.previousElementSibling;
    }

}

start();

frontBtn.addEventListener('click', nextSlide)
backBtn.addEventListener('click', backSlide)
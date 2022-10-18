const sections = document.getElementsByTagName('section');

const addSection = sections[0];
const filterSection = sections[1];
const myList = filterSection.nextElementSibling
console.log(myList)

const addMovieBtn = addSection.querySelector('button');
const favMovieInput = addSection.querySelectorAll('input')[0];
const extraName = addSection.querySelectorAll('input')[1];
const extraValue = addSection.querySelectorAll('input')[2];

const searchBtn = filterSection.querySelector('button');
const filterInput = filterSection.querySelector('input');
const addMovieBtn = document.getElementById('addMovie');
//const addMovieBtn = document.querySelector('header button')

const modalSection = document.getElementById('add-modal');
// const modalSection = document.querySelector('#add-modal')
//const modalSection = document.body.children[0]

const backdropSection = document.getElementById('backdrop');

const cancelAddMovieButton = modalSection.querySelector('.btn--passive')
//const firstModalActions = document.getElementsByClassName('modal__actions')[0]
//const cancelBtn = firstModalActions.children[0]

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = modalSection.querySelectorAll('input');
//const userInputs = modalSection.getElementsByTagName('input');

const entrySection =  document.getElementById('entry-text');

const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive')
let confirmDeletionBtn = cancelDeletionBtn.nextElementSibling;
// const confirmDeletion = deleteMovieModal.querySelector('.btn--success')

const movies = [];


const toggleBackdrop = () => {
    backdropSection.classList.toggle('visible');
}


const updateUI = () => {
    if (movies.length === 0 ) {
        entrySection.style.display = 'block';
    } else {
        entrySection.style.display = 'none';
    }
}

const cancelMovieDeletion = () =>{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovie = movieId => {
    let selectedIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        selectedIndex++;
    }
    movies.splice(selectedIndex, 1);
    const list = document.getElementById('movie-list');

    list.children[selectedIndex].remove();
    //list.removeChild(list.children[selectedIndex]);
    cancelMovieDeletion();
    updateUI();
}

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    // confirmDeletionBtn.removeEventListener('click', deleteMovie.bind(null, movieId)); It doesn't work

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true)); //Hacky
    confirmDeletionBtn = cancelDeletionBtn.nextElementSibling;

    cancelDeletionBtn.removeEventListener('click', cancelMovieDeletion);

    cancelDeletionBtn.addEventListener('click', cancelMovieDeletion);
    confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
    //deleteMovie(movieId);
}

const renderMovie = (id, title, devs, rDate, image, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${image}" alt="${image}">
        </div>
        <div class="movie-element__info">
            <h2><b>Title: </b>${title}</h2>
            <h4><b>Developers: ${devs}</b></h4>
            <h4><b>Release Date: ${rDate}</b></h4>
            <p>${rating}/5 stars</p>
        </div>`;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const list = document.getElementById('movie-list');
    list.appendChild(newMovieElement);
}

const clearInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = "";
    }
}

const closeMovieModal = () => {
    modalSection.classList.remove('visible');
}

const showMovieModal = () => {
    modalSection.classList.add('visible');
    toggleBackdrop();
    clearInputs();
}

const cancelMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearInputs();
}

const addMovieHandler = () => {
    const titleVal = userInputs[0].value;
    const devsVal = userInputs[1].value;
    const releaseVal = userInputs[2].value;
    const imageVal  = userInputs[3].value;
    const ratingVal = userInputs[4].value;

    if (
        titleVal.trim() === '' ||
        imageVal.trim() === '' ||
        ratingVal.trim() === '' ||
        devsVal.trim() === '' ||
        releaseVal.trim() === '' ||
        +ratingVal < 1 ||
        +ratingVal > 10) {
            if (
                +ratingVal < 1 ||
                +ratingVal > 10 &&
                titleVal.trim() === '' ||
                imageVal.trim() === '' ||
                ratingVal.trim() === '' ||
                devsVal.trim() === '' ||
                releaseVal.trim() === ''
                ) {
                    alert('Please fill all the fields.')
                    return;
                } else if (
                    +ratingVal < 1 ||
                    +ratingVal > 5 ) {
                        alert('The rating scale is from 1 to 5.');
                        return;
                        }
        }


    const newMovie = {
        id: Math.random().toString(),
        title: titleVal,
        image: imageVal,
        rating: ratingVal,
        dev: devsVal,
        release: releaseVal
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearInputs();
    renderMovie(newMovie.id, newMovie.title, newMovie.dev, newMovie.release, newMovie.image, newMovie.rating)
    updateUI();
}

const backdropHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
}

addMovieBtn.addEventListener('click', showMovieModal)
cancelAddMovieButton.addEventListener('click', cancelMovieHandler)
backdropSection.addEventListener('click', backdropHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)

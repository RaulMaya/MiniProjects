const sections = document.getElementsByTagName('section');
const playerArr = [];

const addSection = sections[0];
const filterSection = sections[1];
const myList = filterSection.nextElementSibling

// Buttons
const addPlayerBtn = addSection.querySelector('button');
const searchBtn = filterSection.querySelector('button');


const renderPlayer = (filter = '') => {
    myList.innerHTML = ''
    const playersFiltered = !filter
    ? playerArr
    : playerArr.filter(player => player.info.playerNameInput.includes(filter))

    playersFiltered.forEach((player) => {
        const newPlayerElement = document.createElement('li');
        outputText = player.info.playerNameInput + ' | ';
        for (const key  in player.info) {
            if (key !== 'playerNameInput') {
                outputText = outputText + key +': '+player.info[key]
            }
        }
        newPlayerElement.textContent = outputText;
        myList.append(newPlayerElement);
    })

}



const addFunction = () => {
    const playerNameInput = addSection.querySelectorAll('input')[0].value;
    const position = addSection.querySelectorAll('input')[1].value;
    const overall = addSection.querySelectorAll('input')[2].value;
    
    if (
        playerNameInput.trim() === '' ||
        position.trim() === '' ||
        overall.trim() === '') {
            console.log('Please fill all the fields')
            return;
        } else {

            const playerData = {
                info: {
                    playerNameInput,
                    [position]: overall
                },
                id: Math.random()
            }

            playerArr.push(playerData);
            visibilityActivation()
            renderPlayer()
        }
}

const searchFunction = () => {
    const filterInput = filterSection.querySelector('input').value;
    renderPlayer(filterInput)

    
}


const visibilityActivation = () => {
    if (playerArr.length > 0) {
        myList.classList.add('visible')
    } else if (playerArr.length === 0) {
        myList.classList.remove('visible')    
    }
}

addPlayerBtn.addEventListener('click', addFunction);
searchBtn.addEventListener('click', searchFunction);

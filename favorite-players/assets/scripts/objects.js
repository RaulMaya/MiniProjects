const sections = document.getElementsByTagName('section');
const playerArr = [];

const addSection = sections[0];
const filterSection = sections[1];
const myList = filterSection.nextElementSibling

// Buttons
const addPlayerBtn = addSection.querySelector('button');
const searchBtn = filterSection.querySelector('button');


const renderPlayer = () => {
    myList.innerHTML = ''
    playerArr.forEach((player) => {
        const newPlayerElement = document.createElement('li');
        outputText = player.info.playerNameInput + ' | ';
        for (const key  in player.info) {
            if (key != 'playerNameInput') {
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

    const searcheadData = playerArr.find((movie, index, playerArr) => {
        return movie.info.playerNameInput === filterInput;
    })
    console.log(searcheadData)
    const searcheadDataTwo = playerArr.findIndex((movie, index, playerArr) => {
        return movie.info.playerNameInput === filterInput;
    })
    console.log(playerArr[searcheadDataTwo])

    console.log(playerArr.info.includes(filterInput))
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

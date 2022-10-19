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
    : playerArr.filter(player => player.info.playerNameInput.includes(filter));

    visibilityActivation(playersFiltered)

    playersFiltered.forEach((player) => {
        const newPlayerElement = document.createElement('li');
        if ('info' in player) {

        }
        const { info, ...otherProps } =  player;
        // const { playerNameInput: playerName }  = info;
        const { getPlayerName } = player
        let outputText = getPlayerName.call(player) + ' | ';
        // let outputText = getPlayerName.apply(player) + ' | ';
        for (const key  in info) {
            if (key !== 'playerNameInput') { 
                outputText = outputText + key + ': ' + info[key];
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
                id: Math.random(),
                getPlayerName() { // Dont use arrow functions
                    return this.info.playerNameInput.toUpperCase();
                }
            }

            playerArr.push(playerData);
            renderPlayer()
        }
}

const searchFunction = () => {
    const filterInput = filterSection.querySelector('input').value;
    renderPlayer(filterInput)

    
}


const visibilityActivation = (inputArr) => {
    if (inputArr.length > 0) {
        myList.classList.add('visible')
    } else if (inputArr.length === 0) {
        myList.classList.remove('visible')    
    }
}

addPlayerBtn.addEventListener('click', addFunction);
searchBtn.addEventListener('click', searchFunction);

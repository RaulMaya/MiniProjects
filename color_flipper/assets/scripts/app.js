let hexValue;

const hexFunc = () =>{
    const characters ='ABCDEF0123456789';
    let result = '#';
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    colorChange(result);
}

const rgbFunc = () =>{
    let resultArr = [];
    let result = ''
    for (let i = 0; i < 3;) {
        i += 1;
        result = Math.floor(Math.random() * 1000);
        if (result > 255) {
            i -= 1;
        } else {
            resultArr.push(result)
            i = i;
        }
    }
    console.log(resultArr);
    rgbValue = `rgb(${resultArr[0]}, ${resultArr[1]}, ${resultArr[2]})`
    colorChange(rgbValue.toUpperCase());
}

const strFunc = () =>{
    const colors = [
        "red", "blue", "white", "black", "navy", 
        "green", "yellow","gold","lime","crimson","lightgreen",
        "chocolate", "teal","cyan", "Magenta", "Coral",
        "Violet", "aqua", "azure", "olive", "aliceblue", "brown", "cadetblue", "cornflowerblue",
        "chartreuse", "orange", "salmon", "ivory", "indigo", "khaki", "indianred", "hotpink"];

    const random = Math.floor(Math.random() * colors.length);
    console.log(random, colors[random]);
    finalColor = colors[random];
    colorChange(finalColor.toUpperCase());
}

hexFunc()


hexBtn.addEventListener('click', hexFunc);
rgbBtn.addEventListener('click', rgbFunc);
stringBtn.addEventListener('click', strFunc);
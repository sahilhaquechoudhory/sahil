const getColor = () => {
    //HexCodeGenerator
    //To make Hexadecimal code we need to multiply the random numer witn 16777215
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16); //16 stand for hexadecimal code
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    //after clicking s]the code should be copied automatically
    navigator.clipboard.writeText(randomCode);


}
// after an event
document.getElementById("btn").addEventListener('click', getColor);
//initially
getColor();
console.log(window)

window.document.write(`<h1>Hello from Js</h1>`) // Kind of DOM Manipulation


function changeBgColor(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor
    document.body.style.color = textColor
}

const themeModeButton = document.getElementById('theme-mode-button');
console.log(themeModeButton);
themeModeButton.innerText='Dark Mode'
themeModeButton.addEventListener('click', function () {
    if (themeModeButton.innerText === 'Dark Mode') {
        themeModeButton.innerText='Light Mode'
        changeBgColor('black', 'white');
    } else {
        changeBgColor('white', 'black');
        themeModeButton.innerText = 'Dark Mode'
    }
    
})
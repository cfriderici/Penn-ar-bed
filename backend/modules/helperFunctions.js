const showHelloWorldInConsole = () => {
    console.log("Hello World in Konsole")
}

const showHelloWorldInConsole2 = () => {
    console.log("Hello World in Konsole 2")
}

// nur eine Funktion exportieren
// module.exports = showHelloWorldInConsole;

// mehrere exportieren
module.exports = {
    showHelloWorldInConsole,
    showHelloWorldInConsole2
}
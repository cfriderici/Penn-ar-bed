// Wofür waren diese beiden noch mal nötig
const { promisify } = require('util');
const fs = require('fs');




// was macht diese Funktion 
const writeFilePromise = promisify(fs.writeFile);
const asyncSaveFile = async (fileName, fileBuffer) => {
	try {
		await writeFilePromise(fileName, fileBuffer);
		return "file successfully written";
	} catch (error) {
		return error;
	};
};

module.exports = asyncSaveFile;





// BEISPIEL 

// const showHelloWorldInConsole = () => {
//     console.log("Hello World in Konsole")
// }
// const showHelloWorldInConsole2 = () => {
//     console.log("Hello World in Konsole 2")
// }


// nur eine Funktion exportieren
// module.exports = showHelloWorldInConsole;

// mehrere exportieren
// module.exports = {
//     showHelloWorldInConsole,
//     showHelloWorldInConsole2
// }
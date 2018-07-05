//Twój kod

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
	if (err===null) {
		const dataConverted = JSON.parse(data);
		let sumData = 0;
		for (let i = 0; i < dataConverted.length; i++) {
			sumData += dataConverted[i]
		}

		fs.writeFile('./data/zadanie01/sum.txt', sumData, err => {
			if (err===null) {
				console.log('Zapisano poprawnie!');
			} else {
				console.log('Błąd podczas zapisu pliku', err)
			}
		})
	} else {
		console.log('błąd podczas odczytu pliku', err)
	}
});
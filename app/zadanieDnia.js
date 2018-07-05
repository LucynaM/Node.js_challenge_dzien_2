//Twój kod

const fs = require('fs');
const file = process.argv[2];

console.log(process.argv[2]);

fs.readFile(file, 'utf8', (err, data) => {
	if (err===null) {
		
		console.log('Poprawnie odczytano plik: ' + file);
		
		let newData = '';
		let j = 0;
		for (let i = 0; i < data.length; i++) {
			if (/[a-zA-Z]/.test(data[i])) {
				if (j % 2 === 0) {
					newData += data[i].toUpperCase();
				} else {
					newData += data[i].toLowerCase();
				}
				j++;
			} else {
				newData += data[i];
			}
		}
		fs.writeFile(file, newData, err => {
			if (err===null) {
				console.log('Zapisano poprawnie!');
			} else {
				console.log('Błąd podczas zapisu pliku', err)
			}
		})
	} else {
		console.log('Błąd podczas odczytu pliku!', err);
	}
});

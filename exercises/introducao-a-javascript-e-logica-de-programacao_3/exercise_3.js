//construir um triangulo invertido.

let n = 5;


for (let index = 0; index < n; index += 1) {
		let spaces = '';
				for (let j = 1; j < n - index; j += 1) {
					spaces = spaces + ' ';
				}
				for (let j = 0; j < index + 1; j += 1) {
					let symbol = '*';
					spaces += symbol;
				}	
console.log (spaces);		
}
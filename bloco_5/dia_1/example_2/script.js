
//1- Adicione ao seu HTML uma classe com alguns estilos para 
//os seus dois parágrafos.                                        
	

/* 2- Recupere os seus parágrafos via código JavaScript , usando 
a função getElementsByClassName; */

variable = document.getElementsByClassName('style');

for (let index = 0; index < variable.length; index += 1) {
	console.log(variable[index]);
}
 
//3- Altere algum estilo do primeiro deles.                

let styles = document.getElementsByClassName('style');

for (let index = 0; index < styles.length; index += 1) {
	styles[index].style.color = 'red';
}
 
//3- Recupere o subtítulo pela tag.                          

console.log(document.getElementsByTagName('h4'));

/* 
No exemplo pilotos de F1 atual, podemos usar uma classe dentro de outra
para especificar aquela que queremos (a filha), por exemplo
document.querySelector('.pilotos-sem-titulo .piloto-f1-atual');
Nesse caso, ele vai retornar o resultado da primeira linha que contem a
classe piloto-f1-atual dentro de 'pilotos-sem-titulo'. Lembrando que o 
querySelector só retorna a primeira ocorrencia que ele encontra
*/
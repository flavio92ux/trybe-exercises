document.querySelector('.style'); //seleciona classe 'style'
document.querySelector('p'); //seleciona todos os paragrafos
document.querySelector('.second-paragraph p'); //Seleciona parágrafo em específico

/* No exemplo pilotos de F1 atual, podemos usar uma classe dentro de outra
para especificar aquela que queremos (a filha), por exemplo */
document.querySelector('.pilotos-sem-titulo .piloto-f1-atual');
/* Nesse caso, ele vai retornar o resultado da primeira linha que contem a
classe piloto-f1-atual dentro de 'pilotos-sem-titulo'. Lembrando que o 
querySelector só retorna a primeira ocorrencia que ele encontra */

//O querySelectorAll seleciona toda a node list envolvidas com a tag p
document.querySelectorAll('p')[0].innerText = 'Lenda';

document.querySelectorAll('.style').length //recebe o comprimento 

//Também é possível colocar uma classe dentro de outra assim como no css

/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


function writeParagraph() {
  document.getElementsByTagName('p')[0].innerText = 'Daqui a dois anos, pretendo estar trabalhando na área de programação, sendo um pessoa muito bem sucedida';
  document.getElementsByTagName('p')[1].innerText = 'no que faz, entusiasmado e feliz. Pretendo também namorar e planejar uma família. Ter muito orgulho de mim'
  document.getElementsByTagName('p')[2].innerText = 'mesmo. Conseguir trilhar um bom caminho para a independencia financeira.'
}

writeParagraph();

function changeStyleBackground() { 
	document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

changeStyleBackground();

function changeStyleBackgroundCenter() {
	document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

changeStyleBackgroundCenter();

function fixTitle() {
	document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
}

fixTitle();

function toUpperCase () {
	let paragraph = document.getElementsByTagName('p'); 

	for (let index = 0; index < paragraph.length; index += 1) {
			paragraph[index].style.textTransform = 'uppercase';
	}
}

toUpperCase();

function showContentInConsole() {
	let paragraph = document.getElementsByTagName('p');

	for (let index = 0; index < paragraph.length; index += 1) {
    console.log(paragraph[index].innerText);
	}
}

showContentInConsole();
//1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
const elementH1 = document.createElement('h1');
elementH1.innerHTML= 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);

//2- Adicione a tag div com a classe main-content como filho da tag body;
const elementDivMain = document.createElement('div');
elementDivMain.className = 'main-content';
document.body.appendChild(elementDivMain);

//3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const elementDivCenter = document.createElement('div');
elementDivCenter.className = 'center-content';
elementDivMain.appendChild(elementDivCenter);

//4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const elementP = document.createElement('p');
elementDivCenter.appendChild(elementP);
elementP.innerText = 'Paragrafo de exemplo';

//5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const elementDivLeft = document.createElement('div');
elementDivLeft.className = 'left-content';
elementDivMain.appendChild(elementDivLeft);

//6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const elementDivRight = document.createElement('div');
elementDivRight.className = 'right-content';
elementDivMain.appendChild(elementDivRight);

/* 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e 
   classe small-image . Esse elemento deve ser filho do div criado no passo 5; */
const elementImg = document.createElement('img');
elementImg.src = 'https://picsum.photos/200';
elementImg.className = 'small-image';
elementDivLeft.appendChild(elementImg);

/* 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores 
      da lista. Essa lista deve ser filha do div criado no passo 6; */

const noOrderList = document.createElement('ul');
elementDivRight.appendChild(noOrderList);

const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index = 0; index < arrayNumbers.length; index += 1) {
    let itemList = document.createElement('li');
    itemList.innerText = arrayNumbers[index];
    noOrderList.appendChild(itemList);
}

//9- Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.

for (let index = 0; index < 3; index += 1){
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    elementDivMain.appendChild(elementH3);
}

// Segunda Parte

//1- Adicione a classe title na tag h1 criada;
elementH1.className = 'title';

//2- Adicione a classe description nas 3 tags h3 criadas;

const classH3 = document.getElementsByTagName('h3');

for (let index = 0; index <3; index += 1) {
    classH3[index].className = 'description';
}

//3- Remova o div criado no passo 5 (aquele que possui a classe left-content ). 
//   Utilize a função .removeChild() ;

const RemoveLeftContent = document.getElementsByClassName('left-content')[0];
elementDivMain.removeChild(RemoveLeftContent);

//4- Centralize o div criado no passo 6 (aquele que possui a classe right-content ). 
//   Dica: para centralizar, basta configurar o margin-right: auto do div ;

const takeDivRight = document.getElementsByClassName('right-content')[0];
takeDivRight.style.marginRight = 'auto';

//5- Troque a cor de fundo do elemento pai da div criada no passo 3 
//   (aquela que possui a classe center-content ) para a cor verde;

const changeColorCenter = document.querySelector('.center-content').parentNode;
changeColorCenter.style.backgroundColor = 'green';

//6- Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

noOrderList.lastChild.remove();
noOrderList.lastChild.remove();










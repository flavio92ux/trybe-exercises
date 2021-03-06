
/*
Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho. 
*/

let ingredientItems = [
    'primeiro item',
    'segundo item',
    'terceiro item',
    'quarto item',
    'quinto item'
];

let ingredientList = document.querySelector('.minhaLista');

for (let index = 0; index < ingredientItems.length; index += 1) {
    let itens = ingredientItems[index];

    let itemListCreator = document.createElement('li');
    itemListCreator.innerText = itens;

    ingredientList.appendChild(itemListCreator);
}
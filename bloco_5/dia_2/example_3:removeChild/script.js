
/*
Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho. 
*/

let ingredientItems = [
    'primeiro item',
    'segundo item',
    'terceiro',
    'quarto item',
    'quinto item'
];

let ingredientList = document.querySelector('.minhaLista');

for (let index = 0; index < ingredientItems.length; index += 1) {
    let itens = ingredientItems[index];

    let itemListCreator = document.createElement('li');
    itemListCreator.innerText = itens;
    itemListCreator.className = 'my_itens';

    ingredientList.appendChild(itemListCreator);
}

//Remover terceiro item;

let myListCreated = document.querySelectorAll('.my_itens');
console.log(myListCreated);

for (let index = 0; index < myListCreated.length; index += 1) {
    let item = myListCreated[index];

    if (item.innerText.includes('terceiro')) {
        ingredientList.removeChild(item);
    }
}
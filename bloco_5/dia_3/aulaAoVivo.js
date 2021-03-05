window.onload = magicFunction; 

//Quando a página for executada completamente, será chamada a função magicFunction
//obs.: função sem parenteses no final é só uma associação a função, não executa.

function magicFunction() {
    console.log('Xablau');
}

console.log(window.onload); //mostra no console que a função windows.onload foi associada a magicFunction


//FUNÇÃO ANÔNIMA

windows.onload = function (){
    console.log('Xablau');         //Outra forma de executar o comando acima
}




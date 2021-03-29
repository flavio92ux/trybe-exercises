//Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma 
//string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//Exemplo:
//String determinada: "Tryber x aqui!"
//Parâmetro: "Bebeto"
//Retorno: "Tryber Bebeto aqui!"

const toggleX = (myPhrase, myString) => {
  let newPhrase = '';

  for (let index = 0; index < myPhrase.length; index += 1) {
    if (myPhrase[index] === 'x') {
      newPhrase += myString;
    } else {
      newPhrase += myPhrase[index];
    }
  }
  console.log(newPhrase);
}

toggleX('ola x', 'ricardo');
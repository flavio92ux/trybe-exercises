//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

/* palavra 
   0123456
 
p[0] = p p[6] = a  arara
p[1] = a p[5] = r       
p[2] = l p[4] = v             
p[3] = a p[3] = a
 
*/

function verificaPalindrome(word) {
    let size = word.length;

    for (index = 0; index <= size/2; index += 1){
        if (word[index] != word[size - index - 1]) {
            console.log('não foi'); 
            return 0;
        }
    }
    return console.log('Foi');
}

console.log(verificaPalindrome('arara'));




var paragraph = document.getElementById("paragraph");
    paragraph.style.color = "green";


/* 1- Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo 
   para o nome do seu filme favorito. */

document.getElementById("page-title").innerText = 'Titanic'

/* 2- Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. */

document.getElementById('second-paragraph').innerText = 'Um filme muito bom que eu amo de paixão!'

/* 3- Por fim, recupere o subtítulo e altere-o também. */ 

document.getElementById('subtitle').innerText = 'Leonardo Dicaprio'

/* 
document: guarda toda estrutura do html
    document.getElementById("page-title").innerHTML - retorna toda o conteúdo da linha que contem o id page-title inclusive tags dentro da tag principal
    document.getElementById("page-title").innerText - retorna toda o conteúdo da linha que contem o id page-title excluindo tags dentro da tag principal

*/

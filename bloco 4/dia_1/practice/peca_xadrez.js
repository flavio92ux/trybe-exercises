let peca = "bispo";

switch (peca) {
    case "cavalo":
        console.log("L");
        break;
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "peao":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.");
        break;
default:
        console.log ("Peça inválida");     
}


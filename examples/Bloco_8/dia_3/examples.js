//Lista de Pedidos
let pedidos = [
  {'id': 420, 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão', 'preco': 100 },
  {'id': 152, 'nome':'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja', 'preco': 59 },
  {'id': 29, 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva', 'preco': 33 },
  {'id': 33, 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante', 'preco': 79 },
  {'id': 55, 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante', 'preco': 47 }
  ];
  
  console.log("Iterador Map") 
  console.log("==============================================================================================")

  pedidos.map( ( pedido ) => {
    if(pedido.alimento == 'Coxinha') {
    return pedido.alimento = 'Não temos no momento';
    }
    
  });
  
  console.log(pedidos)

  console.log("Iterador forEach") 
  console.log("==============================================================================================")

  pedidos.forEach( ( pedido, index ) => {
  let { nome, alimento, bebida } = pedido;
  console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}.`);
  })

  console.log("Iterador filter")
  console.log("==============================================================================================")

const filter = pedidos.filter( ( pedido ) => pedido.bebida == 'Refrigerante');

console.log(filter);

console.log("Iterador find")
console.log("==============================================================================================")

let find = pedidos.find( ( pedido ) => {

  return pedido.id == 420
  
  });
  
console.log(find)

console.log("Iterador every")
console.log("==============================================================================================")

let every = pedidos.every( ( pedido ) => {

  let { bebida } = pedido
  return bebida == "Refrigerante";
  
  });
  
  console.log(every)

console.log("Iterador some")
console.log("==============================================================================================")

let some = pedidos.some( ( pedido ) => {

  let { alimento } = pedido
  return alimento == "Pizza";
  
  });
  
  console.log(some) // true

  console.log("Iterador reduce")
  console.log("==============================================================================================")

let reduce = pedidos.reduce( ( total, pedido ) => {
  let { preco } = pedido
  return total + preco;
},0);

console.log(reduce) // total = 318
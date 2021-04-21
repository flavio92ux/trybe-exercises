const hydrate = (str) => {
  const olaMundo = str.split('');
  let num = 0;

  olaMundo.forEach(element => {
    if (parseInt(element)) {
      num += parseInt(element);
    } 
  });

 if (num === 1) return `${num} copo de água`;
 return `${num} copos de água`;
}

module.exports = hydrate;
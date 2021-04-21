const techList = (lists, theName) => {
  if (!lists || lists.length === 0) return 'Vazio!';
  
  let myObj = [];
  const myArray = lists.sort();

  myArray.forEach((item, index) => {
    return myObj[index] = {
      tech: item,
      name: theName
    }
  });
 
  return myObj;
}

module.exports = techList;


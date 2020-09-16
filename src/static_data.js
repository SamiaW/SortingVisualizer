
const code = ` Bubble Sort  
  for (let index = 0; index < tempArray.length; index++) {
    for (let i = 0; i < tempArray.length - index; i++) {
     if (tempArray[i] > tempArray[i + 1]) {
         let temp = tempArray[i];
         tempArray[i] = tempArray[i + 1];
         tempArray[i + 1] = temp;
         console.log(tempArray);
         await sleep(900);
      }
    }
} `;


export default code;

const notaPrimeiroBi = 8;
const notaSegundoBi = 8;
const notaTerceiroBi = 5;

let total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi) / 3;
if (total >= 7) {
  total += total * 0.1;
}
console.log(total);

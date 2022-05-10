function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var pcNumer = [];
var userNum = [];
var check = true;
let level = 0;

do{

var choseLeveL = Number(prompt("inserisci il livello di gioco da 1 a 3"))

}while(choseLeveL > 3 || choseLeveL < 1);

if(choseLeveL == 1){
  level = 100;
}
else if(choseLeveL == 2){
  level = 80;
}
else{
  level = 60;
}

while (pcNumer.length < 16) {
    var pcGenerateNumber = getRndInteger(1, level);
      if(pcNumer.includes(pcGenerateNumber)){
        do{
          pcGenerateNumber = Math.floor(Math.random() * (level + 1));
        }while(pcNumer.includes(pcGenerateNumber));
        pcNumer.push(pcGenerateNumber);
      }
      else {
      pcNumer.push(pcGenerateNumber);
    }
  }


console.log(pcNumer);

while (userNum.length < 7 && check == true){
  do{

    var userNumber = Number(prompt("Inserisci un numero tra 0 e 100"))

  }while(userNumber >= level || userNumber <= 0);

      if(userNum.includes(userNumber)){
        do{
          userNumber = Number(prompt("Hai inserito un numero già inserito, riprova"));
        }while(userNum.includes(userNumber));
        console.log(userNumber);
        userNum.push(userNumber);
      }
      else if (pcNumer.includes(userNumber)) {
        console.log("numero vietato, hai perso");
        check = false;
      }
      else {
        console.log(userNumber);
        userNum.push(userNumber);
      }
};

console.log(`Il tuo punteggio è ${userNum.length}`);
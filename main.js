function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var pcNumer = [];
var userNum = [];

for(let i = 0; i<16; i++){
    var pcGenerateNumber = getRndInteger(1, 100);
      if(pcNumer.includes(pcGenerateNumber)){
        do{
          pcGenerateNumber = Math.floor(Math.random() * 101);
        }while(pcNumer.includes(pcGenerateNumber));
        pcNumer.push(pcGenerateNumber);
      }
      else {
      pcNumer.push(pcGenerateNumber);
    }
  }


console.log(pcNumer);

for(let i = 0; i<3; i++){
  var userNumber = Number(prompt("Inserisci un numero"));
      if(userNum.includes(userNumber)){
        do{
          userNumber = Number(prompt("Hai inserito un numero già inserito, riprova"));
        }while(userNum.includes(userNumber));
        userNum.push(userNumber);
        console.log(userNumber);
      }
      else if (pcNumer.includes(userNumber)) {
        console.log("numero vietato, hai perso");
        break;
      }
      else if(i < 2){
        userNum.push(userNumber);
        console.log(userNumber);
      }
      else{
        console.log(userNumber + " " + "Hai vinto")
      }
      userNum.push(userNumber);
};
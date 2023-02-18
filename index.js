let NQuestion;
//modifiez
let fr = ["bonjour","rouge","vert","marron","glace","garçon","fille","bleu","blanc"];
let it = ["buongiorno","rosso","verde","marrone","gelato","ragazzo","ragazza","blu","bianco"];
//modifiez
let aleat = 0;
let DejaFait = []
let SomOk = 0;

for (let i = 0; i <= (2*fr.length -1) ; i++){
  DejaFait[i] = 0;
  }


demander();
function demander() {
  NQuestion = prompt("Combien de question");
  NQuestion = parseInt(NQuestion);
  
  if (NQuestion == 0){
    RepeteJTV();
  }else if(NQuestion > ((fr.length) * 2) || isNaN(NQuestion) || NQuestion < 1  ){
    alert("Nombre de question Invalible (il doit être entre 1 et "+((fr.length) * 2)+")");
    demander();
  } else {
    RepeteNormal();
  }
}

function RepeteNormal(){
  for (let i = 0; i < (NQuestion) ; i++){
    do {
      aleat = Math.floor(Math.random() * (2*fr.length + 1) );
      } while (DejaFait[aleat] != 0);
   
        console.log("aleat ok = " + aleat);

    if (aleat<fr.length) {
      if(prompt("Comment dit-on en Italien "+fr[aleat]) === it[aleat] ){
        alert("oui"); 
        DejaFait[aleat]= 1;
        SomOk ++;
      }else{
        alert("non c'est " +it[aleat]);
      }
    }else{
      if(prompt("Comment dit-on en Français "+it[aleat-fr.length]) === fr[aleat-fr.length] ){
        alert("oui"); 
        DejaFait[aleat]= 1;
        SomOk ++;
      }else{
        alert("non c'est " +fr[aleat-fr.length]);
      }
    }
 
  console.log("DejaFait = " + DejaFait);
  }
  alert(Math.round(SomOk * 20 / NQuestion) + " / 20");
}  


function RepeteJTV(){
  do{
    do {
      aleat = Math.floor(Math.random() * (2*fr.length + 1) );
      } while (DejaFait[aleat] != 0);
   
        console.log("aleat ok = " + aleat);

    if (aleat<fr.length) {
      if(prompt("Comment dit-on en Italien "+fr[aleat]) === it[aleat] ){
        alert("oui"); 
        DejaFait[aleat]= 1;
        SomOk ++;
      }else{
        alert("non c'est " +it[aleat]);
      }
    }else{
      if(prompt("Comment dit-on en Français "+it[aleat-fr.length]) === fr[aleat-fr.length] ){
        alert("oui"); 
        DejaFait[aleat]= 1;
        SomOk ++;
      }else{
        alert("non c'est " +fr[aleat-fr.length]);
      }
    }
 
  console.log("DejaFait = " + DejaFait);
  console.log("SomfOk = " + SomOk);
  console.log("fr.length = " + fr.length);
  }while(SomOk != fr.length * 2)
  alert("Bravo");
}  


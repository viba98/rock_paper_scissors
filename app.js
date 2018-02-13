var user;
var comp;
var type;
var points=0;
var cPoints = 0;
function rocknroll(){
  console.log('0');
  user=0;
  reset();
  rules();
}

function paper(){
  user=1;
  reset();
  rules();
}

function scissors(){
  user=2;
  reset();
  rules();
}

function reset(){
  comp = Math.floor(Math.random()*3);
  console.log(comp);
  switch (comp) {
    case 0: type="rock";
    break;
    case 1: type="paper";
    break;
    case 2: type="scissors";
      break;
  }
}
//var user = prompt('0,1,2,3');

function rules(){
  var  cond=[0,1,2,0]
  if(cond[user]===cond[comp]){
    console.log('tie');
    document.getElementById('p1').innerHTML = "Computer played " + type + ". It's a tie! Play Again?";
    document.getElementById('p2').innerHTML = "score: You " + points + " Computer " + cPoints;
  }
  else if(cond[user]===cond[comp+1]){
    console.log('win');
    points++;
    document.getElementById('p1').innerHTML = "Computer played " + type + ". You win!";
    document.getElementById('p2').innerHTML = "score: You " + points + " Computer " + cPoints;
  }
  else{
    console.log('lose');
    cPoints++;
    document.getElementById('p1').innerHTML = "Computer played " + type + ". You lose!";
    document.getElementById('p2').innerHTML = "score: You " + points + " Computer " + cPoints;
  }
}

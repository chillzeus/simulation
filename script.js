//an all new BASEBALL SIMULATOR because it's easier than basketball

let balls = 0;
let strikes = 0;

let player1 = [
	{        
    name: "Isaac Fiedler",
    handed: "right",
    battingrating: 1.2,
    strength: 1.5
	}
]

let pitcher = [
  {
    name: "Bizarro Isaac",
    handed: "left",
    pitchingrating: 1.4,
    pitchspeed: 1.7
  }
]

//will need a hit is true variable
let probability = 12;
let homeRunProbability = null;

let randomNumber = null;
let homeRun = null;
let hit = false;

function atBat() {
  //enclose this all in a for loop or something

  //sees who is the "better player"
  if(pitcher[0].pitchingrating > player1[0].battingrating) {
    probability += 5;
  } 
  if(pitcher[0].pitchingrating < player1[0].battingrating) {
    probability += -2;
  }
  if(pitcher[0].handed !== player1[0].handed) {
    probability += 1;
  }

  //does the probability
  randomNumber = Math.trunc(Math.random() * (probability - 0) + 0);
  if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3) {
    console.log("hit")
    hit = true;
  } 
  if (randomNumber == 4 || randomNumber == 5 || randomNumber == 6) {
    console.log("ball")
  } 
  if (randomNumber == 7) {
    if (player1[0].strength >= 1.5) {
      homeRun = 2;
    } 
    else {
      homeRun = 4;
    }
    homeRun = Math.trunc(Math.random() * (homeRunProbability - 0) + 0); 
    if (homeRun == 1) {
      console.log("home run")
    }
  }
}

atBat()
//for testing
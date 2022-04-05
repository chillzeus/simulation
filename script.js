//an all new BASEBALL SIMULATOR because it's easier than basketball

let balls = 0;
let strikes = 0;

let player1 = [
	{        
    name: "Isaac Fiedler",
    handed: "right",
    battingrating: 1.2,
    strength: 1.5,
    hits: 0
	}
]

let pitcher = [
  {
    name: "Bizarro Isaac",
    handed: "left",
    pitchingrating: 1.4,
    pitchspeed: 1.7,
    exhaustion: 1,
    endurance: 55
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
    probability += -1;
  } if (pitcher[0].exhaustion == 2) {
    probability += -1;
  } if (pitcher[0].exhaustion == 3) {
    probability += -2;
  }

  // if strikes and stuff
  if (strikes < 3 || balls < 4) { 
    randomNumber = Math.trunc(Math.random() * (probability - 0) + 0);
    if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3) {
      console.log("hit")
      hit = true;
    } 
    if (randomNumber == 4 || randomNumber == 5 || randomNumber == 6) {
      console.log("ball")
    } 
    //home run calculations
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
    if (randomNumber > 7) {
      console.log("strike")
    }
  }
}

atBat()
//for testing
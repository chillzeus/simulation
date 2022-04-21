// 0.0.7.3 Pre Alpha

let balls = 0;
let strikes = 0;

let firstbase = false;
let secondbase = false;
let thirdbase = false;

let probability = 20;
let hitType = 100;

let randomNumber = null;
let randomHit = null;
let secondary = null;
let inPlay = false;

let strikeout = 0;
let walk = 0;
let single = 0;
let double = 0;
let triple = 0;
let homeRun = 0;
let out = 0;
let atBats = 0;

//player[i].etc USE FOR LOOP!

const player1 = [
	{
    name: "Isaac Fiedler",
    handed: "right",
    battingrating: 1.2,
    strength: 1.5,
    hits: 0
	}
]

const pitcher = [
  {
    name: "Bizarro Isaac",
    handed: "left",
    pitchingrating: 1.4,
    pitchspeed: 1.7,
    exhaustion: 1,
    endurance: 55
  }
]

function atBat() {
  atBats += 1;
  inPlay = false;
  //sees who is the "better player"
  probability = 20;
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
  while (inPlay == false) {
    randomNumber = Math.trunc(Math.random() * (probability - 0) + 0);
    if (randomNumber <= 7) {
      inPlay = true;
    } 
    if (randomNumber >= 8 && randomNumber <= 16) {
      balls += 1;
    }
    if (randomNumber >= 17) {
      strikes += 1;
    }

    //check if walk or strikeout 
    if (balls == 4) {
      balls = 0;
      strikes = 0;
      walk += 1;
      atBat();
    } if (strikes == 3) {
      balls = 0;
      strikes = 0;
      strikeout += 1;
    }
  }

  //the ball is hit into play
  if (inPlay) {
    if (player1[0].strength > 1 && player1[0].strength < 1.5) {
      hitType += -4;
    } if (player1[0].strength > 1.5) {
      hitType += -6;
    }

    randomHit = Math.trunc(Math.random() * hitType - 0) + 0;

    if (randomHit <= 40) {
      secondary = Math.trunc(Math.random() * 100 - 0) + 0;
      if (secondary <= 60) {
          single += 1;
        } if (secondary > 60 && secondary <= 90) {
          double += 1;
        } if (secondary > 90 && secondary <= 95) {
          homeRun += 1;
        } if (secondary > 95 && secondary <= 100) {
          triple += 1;
        }
      }
    }
    if (randomHit > 40) {
      secondary = Math.trunc(Math.random() * hitType - 0) + 0;
      if (secondary <= 50) {
        out += 1;
      } if (secondary > 50) {
        out += 1;
      }
    }
} 

for (let i = 0; i < 300; i++) {
  atBat()
}

console.log(single, double, triple, homeRun, strikeout, walk)
console.log(atBats)
//for testing n   
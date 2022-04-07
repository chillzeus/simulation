// 0.0.2 Pre Alpha

let balls = 0;
let strikes = 0;

let firstbase = false;
let secondbase = false;
let thirdbase = false;

let probability = 25;
let hitType = 100;

let randomNumber = null;
let randomHit = null;
let inPlay = false;

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
  if (balls < 4 && strikes < 3) {
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
      if (randomNumber <= 6) {
        console.log("hit")
        inPlay = true;
      } 
      if (randomNumber >= 7 && randomNumber <= 17) {
        console.log("ball")
        balls += 1;
      }
      if (randomNumber >= 18) {
        console.log("strike")
        strikes += 1;
      }

      if (inPlay) {
        if (player1[0].strength > 1 && player1[0].strenght < 1.5) {
          hitType += -3;
        } if (player1[0].strength > 1.5) {
          hitType += -4;
        }

        randomHit = Math.trunc(Math.random() * hitType - 0) + 0;

        if (randomHit <= 30) {
          randomHit = Math.trunc(Math.random() * hitType - 0) + 0;
          if (randomHit <= 60) {
              console.log("single")
            } if (randomHit > 60 && randomHit <= 80) {
              console.log("double")
            } if (randomHit == 9) {
              console.log("home run")
            } if (randomHit == 10 || randomHit == 11) {
              console.log("double")
            } if (randomHit == 12) {
              console.log("triple")
            } if (randomHit == 13) {
              console.log("home run")
            } if (randomHit > 13) {
              console.log("ground out")
            }
        }
      }
    }
  }
}

atBat()
//for testing
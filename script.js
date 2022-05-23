// 0.0.9
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
let nextplay = false;
let atBats = 0;

//player[i].etc USE FOR LOOP!
let i = 0;

const team1 = [
  {
  "runs": 0,
    "players": [
    {
        "name": "Soren Fiedler",
        "handed": "right",
        "battingrating": 1.2,
        "strength": 1.4,
        "hits": 0
    },
    {
        "name": "Isaac Fiedler",
        "handed": "right",
        "battingrating": 1.4,
        "strength": 1.5,
        "hits": 0
    },
    {
        "name": "Zeus the Frog",
        "handed": "left",
        "battingrating": 1.5,
        "strength": 0.6,
        "hits": 0
    },
    {
        "name": "Michael Fazio",
        "handed": "right",
        "battingrating": 1.7,
        "strength": 1.7,
        "hits": 0
    }
    ],
    "pitchers": [ 
    {
      "name": "Selwyn Samuel",
      "handed": "right",
      "pitchingrating": 1.6,
      "exhaustion": 1,
      "pitchspeed": 2
    },
    {
      "name": "Preston Sinkovits",
      "handed": "left",
      "pitchingrating": 1.4,
      "exhaustion": 1,
      "pitchspeed": 4
    },
    {
      "name": "Rosemary Fiedler",
      "handed": "dual",
      "pitchingrating": 1.2,
      "exhaustion": 1,
      "pitchspeed": 2
    }
    ],
  }
]

const pitcher = [
  {
    name: "Bizarro Isaac",
    handed: "left",
    pitchingrating: 1.4,
    exhaustion: 1,
    pitchspeed: 3
  }
]

function atBat() {
  if (nextplay) {
    if (i < 3) {
      nextplay = false;
      i += 1;
    }
    if (i == 3) {
      nextplay = false;
      i = 0;
    }
  }
  atBats += 1;
  inPlay = false;
  //sees who is the "better player"
  probability = 22;
  if(pitcher[0].pitchingrating > team1[0].players[i].battingrating) {
    probability += 5;
  }
  if(pitcher[0].pitchingrating < team1[0].players[i].battingrating) {
    probability += -1;
  }

  if(pitcher[0].handed !== team1[0].players[i].handed) {
    probability += -1;
  } if (pitcher[0].exhaustion == 2) {
    probability += -1;
  } if (pitcher[0].exhaustion == 3) {
    probability += -2;
  }

  if (pitcher[0].pitchspeed == 1) {
    probability += -1;
  }
  if (pitcher[0].pitchspeed == 3) {
    probability += 2;
  }
  if (pitcher[0].pitchspeed == 4) {
    probability += 3;
  }

  if (pitcher[0].handed == "dual") {
    probability += 5;
  }
  if (team1[0].players[i].handed == "dual") {
    probability += -2;
  }

  // if strikes and stuff
  while (inPlay == false) {
    randomNumber = Math.trunc(Math.random() * (probability - 0) + 0);
    if (randomNumber <= 7) {
      inPlay = true;
    } 
    if (randomNumber >= 8 && randomNumber <= 14) {
      balls += 1;
    }
    if (randomNumber >= 15) {
      strikes += 1;
    }

    //check if walk or strikeout 
    if (balls == 4) {
      balls = 0;
      strikes = 0;
      walk += 1;
      nextplay = true;
      atBat();
    } if (strikes == 3) {
      balls = 0;
      strikes = 0;
      strikeout += 1;
      nextplay = true;
    }
  }

  //the ball is hit into play
  if (inPlay) {
    if (team1[0].players[i].strength > 1 && team1[0].players[i].strength < 1.5) {
      hitType += -4;
    } if (team1[0].players[0].strength > 1.5) {
      hitType += -6;
    }

    randomHit = Math.trunc(Math.random() * hitType - 0) + 0;

    if (randomHit <= 40) {
      secondary = Math.trunc(Math.random() * 100 - 0) + 0;
      if (secondary <= 60) {
        team1[0].players[i].hits += 1;
        single += 1;
        nexplay = true;
        //now we move up the runners
          if (firstbase) {
            secondbase = true;
            firstbase = false;
          } if (secondbase) {
            secondbase = false;
            thirdbase = true;
          } if (thirdbase) {
            thirdbase = false;
            team1[0].runs += 1;
          }
        //defines this afterwards to avoid conflicts
        firstbase = true;
        nexplay = true;
        } if (secondary > 60 && secondary <= 90) {
          double += 1;
          nextplay = true;
          if (firstbase) {
            thirdbase = true;
            firstbase = false;
          } if (secondbase) {
            team1[0].runs += 1;
            secondbase = false;
          } if (thirdbase) {
            team1[0].runs += 1;
            thirdbase = false;
          }
        secondbase = true;
        nexplay = true;
        } if (secondary > 90 && secondary <= 95) {
          homeRun += 1;
          nexplay = true;
          
          // i know there is probably a better way to write this code
          let runsAdded = 1;
          if (firstbase) {
            runsAdded += 1;
          }
          if (secondbase) {
            runsAdded += 1;
          }
          if (thirdbase) {
            runsAdded += 1;
          }
          team1[0].runs += runsAdded;
        } if (secondary > 95 && secondary <= 100) {
          triple += 1;
          nextplay = true;
        }
      }
    }
    if (randomHit > 40) {
      secondary = Math.trunc(Math.random() * hitType - 0) + 0;
      if (secondary <= 50) {
        out += 1;
        nexplay = true;
      } if (secondary > 50) {
        out += 1;
        nextplay = true;
      }
    }
} 

for (let i = 0; i < 300; i++) {
  if (out == 3) {
    firstbase = false;
    secondbase = false;
    thirdbase = false;
    out = 0;
  }
  else {
    atBat()
  }
}

console.log(single, double, triple, homeRun, strikeout, walk)
console.log(atBats)
//for testing everything out
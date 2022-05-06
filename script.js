// 0.0.8.3 Pre Alpha

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
      "name": "Don't have one",
      "handed": "right",
      "pitchingrating": 1.6,
      "exhaustion": 1,
      "pitchspeed": 2
    },
    {
      "name": "Hmmmm",
      "handed": "left",
      "pitchingrating": 1.4,
      "exhaustion": 1,
      "pitchspeed": 4
    },
    {
      "name": "jeffery",
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
  probability = 20;
  if(pitcher[0].pitchingrating > team1[0].players[i].battingrating) {
    probability += 5;
  }
  if(pitcher[0].pitchingrating < team1[0].players[i].battingrating) {
    probability += -2;
  }

  if(pitcher[0].handed !== team1[0].players[i].handed) {
    probability += -1;
  } if (pitcher[0].exhaustion == 2) {
    probability += -1;
  } if (pitcher[0].exhaustion == 3) {
    probability += -2;
  }

  if (pitcher[0].pitchspeed == 1) {
    probability += -2;
  }
  if (pitcher[0].pitchspeed == 2) {
    probability += -1;
  }
  if (pitcher[0].pitchspeed == 3) {
    probability += 1;
  }
  if (pitcher[0].pitchspeed == 4) {
    probability += 2;
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
          single += 1;
          nexplay = true;
        } if (secondary > 60 && secondary <= 90) {
          double += 1;
          nextplay = true;
        } if (secondary > 90 && secondary <= 95) {
          homeRun += 1;
          nexplay = true;
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
  atBat()
}

console.log(single, double, triple, homeRun, strikeout, walk)
console.log(atBats)
//for testing n   
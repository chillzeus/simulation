// 0.0.10.1
let balls = 0;
let strikes = 0;

let firstbase = false;
let secondbase = false;
let thirdbase = false;

let probability = 20;

let randomNumber = null;
let randomHit = null;
let secondary = null;
let inPlay = false;

//these variables are getting to be a lot
let strikeout = 0;
let walk = 0;
let single = 0;
let double = 0;
let triple = 0;
let homeRun = 0;
let out = 0;
let nextplay = false;
let atBats = 0;
let inning = 1;
let hitType = 100;

//player[i].etc USE FOR LOOP!
let i = 0;

const team1 = [
  {
  "runs": 0,
  "single": 0,
  "double": 0,
  "triple": 0,
  "homeRun": 0,
  "strikeout": 0,
  "walk": 0,
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
    },
    {
        "name": "Sara Doering-Fiedler",
        "handed": "right",
        "battingrating": 1.2,
        "strength": 1.3,
        "hits": 0
    },
    {
        "name": "Adam Fiedler",
        "handed": "right",
        "battingrating": 1.6,
        "strength": 1.8,
        "hits": 0
    },
    {
        "name": "Rylan Klingle",
        "handed": "left",
        "battingrating": 0.8,
        "strength": 0.9,
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
      "name": "Mr. Hust",
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
    },
    {
      
    }
    ],
  }
]

const team2 = [
  {
  "runs": 0,
  "single": 0,
  "double": 0,
  "triple": 0,
  "homeRun": 0,
  "strikeout": 0,
  "walk": 0,
    "players": [
    {
      "name": "Amanda the Frog",
      "handed": "left",
      "battingrating": 0,
      "strength": 0,
      "hits": 0
    },
    {
      "name": "you'll get a name later",
      "handed": "right",
      "battingrating": 0,
      "strength": 0,
      "hits": 0
    },
    {
      "name": "you'll get a name later",
      "handed": "right",
      "battingrating": 0,
      "strength": 0,
      "hits": 0
    }
    ],
    "pitchers": [
    {
      "name": "named later",
      "handed": "left",
      "pitchingrating": 1.1,
      "exhaustion": 1,
      "pitchspeed": 1
    }
    ]
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

let current_team = team1;
let pitch_team = team2;

function atBat() {
  hitType = 100;
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
  if(pitch_team[0].pitchers[0].pitchingrating > current_team[0].players[i].battingrating) {
    probability += 5;
  }
  if(pitch_team[0].pitchers[0].pitchingrating < current_team[0].players[i].battingrating) {
    probability += -1;
  }

  if(pitch_team[0].pitchers[0].handed !== current_team[0].players[i].handed) {
    probability += -1;
  } if (pitch_team[0].pitchers[0].exhaustion == 2) {
    probability += -1;
  } if (pitch_team[0].pitchers[0].exhaustion == 3) {
    probability += -2;
  }

  if (pitch_team[0].pitchers[0].pitchspeed == 1) {
    probability += -1;
  }
  if (pitch_team[0].pitchers[0].pitchspeed == 3) {
    probability += 2;
  }
  if (pitch_team[0].pitchers[0].pitchspeed == 4) {
    probability += 3;
  }

  if (pitch_team[0].pitchers[0].handed == "dual") {
    probability += 5;
  }
  if (current_team[0].players[i].handed == "dual") {
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
      current_team[0].walk += 1;
      nextplay = true;
      atBat();
    } if (strikes == 3) {
      balls = 0;
      strikes = 0;
      current_team[0].strikeout += 1;
      nextplay = true;
      out += 1;
    }
  }

  //the ball is hit into play
  if (inPlay) {
    if (current_team[0].players[i].strength > 1 && current_team[0].players[i].strength < 1.5) {
      hitType += -4;
    } if (current_team[0].players[0].strength > 1.5) {
      hitType += -6;
    }

    randomHit = Math.trunc(Math.random() * hitType - 0) + 0;

    if (randomHit <= 50) {
      secondary = Math.trunc(Math.random() * 100 - 0) + 0;
      if (secondary <= 60) {
        current_team[0].players[i].hits += 1;
        current_team[0].single += 1;
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
            current_team[0].runs += 1;
          }
        //defines this afterwards to avoid conflicts
        firstbase = true;
        nexplay = true;

        // if it's a double
        } if (secondary > 75 && secondary <= 93) {
          current_team[0].players[i].hits += 1;
          current_team[0].double += 1;
          nextplay = true;
          if (firstbase) {
            thirdbase = true;
            firstbase = false;
          } if (secondbase) {
            current_team[0].runs += 1;
            secondbase = false;
          } if (thirdbase) {
            current_team[0].runs += 1;
            thirdbase = false;
          }
        secondbase = true;
        nexplay = true;

        // if it's a homerun
        } if (secondary > 93 && secondary <= 98) {
          current_team[0].players[i].hits += 1;
          current_team[0].homeRun += 1;
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
          current_team[0].runs += runsAdded;

        // in the event it's a triple
        } if (secondary > 98 && secondary <= 100) {
          current_team[0].triple += 1;
          current_team[0].players[i].hits += 1;
          nextplay = true;
        }
      }
    }
    if (randomHit > 50) {
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

let determine = 1;

for (let i = 0; i < 300; i++) {
  // console.log(out)
  // did we solve the issue with 4 outs?
  if (out >= 3) {
    firstbase = false;
    secondbase = false;
    thirdbase = false;
    out = 0;
    inning += 1;
    if (determine = 1) {
      determine = 2;
      current_team = team2;
      pitch_team = team1;
    }
    else {
      determine = 1;
      current_team = team1;
      pitch_team = team2;
    }
  }
  if (out < 3 && inning < 9) {
    atBat()
  }
  if (inning == 18) {
    i = 300;
  }
}

console.log("1B: " + single, "2B: " + double, "3B: " + triple, "HR: " + homeRun, "K: " + strikeout, "BB: " + walk)
console.log("At bats: " + atBats)
console.log("Team 1 Runs: " + team1[0].runs)
console.log("Team 2 Runs: " + team2[0].runs)
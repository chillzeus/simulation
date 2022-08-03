// 0.1.2

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
  "atBats": 0,
  "pitches": 0,
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
        "name": "Adam Fied;er",
        "handed": "left",
        "battingrating": 1.4,
        "strength": 1.8,
        "hits": 0
    },
    {
        "name": "Kristina Fiedler",
        "handed": "right",
        "battingrating": 1.7,
        "strength": 1.7,
        "hits": 0
    },
    {
        "name": "Tom Fiedler",
        "handed": "right",
        "battingrating": 1.7,
        "strength": 1.6,
        "hits": 0
    },
    {
        "name": "Sara Doering-Fiedler",
        "handed": "right",
        "battingrating": 1.2,
        "strength": 1.3,
        "hits": 0,
    },
    {
        "name": "Greta Fiedler",
        "handed": "left",
        "battingrating": 1.2,
        "strength": 1.5,
        "hits": 0
    },
    {
        "name": "Jayde Doering",
        "handed": "right",
        "battingrating": 1.2,
        "strength": 1.0,
        "hits": 0
    },
    {
        "name": "Mary Doering",
        "handed": "left",
        "battingrating": 1.3,
        "strength": 0.9,
        "hits": 0
    }

    ],
    "pitchers": [ 
    {
      "name": "Stephen Rothe",
      "handed": "right",
      "pitchingrating": 1.6,
      "exhaustion": 1,
      "pitchspeed": 2
    },
    {
      "name": "Ellie Doering",
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
  "atBats": 0,
  "pitches": 0,
    "players": [
    {
        "name": "Ron Doering",
        "handed": "right",
        "battingrating": 1.4,
        "strength": 1.3,
        "hits": 0
    },
    {
        "name": "Harriet Rusk",
        "handed": "left",
        "battingrating": 0.7,
        "strength": 1.1,
        "hits": 0
    },
    {
        "name": "Kevin Rusk",
        "handed": "right",
        "battingrating": 1.4,
        "strength": 1.6,
        "hits": 0
    },
    {
        "name": "Mike Doering",
        "handed": "right",
        "battingrating": 1.5,
        "strength": 1.8,
        "hits": 0
    },
    {
        "name": "Monika Fiedler",
        "handed": "right",
        "battingrating": 1.1,
        "strength": 1.0,
        "hits": 0
    },
    {
        "name": "Alexander Doering",
        "handed": "left",
        "battingrating": 0.6,
        "strength": 0.8,
        "hits": 0
    }
    ],
    "pitchers": [
    {
      "name": "Kathy Rothe",
      "handed": "left",
      "pitchingrating": 1.6,
      "exhaustion": 1,
      "pitchspeed": 1
    },
    ]
  }
]

let current_team = team1;
let pitch_team = team2;

function atBat() {
  hitType = 100;
  current_team[0].atBats += 1;
  atBats += 1;
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
  inPlay = false;
  //sees who is the "better player"
  probability = 22;
  if(current_team[0].pitchers[0].pitchingrating > current_team[0].players[i].battingrating) {
    probability += 5;
  }
  if(current_team[0].pitchers[0].pitchingrating < current_team[0].players[i].battingrating) {
    probability += -1;
  }

  if(current_team[0].pitchers[0].handed !== current_team[0].players[i].handed) {
    probability += -1;
  } if (current_team[0].pitchers[0].exhaustion == 2) {
    probability += -1;
  } if (current_team[0].pitchers[0].exhaustion == 3) {
    probability += -2;
  }

  if (current_team[0].pitchers[0].pitchspeed == 1) {
    probability += -1;
  }
  if (current_team[0].pitchers[0].pitchspeed == 3) {
    probability += 2;
  }
  if (current_team[0].pitchers[0].pitchspeed == 4) {
    probability += 3;
  }

  if (current_team[0].pitchers[0].handed == "dual") {
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
      current_team[0].pitches += 1;
    } 
    if (randomNumber >= 8 && randomNumber <= 14) {
      balls += 1;
      current_team[0].pitches += 1;
    }
    if (randomNumber >= 15) {
      strikes += 1;
      current_team[0].pitches += 1;
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
    if (determine == 1) {
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

console.log("Simulation, v0.1.2")

console.log("=========================")

console.log("Team 1 Runs: " + team1[0].runs)
console.log("1B: " + team1[0].single + " 2B: " + team1[0].double + " 3B: " + team1[0].triple + " HR: " + team1[0].homeRun)
console.log("Stikeouts: " + team1[0].strikeout + " Walks: " + team1[0].walk)

console.log("=========================")

console.log("Team 2 Runs: " + team2[0].runs)
console.log("1B: " + team2[0].single + " 2B: " + team2[0].double + " 3B: " + team2[0].triple + " HR: " + team2[0].homeRun)
console.log("Stikeouts: " + team2[0].strikeout + " Walks: " + team2[0].walk)

console.log("=========================")

console.log("Team 1 pitches: " + team1[0].pitches)
console.log("Team 2 pitches: " + team2[0].pitches)


// this section will have all the stuff to be displayed in UI

document.getElementById("team1score").innerHTML = team1[0].runs;
document.getElementById("team2score").innerHTML = team2[0].runs;

document.getElementById("team1-1b").innerHTML = team1[0].single;
document.getElementById("team1-2b").innerHTML = team1[0].double;
document.getElementById("team1-3b").innerHTML = team1[0].triple;
document.getElementById("team1-hr").innerHTML = team1[0].homeRun;
document.getElementById("team1-k").innerHTML = team1[0].strikeout;
document.getElementById("team1-bb").innerHTML = team1[0].walk;

document.getElementById("team2-1b").innerHTML = team2[0].single;
document.getElementById("team2-2b").innerHTML = team2[0].double;
document.getElementById("team2-3b").innerHTML = team2[0].triple;
document.getElementById("team2-hr").innerHTML = team2[0].homeRun;
document.getElementById("team2-k").innerHTML = team2[0].strikeout;
document.getElementById("team2-bb").innerHTML = team2[0].walk;
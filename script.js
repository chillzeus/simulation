// 0.1.3

let balls = 0;
let strikes = 0;

let firstbase = false;
let secondbase = false;
let thirdbase = false;

let probability = 25;

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
let pitcher = 0;

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
        "strength": 1.4,
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Isaac Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Adam Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Kristina Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Andrew Rothe",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Sara Doering-Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Greta Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Jayde Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Mary Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    }

    ],
    "pitchers": [ 
    {
      "name": "Rosemary Fiedler",
      "handed": "right",
      "pitchingrating": 1.6,
      "exhaustion": 1,
      "exhaustioninning1": 3,
      "exhaustioninning2": 5,
      "pitchspeed": 2,
      "pitches": 0,
    },
    {
      "name": "Zeus the Frog",
      "handed": "left",
      "pitchingrating": 1.5,
      "exhaustion": 1,
      "exhaustioninning1": 10,
      "exhaustion-inning2": 10,
      "pitchspeed": 3,
      "pitches": 0,
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
  "atBats": 0,
  "pitches": 0,
    "players": [
    {
        "name": "Ron Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Harriet Rusk",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Kevin Rusk",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Mike Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Monika Fiedler",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Alexander Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Ellie Doering",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },
    {
        "name": "Chipotle the Fish",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    },   
    {
        "name": "Kathy Rothe",
        "hits": 0,
        "single": 0,
        "double": 0,
        "triple": 0,
        "homerun": 0,
        "strikeout": 0,
        "walk": 0,
        "RBI": 0
    }
    ],
    "pitchers": [
    {
      "name": "Tom Fiedler",
      "handed": "dual",
      "pitchingrating": 1.8,
      "exhaustion": 1,
      "exhaustioninning1": 2,
      "exhaustion-inning2": 4,
      "pitchspeed": 2
    },
    {
      "name": "Stephen Rothe",
      "handed": "right",
      "pitchingrating": 1.8,
      "exhaustioninning1": 10,
      "exhaustioninning2": 10,
      "exhaustion": 1,
      "pitchspeed": 4
    }
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
    if (i < 9) {
      nextplay = false;
      i += 1;
    }
    if (i == 9) {
      nextplay = false;
      i = 0;
    }
  }
  inPlay = false;

  // ball gets in play less, but when it gets in play, has higher chance of being a hit??
  // if strikes and stuff  
  while (inPlay == false) {
    randomNumber = Math.trunc(Math.random() * (probability - 0) + 0);
    if (randomNumber <= 5) {
      inPlay = true;
      pitch_team[0].pitches += 1;
    } 
    if (randomNumber >= 6 && randomNumber <= 11) {
      balls += 1;
      pitch_team[0].pitches += 1;
    }
    if (randomNumber >= 14) {
      strikes += 1;
      pitch_team[0].pitches += 1;
    }

    //check if walk or strikeout 
    if (balls == 4) {
      balls = 0;
      strikes = 0;
      current_team[0].walk += 1;
      current_team[0].players[i].walk += 1;
      nextplay = true;
      atBat();
    } if (strikes == 3) {
      balls = 0;
      strikes = 0;
      current_team[0].strikeout += 1;
      current_team[0].players[i].strikeout += 1;
      nextplay = true;
      out += 1;
    }
  }

  //the ball is hit into play
  if (inPlay) {

    randomHit = Math.floor(Math.random() * 100) + 1;
    console.log(randomHit)

    if (randomHit <= 35) {
      secondary = Math.trunc(Math.random() * 100 - 0) + 0;
      if (secondary <= 60) {
        current_team[0].players[i].hits += 1;
        current_team[0].players[i].single += 1;
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
            current_team[0].players[i].RBI += 1;
            current_team[0].runs += 1;
          }
        //defines this afterwards to avoid conflicts
        firstbase = true;
        nexplay = true;

        // if it's a double
        } if (secondary > 70 && secondary <= 93) {
          current_team[0].players[i].hits += 1;
          current_team[0].players[i].double += 1;
          current_team[0].double += 1;
          nextplay = true;
          if (firstbase) {
            thirdbase = true;
            firstbase = false;
          } if (secondbase) {
            current_team[0].players[i].RBI += 1;
            current_team[0].runs += 1;
            secondbase = false;
          } if (thirdbase) {
            current_team[0].runs += 1;
            current_team[0].players[i].RBI += 1;
            thirdbase = false;
          }
        secondbase = true;
        nexplay = true;

        // if it's a homerun
        } if (secondary > 93 && secondary <= 98) {
          current_team[0].players[i].hits += 1;
          current_team[0].players[i].homerun += 1;
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
          current_team[0].players[i].RBI += runsAdded;

        // in the event it's a triple
        } if (secondary > 98 && secondary <= 100) {
          current_team[0].triple += 1;
          current_team[0].players[i].hits += 1;
          current_team[0].players[i].triple += 1;
          nextplay = true;
        }
      }
    }
    if (randomHit > 65) {
        out += 1;
        nexplay = true;
    }
} 

let determine = 1;

for (let i = 0; i < 500; i++) {
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
  if (inning == current_team[0].pitchers[0].exhaustioninning1) {
    current_team[0].pitchers[0].exhaustion = 2;
  }
  if (inning == current_team[0].pitchers[0].exhaustioninning2) {
    current_team[0].pitchers[0].exhaustion = 3;
  }
  // switches to reliever
  if (inning == 7) {
    pitcher += 1;
  }
  if (out < 3 && inning < 9) {
    atBat()
  }
  if (inning == 18) {
    i = 500;
  }
}

console.log("Simulation, v0.1.3")

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


// gotta say this is rather slick
let m = -1;
function feedInPlayersTeam1() {
  m += 1;
  let feedInPlayers = "<tr><th class='player-name'>" + team1[0].players[m].name + "</th><th>" + team1[0].players[m].hits + "</th><th>" + team1[0].players[m].single + "</td><th>" + team1[0].players[m].double + "</td><th>" + team1[0].players[m].triple + "</td><th>" + team1[0].players[m].homerun + "</td><th>" + team1[0].players[m].strikeout + "</td><th>" + team1[0].players[m].walk + "</td></tr>"
  document.getElementById("team1-players").innerHTML += feedInPlayers;
}
for (let i = 0; i < 9; i++) {
  feedInPlayersTeam1()
}


// just do the same for team 2
let n = -1
function feedInPlayersTeam2() {
  n += 1;
  feedInPlayers = "<tr><th class='player-name'>" + team2[0].players[n].name + "</th><th>" + team2[0].players[n].hits + "</th><th>" + team2[0].players[n].single + "</td><th>" + team2[0].players[m].double + "</td><th>" + team2[0].players[n].triple + "</td><th>" + team2[0].players[n].homerun + "</td><th>" + team2[0].players[n].strikeout + "</td><th>" + team1[0].players[n].walk + "</td></tr>"
  document.getElementById("team2-players").innerHTML += feedInPlayers;
}
for (let i = 0; i < 9; i++) {
  feedInPlayersTeam2()
}
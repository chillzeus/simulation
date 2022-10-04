// 1.0.0.2

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
let inning = 0;
let hitType = 100;

//player[i].etc USE FOR LOOP!
let i = 0;
let z = 0;

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
  "strikes": 0,
  "hits": 0,
    "players": [
    {
        "name": "Soren Fiedler",
        "rating": 5,
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
        "rating": 7,
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
        "rating": 9,
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
        "rating": 4,
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
        "rating": 6,
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
        "rating": 4,
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
        "rating": 5,
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
        "rating": 6,
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
        "rating": 4,
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
      "rating": 4,
      "pitches": 0,
      "strikes": 0,
      "strikeout": 0,
      "walk": 0,
    },
    {
      "name": "Zeus the Frog",
      "rating": 8,
      "pitches": 0,
      "strikes": 0,
      "strikeout": 0,
      "walk": 0,
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
  "strikes": 0,
  "hits": 0,
    "players": [
    {
        "name": "Ron Doering",
        "rating": 5,
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
        "rating": 3,
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
        "rating": 6,
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
        "rating": 8,
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
        "rating": 7,
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
        "rating": 4,
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
        "rating": 5,
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
        "rating": 3,
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
        "rating": 7,
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
      "rating": 5,
      "pitches": 0,
      "strikeout": 0,
      "walk": 0,    
    },
    {
      "name": "Stephen Rothe",
      "rating": 7,
      "pitches": 0,
      "strikes": 0,
      "strikeout": 0,
      "walk": 0,
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
    if (randomNumber <= 10) {
      inPlay = true;
      pitch_team[0].pitches += 1;
      pitch_team[0].pitchers[z].pitches += 1;
    } 
    if (randomNumber >= 11 && randomNumber <= 16) {
      balls += 1;
      pitch_team[0].pitches += 1;
      pitch_team[0].pitchers[z].pitches += 1;
    }
    if (randomNumber >= 17) {
      strikes += 1;
      pitch_team[0].strikes += 1;
      pitch_team[0].pitchers[z].strikes += 1;
      pitch_team[0].pitches += 1;
      pitch_team[0].pitchers[z].pitches += 1;
    }

    //check if walk or strikeout 
    if (balls == 4) {
      balls = 0;
      strikes = 0;
      current_team[0].walk += 1;
      current_team[0].players[i].walk += 1;
      pitch_team[0].pitchers[z].walk += 1;
      nextplay = true;
      atBat();
    } if (strikes == 3) {
      balls = 0;
      strikes = 0;
      current_team[0].strikeout += 1;
      current_team[0].players[i].strikeout += 1;
      pitch_team[0].pitchers[z].strikeout += 1;
      nextplay = true;
      out += 1;
    }
  }

  //the ball is hit into play
  if (inPlay) {

    randomHit = Math.floor(Math.random() * 100) + 1;

    if (randomHit <= 12) {
      secondary = Math.trunc(Math.random() * 100 - 0) + 0;
      if (secondary <= 65) {
        current_team[0].players[i].hits += 1;
        current_team[0].players[i].single += 1;
        current_team[0].single += 1;
        nextplay = true;
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
        nextplay = true;

        // if it's a double
        } if (secondary > 65 && secondary <= 85) {
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
        nextplay = true;

        // if it's a homerun
        } if (secondary > 85 && secondary <= 98) {
          current_team[0].players[i].hits += 1;
          current_team[0].players[i].homerun += 1;
          current_team[0].homeRun += 1;
          nextplay = true;
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
          thirdbase = true;
          nextplay = true;
          if (firstbase) {
            current_team[0].players[i].RBI += 1;
            current_team[0].runs += 1;
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
        }
      }
    }
    if (randomHit > 65) {
        out += 1;
        nextplay = true;
    }
} 

let determine = 1;
let maxInnings = 18;

function extraInnings() {
  maxInnings += 2;
  console.log("Extra Innings")
}

for (let i = 0; i < 1000; i++) {
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
  // switches to reliever
  if (inning == 14) {
    z = 1;
  }
  if (out < 3 && inning <= maxInnings) {
    atBat()
  }
  if (inning == maxInnings) {
    if (team1[0].runs == team2[0].runs) {
      extraInnings();
    }
  }
}

function addUpHits() {
  team1[0].hits = team1[0].single + team1[0].double + team1[0].triple + team1[0].homeRun;
  team2[0].hits = team2[0].single + team2[0].double + team2[0].triple + team2[0].homeRun;
}

addUpHits()

console.log("Simulation, v1.0.0.2")
console.log("Welcome to the simulation console!")

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
  feedInPlayers = "<tr><th class='player-name'>" + team2[0].players[n].name + "</th><th>" + team2[0].players[n].hits + "</th><th>" + team2[0].players[n].single + "</td><th>" + team2[0].players[n].double + "</td><th>" + team2[0].players[n].triple + "</td><th>" + team2[0].players[n].homerun + "</td><th>" + team2[0].players[n].strikeout + "</td><th>" + team1[0].players[n].walk + "</td></tr>"
  document.getElementById("team2-players").innerHTML += feedInPlayers;
}
for (let i = 0; i < 9; i++) {
  feedInPlayersTeam2()
}

function pitchingStats() {
  team1Pitcher1 = "<tr><th class='pitcher-name'>" + team1[0].pitchers[0].name + "</th><th>" + team1[0].pitchers[0].pitches + "</th><th>" + team1[0].pitchers[0].strikeout + "</th><th>" + team1[0].pitchers[0].walk + "</th><tr>"
  document.getElementById("team1Pitchers").innerHTML += team1Pitcher1;
  team1Pitcher2 = "<tr><th class='pitcher-name'>" + team1[0].pitchers[1].name + "</th><th>" + team1[0].pitchers[1].pitches + "</th><th>" + team1[0].pitchers[1].strikeout + "</th><th>" + team1[0].pitchers[1].walk + "</th><tr>"
  document.getElementById("team1Pitchers").innerHTML += team1Pitcher2;
  // for team 2 now
  team2Pitcher1 = "<tr><th class='pitcher-name'>" + team2[0].pitchers[0].name + "</th><th>" + team2[0].pitchers[0].pitches + "</th><th>" + team2[0].pitchers[0].strikeout + "</th><th>" + team2[0].pitchers[0].walk + "</th><tr>"
  document.getElementById("team2Pitchers").innerHTML += team2Pitcher1;
  team2Pitcher2 = "<tr><th class='pitcher-name'>" + team2[0].pitchers[1].name + "</th><th>" + team2[0].pitchers[1].pitches + "</th><th>" + team2[0].pitchers[1].strikeout + "</th><th>" + team2[0].pitchers[1].walk + "</th><tr>"
  document.getElementById("team2Pitchers").innerHTML += team2Pitcher2;
}

let inningsReadable = 0;
let pitchesPerInning = 0;
let runsPerInning = 0;
let hitsPerInning = 0;

function gameRecap(){
  inningsReadable = inning / 2;
  inningsReadable += -0.5;
  totalPitches = team1[0].pitches + team2[0].pitches;
  pitchesPerInning = totalPitches / inningsReadable;
  pitchesPerInning = pitchesPerInning.toFixed(1)
  runsPerInning = team1[0].runs + team2[0].runs;
  runsPerInning = runsPerInning / inningsReadable;
  runsPerInning = runsPerInning.toFixed(1);
  hitsPerInning = team1[0].hits + team2[0].hits;
  hitsPerInning = hitsPerInning / inningsReadable;
  hitsPerInning = hitsPerInning.toFixed(1);
  document.getElementById("inningsDisplayed").innerHTML += "<h3 class='innings'>Innings: " + inningsReadable + "</h3>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Total pitches: " + totalPitches + "</p>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Avg pitches per inning: " + pitchesPerInning + "</p>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Avg runs per inning: " + runsPerInning + "</p>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Team 1 hits: " + team1[0].hits + "</p>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Team 2 hits: " + team2[0].hits + "</p>";
  document.getElementById("miscstats").innerHTML += "<p class='indepth'>Avg hits per inning: " + hitsPerInning + "</p>";
}

gameRecap()

pitchingStats()

console.log(team1[0])
console.log(team2[0])
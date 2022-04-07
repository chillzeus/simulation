// 0.0.2 Pre Alpha

let firstBase = false;
let secondBase = false;
let thirdBase = false;

//player[i].etc USE FOR LOOP!

const batter = {
    name: "Isaac Fiedler",
    handed: "right",
    battingRating: 1.2,
    strength: 1.5,
    hits: 0
}

const pitcher = {
    name: "Bizarro Isaac",
    handed: "left",
    pitchingRating: 1.4,
    pitchSpeed: 1.7,
    exhaustion: 1,
    endurance: 55
}

function atBat() {
    let events = 0;
    let balls = 0;
    let strikes = 0;

    let atBatDone = false;
    let inPlay = false;

    let probability = 22;
    let hitType = 35;

    //sees who is the "better player"
    if (pitcher.pitchingRating > batter.battingRating) {
        probability += 5;
    }
    if (pitcher.pitchingRating < batter.battingRating) {
        probability += -2;
    }
    if (pitcher.handed !== batter.handed) {
        probability += -1;
    }
    if (pitcher.exhaustion === 2) {
        probability += -1;
    }
    if (pitcher.exhaustion === 3) {
        probability += -2;
    }

    //enclose this all in a for loop or something
    while (!atBatDone) {
        events++;
        const randomNumber = Math.trunc(Math.random() * probability);
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
        // if strikes and stuff
        if (strikes < 3 && balls < 4 && inPlay) {
            atBatDone = true;

            if (batter.strength > 1 && batter.strength < 1.5) {
                hitType += 3;
            }
            if (batter.strength > 1.5) {
                hitType += 4;
            }

            const randomHit = Math.trunc(Math.random() * hitType);

            if (randomHit <= 12) {
                console.log("ground out")
                return "GO"
            }
            if (randomHit <= 22) {
                console.log("fly out")
                return "FO";
            }
            if (randomHit <= 28) {
                console.log("single");
                return "1B";
            }
            if (randomHit <= 31) {
                console.log("double");
                return "2B";
            }
            if (randomHit === 32) {
                console.log("triple");
                return "3B";
            }
            if (randomHit >= 33) {
                console.log("home run");
                return "HR";
            }
        }

        if (events > 15) {
            console.log("Something went wrong...");
            return "ERR"
        }

        if (balls === 4) {
            console.log("walk");
            return "BB";
        }

        if (strikes === 3) {
            console.log("strikeout");
            return "K";
        }
    }
}

atBat()
//for testing
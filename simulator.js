const maxEvents = 100;
const defaultProbability = 22;
const defaultHitType = 35;

const defaultTestRuns = 625;
const defaultTestFactor = 10;

function atBat(batter, pitcher) {
    // This keeps us from doing too much in one at-bat.
    // You can remove it after testing since foul balls
    //  will cause at-bats to go longer, but they'll
    //  never hit a threshold like 100.
    let events = 0;

    let balls = 0;
    let strikes = 0;

    // This is not actually needed. We could say while(true) { ... } and the
    //  return statements will handle exiting the loop.
    let atBatDone = false;

    // Handle all the probability adjustments in a separate function.
    const probability = getProbabilityOffset(batter, pitcher, defaultProbability);

    while (!atBatDone) {
        events++;
        // Get the result from a pitch, then handle that result in the next section of logic.
        const pitchResult = getPitchResult(probability);

        if (pitchResult === 'B') balls++;
        else if (pitchResult === 'K') strikes++;
        else if (pitchResult === 'IP') {
            atBatDone = true;
            return getInPlayResult(batter, pitcher);
        }

        if (balls >= 4) {
            console.log("Walk");
            atBatDone = true;
            return "BB";
        }
        if (strikes >= 3) {
            console.log("Strikeout");
            atBatDone = true;
            return "K";
        }
        // This shouldn't happen, but you never know.
        if (events >= maxEvents) {
            console.log("Error");
            atBatDone = true;
            return "ERR";
        }
    }
}

function getProbabilityOffset(batter, pitcher, startingProbability) {
    // It's best practice to not modify parameters in a function.
    // This is an example of a "side-effect" and isn't great since
    //  things can change in other places and it gets confusing.
    let probability = startingProbability;
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

    return probability;
}

function getPitchResult(probability) {
    const randomNumber = Math.trunc(Math.random() * probability);
    if (randomNumber <= 6) {
        console.log("in play")
        return "IP";
    }
    if (randomNumber >= 7 && randomNumber <= 17) {
        console.log("ball")
        return "B";
    }
    if (randomNumber >= 18) {
        console.log("strike")
        return "K";
    }
}

function getInPlayResult(batter, pitcher) {
    let hitType = defaultHitType;

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

function runMultipleAtBats(inputTestRuns, inputTestFactor, batter, pitcher) {
    // Initialize our object of results
    const results = {};

    // We can either use the values entered in the function
    //  or fall back to the defaults set elsewhere.
    const testRuns = inputTestRuns || defaultTestRuns;
    const testFactor = inputTestFactor || defaultTestFactor;

    // Run the specified number of at-bats.
    // After each at-bat, we increase the result total by 1
    for (let run = 0; run < (testRuns * testFactor); run++) {
        const result = atBat(batter, pitcher);

        results[result] = (results[result] || 0) + 1
        console.log(`Result = [${result}]`);
    }

    // We go through each key/value entry in the `results` object and divide
    //  the total by the number of times we went through the test runs.
    // Think of this like playing a number of seasons with testFactor as that number.
    const factoredResults = Object.entries(results).reduce((r, [key, total]) => {
        r[key] = parseInt(total / testFactor);
        return r;
    }, results);

    console.table(factoredResults);

    const stats = getStats(factoredResults, testRuns);

    console.log(`Completed ${testFactor} sets of ${testRuns} at bats.`);

    console.table(stats);

    return stats;
}

function getStats(results, testRuns) {
    // Get all the stats or zero if that stat isn't present in the results.
    const singles = (results['1B'] || 0);
    const doubles = (results['2B'] || 0);
    const triples = (results['3B'] || 0);
    const homeRuns = (results['HR'] || 0);
    const walks = (results['BB'] || 0);

    const hits = (singles + doubles + triples + homeRuns);
    const atBats = (testRuns - walks);

    // AVG = Batting average (Percent of time getting a hit)
    // OBP = On-base percentage (Percent of time getting on base)
    // SLG = Slugging percentage (Average bases per at bat)
    // OPS = On-base percentage + slugging percentage (Math!)
    const avg = hits / atBats;
    const obp = ((hits + walks) / testRuns);
    const slg = ((singles + doubles + doubles + triples + triples + triples + (homeRuns * 4))/atBats);
    const ops = obp + slg;

    return {
        pa: testRuns,
        ab: atBats,
        hits: hits,
        avg: avg.toFixed(3),
        obp: obp.toFixed(3),
        slg: slg.toFixed(3),
        ops: ops.toFixed(3)
    };
}

// This is a node.js convention that allows you to use functions/objects in other places in your app.
module.exports = {
    atBat,
    runMultipleAtBats
}
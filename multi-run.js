// This brings in the object specified with module.exports
const Simulator = require('./simulator');

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

Simulator.runMultipleAtBats(625, 25, batter, pitcher);
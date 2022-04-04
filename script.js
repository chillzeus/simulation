let greenfield = [
	{
	team: "Greenfield",
  wins: 0,
  losses: 0,
  players: [
  	{
  	  player1: [
        {
          name: "Isaac",
        }],
      player2: [
        {
          name: "Soren",
        }],
    }]
	}
]

let gameTimeRAW = 192;
let score = gameTimeRAW / 4;

//this is where one play will be
//algorithm needed, defense will be man to man lol, zone would be hard to code
function play() {

}

//increment by quarter minute?
for (let i = 192; i > 0; i += -1) {
  play()
}

console.log(greenfield[0].players[0].name)
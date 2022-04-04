let teamdata = [
	{
	team: "Greenfield Warriors",
  wins: 0,
  losses: 0,
  players: [
  	{
  	name: "Isaac"
  	}
  ]
	},
  {
  team: "Team 2",
  wins: 0,
  losses: 0
  },
]


teamdata[0].wins += 1;

console.log(teamdata[0].players[0].name)
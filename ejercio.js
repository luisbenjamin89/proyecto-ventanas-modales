const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

/* Crear un array con los jugadores de cada equipo (*player1* y *player2*)*/

const { players } = game
const [p1, p2] = players

console.log(p1)
console.log(p2)
/*2. El  portero del Bayern de Munich es *Neuer*, el resto de la lista son jugadores. Crea una variable para el portero (goalKeeper)  y otra para los jugadores del Bayern  (fieldPlayers)*/

const [goalKeeper, ...fieldplayer] = p1
console.log(goalKeeper)
console.log(fieldplayer)

/*3.Crea un array con todos los jugadores de ambos equipos (*allPlayers*)*/

const allPlayers = [...p1, ...p2]
console.log(allPlayers)

/*4. Durante  el  partido,  el Bayern Munich utiliza 3  reservas. Crea un nuevo array **players1Final** que contenga el  equipo de inicio y los reservas *Thiago*, *Coutinho* y *Perisic**/

const players1Final = [...p1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final)

/*5. En base  al objeto game.odds, crea una  variable para cada apuesta  y llámalas *team1*, *draw* y *team2*.*/

const { team1, x: draw, team2 } = game.odds
console.log(team1, draw, team2)

/*6. Escribe una función *printGoals* que recibe un número arbitrario de nombres de jugadores (no un array) e imprime sus nombres por consola así como el total de goles marcados (uno por cada jugador). Usa luego la función mandando como parámetro *game.scored*/

const printGoals = (...players) => {
  for (let index = 0; index < players.length; index++) {
    console.log(`${players[index]} ha marcado un gol`)
  }
}
printGoals('Martínez', 'Muller', 'Lewandowski', 'Kimmich')

// 7) El equipo con la apuesta menor es el que tiene más probabilidades de ganar. Imprime ese dato por consola SIN USAR un operador if/else o un operador ternario.
if (team1 > team2) console.log('Team2 tiene más probabilidades de ganar')
else if (team1 < team2) console.log('Team1 tiene más probabilidades de ganar')
else console.log('Empate')

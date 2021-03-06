// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

let soccerTeams = [
  {
    "nome" : "Sassuolo",
    "punti" : 0,
    "falli" : 0
  },
  {
    "nome" : "Milan",
    "punti" : 0,
    "falli" : 0
  },
  {
    "nome" : "Inter",
    "punti" : 0,
    "falli" : 0
  },
  {
    "nome" : "Torino",
    "punti" : 0,
    "falli" : 0
  },
  {
    "nome" : "Lazio",
    "punti" : 0,
    "falli" : 0
  }
]

let squadreBrutte = [];

for(let i = 0; i < soccerTeams.length; i++){
  soccerTeams[i].punti = Math.floor(Math.random() * 100 + 1);
  soccerTeams[i].falli = Math.floor(Math.random() * 100 + 1);
  let {nome, falli} = soccerTeams[i];
  squadreBrutte.push([nome, falli]);
}

console.log(squadreBrutte);

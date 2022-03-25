// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let bikes = [
  {
    "nome" : "Bici da città",
    "peso" : 15,
  },
  {
    "nome" : "Mountain bike",
    "peso" : 14
  },
  {
    "nome" : "Bici da corsa",
    "peso" : 6.5
  },
  {
    "nome" : "Fat bike",
    "peso" : 10
  },
  {
    "nome" : "Bici ibrida",
    "peso" : 15.4
  }
];

let pesoMinore = 0;

for(let i = 0; i < bikes.length; i++){
  if(pesoMinore == 0){
    pesoMinore = bikes[i].peso;
  } else if (bikes[i].peso < pesoMinore){
    pesoMinore = bikes[i].peso;
  } else {
    pesoMinore;
  }
}

for(let i = 0; i < bikes.length; i++){
  if (pesoMinore == bikes[i].peso){
    let {nome, peso} = bikes[i];
    document.getElementById("bikes").innerHTML =
    `
    <div class="bikes">La bici nel database con il peso minore è ${nome} ${peso + " kg"}</div>
    `;
  }
}
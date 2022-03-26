const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const categories = {
  "animatronics": ``,
  "laberinto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSJaan2QGIIcXDgNNeySTM6fuyM0HG2D0_cPyW39_nNa818kmJ5IzODgZCZp-ETfipUKx-L5J1iaJVW/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false`,
  "lego sumo": ``,
  "micro sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSW3RA8whq_qXI6DbDIakwYQYaivEt0IZ4ILGykDiOqJ1X2M_6iHe7mVUf5SX5vuX9W0Ofv5kzKQ80G/pubhtml?gid=168779283&amp;single=true&amp;widget=true&amp;headers=false`,
  "mini sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vTI0O6iSlOIrNRY2NuXTfI75nvU92X5vbLsaTYQ3nS5eiYtjzU52xrsML3R_Hjnc_cqDyW_vsfPRX4f/pubhtml?gid=739142431&amp;single=true&amp;widget=true&amp;headers=false`,
  "robofut": `https://docs.google.com/spreadsheets/d/e/2PACX-1vTFIf7ba5TmZrb_8xNoLYiQq03bbUZY5k9VkoLJJrHiQNzFCf2cDW7guf6_OWmgTnT4qD__LtxvnmN2/pubhtml?gid=698525493&amp;single=true&amp;widget=true&amp;headers=false`,
  "seguidor de lineas abierto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vRWy3Ad4YZfUJcvnGE-M6SbBxo9CVbBNbkbWC0sgtbSMhVLLtWbKIqEHTMuqpVDPQowqc2YU293n8K4/pubhtml?gid=407408284&amp;single=true&amp;widget=true&amp;headers=false`,
  "Seguidor de lineas lego kit": ``,
  "reto lego": ``
};

document.title = params.category.charAt(0).toUpperCase() + params.category.slice(1);

if (categories[params.category] != ''){
  document.getElementById("Title").innerText =params.category.charAt(0).toUpperCase() + params.category.slice(1);
  document.getElementById("sheets").src=categories[params.category];
}
else{
  document.getElementById("sheets").remove();
  $("#Title").after("<div id='error-message' class='container-fluid'><h2>Contenido no disponible<h2></div>")
}
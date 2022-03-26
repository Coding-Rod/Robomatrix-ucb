const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const categories = {
  "animatronics": ``,
  "laberinto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false`,
  "lego sumo": ``,
  "micro sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "mini sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "robofut": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "seguidor de lineas abierto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
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
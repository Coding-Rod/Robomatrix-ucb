const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params.category);
const categories = {
  "animatronics": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1154055729&amp;single=true&amp;widget=true&amp;headers=false`,
  "laberinto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false`,
  "lego sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "micro sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "mini sumo": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "robofut": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "seguidor de lineas abierto": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "Seguidor de lineas lego kit": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`,
  "reto lego": `https://docs.google.com/spreadsheets/d/e/2PACX-1vSmrpRwiI_jBK7ngUEJ-qVqCL4uZGeEqtQkYW9F_g-_4jC0V9-IkSBzjav4LcVKA95KhdnBjKnQqB8Y/pubhtml?gid=1743632872&amp;single=true&amp;widget=true&amp;headers=false`
};

document.getElementById("Title").innerText =params.category.charAt(0).toUpperCase() + params.category.slice(1);
document.getElementById("sheets").src=categories[params.category]
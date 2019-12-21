function SAVE(row,col) {
  let data = document.getElementById(`text${row},${col}`).value;
  let td = document.getElementById(`savetext${row},${col}`);
  td.innerHTML = data;
}

function CreateTable(x, y){
  let form = document.getElementById("UserForm");
  form.style = "display: none";

  let fun = document.getElementById("Functions");
  fun.style = "display: block";

  let tableCode = `<table id="UserTable"><tbody>`;
    for (let row = 0; row < x; ++row) {
      tableCode += `<tr>`;
        for (let col = 0; col < y; ++col) {
          tableCode += `<td id="savetext${row},${col}"><form><input type="textarea" id="text${row},${col}"><input type="button" onclick="SAVE(${row}, ${col})" value="Сохранить"></form></td>`;
        }
      tableCode += `</tr>`;
    }
  tableCode += `</tbody></table>`;
  tables.innerHTML = tableCode;
}

function setBorder() {
let tds = document.querySelectorAll("#tables td");
  tds.forEach(td => {
    td.style = `border: ${document.getElementById(`size_table`).value}px ${document.getElementById(`option_for_table`).value}`;
  });
}

function addTitle() {
  let caption = document.querySelectorAll(`#tables caption`).length == 0 ? document.createElement(`caption`) : document.querySelectorAll(`#tables caption`)[0];
  let table = document.querySelector(`#tables table`);
  caption.innerHTML = document.querySelector(`#title`).value;
  table.insertBefore(caption, table.childNodes[0]);
}

function removeTr() {
let trs = document.querySelectorAll(`#tables tr`);
if (document.querySelector(`#Num_of_row`).value >= trs.length) alert("Неверное кол-во строк!");
  else {
    let tr = trs[document.querySelector(`#Num_of_row`).value];
    tr.parentNode.removeChild(tr);
  }
}

function makeMagic() {
  let tds = document.querySelectorAll(`#tables td`);
  let td = tds[Math.floor(Math.random() * tds.length)];
  if (!tds.length) return;
  if (Math.random() >= 0.5) {
    td.style.backgroundColor = randColor();
    td.style.color = randColor();
    td.style.fontSize = `${Math.floor(Math.random() * 10 + 15)}pt`;
  } 
  else {
    let coords = td.id.split(`savetext`)[1];
    let row = +coords.split(`,`)[0];
    let col = +coords.split(`,`)[1];
    td.innerHTML = `<form><input type="textarea" id="text${row},${col}"><input type="button" onclick="SAVE(${row}, ${col})" value="Cохранить"></form>`;
  }
}

function randColor() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`;
}

function removeTable() {
  let form = document.getElementById("UserForm");
    form.style = "display: block";
  let fun = document.getElementById("Functions");
    fun.style = "display: none";
  let tables = document.getElementById("tables");
    tables.innerHTML = "";
}



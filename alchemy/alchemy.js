let chooseTable;

let chooser = document.getElementById("choose");

function changeTable()
{
    let table = document.getElementById("chooseTable");
    let chooser = document.getElementById("choose");
    table.innerHTML = document.getElementById(chooser.selectedIndex).innerHTML;
}
changeTable();
chooser.addEventListener("change", changeTable);
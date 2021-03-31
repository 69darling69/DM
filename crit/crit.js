crit = [
    {
        "Успех": "Один Успех",
        "d200": "1",
        "Провал": "Один Провал"
    },
    {
        "Успех": "Два Успех",
        "d200": "2",
        "Провал": "Два Провал"
    }
]

let table = document.getElementById("critTable");
let random = document.getElementById("random");

for (let i = 0; i < crit.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = "<td>" + crit[i]["Успех"] + "</td><td>" + crit[i]["d200"] + "</td><td>" + crit[i]["Провал"] + "</td>";
    table.appendChild(tr);
}

function RandomCrit()
{
    i = Math.floor(Math.random() * crit.length);
    random.innerHTML = "<td>" + crit[i]["Успех"] + "</td><td>" + crit[i]["d200"] + "</td><td>" + crit[i]["Провал"] + "</td>";
}

function ChooseCrit()
{
    i = document.getElementById("text").value - 1;
    random.innerHTML = "<td>" + crit[i]["Успех"] + "</td><td>" + crit[i]["d200"] + "</td><td>" + crit[i]["Провал"] + "</td>";
}
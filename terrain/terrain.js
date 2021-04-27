function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let map = document.getElementById("map")

function Generate()
{
    let sizeX = document.getElementById("width").value
    let sizeY = document.getElementById("height").value
    let divSize = document.getElementById("size").value
    let empty = document.getElementById("empty").value
    map.innerHTML = ""
    for (let i = 0; i < sizeY; i++)
    {
        let tr = document.createElement("tr")
        for (let j = 0; j < sizeX; j++)
        {
            let td = document.createElement("td")
            tr.appendChild(td)
            let div = document.createElement("div")
            div.id = (j+1) + " " + (i+1)
            // div.textContent = div.getAttribute("pos")
            div.style.width = divSize + "px"
            div.style.height = divSize + "px"
            let value = -1
            if (getRandomInt(0, 100) < empty)
            {
                console.log(1)
                value = getRandomInt(0, 104)
            }
            div.style.cssText += "background-image: url(./forest/" + value + ".png);"
            td.appendChild(div)
        }
        map.appendChild(tr)
    }
}
Generate()
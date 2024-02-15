const searchItem = document.getElementById('search');
const charContainer = document.getElementById('character-list')

searchItem.addEventListener('keyup', getSearchInput)

let actors = [];
async function fetchData() {
    try {
        let res = await fetch('https://hp-api.onrender.com/api/characters')
        actors = await res.json()
        showData(actors)
    }
    catch (err) {
        console.log(err)
    }
}

function getSearchInput(e) {
    let input = e.target.value
    let filteredItem = actors.filter(actor => {
        return (actor.name.toLowerCase().includes(input.toLowerCase()))
    })
    showData(filteredItem)
}

function showData(dataList) {
    let item = dataList.map(data => {
        return (
            `<li class="item">
            <div id="data">
                <h2> ${data.name}</h2>
                <p>House: ${data.house}</p>
            </div>
            <img src = ${data.image}>
        </li>`)
    })
    let htmlData = item.join("")
    charContainer.innerHTML = htmlData

}

fetchData()


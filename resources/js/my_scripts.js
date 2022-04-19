

document.getElementById("submitBtn").addEventListener("click", onclick)


function onclick(){
    const text = document.getElementById("search").value
    var limit = document.getElementById("limit").value
    if(limit >= 100){
        limit = 100
    }
    if(limit <= 0){
        limit = 25
    }
    const search = async() => {
        try {
            const res = await(fetch(`https://www.reddit.com/r/${text}/top.json?limit=${limit}&t=year`))
            const jsonData = await res.json()
            // console.log(jsonData)
            return jsonData
        } catch (error) {
            console.log(error)
        }
    }
    search()
    .then(data => {
        console.log(data.data.children) 
        const arr = data.data.children
        let cards = ''
        arr.forEach(element => {
            console.log(element) 
            cards += `<div class="card" style="width: 18rem;">
                        <img src="${element.data.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`
        });
        document.getElementById("results").innerHTML = cards
    })
}
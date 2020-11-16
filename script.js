document.querySelector("#button").addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => response.json())
    .then( (data) => {
        document.querySelector("img").setAttribute("src",data.message)
        // document.getElementById("button").insertAdjacentHTML("afterend",'<br><br><img width = "400px" style = "margin-left: 10%" src ="'+data.message+'">')
        console.log(data);
    })
})

// document.querySelector("#button").addEventListener("click", function(){
    // fetch("https://anapioficeandfire.com/api/characters/583")
    // .then( response => response.json())
    // .then( (data) => {
    //     console.log(data);
    // })
// })

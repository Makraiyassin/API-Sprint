function dog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => response.json())
    .then( (data) => {
        document.querySelector("img").setAttribute("src",data.message)
        // document.getElementById("button").insertAdjacentHTML("afterend",'<br><br><img width = "400px" style = "margin-left: 10%" src ="'+data.message+'">')
        console.log(data);
    })
}

function persoGameOfThrone() {
        let rand = Math.floor(Math.random()*2000)+1
        //https://www.anapioficeandfire.com/api/characters/1880 = Rob stark , 583 = Jhon Snow
        fetch(`https://www.anapioficeandfire.com/api/characters/${rand}`)
        .then( response => response.json())
        .then( (data) => {
            document.getElementById("info").innerText = `name: ${data.name} \ngender: ${data.gender} \nborn: ${data.born}\ntitles: ${data.titles} \naliases: ${data.aliases}`
            console.log(data);
    })    
}

document.querySelector("#button").addEventListener("click", function(){
    dog()
    persoGameOfThrone()
})

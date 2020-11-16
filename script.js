document.querySelector("#button").addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => response.json())
    .then( (data) => {
        document.getElementById("button").insertAdjacentHTML("afterend",'<br><br><img src ="'+data.message+'">')
        console.log(data);
    })
})
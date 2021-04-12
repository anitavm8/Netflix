const videoRow = document.getElementById('posterImg')
var btn = document.querySelector("button")


btn.addEventListener("click", function (e){
    e.preventDefault()
    var movieText = document.querySelector("#movieSearch").value

    async function getSearchData (){
        let searchData =await (await fetch ("http://www.omdbapi.com/?apikey=b5fc6487&s="+movieText)).json()
        console.log(searchData)
        
        var body = document.querySelector("#posterImg")
        body.innerHTML = ""

        for (let index = 0; index < searchData.Search.length; index++) {
            
            let posterInfo = searchData.Search[index]
            console.log(posterInfo.Poster)
            
            let videoCol = document.createElement("div")
            videoCol.className = "col-sm videoPoster"
            videoCol.id = posterInfo.imdbID
            

        
            let img = document.createElement("img")
            img.src = posterInfo.Poster
            videoCol.appendChild(img);
        
            let title = document.createElement("p")
            title.innerHTML = posterInfo.Title
            const containerImg = document.getElementById(index)
        
            videoCol.appendChild(title)
        
            videoRow.appendChild(videoCol)
            
            var videoPoster = document.getElementById(posterInfo.imbdID)

            // url: 'https://www.googleapis.com/youtube/v3/search'
            // gapi.client.setApiKey("AIzaSyD_a3HiYj3mvjOvmjvE6trsRJHOC2qACM4")

            videoPoster.addEventListener("click", function(e) {
                e.preventDefault()
                alert("We did it!!")
}) 

        }}
        getSearchData()
        
        
})





// async function getMoviedetails (){
//i     let searchMoviedetails =await (await fetch ("http://www.omdbapi.com/?i=tt1650062&apikey=b5fc6487")).json()
//     console.log(searchMoviedetails)
//     }
//     getMoviedetails()




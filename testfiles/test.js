var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

//call local storage here to retrieve data

https://www.googleapis.com/civicinfo/v2/elections
function congressinfo(searchValue){
    //searchValue = encodeURI(searchValue);
    var searchURL = "https://api.propublica.org/congress/v1/116/nominees/state/VA.json";
    console.log(searchURL)
$.ajax({

    url: searchURL, 
    headers: {'X-API-Key' : 'KZ2YzzrmOQNnLGyYy9Mo4tc0Rmflw1aZDrouL2aV'},
    type: "GET"
}).then (function(response){ 
    console.log(response)
//append icons to screen and data...

//localStorage.setItem("searchValue", response.main.temp);
} )
    

}

$("#searchbutton").on("click", function (event) {
    event.preventDefault()
    var value = $("#searchbar").val().trim();
    console.log(value)
    weatherResults(value)
  })


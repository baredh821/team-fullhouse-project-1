var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

//call local storage here to retrieve data

https://www.googleapis.com/civicinfo/v2/elections
function weatherResults(searchValue){
    searchValue = encodeURI(searchValue);
    var searchURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCfJ43LRmmtdLASppmxY0NB5aIfzi5knmY&address=" + searchValue
    console.log(searchURL)
$.ajax({

    url: searchURL, 
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


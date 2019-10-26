var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

//call local storage here to retrieve data

https://www.googleapis.com/civicinfo/v2/elections
function electionInfo(searchValue) {
    searchValue = encodeURI(searchValue);
    var searchURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCfJ43LRmmtdLASppmxY0NB5aIfzi5knmY&address=" + searchValue
    console.log(searchURL)
    var searchURL1 = "https://api.propublica.org/congress/v1/116/nominees/state/VA.json";
    console.log(searchURL1)
    $.ajax({

        url: searchURL,
        type: "GET"
    }).then(function (response) {
        console.log(response)
    })

    $.ajax({

        url: searchURL1,
        headers: { 'X-API-Key': 'KZ2YzzrmOQNnLGyYy9Mo4tc0Rmflw1aZDrouL2aV' },
        type: "GET"
    }).then(function (response1) {
        console.log(response1)
    })
}

$("#searchbutton").on("click", function (event) {
    event.preventDefault()
    var value = $("#searchbar").val().trim();
    console.log(value)
    electionInfo(value)
})


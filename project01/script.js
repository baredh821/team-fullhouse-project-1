// var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

https://www.googleapis.com/civicinfo/v2/elections
function electionInfo(searchValue, searchValue1) {
    console.log(searchValue)
    var searchURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCfJ43LRmmtdLASppmxY0NB5aIfzi5knmY&address=" + searchValue
    console.log(searchURL)
    var searchURL1 = "https://api.propublica.org/congress/v1/116/nominees/state/" + searchValue1 + ".json";
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
    var value = $("#houseNo").val().trim();
    var value1 = $("#StreetName").val().trim();
    var value2 = $("#city").val().trim();
    var value3 = $("#state").val().trim();
    var value4 = $("#zipcode").val().trim();
    var allValues = (value + "%20" + value1 + "%20" + value2 + "%20" + value3 + "%20" + value4);
    electionInfo(allValues, value3);
})


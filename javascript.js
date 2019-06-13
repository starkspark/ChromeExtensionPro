// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-01&end_date=2019-06-12&api_key=iKgIpLjBt6aDCt8hXYxsgbR8TKT6cW8ghYEWP1YD', true)
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY
// request.open('GET', 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iKgIpLjBt6aDCt8hXYxsgbR8TKT6cW8ghYEWP1YD', true)
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)

    let count = 0;
    let newDiv = document.createElement('div');


    for (let element in data){
        
    }
//     while (count < 5){
//         console.log(asteroids)
//         count++
//         // for (let element in asteroids){
//         //     newDiv.innerHTML = element[count]

//         //     
//         // }
//     }
//   }
}

// Send request
request.send()
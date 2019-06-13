fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-12&end_date=2019-06-12&api_key=iKgIpLjBt6aDCt8hXYxsgbR8TKT6cW8ghYEWP1YD')

.then(response => response.json())
.then(response => parseData(response))


function parseData(data){
  // console logs entire data object
  console.log(data);
  // console.log(typeof data)
  let asteroidID = [];
  let name = [];
  let hazard = [];
  let miles = [];

  // iterate through each key in data
  for (let element in data){
    // console.log(element)

    // if key called "near_earth_objects" is found
    if (element === 'near_earth_objects'){
      // console.log('found it!', data[element])

      // save that earth objects key in a variable
      let objectsArray = data[element];
      // console.log(typeof objectsArray)

      // iterate through that earth objects key
      for (let date in objectsArray){
        // console.log(objectsArray[date])

        // let date array (an object)= the arrays inside objectsArray
        let dateArray = objectsArray[date]
        // console.log(typeof dateArray)

        for (let element in dateArray){
          // console.log(typeof element)
          // console.log('hey', dateArray[element])
          let lastKeys = dateArray[element];

          for (let element in lastKeys){
            // console.log('typeof!', typeof lastKeys)
            // console.log(lastKeys[element])
            if (element === 'id'){
              // console.log(element)
              asteroidID.push(lastKeys[element]);
            }
            if (element === 'name'){
              // console.log(element)
              name.push(lastKeys[element]);
            }
            if (element === 'is_potentially_hazardous_asteroid'){
              // console.log(element)
              hazard.push(lastKeys[element]);
            } 
            // if (element === 'close_approach_data'){
            //   for (let closeApproach in element){
            //     console.log(element[closeApproach])
            //     let lastApproach = lastKeys[element];
            //     // console.log(lastApproach)
            //     // if (lastApproach === 'kilometers'){
            //     //   console.log('lastApproach')
            //     // }
            //     // console.log(typeof lastApproach)
            //     // console.log(typeof element)
            //   }
            //   // hazard.push(lastKeys[element])
            // }
            }
          }
        }
        console.log(asteroidID)
        console.log(name)
        console.log(hazard)
      }
    }
  }


  class AsteroidBox {
    constructor(asteroid){
      this.name = '';
      this.asteroidID = '';
      this.hazard = '';
    }
  }

window.onload = function(){
  // create new empty div on page
  let newDiv = document.createElement('div');

  

}

//     let count = 0;
//     let newDiv = document.createElement('div');


//     for (let element in data){
        
//     }
// //     while (count < 5){
// //         console.log(asteroids)
// //         count++
// //         // for (let element in asteroids){
// //         //     newDiv.innerHTML = element[count]

// //         //     
// //         // }
// //     }
// //   }
// }

// // Send request
// request.send()
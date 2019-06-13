fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-12&end_date=2019-06-12&api_key=iKgIpLjBt6aDCt8hXYxsgbR8TKT6cW8ghYEWP1YD')

.then(response => response.json())
.then(response => parseData(response))


function parseData(data){
  // console logs entire data object
  console.log(data);
  // console.log(typeof data)
  const asteroidID = [];
  const name = [];
  const hazard = [];
  const miles = [];

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

        // let asteroidObj = asteroidID.reduce((acc, element, index) => {
        //   acc[element] = 
        // }, {})

        let zipped = asteroidID.map((element, index) => [element, name[index], hazard[index]])

        console.log(zipped)

        let asteroidObj = {};

        for (let arrays of zipped){
          for (let elements of arrays){
            let objInAsteroidObj = {};
            objInAsteroidObj[elements] = arrays[elements]
          }
        }

        console.log(asteroidObj);

        let test = new AsteroidBox;
        console.log('test', test)
      }
    }
  }


  class AsteroidBox {
    constructor(asteroid){
      this.name = asteroid.name;
      this.asteroidID = asteroid.asteroidID;
      this.hazard = '';
      this.size = '';
    }
  }

window.onload = function(){

  // map through one array (name, perhaps), keeping track of value & index
  
  // use that index to access corresponding elements in other arrays
  // put all that information into an object
  // iterate through that object

  // for the length of the object
  // create a new instance of the constructor function
  // create new createElement div 
  // input each info from each asteroid into constructor function
  // input those instances into each div



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
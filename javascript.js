fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-06-13&end_date=2019-06-13&api_key=iKgIpLjBt6aDCt8hXYxsgbR8TKT6cW8ghYEWP1YD')

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

        let zipped = asteroidID.map((element, index) => [element, name[index], hazard[index]])

        console.log('zipped: ',zipped)

        let asteroidArr = [];

        for (let arrays of zipped){
          let objInAsteroidObj = {};
          objInAsteroidObj.asteroidID = arrays[0]
          objInAsteroidObj.name = arrays[1]
          objInAsteroidObj.hazard = arrays[2]
          asteroidArr.push(objInAsteroidObj)
        }

        console.log('output array: ', asteroidArr)

        let asteroidCount = 1;
        
        for (let cards = 0; cards < asteroidArr.length; cards++){
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class','asteroidArrID');

          let cardTitle = document.createElement('p');
          cardTitle.innerHTML = 'Asteroid #' + asteroidCount;
          newDiv.append(cardTitle);

          let title = document.createElement('h2');
          title.innerHTML = asteroidArr[cards]['name'];
          newDiv.append(title);

          let titleID = document.createElement('h3');
          titleID.innerHTML = asteroidArr[cards]['asteroidID'];
          newDiv.append(titleID);

          let hazardBool = document.createElement('p');
          hazardBool.innerHTML = asteroidArr[cards]['hazard'];
          newDiv.append(hazardBool);
          
          document.body.append(newDiv);
          asteroidCount++;
        }

        // let test = new AsteroidBox;
        // console.log('test', test)
      }
    }
  }


  // class AsteroidBox {
  //   constructor(asteroid){
  //     this.name = asteroid.name;
  //     this.asteroidID = asteroid.asteroidID;
  //     this.hazard = '';
  //     // this.size = '';
  //   }
  // }

window.onload = function(){


}
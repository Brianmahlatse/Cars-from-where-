// Function to get the town code based on the town name
function getTownCodeByName(townName){
    const townCode={
                      'Paarl':'CJ',
                      'Bellville' :'CY',
                      'Stellenbosch' :'CL',
                      'Malmesbury' :'CK',
                      'Cape Town' :'CA',
                      'Kuilsriver' :'CF'
                    };
    return townCode[townName];
};

// Function to get an array of unique values of a specified feature from an array of cars
function getUnique(cars, feature){
    // Create a new Set object by mapping over the input array of cars and extracting the value 
    // of the specified feature from each car object using the provided 'feature' string as the key.
    // Using a Set ensures that only unique values of the feature are included in the final result
    // Store the unique feature values in a new Set object called 'carFeature'
    const carFeature=new Set(cars.map(car => car[feature]));  
    
    // Convert the Set object back into an array using the spread operator
    // and return the resulting array of unique feature values
    return [...carFeature];
   
};

// This function returns the make of the most popular car in the array
function mostPopularCar(cars) {
let carMakers = getUnique(cars, 'make');
let most_popularCar; // String to store the make of the most popular car
let numberOfmostPopularCar = 0; // Number to store the frequency of the most popular car
let numberOfCarMade = 0; // Number to store the frequency of the current car make

// Loop through all unique car makes to find the most popular one
for (let modelIndex = 0; modelIndex <carMakers.length; modelIndex++) {
  // Loop through all cars in the array to count the frequency of each car make
  for (let car of cars) {
    if (car.make === carMakers[modelIndex]) {
      numberOfCarMade++;
    }
  };
  
  // Update the most popular car if the current car make has a higher frequency
  if (numberOfCarMade > numberOfmostPopularCar) {
    numberOfmostPopularCar = numberOfCarMade;
    most_popularCar = carMakers[modelIndex];
  };
  
  // Reset the counter for the current car make
  numberOfCarMade = 0;
};

// Return the make of the most popular car
return most_popularCar;
};

// This function returns the number of Nissans from CK in the array
function nissansFromCK(cars){
let numberOfnissansFromCK=0; // Number to store the frequency of Nissans from CK

// Loop through all cars in the array to count the Nissans from CK
for(let car of cars){
  // Check if the current car is a Nissan from CK
  if(car.reg_number.startsWith('CK') && car.make==='Nissan'){
    numberOfnissansFromCK++;
  };
};

// Return the frequency of Nissans from CK
return numberOfnissansFromCK;
};

// This function returns the town code of the town with the most blue cars in the array
function mostBlueCars(cars){
  let NumberOfBlueCars=0; // Number to store the frequency of blue cars in each town
  let most_blueCars=0; // Number to store the frequency of blue cars in the town with the most blue cars
  let townWithMostBlueCars; // String to store the town code of the town with the most blue cars
  const townRegistration=getUnique(cars, 'reg_number'); // Get an array of unique town codes from the registration numbers in the array

  // Loop through all unique town codes to count the blue cars in each town
  for(let townCode of townRegistration){
      // Loop through all cars in the array to count the blue cars in the current town
      for(let car of cars){
          if(car.color==='blue' && car.reg_number.startsWith(townCode)){
              NumberOfBlueCars++;
          };
      };
      // Update the town with the most blue cars if the current town has more blue cars
      if(NumberOfBlueCars>=most_blueCars){
        most_blueCars=NumberOfBlueCars;
        townWithMostBlueCars=townCode;
      };
      // Reset the counter for the current town
      NumberOfBlueCars=0;
  };
  // Return the town code of the town
  return townWithMostBlueCars;
};


// Define a function that takes an array of cars as its argument
function fewestOrangeCars(cars){
  
  // Get an array of unique town codes from the registration numbers
  let townRegistration=getUnique(cars,'reg_number');
  
  // Initialize variables to keep track of the number of orange cars and the town with the fewest orange cars
  let NumberOfOrangeCars=0;
  let fewest_orangeCars=cars.length;
  let townWithfewestOrangeCars;
  
  // Loop through each town code
  for(let townCode of townRegistration){
    
      // Loop through each car in the array of cars
      for(let car of cars){
          
          // If the color of the current car is 'orange' and its registration number starts with the current town code,
          // increment the number of orange cars for the current town
          if(car.color==='orange' && car.reg_number.startsWith(townCode)){
              NumberOfOrangeCars++; 
          };
      };
      
      // If the number of orange cars for the current town is less than the fewest orange cars found so far,
      // update the fewest orange cars and the town with the fewest orange cars
      if( 1<=NumberOfOrangeCars && NumberOfOrangeCars<=fewest_orangeCars){
        fewest_orangeCars=NumberOfOrangeCars; 
        townWithfewestOrangeCars=townCode; 
      };
      
      // Reset the number of orange cars for the next town
      NumberOfOrangeCars=0; 
  };
  
  // Return the town with the fewest orange cars
  return townWithfewestOrangeCars; 
};

// Function to find the most popular car model overall
function mostPopularModel(cars) {

const carModel = getUnique(cars, 'model'); // Get an array of all car models
let most_popularModel; // Variable to store the most popular car model
let numberOfmostPopularModel = 0; // Variable to keep track of the number of cars with the most popular model
let numberOfCarModel = 0; // Variable to keep track of the number of cars with the current model

for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
  
  for (let car of cars) {
    
    if (car.model === carModel[modelIndex]) {
      numberOfCarModel++;
    }
  };
  
  if (numberOfCarModel > numberOfmostPopularModel) {
    numberOfmostPopularModel = numberOfCarModel;
    most_popularModel = carModel[modelIndex];
  };
  

  numberOfCarModel = 0;
};

// Return the most popular car model
return most_popularModel;
};

// Function to find the most popular car model with registration number starting with 'CL'
function mostPopularCL(cars) {
const carModel =getUnique(cars, 'model'); // Get an array of all car models
let most_popularModel; // Variable to store the most popular car model
let numberOfmostPopularModel = 0; // Variable to keep track of the number of cars with the most popular model
let numberOfCarModel = 0; // Variable to keep track of the number of cars with the current model

for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
  
  for (let car of cars) {
    
    if (car.model === carModel[modelIndex] && car.reg_number.startsWith('CL')) {
      numberOfCarModel++;
    }
  };
  
  if (numberOfCarModel > numberOfmostPopularModel) {
    numberOfmostPopularModel = numberOfCarModel;
    most_popularModel = carModel[modelIndex];
  };
  
  numberOfCarModel = 0;
};

// Return the most popular car model with registration number starting with 'CL'
return most_popularModel;
};

// Returns the least popular car model that has a registration number starting with "CF"
function leastPopularCF(cars) {
// Get an array of all the car models in the dataset
const carModel = getUnique(cars, 'model'); 
let least_popularModel; 
let numberOfleastPopularModel = cars.length; 
let numberOfCarModel = 0; 

// Loop through each car model
for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
  // Loop through each car and count the number of cars that match the current car model and have a registration number starting with "CF"
  for (let car of cars) {
    if (car.model === carModel[modelIndex] && car.reg_number.startsWith('CF')) {
      numberOfCarModel++;
    }
  };
  
  // If the current car model is the least popular so far, update the least popular model and the number of cars with that model
  if (numberOfCarModel >= 1 && numberOfCarModel < numberOfleastPopularModel) {
    numberOfleastPopularModel = numberOfCarModel;
    least_popularModel = carModel[modelIndex];
  };
  
  // Reset the number of cars with the current car model before moving on to the next one
  numberOfCarModel = 0;
};

// Return the least popular car model
return least_popularModel;
};

// Returns an array of all the cars in the dataset that have a registration number starting with the code for the given town name
function carsForTown(townname){
  let townCode=getTownCodeByName(townname);
  let townCars=[];
  for(let car of cars){
      if(car.reg_number.startsWith(townCode)){
              townCars.push(car);

      };
  };
  return townCars;
};

// Returns an array of all the cars in the given town that have the given color
function numberOfCars(carColor, townname){
    const townCode=getTownCodeByName(townname);
    let carsWithColorInTown=[];

    for(let car of cars){
      if(car.reg_number.startsWith(townCode) && car.color===carColor){
              carsWithColorInTown.push(car);

      };
  };
  return carsWithColorInTown;
};

// Returns an array of all the cars in the given town that have the given color and model
function numberOfCarsPerModel(carColor, carModel, townname){
    const townCode=getTownCodeByName(townname);
    let carModelWithColorInTown=[];

    for(let car of cars){
      if(car.reg_number.startsWith(townCode) && car.color===carColor && car.model===carModel){
              carModelWithColorInTown.push(car);

      };
    };
    return carModelWithColorInTown;

};

// This function takes a town name as input and returns the most popular car color in that town.
function mostPopularColor(townname){
    // Get the town code based on the town name
    const townCode=getTownCodeByName(townname);
    
    // Initialize variables to keep track of the most popular car color
    let carColorCount=0;
    let mostcarColorCount=0;
    let mostPopularCarColorInTown;
    
    // Create an array to store all unique car colors in the list of cars
    const colors=[];
    for(let car of cars){
      if(!colors.includes(car.color)){
          colors.push(car.color);
      };
    };
    
    // Loop through each unique car color and count the number of cars with that color in the specified town
    for(let carColor of colors){
        for(let car of cars){
            if(car.reg_number.startsWith(townCode) && car.color===carColor){
                  carColorCount++;
            };
        };
        
        // Check if the current car color is more popular than the previous most popular color
        if(carColorCount>mostcarColorCount){
              mostcarColorCount=carColorCount;
              mostPopularCarColorInTown=carColor;
        };

        // Reset the car color count for the next iteration
        carColorCount=0;
    };
    
    // Return the most popular car color in the specified town
    return mostPopularCarColorInTown;
};

const cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
  },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
  },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
  },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
  },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
  },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
  }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
  }];

  const assert = require('assert');
  assert.equal(mostPopularCar(cars), 'Toyota');
  
  assert.equal(nissansFromCK(cars), 1);
  
  assert.equal(mostBlueCars(cars), 'CA');
  
  assert.equal(fewestOrangeCars(cars), 'CA');
  
  assert.equal(mostPopularModel(cars), 'Corolla');
  
  assert.equal(mostPopularCL(cars), 'Polo');
  
  assert.equal(leastPopularCF(cars), 'Juke');
  
  assert.deepEqual(carsForTown("Malmesbury"), [{"color":"orange","make":"Nissan","model":"Juke","reg_number":"CK 32655"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 57166"},{"color":"orange","make":"Ford","model":"Ranger","reg_number":"CK 22692"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 41166"}])
  assert.deepEqual(carsForTown('Paarl'), [{"color":"white","make":"Nissan","model":"Micra","reg_number":"CJ 16103"},{"color":"white","make":"Toyota","model":"Hilux","reg_number":"CJ 16455"},{"color":"orange","make":"Ford","model":"Fiesta","reg_number":"CJ 67577"}]);
  
  assert.deepEqual(numberOfCars('blue', 'Cape Town'), [{"color":"blue","make":"Volkswagen","model":"Jetta","reg_number":"CA 46977"},{"color":"blue","make":"Ford","model":"Ranger","reg_number":"CA 77852"}, { "color": "blue", "make": "Ford", "model": "Fiesta",  "reg_number": "CA 34015" }]);
  assert.deepEqual(numberOfCars('red', 'Paarl'),[]);
  
  assert.deepEqual(numberOfCarsPerModel('orange','Hilux','Bellville'),[{"color":"orange","make":"Toyota","model":"Hilux","reg_number":"CY 52435"}])
  assert.deepEqual(numberOfCarsPerModel('red','Fiesta','Cape Town'),[])
  
  assert.equal(mostPopularColor('Bellville'), 'white');
  

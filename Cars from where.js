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

// Function to get unique town codes from an array of cars
function getTown(cars){
const townRegistration=new Set(cars.map( car => car.reg_number.split(" ")[0]));
return [...townRegistration];
};

// This function returns the make of the most popular car in the array
function mostPopularCar(cars) {
let carMakers = getUnique(cars,'make') ;//get the unique car makers
let most_popularCar; // String to store the make of the most popular car
let numberOfmostPopularCar = 0; // Number to store the frequency of the most popular car
let numberOfCarMade = 0; // Number to store the frequency of the current car make

// Loop through all unique car makes to find the most popular one
for (let makeIndex = 0; makeIndex <carMakers.length; makeIndex++) {
  
  numberOfCarMade=cars.filter(car => car.make === carMakers[makeIndex]).length

  // Update the most popular car if the current car make has a higher frequency
  if (numberOfCarMade > numberOfmostPopularCar) {
    numberOfmostPopularCar = numberOfCarMade;
    most_popularCar = carMakers[makeIndex];
  };
  
  // Reset the counter for the current car make
  numberOfCarMade = 0;
};

// Return the make of the most popular car
return most_popularCar;
};

// This function returns the number of Nissans from CK in the array
function nissansFromCK(cars){
    // Number to store the frequency of Nissans from CK
    //get all Nissans cars from CK and store them in array 
    // get the length that array
    const numberOfnissansFromCK=cars.filter(car =>  car.reg_number.startsWith('CK') && car.make==='Nissan').length; 

    // Return the frequency of Nissans from CK
    return numberOfnissansFromCK;
};

// This function returns the town code of the town with the most blue cars in the array
function mostBlueCars(cars){
  let NumberOfBlueCars=0; // Number to store the frequency of blue cars in each town
  let most_blueCars=0; // Number to store the frequency of blue cars in the town with the most blue cars
  let townWithMostBlueCars; // String to store the town code of the town with the most blue cars
  const townRegistration=getTown(cars); // Get an array of unique town codes from the registration numbers in the array

  // Loop through all unique town codes to count the blue cars in each town
  for(let townCode of townRegistration){
      // number of blue cars in current town
      NumberOfBlueCars=cars.filter(car => car.color==='blue' && car.reg_number.startsWith(townCode)).length
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
  let townRegistration=getTown(cars);
  
  // Initialize variables to keep track of the number of orange cars and the town with the fewest orange cars
  let NumberOfOrangeCars=0;
  let fewest_orangeCars=cars.length;
  let townWithfewestOrangeCars;
  
  // Loop through each town code
  for(let townCode of townRegistration){
      // number of orange cars in current town
      NumberOfOrangeCars=cars.filter(car => car.color==='orange' && car.reg_number.startsWith(townCode)).length
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

const carModel = getUnique(cars,'model'); // Get an array of all car models
let most_popularModel; // Variable to store the most popular car model
let numberOfmostPopularModel = 0; // Variable to keep track of the number of cars with the most popular model
let numberOfCarModel = 0; // Variable to keep track of the number of cars with the current model

for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
 
  //total number of  cars for current model
  numberOfCarModel=cars.filter(car => car.model === carModel[modelIndex]).length
      
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
const carModel = getUnique(cars,'model'); // Get an array of all car models
let most_popularModel; // Variable to store the most popular car model
let numberOfmostPopularModel = 0; // Variable to keep track of the number of cars with the most popular model
let numberOfCarModel = 0; // Variable to keep track of the number of cars with the current model

for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
    // total number of cars for current model
    numberOfCarModel=cars.filter(car => car.model === carModel[modelIndex] && car.reg_number.startsWith('CL')).length;
 
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
const carModel = getUnique(cars,'model'); 
let least_popularModel; 
let numberOfleastPopularModel = cars.length; 
let numberOfCarModel = 0; 

// Loop through each car model
for (let modelIndex = 0; modelIndex <carModel.length; modelIndex++) {
  //number of cars that match the current car model and have a registration number starting with "CF"
  numberOfCarModel=cars.filter(car => car.model === carModel[modelIndex] && car.reg_number.startsWith('CF')).length ;

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
  // Get the town code for the given town name
  const townCode=getTownCodeByName(townname);
  // Filter the cars in the dataset to only those with a registration number that starts with the town code
  const townCars=cars.filter(car => car.reg_number.startsWith(townCode));
  // Return the filtered array of cars
  return townCars;
};

// Returns an array of all the cars in the given town that have the given color
function numberOfCars(carColor, townname){
    // Get the town code for the given town name
    const townCode=getTownCodeByName(townname);
    // Filter the cars in the given town to only those with the given color and a registration number that starts with the town code
    const  carsWithColorInTown=cars.filter(car => car.reg_number.startsWith(townCode) && car.color===carColor);
    // Return the filtered array of cars
    return carsWithColorInTown;
};


// Returns an array of all the cars in the given town that have the given color and model
function numberOfCarsPerModel(carColor, carModel, townname){
  // Get the town code for the given town name
  const townCode=getTownCodeByName(townname);
  // Filter the cars in the given town to only those with the given color, model, and a registration number that starts with the town code
  const carModelWithColorInTown=cars.filter(car => car.reg_number.startsWith(townCode) && car.color===carColor && car.model===carModel);
  // Return the filtered array of cars
  return carModelWithColorInTown;

};


// This function takes a town name as input and returns the most popular car color in that town.
function mostPopularColor(townname){
  // Get the town code based on the town name
  const townCode=getTownCodeByName(townname);
  
  // Initialize variables to keep track of the most popular car color
  let carColorCount=0; // Keeps track of the number of cars with a particular color in the specified town
  let mostcarColorCount=0; // Keeps track of the highest number of cars with a particular color in the specified town
  let mostPopularCarColorInTown; // Stores the most popular car color in the specified town
  
  // Create an array to store all unique car colors in the list of cars
  const colors=getUnique(cars,'color');

  // Loop through each unique car color and count the number of cars with that color in the specified town
  for(let carColor of colors){
     
      carColorCount=cars.filter(car => car.reg_number.startsWith(townCode) && car.color===carColor).length
      
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


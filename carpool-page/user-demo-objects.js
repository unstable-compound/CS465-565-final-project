Drivers = {
  //create Drivernames that map to name, address, phone, and email
  "FakeDriverOne": {
    "name": "Driver One",
    "lat": 45.511294,
    "long": -122.652566,
    "phone": "555-555-5555",
    "email": "DriverOne@fake.com"
  },
  "FakeDriverTwo": {
    "name": "Driver Two",
    "lat": 45.514948,
    "long": -122.665390,
    "phone": "555-444-5885",
    "email": "DriverTwo@fake.com"
  },
  "FakeDriverThree": {
    "name": "Driver Three",
    "lat": 45.517291,
    "long": -122.848256,
    "phone": "555-575-1111",
    "email": "DriverThree@pdx.edu"
  },
  "FakeDriverFour": {
    "name": "Driver Four",
    "lat": 45.513030,
    "long": -122.497984,
    "phone": "555-654-5995",
    "email": "DriverFour@pdx.edu"
  }

}

Riders = {
  //create Ridernames that map to name, address, phone, and email
  "FakeRiderOne": {
    "name": "Rider One",
    "lat": 45.552934, 
    "long": -122.593234,
    "phone": "555-555-5555",
    "email": "not_real@fake.com"
  },
  "FakeRiderTwo": {
    "name": "Rider Two",
    "lat": 45.525202, 
    "long": -122.705357,
    "phone": "555-444-5885",
    "email": "totally_real@fake.com"
  },
  "FakeRiderThree": {
    "name": "Rider Three",
    "lat": 45.477738,
    "long": -122.601441,
    "phone": "555-575-1111",
    "email": "not_real@pdx.edu"
  },
  "FakeRiderFour": {
    "name": "Rider Four",
    "lat": 45.484022, 
    "long": -122.707740,
    "phone": "555-654-5995",
    "email": "not_real@pdx.edu"
  }

}




//returns array of drivers to use to access the JSON obj's that have the details 
//for each driver
function list_of_drivers(){
  
  var arrayOfdrivers = [];
  let x;
  for (x in Drivers){
    arrayOfdrivers.push(x);
  }
  return arrayOfdrivers;
}

//returns array of riders to use to access the JSON
//obj's that have the details for each rider 
function list_of_riders(){
  var arrayOfRiders = [];
  let x;
  for (x in Riders){
    arrayOfRiders.push(x);
  }
  return arrayOfRiders;
}
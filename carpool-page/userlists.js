function populate_drivers() {
  let driverObj = Drivers;
  let x, id;
  let counter = 1;
  for (x in driverObj) {
    id = "driver";
    id = id.concat(counter.toString(10));
    document.getElementById(id).textContent = x;
    //update email link
    id = id.concat("-mail");
    let mail = "mailto:".concat(driverObj[x].email);
    document.getElementById(id).setAttribute("href", mail);
    counter += 1;
  }
}

function populate_riders() {
  let riderObj = Riders;
  let x, id;
  let counter = 1;
  for (x in riderObj) {
    id = "rider";
    id = id.concat(counter.toString(10));
    //update name
    document.getElementById(id).textContent = x;
    //update email link
    id = id.concat("-mail");
    let mail = "mailto:".concat(riderObj[x].email);
    document.getElementById(id).setAttribute("href", mail);
    counter += 1;
  }
}

function list_of_drivers(){
  //TODO: 
  //return array of drivers to use as key while accessing json obj's in
  //other functions. 
}
//THen do same for riders. 
//Use these to get LatLong for making markers in google-api.js

populate_drivers();
populate_riders();

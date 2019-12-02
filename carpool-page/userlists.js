function populate_drivers() {
  let driverObj = Drivers;
  let x, id;
  let counter = 1;
  for (x in driverObj) {
    id = "driver";
    id.concat(counter.toString(10));
    document.getElementById(id).innerHTML = x;
  }
}



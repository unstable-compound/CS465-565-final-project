var map;

var arrayOfDriverMarkers = [];
var arrayOfDriverInfoWindows = [];
function initialize_driver_markers() {
  let x;
  let counter = 0;
  for (x in Drivers) {
    var pos = {
      lat: Drivers[x].lat,
      lng: Drivers[x].long
    };

    arrayOfDriverMarkers.push(
      new google.maps.Marker({
        position: pos,
        map: map,
        label: "D"
      })
    );

    let marker = arrayOfDriverMarkers[counter];
    //add infowindows
    var username = x.slice();
    var name = Drivers[x].name.slice();
    var email = Drivers[x].email.slice();
    var phone = Drivers[x].phone.slice();

    var contentString =
      "<h3>" +
      username +
      "</h3>" +
      "<p><b>Name: </b>" +
      name +
      "</p>" +
      "<p><b>Phone: </b>" +
      phone +
      "</p>" +
      "<p><b>Email: </b>" +
      email +
      "</p>" +
      "<p><b>Role: </b> Driver </p>";

    arrayOfDriverInfoWindows.push(
      new google.maps.InfoWindow({
        content: contentString
      })
    );
    //add infowindow to correct marker
    let infoWindow = arrayOfDriverInfoWindows[counter];

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
    counter += 1;
  }
}

var arrayOfRiderMarkers = [];
var arrayOfRiderInfoWindows = [];
function initialize_rider_markers() {
  let x;
  let counter = 0;
  for (x in Riders) {
    var pos = {
      lat: Riders[x].lat,
      lng: Riders[x].long
    };

    arrayOfRiderMarkers.push(
      new google.maps.Marker({
        position: pos,
        map: map,
        label: "R"
      })
    );

    let marker = arrayOfRiderMarkers[counter];
    //add infowindows
    let username = x;
    let name = Riders[x].name;
    let email = Riders[x].email;
    let phone = Riders[x].phone;

    let contentString =
      "<h3>" +
      username +
      "</h3>" +
      "<p><b>Name: </b>" +
      name +
      "</p>" +
      "<p><b>Phone: </b>" +
      phone +
      "</p>" +
      "<p><b>Email: </b>" +
      email +
      "</p>" +
      "<p><b>Role: </b> Rider </p>";

    arrayOfRiderInfoWindows.push(
      new google.maps.InfoWindow({
        content: contentString
      })
    );
    //add infowindow to correct marker
    let infoWindow = arrayOfRiderInfoWindows[counter];

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
    counter += 1;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.514, lng: -122.644 },
    zoom: 8
  });


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "Click to zoom"
        });

        map.addListener("center_changed", function () {
          // 55 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function () {
            map.panTo(marker.getPosition());
          }, 55000);
        });

        marker.addListener("click", function () {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });

        /*
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);*/
        map.setCenter(pos);
      },
      function () {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  initialize_driver_markers();
  initialize_rider_markers();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

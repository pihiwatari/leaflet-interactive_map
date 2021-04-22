import flexSites from "./utils/flexSites.js";

//create a map using leaflet API
let map = L.map("map", {
  //object with map initial properties
  center: [20, 0],
  zoom: 2,
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  minZoom: 2,
  scrollWheelZoom: false,
  dragging: true,
  maxBounds: [
    [80.703997, -165.9375],
    [-77.078784, 164.882813],
  ],
});

// Add tile image from maptiler.com
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=c7sfiYbOOPrFNk6C9d8y",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

//createMarker function
function createMarker(markerObject) {
  //we create a marker on the map using the coordinates from the object
  let marker = L.marker(markerObject.coordinates).addTo(map);

  //if we do not have inforamtion in the item's documentLink, we open this
  if (markerObject.documentLink === "") {
    //bind popup to created marker
    marker.bindPopup(
      `
      <h3>${markerObject.name}</h3> <br>
      <p>Sorry, we couldn't find any information!</p>
      `
    );
    return marker;
  }

  //bind popup to created marker
  marker.bindPopup(
    `
    <h3>${markerObject.name}</h3>
    <a href=${markerObject.documentLink} add target="_blank">Open details</a>
    `
  );
  return marker;
}

//create a list of markers
flexSites.forEach((site) => createMarker(site));

//add tootip at the center of the map
// L.popup({
//   closeOnClick: false,
// })
//   .setLatLng([-50, 0])
//   .setContent("Click on any marker to show more information")
//   .openOn(map);

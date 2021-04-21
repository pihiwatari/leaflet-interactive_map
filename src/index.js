//create a map using leaflet API
let map = L.map("map", {
  //object with map initial properties
  center: [0, 0],
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

//create a list with an object for each flex site. If you need to add more items, add them here
const flexSites = [
  {
    name: "Flex Guadalajara North",
    coordinates: [20.740569822881508, -103.44331300435243],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/Guadalajara%203D%20printing%20capabilities.pptx?d=w48a47c33bdaa482081efc78acc9c3977&csf=1&web=1&e=ZOhdL0",
  },
  {
    name: "Flex Milpitas",
    coordinates: [37.42415187525953, -121.8968462532168],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/Milpitas%203D%20printing%20capabilities.pptx?d=w85fd099b44b049dcab29ea5551a1afa8&csf=1&web=1&e=5zNW7s",
  },
  {
    name: "Flex Boston Innovation Center",
    coordinates: [42.344307570206304, -71.02895569551549],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/BIC%203D%20printing%20capabilities.pptx?d=w8ead1c9d4edd483c93bad10987cb686c&csf=1&web=1&e=KD4le9",
  },
  {
    name: "Flex Althofen",
    coordinates: [46.87645134704752, 14.465309104788359],
    documentLink: "",
  },
  {
    name: "Flex Brazil - Sorocaba",
    coordinates: [-23.427951996841873, -47.36841194419571],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/Flex%20AM%20Brasil%20capabilities_short.pptx?d=wabe213c5b0bc43bab736121fc798407f&csf=1&web=1&e=wmYqIv",
  },
  {
    name: "Flex Manchester",
    coordinates: [41.80174303476511, -72.51057883056065],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/AM_MANCHESTER_CT_EOS_M280_%20March_2021.pptx?d=wca5a0d9e2f624d7bb4ccaf1bdcfcef6a&csf=1&web=1&e=ikRquo",
  },
  {
    name: "Flex Modi'in",
    coordinates: [31.923268586341585, 34.9787410864461],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/modiin%203D%20printing%20capabilities.pptx?d=wc31c1a94bb1d4ccfa063ca72024c9c89&csf=1&web=1&e=WkD6ny",
  },
  {
    name: "Flex Sarvar",
    coordinates: [47.24712202634027, 16.910746684908915],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/Sarvar%203D%20printing%20capabilities.pptx?d=wdac0bd76d706485d8eb93dbab54d1ca2&csf=1&web=1&e=sfdxBj",
  },
  {
    name: "Flex Zhuhai",
    coordinates: [22.124173427260676, 113.33887540599584],
    documentLink:
      "https://flextronics365.sharepoint.com/:p:/r/sites/additivemanufacturing/AM%20Competency%20Centers%20Presentations/Zhuhai%203D%20printing%20capabilities.pptx?d=w7e9d050c643b4df0b7743030c307fde6&csf=1&web=1&e=6bwGfi",
  },
];

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
let mapMarkersList = flexSites.map((site) => createMarker(site));

//add tootip at the center of the map
let popup = L.popup({
  closeOnClick: false,
})
  .setLatLng([-50, 0])
  .setContent("Click on any marker to show more information")
  .openOn(map);

//debug

// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
// }

// map.on("click", onMapClick);

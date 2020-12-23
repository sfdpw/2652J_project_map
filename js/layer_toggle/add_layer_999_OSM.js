map.createPane('pane_999_OSMStandard_315');
map.getPane('pane_999_OSMStandard_315').style.zIndex = 1;

var layer_999_OSMStandard_315 = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  pane: 'pane_999_OSMStandard_315',
  opacity: 1.0,
  //attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
  minZoom: 1,
  maxZoom: 18,
  minNativeZoom: 0,
  maxNativeZoom: 22
});

layer_999_OSMStandard_315;
map.addLayer(layer_999_OSMStandard_315);


function OSM_999_toggle() {

  if (document.getElementById("999_OSM_checkbox").checked == true) {

    map.addLayer(layer_999_OSMStandard_315);

  } else {

    map.removeLayer(layer_999_OSMStandard_315);

  }

}

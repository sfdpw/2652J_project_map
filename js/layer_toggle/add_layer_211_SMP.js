function pop_211_SMPs_0(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent =

    '<strong>SMP ID</strong><br>' +
    (feature.properties['SMP_ID'] !== null ? autolinker.link(feature.properties['SMP_ID'].toLocaleString()) : '') +
    '<br><br>\
     <strong>Submittal(s)</strong><br>' +
    (feature.properties['Submittals'] !== null ? autolinker.link(feature.properties['Submittals'].toLocaleString()) : '') +
    '<br><br>\
 <strong>Status</strong><br>' +
    (feature.properties['Status'] !== null ? autolinker.link(feature.properties['Status'].toLocaleString()) : '');

  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_211_SMPs_0_0() {
  return {
    pane: 'pane_211_SMPs_0',
    radius: 4.0,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 2,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(255,158,23,1.0)',
    interactive: true,
  }
}
map.createPane('pane_211_SMPs_0');
map.getPane('pane_211_SMPs_0').style.zIndex = 730;
map.getPane('pane_211_SMPs_0').style['mix-blend-mode'] = 'normal';

var layer_211_SMPs_0 = {};
var did_layer_211_SMP_load = false;

function SMP_211_toggle() {

  if (document.getElementById("211_SMP_checkbox").checked) {

    if (did_layer_211_SMP_load == false) {

      layer_211_SMPs_0 = new L.geoJson(json_211_SMPs_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_211_SMPs_0',
        layerName: 'layer_211_SMPs_0',
        pane: 'pane_211_SMPs_0',
        onEachFeature: pop_211_SMPs_0,
        pointToLayer: function(feature, latlng) {
          var context = {
            feature: feature,
            variables: {}
          };
          return L.circleMarker(latlng, style_211_SMPs_0_0(feature));
        },
      });

      bounds_group.addLayer(layer_211_SMPs_0);
    }

    did_layer_211_SMP_load = true;
    map.addLayer(layer_211_SMPs_0);

  } else {

    map.removeLayer(layer_211_SMPs_0);

  }

}

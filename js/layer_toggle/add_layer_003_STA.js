function pop_003_stations_084_324(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  
  
var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>STA</strong><br />' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '+00</td>\
                    </tr>\
                </table>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_003_stations_084_324_0() {
  return {
    pane: 'pane_003_stations_084_324',
    radius: 4.0,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(196,60,57,1.0)',
    interactive: true,
  }
}


map.createPane('pane_003_stations_084_324');
map.getPane('pane_003_stations_084_324').style.zIndex = 699;
map.getPane('pane_003_stations_084_324').style['mix-blend-mode'] = 'normal';


var layer_003_stations_084_324 = new L.geoJson(json_003_stations_084_324, {
  attribution: '',
  interactive: true,
  dataVar: 'json_003_stations_084_324',
  layerName: 'layer_003_stations_084_324',
  pane: 'pane_003_stations_084_324',
  onEachFeature: pop_003_stations_084_324,
  pointToLayer: function(feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_003_stations_084_324_0(feature));
  },
});

bounds_group.addLayer(layer_003_stations_084_324);
map.addLayer(layer_003_stations_084_324);

function STA_003_toggle() {
  if (document.getElementById("003_stations_checkbox").checked) {
    map.addLayer(layer_003_stations_084_324);
  } else {
    map.removeLayer(layer_003_stations_084_324);
  }
}

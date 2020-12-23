function pop_203_drains_4(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent =
    '<strong>Asset ID</strong><br>' +
    (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
    (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') +
    '<br><br>\
<strong>Scope</strong><br>' +
    (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
    '<br><br>\
<strong>Submittal(s)</strong><br>' +
    (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') +
    '<br><br>\
<strong>Status</strong><br>' +
    (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
    '<br><br>\
<strong>Bid Item(s)</strong><br>' +
    (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') +
    '<br><br>\
<strong>Payment History</strong><br>' +
    (feature.properties['PP_HISTORY'] !== null ? Autolinker.link(feature.properties['PP_HISTORY'].toLocaleString()) : '');

  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_203_drains_4_0(feature) {
  switch (String(feature.properties['SCOPE'])) {
    case '(E) to Remain':
      return {
        pane: 'pane_203_drains_4',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(150,150,150,1.0)',
          interactive: true,
      }
      break;
    case 'Abandon (E)':
      return {
        pane: 'pane_203_drains_4',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(180,150,50,1.0)',
          interactive: true,
      }
      break;
    case 'Install (N) per SFPW STD Plan 87,187':
      return {
        pane: 'pane_203_drains_4',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(255,141,19,1.0)',
          interactive: true,
      }
      break;
    case 'Install (N) per SFPW STD Plan 87,188':
      return {
        pane: 'pane_203_drains_4',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(215,25,28,1.0)',
          interactive: true,
      }
      break;
    case 'Install (N) per SFPW STD Plan 87,189':
      return {
        pane: 'pane_203_drains_4',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(1,103,255,1.0)',
          interactive: true,
      }
      break;
  }
}

map.createPane('pane_203_drains_4');
map.getPane('pane_203_drains_4').style.zIndex = 704;
map.getPane('pane_203_drains_4').style['mix-blend-mode'] = 'normal';

var layer_203_drains_4 = {};
var did_layer_203_drains_load = false;

function drains_203_toggle() {

  if (document.getElementById("203_drains_checkbox").checked == true) {

    if (did_layer_203_drains_load == false) {

      layer_203_drains_4 = new L.geoJson(json_203_drains_4, {
        attribution: '',
        interactive: true,
        dataVar: 'json_203_drains_4',
        layerName: 'layer_203_drains_4',
        pane: 'pane_203_drains_4',
        onEachFeature: pop_203_drains_4,
        pointToLayer: function(feature, latlng) {
          var context = {
            feature: feature,
            variables: {}
          };
          return L.circleMarker(latlng, style_203_drains_4_0(feature));
        },
      });
      bounds_group.addLayer(layer_203_drains_4);

    }

    did_layer_203_drains_load = true;
    map.addLayer(layer_203_drains_4);

  } else {

    map.removeLayer(layer_203_drains_4);

  }

}

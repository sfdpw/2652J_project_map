function pop_201_MHs_5(feature, layer) {
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

function style_201_MHs_5_0(feature) {
  switch (String(feature.properties['SCOPE'])) {
    case '(E) to Remain':
      return {
        pane: 'pane_201_MHs_5',
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
    case 'Install (N) per SFPW STD Plan 87,181':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(249,158,89,1)',
          interactive: true,
      }
      break;
    case 'Install (N) per SFPW STD Plan 87,182':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(254,54,107,1)',
          interactive: true,
      }
      break;
    case 'Mortar (E)':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(255,237,170,1.0)',
          interactive: true,
      }
      break;
    case 'Replace (E) with (N) per SFPW STD Plan 87,181':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(237,248,185,1.0)',
          interactive: true,
      }
      break;
    case 'Replace (E) with (N) per SFPW STD Plan 87,182':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(199,233,173,1.0)',
          interactive: true,
      }
      break;
    case 'Replace (E) with angled (N) per SFPW STD Plan 87,182':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(157,211,167,1.0)',
          interactive: true,
      }
      break;
    case 'Remove (E)':
      return {
        pane: 'pane_201_MHs_5',
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(100,171,176,1.0)',
          interactive: true,
      }
      break;
    case 'Abandon (E)':
      return {
        pane: 'pane_201_MHs_5',
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
  }
}
map.createPane('pane_201_MHs_5');
map.getPane('pane_201_MHs_5').style.zIndex = 705;
map.getPane('pane_201_MHs_5').style['mix-blend-mode'] = 'normal';

var layer_201_MHs_5 = {};
var did_layer_201_MHs_load = false;

function MH_201_toggle() {

  if (document.getElementById("201_MH_checkbox").checked) {

    if (did_layer_201_MHs_load == false) {

      layer_201_MHs_5 = new L.geoJson(json_201_MHs_5, {
        attribution: '',
        interactive: true,
        dataVar: 'json_201_MHs_5',
        layerName: 'layer_201_MHs_5',
        pane: 'pane_201_MHs_5',
        onEachFeature: pop_201_MHs_5,
        pointToLayer: function(feature, latlng) {
          var context = {
            feature: feature,
            variables: {}
          };
          return L.circleMarker(latlng, style_201_MHs_5_0(feature));
        },
      });

      bounds_group.addLayer(layer_201_MHs_5);
    }

    did_layer_201_MHs_load = true;
    map.addLayer(layer_201_MHs_5);

  } else {

    map.removeLayer(layer_201_MHs_5);

  }

}

function pop_204_culverts_3(feature, layer) {
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
    (feature.properties['PSR'] !== null ? Autolinker.link(feature.properties['PSR'].toLocaleString()) : '') +
    '<br><br>\
<strong>Pipe Diameter</strong><br>' +
    (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
    '<br><br>\
<strong>Pipe Material</strong><br>' +
    (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') +
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

function style_204_culverts_3_0(feature) {
  switch (String(feature.properties['SCOPE'])) {
    case '(E) to Remain':
      return {
        pane: 'pane_204_culverts_3',
          opacity: 1,
          color: 'rgba(150,150,150,1.0)',
          dashArray: '',
          lineCap: 'round',
          lineJoin: 'round',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Install (N) DIP':
      return {
        pane: 'pane_204_culverts_3',
          opacity: 1,
          color: 'rgba(255,141,19,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Install (N) VCP':
      return {
        pane: 'pane_204_culverts_3',
          opacity: 1,
          color: 'rgba(215,25,28,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Plug (E)':
      return {
        pane: 'pane_204_culverts_3',
          opacity: 1,
          color: 'rgba(178,129,77,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Replace (E) with (N) as Directed by City':
      return {
        pane: 'pane_204_culverts_3',
          opacity: 1,
          color: 'rgba(132,23,123,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
  }
}
map.createPane('pane_204_culverts_3');
map.getPane('pane_204_culverts_3').style.zIndex = 703;
map.getPane('pane_204_culverts_3').style['mix-blend-mode'] = 'normal';

var layer_204_culverts_3 = {};
var did_layer_204_CLVT_load = false;

function CLVT_204_toggle() {

  if (document.getElementById("204_CLVT_checkbox").checked == true) {

    if (did_layer_204_CLVT_load == false) {

      layer_204_culverts_3 = new L.geoJson(json_204_culverts_3, {
        attribution: '',
        interactive: true,
        dataVar: 'json_204_culverts_3',
        layerName: 'layer_204_culverts_3',
        pane: 'pane_204_culverts_3',
        onEachFeature: pop_204_culverts_3,
        style: style_204_culverts_3_0,
      });
      bounds_group.addLayer(layer_204_culverts_3);

    }

    did_layer_204_CLVT_load = true;
    map.addLayer(layer_204_culverts_3);

  } else {

    map.removeLayer(layer_204_culverts_3);

  }

}

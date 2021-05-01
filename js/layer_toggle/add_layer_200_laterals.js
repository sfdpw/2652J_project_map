function pop_200_laterals_2(feature, layer) {
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
    (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') +
    '<br><br>\
<strong>Address</strong><br>' +
    (feature.properties['ADDRESS'] !== null ? Autolinker.link(feature.properties['ADDRESS'].toLocaleString()) : '') +
    '<br><br>\
<strong>BLKLOT</strong><br>' +
    (feature.properties['BLKLOT'] !== null ? Autolinker.link(feature.properties['BLKLOT'].toLocaleString()) : '') +
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
<strong>Payment History</strong><br>' +
    (feature.properties['PP_HISTORY'] !== null ? Autolinker.link(feature.properties['PP_HISTORY'].toLocaleString()) : '');

  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_200_laterals_2_0(feature) {
  switch (String(feature.properties['SCOPE'])) {
    case '(E) to Remain':
      return {
        pane: 'pane_200_laterals_2',
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
    case 'Extend and Connect (E) or Replace with (N) as Directed by City':
      return {
        pane: 'pane_200_laterals_2',
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
    case 'Intercept to Connect (E) or Replace with (N) as Directed by City':
      return {
        pane: 'pane_200_laterals_2',
          opacity: 1,
          color: 'rgba(107,176,175,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Replace (E) with (N)':
      return {
        pane: 'pane_200_laterals_2',
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
    case 'Replace (E) with (N) as Directed by City':
      return {
        pane: 'pane_200_laterals_2',
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
    case 'Replace (E) with (N), Extend and Connect':
      return {
        pane: 'pane_200_laterals_2',
          opacity: 1,
          color: 'rgba(1,103,255,1.0)',
          dashArray: '',
          lineCap: 'square',
          lineJoin: 'bevel',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Remove (E)':
      return {
        pane: 'pane_200_laterals_2',
          opacity: 1,
          color: 'rgba(27,196,103,1.0)',
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
map.createPane('pane_200_laterals_2');
map.getPane('pane_200_laterals_2').style.zIndex = 702;
map.getPane('pane_200_laterals_2').style['mix-blend-mode'] = 'normal';

var layer_200_laterals_2 = {};
var did_layer_200_laterals_load = false;

function laterals_200_toggle() {

  if (document.getElementById("200_laterals_checkbox").checked) {

    if (did_layer_200_laterals_load == false) {

      layer_200_laterals_2 = new L.geoJson(json_200_laterals_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_200_laterals_2',
        layerName: 'layer_200_laterals_2',
        pane: 'pane_200_laterals_2',
        onEachFeature: pop_200_laterals_2,
        style: style_200_laterals_2_0,
      });

      bounds_group.addLayer(layer_200_laterals_2);

    }

    did_layer_200_laterals_load = true;
    map.addLayer(layer_200_laterals_2);

  } else {

    map.removeLayer(layer_200_laterals_2);

  }

}

function pop_202_SW_mains_0(feature, layer) {
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
<strong>Diameter</strong><br>' +
    (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
    '<br><br>\
<strong>Material</strong><br>' +
    (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') +
    '<br><br>\
<strong>Scope</strong><br>' +
    (feature.properties['SCOPE_DTLS'] !== null ? Autolinker.link(feature.properties['SCOPE_DTLS'].toLocaleString()) : '') +
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




function pop_205_shear_bands_1(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent = '(N) Shear Band';
  layer.bindPopup(popupContent, {
    maxHeight: 710
  });
}

function style_205_shear_bands_1_0() {
  return {
    pane: 'pane_205_shear_bands_1',
    radius: 4.0,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(243,166,178,1.0)',
    interactive: true,
  }
}
map.createPane('pane_205_shear_bands_1');
map.getPane('pane_205_shear_bands_1').style.zIndex = 701;
map.getPane('pane_205_shear_bands_1').style['mix-blend-mode'] = 'normal';

var layer_205_shear_bands_1 = new L.geoJson(json_205_shear_bands_1, {
  attribution: '',
  interactive: true,
  dataVar: 'json_205_shear_bands_1',
  layerName: 'layer_205_shear_bands_1',
  pane: 'pane_205_shear_bands_1',
  onEachFeature: pop_205_shear_bands_1,
  pointToLayer: function(feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_205_shear_bands_1_0(feature));
  },
});

bounds_group.addLayer(layer_205_shear_bands_1);


function style_202_SW_mains_0_0(feature) {
  switch (String(feature.properties['SCOPE'])) {
    case '(E) to Remain':
      return {
        pane: 'pane_202_SW_mains_0',
          opacity: 1,
          color: 'rgba(150,150,150,1.0)',
          dashArray: '10,5',
          lineCap: 'round',
          lineJoin: 'round',
          weight: 4.0,
          fillOpacity: 0,
          interactive: true,
      }
      break;
    case 'Line (E) with CIPL':
      return {
        pane: 'pane_202_SW_mains_0',
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
    case 'Plug and Fill (E)':
      return {
        pane: 'pane_202_SW_mains_0',
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
    case 'Install (N) VCP':
      return {
        pane: 'pane_202_SW_mains_0',
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
    case 'Replace (E) with (N) VCP':
      return {
        pane: 'pane_202_SW_mains_0',
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
    case 'Remove (E)':
      return {
        pane: 'pane_202_SW_mains_0',
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

map.createPane('pane_202_SW_mains_0');
map.getPane('pane_202_SW_mains_0').style.zIndex = 700;
map.getPane('pane_202_SW_mains_0').style['mix-blend-mode'] = 'normal';

var layer_202_SW_mains_0 = {};
var did_layer_202_SW_mains_load = false;

function SWMN_202_toggle() {

  if (document.getElementById("202_SWMN_checkbox").checked == true) {

    if (did_layer_202_SW_mains_load == false) {

      layer_202_SW_mains_0 = new L.geoJson(json_202_SW_mains_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_202_SW_mains_0',
        layerName: 'layer_202_SW_mains_0',
        pane: 'pane_202_SW_mains_0',
        onEachFeature: pop_202_SW_mains_0,
        style: style_202_SW_mains_0_0,
      });
      bounds_group.addLayer(layer_202_SW_mains_0);

    }

    did_layer_202_SW_mains_load = true;
    map.addLayer(layer_202_SW_mains_0);
    map.addLayer(layer_205_shear_bands_1);

  } else {

    map.removeLayer(layer_202_SW_mains_0);
    map.removeLayer(layer_205_shear_bands_1);

  }

}

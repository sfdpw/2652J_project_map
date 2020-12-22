function pop_202_SW_mains_0(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });


var popupContent = '<div class="accordion" id="SWMN_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_asset_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_01" aria-expanded="false" aria-controls="SWMN_collapse_01"><strong>Asset ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_01" class="collapse" aria-labelledby="SWMN_asset_id" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['PSR'] !== null ? Autolinker.link(feature.properties['PSR'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_dia">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_02" aria-expanded="false" aria-controls="SWMN_collapse_02"><strong>Diameter</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_02" class="collapse" aria-labelledby="SWMN_dia" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_mtl">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_03" aria-expanded="false" aria-controls="SWMN_collapse_03"><strong>Material</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_03" class="collapse" aria-labelledby="SWMN_mtl" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_scp">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_04" aria-expanded="false" aria-controls="SWMN_collapse_04"><strong>Scope</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_04" class="collapse" aria-labelledby="SWMN_scp" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['SCOPE_DTLS'] !== null ? Autolinker.link(feature.properties['SCOPE_DTLS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_stat">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_05" aria-expanded="false" aria-controls="SWMN_collapse_05"><strong>Status</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_05" class="collapse" aria-labelledby="SWMN_stat" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_sub">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_06" aria-expanded="false" aria-controls="SWMN_collapse_06"><strong>Submittal(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_06" class="collapse" aria-labelledby="SWMN_sub" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SWMN_bid">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SWMN_collapse_07" aria-expanded="false" aria-controls="SWMN_collapse_07"><strong>Bid Item(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SWMN_collapse_07" class="collapse" aria-labelledby="SWMN_bid" data-parent="#SWMN_popup">\
                                <div class="card-body">' + (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';

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
          dashArray: '',
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

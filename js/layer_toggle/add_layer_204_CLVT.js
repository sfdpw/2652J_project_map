function pop_204_culverts_3(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="CLVT_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_asset_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_01" aria-expanded="false" aria-controls="CLVT_collapse_01"><strong>Asset ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_01" class="collapse" aria-labelledby="CLVT_asset_id" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['PSR'] !== null ? Autolinker.link(feature.properties['PSR'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_dia">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_02" aria-expanded="false" aria-controls="CLVT_collapse_02"><strong>Diameter</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_02" class="collapse" aria-labelledby="CLVT_dia" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_mtl">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_03" aria-expanded="false" aria-controls="CLVT_collapse_03"><strong>Material</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_03" class="collapse" aria-labelledby="CLVT_mtl" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_scp">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_04" aria-expanded="false" aria-controls="CLVT_collapse_04"><strong>Scope</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_04" class="collapse" aria-labelledby="CLVT_scp" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_bid">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_05" aria-expanded="false" aria-controls="CLVT_collapse_05"><strong>Bid Item(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_05" class="collapse" aria-labelledby="CLVT_bid" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_stat">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_06" aria-expanded="false" aria-controls="CLVT_collapse_06"><strong>Status</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_06" class="collapse" aria-labelledby="CLVT_stat" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_sbtl">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_07" aria-expanded="false" aria-controls="CLVT_collapse_07"><strong>Submittal(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_07" class="collapse" aria-labelledby="CLVT_sbtl" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="CLVT_PP_hist">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#CLVT_collapse_08" aria-expanded="false" aria-controls="CLVT_collapse_08"><strong>Payment History</strong></button>\
                                </h2>\
                                </div>\
                                <div id="CLVT_collapse_08" class="collapse" aria-labelledby="CLVT_PP_hist" data-parent="#CLVT_popup">\
                                <div class="card-body">' + (feature.properties['PP_HISTORY'] !== null ? Autolinker.link(feature.properties['PP_HISTORY'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
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

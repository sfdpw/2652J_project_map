function pop_200_laterals_2(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="LAT_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_asset_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_01" aria-expanded="false" aria-controls="LAT_collapse_01"><strong>Asset ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_01" class="collapse" aria-labelledby="LAT_asset_id" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_address">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_02" aria-expanded="false" aria-controls="LAT_collapse_02"><strong>Address</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_02" class="collapse" aria-labelledby="LAT_address" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['ADDRESS'] !== null ? Autolinker.link(feature.properties['ADDRESS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_BLKLOT">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_03" aria-expanded="false" aria-controls="LAT_collapse_03"><strong>BLKLOT</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_03" class="collapse" aria-labelledby="LAT_BLKLOT" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['BLKLOT'] !== null ? Autolinker.link(feature.properties['BLKLOT'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_scp">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_04" aria-expanded="false" aria-controls="LAT_collapse_04"><strong>Scope</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_04" class="collapse" aria-labelledby="LAT_scp" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_stat">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_05" aria-expanded="false" aria-controls="LAT_collapse_05"><strong>Status</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_05" class="collapse" aria-labelledby="LAT_stat" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_bid">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_06" aria-expanded="false" aria-controls="LAT_collapse_06"><strong>Bid Item(s)s</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_06" class="collapse" aria-labelledby="LAT_bid" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_sub">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_07" aria-expanded="false" aria-controls="LAT_collapse_07"><strong>Submittal(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_07" class="collapse" aria-labelledby="LAT_sub" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="LAT_PP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#LAT_collapse_08" aria-expanded="false" aria-controls="LAT_collapse_08"><strong>Payment History</strong></button>\
                                </h2>\
                                </div>\
                                <div id="LAT_collapse_08" class="collapse" aria-labelledby="LAT_PP" data-parent="#LAT_popup">\
                                <div class="card-body">' + (feature.properties['PP_HISTORY'] !== null ? Autolinker.link(feature.properties['PP_HISTORY'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
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

  if (document.getElementById("200_laterals_checkbox").checked == true) {

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

function pop_201_MHs_5(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="MH_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_asset_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_01" aria-expanded="false" aria-controls="MH_collapse_01"><strong>Asset ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_01" class="collapse" aria-labelledby="MH_asset_id" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_node_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_02" aria-expanded="false" aria-controls="MH_collapse_02"><strong>Node ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_02" class="collapse" aria-labelledby="MH_node_id" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_scope">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_04" aria-expanded="false" aria-controls="MH_collapse_04"><strong>Scope</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_04" class="collapse" aria-labelledby="MH_scope" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_status">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_05" aria-expanded="false" aria-controls="MH_collapse_05"><strong>Status</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_05" class="collapse" aria-labelledby="MH_status" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_submittals">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_06" aria-expanded="false" aria-controls="MH_collapse_06"><strong>Submittal(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_06" class="collapse" aria-labelledby="MH_submittals" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MH_bid_item">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MH_collapse_07" aria-expanded="false" aria-controls="MH_collapse_07"><strong>Bid Item(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MH_collapse_07" class="collapse" aria-labelledby="MH_bid_item" data-parent="#MH_popup">\
                                <div class="card-body">' + (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';

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
          weight: 1,
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
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(249,158,89,1.0)',
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
          weight: 1,
          fill: true,
          fillOpacity: 1,
          fillColor: 'rgba(254,54,107,1.0)',
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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

  if (document.getElementById("201_MH_checkbox").checked == true) {

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

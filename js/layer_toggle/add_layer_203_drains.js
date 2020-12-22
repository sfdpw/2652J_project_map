function pop_203_drains_4(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="DRN_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_asset_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_01" aria-expanded="false" aria-controls="DRN_collapse_01"><strong>Asset ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_01" class="collapse" aria-labelledby="DRN_asset_id" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_node_id">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_02" aria-expanded="false" aria-controls="DRN_collapse_02"><strong>Node ID</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_02" class="collapse" aria-labelledby="DRN_node_id" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_scope">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_04" aria-expanded="false" aria-controls="DRN_collapse_04"><strong>Scope</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_04" class="collapse" aria-labelledby="DRN_scope" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_status">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_05" aria-expanded="false" aria-controls="DRN_collapse_05"><strong>Status</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_05" class="collapse" aria-labelledby="DRN_status" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_submittals">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_06" aria-expanded="false" aria-controls="DRN_collapse_06"><strong>Submittal(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_06" class="collapse" aria-labelledby="DRN_submittals" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="DRN_bid_item">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#DRN_collapse_07" aria-expanded="false" aria-controls="DRN_collapse_07"><strong>Bid Item(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="DRN_collapse_07" class="collapse" aria-labelledby="DRN_bid_item" data-parent="#DRN_popup">\
                                <div class="card-body">' + (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';

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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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
          weight: 1,
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

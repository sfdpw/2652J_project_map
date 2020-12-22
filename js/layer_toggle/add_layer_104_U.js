


function pop_104_U_utility_occupancy_316(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  
  
  
var popupContent = '<div class="accordion" id="U_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="U_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#U_collapse_01" aria-expanded="false" aria-controls="U_collapse_01"><strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="U_collapse_01" class="collapse" aria-labelledby="U_sheet" data-parent="#U_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="U_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#U_collapse_04" aria-expanded="false" aria-controls="U_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="U_collapse_04" class="collapse" aria-labelledby="U_relevant" data-parent="#U_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="U_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#U_collapse_05" aria-expanded="false" aria-controls="U_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="U_collapse_05" class="collapse" aria-labelledby="U_spec" data-parent="#U_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_104_U_utility_occupancy_316_0() {
  return {
    pane: 'pane_104_U_utility_occupancy_316',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(125,139,143,1.0)',
    interactive: true,
  }
}


var layer_104_U_utility_occupancy_316 = {};





function U_104_toggle() {
  if (document.getElementById("104_U_checkbox").checked == true) {
  
    map.createPane('pane_104_U_utility_occupancy_316');
    map.getPane('pane_104_U_utility_occupancy_316').style.zIndex = 600;
    map.getPane('pane_104_U_utility_occupancy_316').style['mix-blend-mode'] = 'normal';
    layer_104_U_utility_occupancy_316 = new L.geoJson(json_104_U_utility_occupancy_316, {
      attribution: '',
      interactive: true,
      dataVar: 'json_104_U_utility_occupancy_316',
      layerName: 'layer_104_U_utility_occupancy_316',
      pane: 'pane_104_U_utility_occupancy_316',
      onEachFeature: pop_104_U_utility_occupancy_316,
      style: style_104_U_utility_occupancy_316_0,
    });
    bounds_group.addLayer(layer_104_U_utility_occupancy_316);
    map.addLayer(layer_104_U_utility_occupancy_316);
    

    
  } else {
    map.removeLayer(layer_104_U_utility_occupancy_316);
  }
}







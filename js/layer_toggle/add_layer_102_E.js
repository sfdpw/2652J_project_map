function pop_102_E_intersection_electricals_322(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  
var popupContent = '<div class="accordion" id="E_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="E_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#E_collapse_01" aria-expanded="false" aria-controls="E_collapse_01"><strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="E_collapse_01" class="collapse" aria-labelledby="E_sheet" data-parent="#E_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="E_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#E_collapse_02" aria-expanded="false" aria-controls="E_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="E_collapse_02" class="collapse" aria-labelledby="E_AB" data-parent="#E_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="E_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#E_collapse_03" aria-expanded="false" aria-controls="E_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="E_collapse_03" class="collapse" aria-labelledby="E_TCP" data-parent="#E_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="E_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#E_collapse_04" aria-expanded="false" aria-controls="E_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="E_collapse_04" class="collapse" aria-labelledby="E_relevant" data-parent="#E_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="E_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#E_collapse_05" aria-expanded="false" aria-controls="E_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="E_collapse_05" class="collapse" aria-labelledby="E_spec" data-parent="#E_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_102_E_intersection_electricals_322_0() {
  return {
    pane: 'pane_102_E_intersection_electricals_322',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(210,228,87,1.0)',
    interactive: true,
  }
}
map.createPane('pane_102_E_intersection_electricals_322');
map.getPane('pane_102_E_intersection_electricals_322').style.zIndex = 606;
map.getPane('pane_102_E_intersection_electricals_322').style['mix-blend-mode'] = 'normal';

var layer_102_E_intersection_electricals_322 = {};

function E_102_toggle() {

  if (document.getElementById("102_E_checkbox").checked == true) {

    layer_102_E_intersection_electricals_322 = new L.geoJson(json_102_E_intersection_electricals_322, {
      attribution: '',
      interactive: true,
      dataVar: 'json_102_E_intersection_electricals_322',
      layerName: 'layer_102_E_intersection_electricals_322',
      pane: 'pane_102_E_intersection_electricals_322',
      onEachFeature: pop_102_E_intersection_electricals_322,
      style: style_102_E_intersection_electricals_322_0,
    });
    bounds_group.addLayer(layer_102_E_intersection_electricals_322);
    map.addLayer(layer_102_E_intersection_electricals_322);

  } else {

    map.removeLayer(layer_102_E_intersection_electricals_322);

  }
  
}

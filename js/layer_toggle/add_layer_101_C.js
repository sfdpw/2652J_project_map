function pop_101_C_const_details_323(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });


var popupContent = '<div class="accordion" id="C_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="C_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#C_collapse_01"\
                                        aria-expanded="false" aria-controls="C_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="C_collapse_01" class="collapse" aria-labelledby="C_sheet" data-parent="#C_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="C_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#C_collapse_02" aria-expanded="false" aria-controls="C_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="C_collapse_02" class="collapse" aria-labelledby="C_AB" data-parent="#C_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="C_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#C_collapse_03" aria-expanded="false" aria-controls="C_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="C_collapse_03" class="collapse" aria-labelledby="C_TCP" data-parent="#C_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="C_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#C_collapse_04" aria-expanded="false" aria-controls="C_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="C_collapse_04" class="collapse" aria-labelledby="C_relevant" data-parent="#C_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="C_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#C_collapse_05" aria-expanded="false" aria-controls="C_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="C_collapse_05" class="collapse" aria-labelledby="C_spec" data-parent="#C_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';

  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_101_C_const_details_323_0() {
  return {
    pane: 'pane_101_C_const_details_323',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(228,173,32,1.0)',
    interactive: true,
  }
}

map.createPane('pane_101_C_const_details_323');
map.getPane('pane_101_C_const_details_323').style.zIndex = 607;
map.getPane('pane_101_C_const_details_323').style['mix-blend-mode'] = 'normal';

var layer_101_C_const_details_323 = {};

function C_101_toggle() {

  if (document.getElementById("101_C_checkbox").checked == true) {

    layer_101_C_const_details_323 = new L.geoJson(json_101_C_const_details_323, {
      attribution: '',
      interactive: true,
      dataVar: 'json_101_C_const_details_323',
      layerName: 'layer_101_C_const_details_323',
      pane: 'pane_101_C_const_details_323',
      onEachFeature: pop_101_C_const_details_323,
      style: style_101_C_const_details_323_0,
    });

    bounds_group.addLayer(layer_101_C_const_details_323);
    map.addLayer(layer_101_C_const_details_323);

  } else {

    map.removeLayer(layer_101_C_const_details_323);

  }

}

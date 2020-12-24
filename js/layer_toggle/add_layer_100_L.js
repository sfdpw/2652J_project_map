function pop_100_L_layout_319(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="L_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="L_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#L_collapse_01" aria-expanded="false" aria-controls="L_collapse_01"><strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="L_collapse_01" class="collapse" aria-labelledby="L_sheet" data-parent="#L_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="L_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#L_collapse_02" aria-expanded="false" aria-controls="L_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="L_collapse_02" class="collapse" aria-labelledby="L_AB" data-parent="#L_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="L_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#L_collapse_03" aria-expanded="false" aria-controls="L_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="L_collapse_03" class="collapse" aria-labelledby="L_TCP" data-parent="#L_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="L_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#L_collapse_04" aria-expanded="false" aria-controls="L_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="L_collapse_04" class="collapse" aria-labelledby="L_relevant" data-parent="#L_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="L_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#L_collapse_05" aria-expanded="false" aria-controls="L_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="L_collapse_05" class="collapse" aria-labelledby="L_spec" data-parent="#L_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_100_L_layout_319_0() {
  return {
    pane: 'pane_100_L_layout_319',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(241,116,0,0.6)',
    interactive: true,
  }
}
map.createPane('pane_100_L_layout_319');
map.getPane('pane_100_L_layout_319').style.zIndex = 603;
map.getPane('pane_100_L_layout_319').style['mix-blend-mode'] = 'normal';

var layer_100_L_layout_319 = {};

function L_100_toggle() {

  if (document.getElementById("100_L_checkbox").checked == true) {

    layer_100_L_layout_319 = new L.geoJson(json_100_L_layout_319, {
      attribution: '',
      interactive: true,
      dataVar: 'json_100_L_layout_319',
      layerName: 'layer_100_L_layout_319',
      pane: 'pane_100_L_layout_319',
      onEachFeature: pop_100_L_layout_319,
      style: style_100_L_layout_319_0,
    });
    bounds_group.addLayer(layer_100_L_layout_319);
    map.addLayer(layer_100_L_layout_319);

  } else {

    map.removeLayer(layer_100_L_layout_319);

  }

}

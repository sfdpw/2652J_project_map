function pop_103_SW_sewer_318(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="SW_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SW_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#SW_collapse_01"\
                                        aria-expanded="false" aria-controls="SW_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SW_collapse_01" class="collapse" aria-labelledby="SW_sheet" data-parent="#SW_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SW_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SW_collapse_02" aria-expanded="false" aria-controls="SW_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SW_collapse_02" class="collapse" aria-labelledby="SW_AB" data-parent="#SW_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SW_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SW_collapse_03" aria-expanded="false" aria-controls="SW_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SW_collapse_03" class="collapse" aria-labelledby="SW_TCP" data-parent="#SW_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SW_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SW_collapse_04" aria-expanded="false" aria-controls="SW_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SW_collapse_04" class="collapse" aria-labelledby="SW_relevant" data-parent="#SW_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="SW_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#SW_collapse_05" aria-expanded="false" aria-controls="SW_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="SW_collapse_05" class="collapse" aria-labelledby="SW_spec" data-parent="#SW_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_103_SW_sewer_318_0() {
  return {
    pane: 'pane_103_SW_sewer_318',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(133,182,111,1.0)',
    interactive: true,
  }
}
map.createPane('pane_103_SW_sewer_318');
map.getPane('pane_103_SW_sewer_318').style.zIndex = 602;
map.getPane('pane_103_SW_sewer_318').style['mix-blend-mode'] = 'normal';

var layer_103_SW_sewer_318 = {};

function SW_103_toggle() {

  if (document.getElementById("103_SW_checkbox").checked == true) {

    layer_103_SW_sewer_318 = new L.geoJson(json_103_SW_sewer_318, {
      attribution: '',
      interactive: true,
      dataVar: 'json_103_SW_sewer_318',
      layerName: 'layer_103_SW_sewer_318',
      pane: 'pane_103_SW_sewer_318',
      onEachFeature: pop_103_SW_sewer_318,
      style: style_103_SW_sewer_318_0,
    });
    
    bounds_group.addLayer(layer_103_SW_sewer_318);
    map.addLayer(layer_103_SW_sewer_318);

  } else {
  
    map.removeLayer(layer_103_SW_sewer_318);
    
  }

}

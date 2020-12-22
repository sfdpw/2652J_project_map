function pop_106_PD_pavement_delineation_317(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });


var popupContent = '<div class="accordion" id="PD_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PD_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PD_collapse_01" aria-expanded="false" aria-controls="PD_collapse_01"><strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PD_collapse_01" class="collapse" aria-labelledby="PD_sheet" data-parent="#PD_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PD_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PD_collapse_02" aria-expanded="false" aria-controls="PD_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PD_collapse_02" class="collapse" aria-labelledby="PD_AB" data-parent="#PD_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PD_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PD_collapse_03" aria-expanded="false" aria-controls="PD_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PD_collapse_03" class="collapse" aria-labelledby="PD_TCP" data-parent="#PD_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PD_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PD_collapse_04" aria-expanded="false" aria-controls="PD_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PD_collapse_04" class="collapse" aria-labelledby="PD_relevant" data-parent="#PD_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PD_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PD_collapse_05" aria-expanded="false" aria-controls="PD_collapse_05"><strong>Relevant Specifications(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PD_collapse_05" class="collapse" aria-labelledby="PD_spec" data-parent="#PD_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_106_PD_pavement_delineation_317_0() {
  return {
    pane: 'pane_106_PD_pavement_delineation_317',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(229,165,146,1.0)',
    interactive: true,
  }
}
map.createPane('pane_106_PD_pavement_delineation_317');
map.getPane('pane_106_PD_pavement_delineation_317').style.zIndex = 601;
map.getPane('pane_106_PD_pavement_delineation_317').style['mix-blend-mode'] = 'normal';

var layer_106_PD_pavement_delineation_317 = {};

function PD_106_toggle() {

  if (document.getElementById("106_PD_checkbox").checked == true) {

    layer_106_PD_pavement_delineation_317 = new L.geoJson(json_106_PD_pavement_delineation_317, {
      attribution: '',
      interactive: true,
      dataVar: 'json_106_PD_pavement_delineation_317',
      layerName: 'layer_106_PD_pavement_delineation_317',
      pane: 'pane_106_PD_pavement_delineation_317',
      onEachFeature: pop_106_PD_pavement_delineation_317,
      style: style_106_PD_pavement_delineation_317_0,
    });

    bounds_group.addLayer(layer_106_PD_pavement_delineation_317);
    map.addLayer(layer_106_PD_pavement_delineation_317);

  } else {

    map.removeLayer(layer_106_PD_pavement_delineation_317);

  }

}

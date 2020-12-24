function pop_105_WD_321(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent = '<div class="accordion" id="WD_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="WD_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#WD_collapse_01"\
                                        aria-expanded="false" aria-controls="WD_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="WD_collapse_01" class="collapse" aria-labelledby="WD_sheet" data-parent="#WD_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="WD_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#WD_collapse_02" aria-expanded="false" aria-controls="WD_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="WD_collapse_02" class="collapse" aria-labelledby="WD_AB" data-parent="#WD_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="WD_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#WD_collapse_03" aria-expanded="false" aria-controls="WD_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="WD_collapse_03" class="collapse" aria-labelledby="WD_TCP" data-parent="#WD_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="WD_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#WD_collapse_04" aria-expanded="false" aria-controls="WD_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="WD_collapse_04" class="collapse" aria-labelledby="WD_relevant" data-parent="#WD_popup">\
                                <div class="card-body">' + (feature.properties['relevant'] !== null ? Autolinker.link(feature.properties['relevant'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="WD_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#WD_collapse_05" aria-expanded="false" aria-controls="WD_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="WD_collapse_05" class="collapse" aria-labelledby="WD_spec" data-parent="#WD_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_105_WD_321_0() {
  return {
    pane: 'pane_105_WD_321',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(119,183,190,1.0)',
    interactive: true,
  }
}
map.createPane('pane_105_WD_321');
map.getPane('pane_105_WD_321').style.zIndex = 605;
map.getPane('pane_105_WD_321').style['mix-blend-mode'] = 'normal';

var layer_105_WD_321 = {};

function WD_105_toggle() {

  if (document.getElementById("105_WD_checkbox").checked == true) {

    layer_105_WD_321 = new L.geoJson(json_105_WD_321, {
      attribution: '',
      interactive: true,
      dataVar: 'json_105_WD_321',
      layerName: 'layer_105_WD_321',
      pane: 'pane_105_WD_321',
      onEachFeature: pop_105_WD_321,
      style: style_105_WD_321_0,
    });
    bounds_group.addLayer(layer_105_WD_321);
    map.addLayer(layer_105_WD_321);

  } else {

    map.removeLayer(layer_105_WD_321);

  }

}

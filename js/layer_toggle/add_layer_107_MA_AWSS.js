function pop_107_MA_AWSS_320(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

var popupContent = '<div class="accordion" id="MA_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MA_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#MA_collapse_01"\
                                        aria-expanded="false" aria-controls="MA_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MA_collapse_01" class="collapse" aria-labelledby="MA_sheet" data-parent="#MA_popup">\
                                <div class="card-body">' + (feature.properties['sheet'] !== null ? Autolinker.link(feature.properties['sheet'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MA_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_02" aria-expanded="false" aria-controls="MA_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MA_collapse_02" class="collapse" aria-labelledby="MA_AB" data-parent="#MA_popup">\
                                <div class="card-body">' + (feature.properties['as_built'] !== null ? Autolinker.link(feature.properties['as_built'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MA_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_03" aria-expanded="false" aria-controls="MA_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MA_collapse_03" class="collapse" aria-labelledby="MA_TCP" data-parent="#MA_popup">\
                                <div class="card-body">' + (feature.properties['tcp'] !== null ? Autolinker.link(feature.properties['tcp'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                              <div class="accordion" id="MA_relevant">\
                                <div class="card">\
                                  <div class="card-header p-0">\
                                    <h2 class="mb-0">\
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_04" aria-expanded="false" aria-controls="MA_collapse_04"><strong>Relevant Sheet(s)</strong>\
                                      </button>\
                                    </h2>\
                                  </div>\
                                  <div id="MA_collapse_04" class="collapse" aria-labelledby="MA_relevant" data-parent="#MA_popup">\
                                    <div class="card-body">\
                                      <div class="card">\
                                        <div class="card-header p-0" id="MA_relevant-G">\
                                          <h2 class="mb-0">\
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_04-1" aria-expanded="false" aria-controls="MA_collapse_04-1"><strong>MA-G - General</strong>\
                                            </button>\
                                          </h2>\
                                        </div>\
                                        <div id="MA_collapse_04-1" class="collapse" aria-labelledby="MA_relevant-G" data-parent="#MA_relevant">\
                                          <div class="card-body">' + (feature.properties['relevant_MA-G'] !== null ? Autolinker.link(feature.properties['relevant_MA-G'].toLocaleString()) : '') + '</div>\
                                        </div>\
                                      </div>\
                                      <div class="card">\
                                        <div class="card-header p-0" id="MA_relevant-D">\
                                          <h2 class="mb-0">\
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_04-2" aria-expanded="false" aria-controls="MA_collapse_04-2"><strong>MA-D - Details</strong>\
                                            </button>\
                                          </h2>\
                                        </div>\
                                        <div id="MA_collapse_04-2" class="collapse" aria-labelledby="MA_relevant-D" data-parent="#MA_relevant">\
                                          <div class="card-body">' + (feature.properties['relevant_MA-D'] !== null ? Autolinker.link(feature.properties['relevant_MA-D'].toLocaleString()) : '') + '</div>\
                                        </div>\
                                      </div>\
                                      <div class="card">\
                                        <div class="card-header p-0" id="MA_relevant-AWSS">\
                                          <h2 class="mb-0">\
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_04-3" aria-expanded="false" aria-controls="MA_collapse_04-3"><strong>AWSS - Standard Details</strong>\
                                            </button>\
                                          </h2>\
                                        </div>\
                                        <div id="MA_collapse_04-3" class="collapse" aria-labelledby="MA_relevant-AWSS" data-parent="#MA_relevant">\
                                          <div class="card-body">' + (feature.properties['relevant_MA-AWSS'] !== null ? Autolinker.link(feature.properties['relevant_MA-AWSS'].toLocaleString()) : '') + '</div>\
                                        </div>\
                                      </div>\
                                      <div class="card">\
                                        <div class="card-header p-0" id="MA_relevant-S">\
                                          <h2 class="mb-0">\
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_04-4" aria-expanded="false" aria-controls="MA_collapse_04-4"><strong>MA - S - Structural</strong>\
                                            </button>\
                                          </h2>\
                                        </div>\
                                        <div id="MA_collapse_04-4" class="collapse" aria-labelledby="MA_relevant-S" data-parent="#MA_relevant">\
                                          <div class="card-body">' + (feature.properties['relevant_MA-S'] !== null ? Autolinker.link(feature.properties['relevant_MA-S'].toLocaleString()) : '') + '</div>\
                                        </div>\
                                      </div>\
                                    </div>\
                                  </div>\
                                </div>\
                              </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="MA_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#MA_collapse_08" aria-expanded="false" aria-controls="MA_collapse_08"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="MA_collapse_08" class="collapse" aria-labelledby="MA_spec" data-parent="#MA_popup">\
                                <div class="card-body">' + (feature.properties['spec'] !== null ? Autolinker.link(feature.properties['spec'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';
  layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_107_MA_AWSS_320_0() {
  return {
    pane: 'pane_107_MA_AWSS_320',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(183,72,75,1.0)',
    interactive: true,
  }
}

map.createPane('pane_107_MA_AWSS_320');
map.getPane('pane_107_MA_AWSS_320').style.zIndex = 604;
map.getPane('pane_107_MA_AWSS_320').style['mix-blend-mode'] = 'normal';

var layer_107_MA_AWSS_320 = {};

function MA_AWSS_107_toggle() {

  if (document.getElementById("107_MA_AWSS_checkbox").checked == true) {
    layer_107_MA_AWSS_320 = new L.geoJson(json_107_MA_AWSS_320, {
      attribution: '',
      interactive: true,
      dataVar: 'json_107_MA_AWSS_320',
      layerName: 'layer_107_MA_AWSS_320',
      pane: 'pane_107_MA_AWSS_320',
      onEachFeature: pop_107_MA_AWSS_320,
      style: style_107_MA_AWSS_320_0,
    });

    bounds_group.addLayer(layer_107_MA_AWSS_320);
    map.addLayer(layer_107_MA_AWSS_320);
    
  } else {

    map.removeLayer(layer_107_MA_AWSS_320);

  }

}

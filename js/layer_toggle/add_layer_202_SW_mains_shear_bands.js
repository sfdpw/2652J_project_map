function pop_202_shear_bands_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '(N) Shear Band';
    layer.bindPopup(popupContent, {
        maxHeight: 710
    });
}

function style_202_shear_bands_1_0() {
    return {
        pane: 'pane_202_shear_bands_1',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(243,166,178,1.0)',
        interactive: true,
    }
}

var is_layer_202_shear_bands_1_loaded = false;
var layer_202_shear_bands_1 = {};


function shear_bands_1_toggle()

  {

    if (document.getElementById("202_SW_shear_bands_1").checked) {

        if (is_layer_202_shear_bands_1_loaded == false) {

            map.createPane('pane_202_shear_bands_1');
            map.getPane('pane_202_shear_bands_1').style.zIndex = 701;
            map.getPane('pane_202_shear_bands_1').style['mix-blend-mode'] = 'normal';

            layer_202_shear_bands_1 = new L.geoJson(json_202_shear_bands_1, {
                attribution: '',
                interactive: true,
                dataVar: 'json_202_shear_bands_1',
                layerName: 'layer_202_shear_bands_1',
                pane: 'pane_202_shear_bands_1',
                onEachFeature: pop_202_shear_bands_1,
                pointToLayer: function(feature, latlng) {
                    var context = {
                        feature: feature,
                        variables: {}
                    };
                    return L.circleMarker(latlng, style_202_shear_bands_1_0(feature));
                },
            });

            bounds_group.addLayer(layer_202_shear_bands_1);


        }

        is_layer_202_shear_bands_1_loaded = true;
        map.addLayer(layer_202_shear_bands_1);


    } else {

        map.removeLayer(layer_202_shear_bands_1);

    }
  
  }

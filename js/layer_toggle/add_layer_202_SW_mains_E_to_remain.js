function style_202_SW_mains_E_to_remain(feature) {

            return {
                pane: 'pane_202_SW_mains_E_to_remain',
                    opacity: 1,
                    color: 'rgba(150,150,150,1.0)',
                    dashArray: '10,5',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }

}


var layer_202_SW_mains_E_to_remain = {};
var json_202_SW_mains_0 = json_202_SW_mains_0;
var layer_202_SW_mains_E_to_remain_layer = {};


layer_202_SW_mains_E_to_remain.loaded = false;
layer_202_SW_mains_E_to_remain.type = json_202_SW_mains_0.type;
layer_202_SW_mains_E_to_remain.name = json_202_SW_mains_0.name;
layer_202_SW_mains_E_to_remain.crs = json_202_SW_mains_0.crs;
layer_202_SW_mains_E_to_remain.features = [];


function SW_mains_202_E_to_remain_toggle() {



    if (document.getElementById("202_SW_mains_E_to_remain").checked) {




        if (layer_202_SW_mains_E_to_remain.loaded == false) {



            map.createPane('pane_202_SW_mains_E_to_remain');
            map.getPane('pane_202_SW_mains_E_to_remain').style.zIndex = 700;
            map.getPane('pane_202_SW_mains_E_to_remain').style['mix-blend-mode'] = 'normal';




            for (var ii = 0; ii < json_202_SW_mains_0.features.length; ii++)

            {


                if (json_202_SW_mains_0['features'][ii].properties.SCOPE == '(E) to Remain')

                {

                    layer_202_SW_mains_E_to_remain.features.push(json_202_SW_mains_0.features[ii]);

                }

            }



            layer_202_SW_mains_E_to_remain_layer = new L.geoJson(layer_202_SW_mains_E_to_remain, {
                attribution: '',
                interactive: true,
                dataVar: 'layer_202_SW_mains_E_to_remain',
                layerName: 'layer_202_SW_mains_E_to_remain_layer',
                pane: 'pane_202_SW_mains_E_to_remain',
                onEachFeature: pop_202_SW_mains_0,
                style: style_202_SW_mains_E_to_remain,
            });
            bounds_group.addLayer(layer_202_SW_mains_E_to_remain_layer);

        }

        layer_202_SW_mains_E_to_remain.loaded = true;
        map.addLayer(layer_202_SW_mains_E_to_remain_layer);

    } else {

        map.removeLayer(layer_202_SW_mains_E_to_remain_layer);

    }

}

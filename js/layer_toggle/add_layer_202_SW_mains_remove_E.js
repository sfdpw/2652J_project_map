function style_202_SW_mains_remove_E(feature) {
    switch (String(feature.properties['STATUS'])) {
        case 'Pre-Construction':
            return {
                pane: 'pane_202_SW_mains_remove_E',
                    opacity: 1,
                    color: 'rgba(215,25,28,1.0)',
                    dashArray: '10,5',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;
    }
}


var layer_202_SW_mains_remove_E = {};
var json_202_SW_mains_0 = json_202_SW_mains_0;
var layer_202_SW_mains_remove_E_layer = {};


layer_202_SW_mains_remove_E.loaded = false;
layer_202_SW_mains_remove_E.type = json_202_SW_mains_0.type;
layer_202_SW_mains_remove_E.name = json_202_SW_mains_0.name;
layer_202_SW_mains_remove_E.crs = json_202_SW_mains_0.crs;
layer_202_SW_mains_remove_E.features = [];


function SW_mains_202_remove_E_toggle() {



    if (document.getElementById("202_SW_mains_remove_E").checked) {




        if (layer_202_SW_mains_remove_E.loaded == false) {



            map.createPane('pane_202_SW_mains_remove_E');
            map.getPane('pane_202_SW_mains_remove_E').style.zIndex = 700;
            map.getPane('pane_202_SW_mains_remove_E').style['mix-blend-mode'] = 'normal';




            for (var ii = 0; ii < json_202_SW_mains_0.features.length; ii++)

            {


                if (json_202_SW_mains_0['features'][ii].properties.SCOPE == 'Remove (E)')

                {

                    layer_202_SW_mains_remove_E.features.push(json_202_SW_mains_0.features[ii]);

                }

            }



            layer_202_SW_mains_remove_E_layer = new L.geoJson(layer_202_SW_mains_remove_E, {
                attribution: '',
                interactive: true,
                dataVar: 'layer_202_SW_mains_remove_E',
                layerName: 'layer_202_SW_mains_remove_E_layer',
                pane: 'pane_202_SW_mains_remove_E',
                onEachFeature: pop_202_SW_mains_0,
                style: style_202_SW_mains_remove_E,
            });
            bounds_group.addLayer(layer_202_SW_mains_remove_E_layer);

        }

        layer_202_SW_mains_remove_E.loaded = true;
        map.addLayer(layer_202_SW_mains_remove_E_layer);

    } else {

        map.removeLayer(layer_202_SW_mains_remove_E_layer);

    }

}

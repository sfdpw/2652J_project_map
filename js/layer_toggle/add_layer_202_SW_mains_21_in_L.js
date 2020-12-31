function style_202_SW_mains_21_in_L(feature) {
    switch (String(feature.properties['STATUS'])) {
        case 'Pre-Construction':
            return {
                pane: 'pane_202_SW_mains_21_in_L',
                    opacity: 1,
                    color: 'rgba(59,82,139,1.0)',
                    dashArray: '2,5',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

            // case 'Post-Construction, Pre-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_21_in_L',
            //       opacity: 1,
            //       color: 'rgba(132,23,123,1.0)',
            //       dashArray: '',
            //       lineCap: 'square',
            //       lineJoin: 'bevel',
            //       weight: 4.0,
            //       fillOpacity: 0,
            //       interactive: true,
            //   }

            // case 'Post-Construction, Post-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_21_in_L',
            //       opacity: 1,
            //       color: 'rgba(132,23,123,1.0)',
            //       dashArray: '',
            //       lineCap: 'square',
            //      lineJoin: 'bevel',
            //       weight: 4.0,
            //       fillOpacity: 0,
            //       interactive: true,
            //   }
            //   break;
    }
}


var layer_202_SW_mains_21_in_L = {};
var json_202_SW_mains_0 = json_202_SW_mains_0;
var layer_202_SW_mains_21_in_L_layer = {};


layer_202_SW_mains_21_in_L.loaded = false;
layer_202_SW_mains_21_in_L.type = json_202_SW_mains_0.type;
layer_202_SW_mains_21_in_L.name = json_202_SW_mains_0.name;
layer_202_SW_mains_21_in_L.crs = json_202_SW_mains_0.crs;
layer_202_SW_mains_21_in_L.features = [];


function SW_mains_202_21_in_L_toggle() {



    if (document.getElementById("202_SW_mains_21_in_L").checked) {




        if (layer_202_SW_mains_21_in_L.loaded == false) {



            map.createPane('pane_202_SW_mains_21_in_L');
            map.getPane('pane_202_SW_mains_21_in_L').style.zIndex = 700;
            map.getPane('pane_202_SW_mains_21_in_L').style['mix-blend-mode'] = 'normal';




            for (var ii = 0; ii < json_202_SW_mains_0.features.length; ii++)

            {


                if (json_202_SW_mains_0['features'][ii].properties.PIPE_DIA == '21\"' && json_202_SW_mains_0['features'][ii].properties.SCOPE == 'Line (E) with CIPL')

                {

                    layer_202_SW_mains_21_in_L.features.push(json_202_SW_mains_0.features[ii]);

                }

            }



            layer_202_SW_mains_21_in_L_layer = new L.geoJson(layer_202_SW_mains_21_in_L, {
                attribution: '',
                interactive: true,
                dataVar: 'layer_202_SW_mains_21_in_L',
                layerName: 'layer_202_SW_mains_21_in_L_layer',
                pane: 'pane_202_SW_mains_21_in_L',
                onEachFeature: pop_202_SW_mains_0,
                style: style_202_SW_mains_21_in_L,
            });
            bounds_group.addLayer(layer_202_SW_mains_21_in_L_layer);

        }

        layer_202_SW_mains_21_in_L.loaded = true;
        map.addLayer(layer_202_SW_mains_21_in_L_layer);

    } else {

        map.removeLayer(layer_202_SW_mains_21_in_L_layer);

    }

}

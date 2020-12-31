function style_202_SW_mains_30_in_N(feature) {
    switch (String(feature.properties['STATUS'])) {
        case 'Pre-Construction':
            return {
                pane: 'pane_202_SW_mains_30_in_N',
                    opacity: 1,
                    color: 'rgba(68,1,84,1.0)',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

            // case 'Post-Construction, Pre-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_30_in_N',
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
            //     pane: 'pane_202_SW_mains_30_in_N',
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


var layer_202_SW_mains_30_in_N = {};
var json_202_SW_mains_0 = json_202_SW_mains_0;
var layer_202_SW_mains_30_in_N_layer = {};


layer_202_SW_mains_30_in_N.loaded = false;
layer_202_SW_mains_30_in_N.type = json_202_SW_mains_0.type;
layer_202_SW_mains_30_in_N.name = json_202_SW_mains_0.name;
layer_202_SW_mains_30_in_N.crs = json_202_SW_mains_0.crs;
layer_202_SW_mains_30_in_N.features = [];


function SW_mains_202_30_in_N_toggle() {



    if (document.getElementById("202_SW_mains_30_in_N").checked) {




        if (layer_202_SW_mains_30_in_N.loaded == false) {



            map.createPane('pane_202_SW_mains_30_in_N');
            map.getPane('pane_202_SW_mains_30_in_N').style.zIndex = 700;
            map.getPane('pane_202_SW_mains_30_in_N').style['mix-blend-mode'] = 'normal';




            for (var ii = 0; ii < json_202_SW_mains_0.features.length; ii++)

            {


                if (json_202_SW_mains_0['features'][ii].properties.PIPE_DIA == '30\"' && json_202_SW_mains_0['features'][ii].properties.SCOPE.includes('(N) VCP'))

                {

                    layer_202_SW_mains_30_in_N.features.push(json_202_SW_mains_0.features[ii]);

                }

            }



            layer_202_SW_mains_30_in_N_layer = new L.geoJson(layer_202_SW_mains_30_in_N, {
                attribution: '',
                interactive: true,
                dataVar: 'layer_202_SW_mains_30_in_N',
                layerName: 'layer_202_SW_mains_30_in_N_layer',
                pane: 'pane_202_SW_mains_30_in_N',
                onEachFeature: pop_202_SW_mains_0,
                style: style_202_SW_mains_30_in_N,
            });
            bounds_group.addLayer(layer_202_SW_mains_30_in_N_layer);

        }

        layer_202_SW_mains_30_in_N.loaded = true;
        map.addLayer(layer_202_SW_mains_30_in_N_layer);

    } else {

        map.removeLayer(layer_202_SW_mains_30_in_N_layer);

    }

}

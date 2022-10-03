function E_conduit_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {
                
                if (local_json_layer_obj['features'][ii].properties.install_id.includes(property_filters.substring(0,4).replace('-','_')))

                {

                    local_json_layer_obj['features'][ii].L_index_stored_in_each_feature = layer_index;
                    local_json_layer_obj['features'][ii].rgba_code_stored_in_each_feature = rgba_code;
                    master_layer_array[layer_index].features.push(local_json_layer_obj['features'][ii]);

                }

            }

            master_layer_array[layer_index].layer = new L.geoJson(master_layer_array[layer_index], {
                attribution: '',
                interactive: true,
                dataVar: 'L_'.concat(layer_index),
                layerName: 'L_'.concat(layer_index),
                pane: 'P_'.concat(layer_index),
                onEachFeature: pop_up_creator_for_domain,
                style: E_conduit_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}


function E_conduit_layer_styler(feature) {

    switch (String(feature.properties['STATUS'])) {
            
         case 'Post-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 5,
                    fillOpacity: 0,
                    interactive: true,
            }
            
            break;           

            // case 'Post-Construction, Pre-Payment':
            //   return {
            //     pane: 'pane_202_SW_mains_08_in_N',
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
            //     pane: 'pane_202_SW_mains_08_in_N',
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



function unpack_conduit_feature_description(property_filters)

{

    var output_L_desc = '';


        if (property_filters == 'E-38')

        {

            output_L_desc = '1\" PVC x1';  

        } else if (property_filters == 'E-39')

        {

            output_L_desc = '2\" PVC x1';

        } else if (property_filters == 'E-40')

        {

            output_L_desc = '2\" PVC x2';

        } else if (property_filters == 'E-41')

        {

            output_L_desc = '3\" PVC x1';

        } else if (property_filters == 'E-42')

        {

            output_L_desc = '3\" PVC x1,<br>2\" PVC x1';

        } else if (property_filters == 'E-44')

        {

            output_L_desc = '2\" GRS x1,<br>2\" PVC x2';

        } else if (property_filters == 'E-45')

        {

            output_L_desc = '2\" GRS x1,<br>2\" PVC x3';

        } else if (property_filters == 'E-46')

        {

            output_L_desc = '2\" GRS x1';

        }  else if (property_filters == 'E-48')

        {

            output_L_desc = '2\" GRS x3';

        } else if (property_filters == 'E-49')

        {

            output_L_desc = '2\" GRS x6';

        } else if (property_filters == 'E-50')

        {

            output_L_desc = '2\" HDPE x2';

        } 


        return output_L_desc

}




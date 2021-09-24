
function SW_main_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

                var filter_pass = [];

                for (var jj = 0; jj < property_filters.length; jj++)

                {

                    if (property_filters[jj].includes('\"') || property_filters[jj].includes('\''))

                    {

                        filter_pass[jj] =
                            local_json_layer_obj['features'][ii].properties.PIPE_DIA == property_filters[jj];

                    }

                    if (

                        (property_filters[jj].includes('(') && property_filters[jj].includes(')')) ||
                        property_filters[jj].includes('CIPL')

                    )

                    {

                        filter_pass[jj] =
                            local_json_layer_obj['features'][ii].properties.SCOPE.includes(property_filters[jj]);

                    }


                    if (property_filters.includes('CS') ==  false && 
                        local_json_layer_obj['features'][ii].properties.SCOPE.includes('Concrete Parking Strip') == true)
                        
                    {
                    
                        filter_pass[jj] = false;
                    
                    }     



                    if (property_filters[jj] == 'CS')

                    {

                        filter_pass[jj] =
                            local_json_layer_obj['features'][ii].properties.SCOPE.includes('Concrete Parking Strip');

                    }
                    




                    


                }

                if (property_filters.length == 1)

                {

                    filter_pass = [local_json_layer_obj['features'][ii].properties.SCOPE.includes(property_filters[0])];

                }


                if (filter_pass.includes(false) == false)

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
                style: SW_main_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

     document.getElementById("718_SW_shear_band").checked = document.getElementById("7xx_SWMN_checkbox").checked;
        
           shear_bands_1_toggle();                 

}


function SW_main_layer_styler(feature) {



    var dash_code = '';

    if (feature.properties['SCOPE'].includes('Line '))

    {

        dash_code = '9, 9'

    }

    switch (String(feature.properties['STATUS'])) {
        case 'No Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: dash_code,
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case 'Pre-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: dash_code,
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case 'Post-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: dash_code,
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
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


function unpack_SW_main_feature_description(property_filters)

{

    var output_L_desc = '';


        if (property_filters.includes('(N)'))

        {

            output_L_desc = 'Install (N) '.concat(property_filters[1]);
            output_L_desc += ' VCP';

        } else if (property_filters.includes('CIPL'))

        {

            output_L_desc = 'Line (E) '.concat(property_filters[1]);
            output_L_desc += ' with CIPL';

        }


        if (property_filters.includes('CS'))

        {

            output_L_desc += ' at Concrete Parking Strip';

        }

        if (property_filters.includes('Remain'))

        {

            output_L_desc += '(E) to Remain';

        }

        if (property_filters.includes('Plug'))

        {

            output_L_desc += 'Plug and Fill (E)';

        }

        if (property_filters.includes('Remove'))

        {

            output_L_desc += 'Remove (E)';

        }
        return output_L_desc

}

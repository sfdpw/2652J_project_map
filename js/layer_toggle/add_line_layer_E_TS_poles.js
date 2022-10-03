function E_pole_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

{

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

                if (local_json_layer_obj['features'][ii].properties.BID_ITEM.includes(property_filters.substring(0, 4)))

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
                style: E_pole_layer_styler,
            });

            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}

function E_pole_layer_styler(feature) {



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


    }
}

function unpack_TS_pole_feature_description(property_filters)

{

    var output_L_desc = '';

    if (property_filters == 'E-14')

    {

        output_L_desc = '5\' Pedestrian Push Button Assembly Post<br>\
                             with Concrete Foundation';
                         

    } else if (property_filters == 'E-15')

    {

        output_L_desc = 'Type 1-A Pole - 7\' with Concrete Foundation';

    } else if (property_filters == 'E-16')

    {

        output_L_desc = 'Type 1-A Pole - 10\' with Concrete Foundation';

    }  else if (property_filters == 'E-21')

    {

        output_L_desc = 'New Type 19-2-100 Pole<br>\
                             with 25-foot Signal Mast Arm, MAS Mounting,<br>\
                             8-Foot Luminaire Arm, LED Luminaire,<br>\
                             and Concrete Foundation';

    }
    
    else if (property_filters == 'E-29')

    {

        output_L_desc = 'Relocation of (E) 19-2-100 MA Pole<br>\
                             with 25-Foot Signal Mast Arm, MAS Mounting,<br>\
                             12-Foot Luminaire Arm, and LED Luminaire';

    } else if (property_filters == 'E-31')

    {

        output_L_desc = 'Relocation of (E) 19-4-100 MA Pole<br>\
                             with 25-Foot Signal Mast Arm, MAS Mounting,<br>\
                             8-Foot Luminaire Arm, and LED Luminaire';

    } else if (property_filters == 'E-32')

    {

        output_L_desc = 'Relocation of (E) 24-3-100 MA Pole<br>\
                             with 35-Foot Signal Mast Arm, MAS Mounting,<br>\
                             8-Foot Luminaire Arm, and LED Luminaire';

    } else if (property_filters == 'E-33')

    {

        output_L_desc = 'Relocation of (E) 24-4-100 MA Pole<br>\
                             with 35-Foot Signal Mast Arm, MAS Mounting,<br>\
                             8-Foot Luminaire Arm, and LED Luminaire';

    } else if (property_filters == 'E-34')

    {

        output_L_desc = 'Relocation of (E) 24-4-100 MA Pole<br>\
                             with 35-Foot Signal Mast Arm, MAS Mounting,<br>\
                             15-Foot Luminaire Arm, and LED Luminaire';

    }

    return output_L_desc

}

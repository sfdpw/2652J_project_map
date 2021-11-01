function E_signal_mountings_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

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
                style: E_signal_mountings_layer_styler,
            });

            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}

function E_signal_mountings_layer_styler(feature) {



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

function unpack_signal_mountings_feature_description(property_filters)

{

    var output_L_desc = '';


    if (property_filters == 'E-05')

    {

        output_L_desc = '(SV-1-T) One-Way Post<br>\
                         Side-Mounted Vehicle Signal<br>\
                         Mounting with Terminal Compartment';

    } else if (property_filters == 'E-06')

    {

        output_L_desc = '(SV-2-TA) Two-Way Post<br>\
                         Side-Mounted Vehicle Signal<br>\
                         Mounting with Terminal Compartment<br>\
                         in Configuration (SV-1-T) One-Way Post<br>\
                         Side-Mounted Vehicle Signal Mounting<br>\
                         with Terminal Compartment "A"';

    } else if (property_filters == 'E-12')

    {

        output_L_desc = '(SP-1) One-Way Side-Mounted<br>\
                         Pedestrian Signal Mounting';

    } 

    return output_L_desc

}

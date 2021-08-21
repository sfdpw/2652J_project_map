
function E_PB_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

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
                pointToLayer: function(feature, latlng) {
          
                var context = {feature: feature, variables: {}};
                
                return L.circleMarker(latlng, E_PB_layer_styler(feature));},});
                
                bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}


function E_PB_layer_styler(feature) {

                    

  switch (String(feature.properties['STATUS'])) {
    case 'Post-Construction':
      return {
        pane:  'P_'.concat(feature.L_index_stored_in_each_feature),
          radius: 4.0,
          opacity: 1,
          color: 'rgba(35,35,35,1.0)',
          dashArray: '',
          lineCap: 'butt',
          lineJoin: 'miter',
          weight: 2,
          fill: true,
          fillOpacity: 1,
          fillColor: feature.rgba_code_stored_in_each_feature,
          interactive: true,
      }
      break;      
      
   
  }
}

function unpack_pullbox_feature_description(property_filters)

{

    var output_L_desc = '';


        if (property_filters == 'E-35')

        {

            output_L_desc = 'Type I Pullbox';  

        } else if (property_filters == 'E-36')

        {

            output_L_desc = 'Type III Pullbox';

        } else if (property_filters == 'E-37')

        {

            output_L_desc = 'Type 48X Pullbox';

        } 


        return output_L_desc

}

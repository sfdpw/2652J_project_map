
function E_signals_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

              if (property_filters.includes(local_json_layer_obj['features'][ii].properties.SIG_TYPE))

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
                
                return L.circleMarker(latlng, E_signal_layer_styler(feature));},});
                
                bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}


function E_signal_layer_styler(feature) {

                    

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

//function unpack_signal_feature_description(property_filters)

//{

//    var output_L_desc = '';


//        if (property_filters == 'E-01')

//        {

//            output_L_desc = '(3S12\”) 3 Section,<br>\
//                             12-inch Vehicle Signal Face<br>\
//                             with Type 1 LED Red, Yellow, and Green';  

//        } else if (property_filters == 'E-10')

//        {

//            output_L_desc = '(1S-Count) One-Section LED<br>\
//                             Pedestrian Countdown Signal Housing';

//        } else if (property_filters == 'E-11')

//        {

//            output_L_desc = 'Labor Cost Only To Install<br>\
//                             City Furnished (1S-Count Module)<br>\
//                             One-Section LED Pedestrian<br>\
//                             Countdown Signal Module';

//        }


//        return output_L_desc

//}


function SW_MH_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

                if (local_json_layer_obj['features'][ii].properties.SCOPE == property_filters)

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
                
                return L.circleMarker(latlng, SW_MH_layer_styler(feature));},});
                
                bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}


function SW_MH_layer_styler(feature) {

                    

  switch (String(feature.properties['STATUS'])) {
    case 'No Construction':

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
      
    case 'Pre-Construction':
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

    case 'Post-Construction':
      return {
        pane:  'P_'.concat(feature.L_index_stored_in_each_feature),
          radius: 8.0,
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

//map.createPane('pane_201_MHs_5');
//map.getPane('pane_201_MHs_5').style.zIndex = 705;
//map.getPane('pane_201_MHs_5').style['mix-blend-mode'] = 'normal';

//var layer_201_MHs_5 = {};
//var did_layer_201_MHs_load = false;

//function MH_201_toggle() {

//  if (document.getElementById("201_MH_checkbox").checked) {

//    if (did_layer_201_MHs_load == false) {

//     layer_201_MHs_5 = new L.geoJson(json_201_MHs_5, {
//        attribution: '',
//        interactive: true,
//        dataVar: 'json_201_MHs_5',
//        layerName: 'layer_201_MHs_5',
//        pane: 'pane_201_MHs_5',
//        onEachFeature: pop_201_MHs_5,
//        pointToLayer: function(feature, latlng) {
//          var context = {
//            feature: feature,
//            variables: {}
//          };
//          return L.circleMarker(latlng, style_201_MHs_5_0(feature));
//        },
//      });

//      bounds_group.addLayer(layer_201_MHs_5);
//    }

//    did_layer_201_MHs_load = true;
//    map.addLayer(layer_201_MHs_5);

//  } else {

//    map.removeLayer(layer_201_MHs_5);

//  }

//}

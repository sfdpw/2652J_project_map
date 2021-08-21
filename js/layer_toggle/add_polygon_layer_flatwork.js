
function flatwork_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {

     //           var filter_pass = [];

      //          for (var jj = 0; jj < property_filters.length; jj++)

      //          {


      //          }

//                if (property_filters.length == 1)

//                {

//                    filter_pass = [local_json_layer_obj['features']//[ii].properties.SCOPE.includes(property_filters[0])];

              //  }


                if (local_json_layer_obj['features'][ii].properties.install_id.includes(property_filters.substring(0,5).replace('-','_')))

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
                style: flatwork_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

     //document.getElementById("718_SW_shear_band").checked = document.getElementById("7xx_SWMN_checkbox").checked;
        
     //      shear_bands_1_toggle();                 

}



function flatwork_layer_styler(feature) {
  return {
    pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 1,
    fillColor: feature.rgba_code_stored_in_each_feature,
    interactive: true,
  }
}






function unpack_flatwork_feature_description(property_filters)

{

    var output_L_desc = '';


        if (property_filters == 'CR-1')

        {

            output_L_desc = 'Planing / Grinding';

        } else if (property_filters == 'CR-2')

        {

            output_L_desc = 'Hot Mix AC';

        } else if (property_filters == 'CR-3')

        {

            output_L_desc = '9in JPCP Base';

        } else if (property_filters == 'CR-4')

        {

            output_L_desc = '12in, Class II Agg. Base';

        } else if (property_filters == 'CR-5')

        {

            output_L_desc = '10in JPCP Bus Pad';

        } else if (property_filters == 'CR-6')

        {

            output_L_desc = '6in, Class II Agg. Base';

        } else if (property_filters == 'CR-7')

        {

            output_L_desc = '3.5in Sidewalk';

        } else if (property_filters == 'CR-8')

        {

            output_L_desc = '4in Sidewalk';

        } else if (property_filters == 'CR-9')

        {

            output_L_desc = '6in Sidewalk';

        } else if (property_filters == 'CR-10')

        {

            output_L_desc = '4in or 6in Concrete Curb';

        } else if (property_filters == 'CR-11')

        {

            output_L_desc = '12in Concrete Parking Strip or Gutter	';

        } else if (property_filters == 'CR-12')

        {

            output_L_desc = 'Concrete Curb Ramp with Concrete Detectable Tiles';

        } else if (property_filters == 'CR-13')

        {

            output_L_desc = 'Adjust City-Owned Manhole and Catchbasin Frame And Casting To Grade';

        } else if (property_filters == 'CR-14')

        {

            output_L_desc = 'Adjust City-Owned Hydrant and Watermain Valve Box Casting Cover To Grade';

        } else if (property_filters == 'CR-15')

        {

            output_L_desc = '8in Reinforced Sidewalk for Bus Shelter Foundation';

        } else if (property_filters == 'CR-16')

        {

            output_L_desc = 'Irving St Concrete Paving with Integral Color';

        } else if (property_filters == 'CR-17')

        {

            output_L_desc = '2in AC Pathway Pavement over 4in Agg. Base';

        }


        return output_L_desc

}


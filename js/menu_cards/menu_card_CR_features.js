var flatwork_feature_menu =
        '<div class="card">\
           <div class="card-header" id="heading_flatwork_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_flatwork"\
                      aria-expanded="true" aria-controls="collapse_flatwork">\
                <strong>\
                  Flatwork Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_flatwork" class="collapse"\
                aria-labelledby="heading_flatwork_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="8xx_FWRK_checkbox"\
                             onchange="feature_layer_toggle(\'8xx_FWRK_checkbox\',' 
                             + CR_fltwrk_index_limits[0] + ',' + CR_fltwrk_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="8xx_FWRK_checkbox"><strong>Flatwork</strong></label></td>\
                </tr>'
 
 
 let CR_index = [852, 853, 851, 850, 855, 854, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866];
 for (var ll of CR_index)

// for (var ll = CR_fltwrk_index_limits[0]; ll <= CR_fltwrk_index_limits[1]; ll++) // Flatwork              
 
   {flatwork_feature_menu += layer_card_entry_generator(ll);}
  
                
//flatwork_feature_menu +=

//                '<tr>\
//                  <td>\
//                    <input type="checkbox" id="718_SW_shear_band" onchange="shear_bands_1_toggle()">\
//                  </td>\
//                  <td>\
//                    <img src="legend/L_718.png" width="13" height="13"\
//                         alt="Feature Symbol - SW Mains - Install (N) Shear Band"/>\
//                    <label class="layer_label" for="718_SW_shear_band">Install (N) Shear Band</label>\
//                  </td>\
//                </tr>\
//                <tr>\
//                  <td colspan="2">&nbsp;</td>\
//                </tr>\
//                <tr>\
//                  <td><input type="checkbox" id="7xx_SW_MH_checkbox"\
//                             onchange="feature_layer_toggle(\'7xx_SW_MH_checkbox\','
//                             + SW_MH_index_limits[0] + ',' + SW_MH_index_limits[1] + ')"></td>\
//                  <td><label class="layer_label" for="7xx_SW_MH_checkbox"><strong>Manholes</strong></label></td>\
//                </tr>'          
 
            
flatwork_feature_menu +=                                                

              '</table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += flatwork_feature_menu;

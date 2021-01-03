var sw_sewer_feature_menu =
        '<div class="card">\
           <div class="card-header" id="heading_sewer_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sewer"\
                      aria-expanded="true" aria-controls="collapse_sewer">\
                <strong>\
                  Sewer Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sewer" class="collapse"\
                aria-labelledby="heading_sewer_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SWMN_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SWMN_checkbox\',' 
                             + SW_main_index_limits[0] + ',' + SW_main_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SWMN_checkbox"><strong>Mains</strong></label></td>\
                </tr>'
 
 for (var ll = SW_main_index_limits[0]; ll <= SW_main_index_limits[1]; ll++) // SEWER MAINS               
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}
  
                
sw_sewer_feature_menu +=

                '<tr>\
                  <td>\
                    <input type="checkbox" id="718_SW_shear_band" onchange="shear_bands_1_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/L_718.png" width="13" height="13"\
                         alt="Feature Symbol - SW Mains - Install (N) Shear Band"/>\
                    <label class="layer_label" for="718_SW_shear_band">Install (N) Shear Band</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_MH_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_MH_checkbox\','
                             + SW_MH_index_limits[0] + ',' + SW_MH_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_MH_checkbox"><strong>Manholes</strong></label></td>\
                </tr>'          
 
 
for (ll = SW_MH_index_limits[0]; ll <= SW_MH_index_limits[1]; ll++) // SEWER MHs
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);} 


sw_sewer_feature_menu +=


                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_clvt_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_clvt_checkbox\','
                             + SW_clvt_index_limits[0] + ',' + SW_clvt_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_clvt_checkbox"><strong>Culverts</strong></label></td>\
                </tr>'
                
              
for (ll = SW_clvt_index_limits[0]; ll <= SW_clvt_index_limits[1]; ll++) // SEWER clvt 
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);} 


sw_sewer_feature_menu +=                
                
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_drain_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_drain_checkbox\','
                             + SW_drain_index_limits[0] + ',' + SW_drain_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_drain_checkbox"><strong>Drains</strong></label></td>\
                </tr>'
                
for (ll = SW_drain_index_limits[0]; ll <= SW_drain_index_limits[1]; ll++) // SEWER drain
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}                 
                

sw_sewer_feature_menu +=                                
      
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="200_laterals_checkbox" onchange="laterals_200_toggle()"></td>\
                  <td><label class="layer_label" for="200_laterals_checkbox"><strong>Laterals</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_EtoRemain0.png" width="13" height="13"\
                         alt="Scope Symbol - Laterals - (E) to Remain"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">(E) to Remain</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_ExtendandConnectEorReplacewithNasDirectedbyCity1.png"\
                              width="13" height="13"\
                         alt="Scope Symbol - Laterals - Extend and Connect (E) or Replace with (N) as Directed by City"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Extend and Connect (E) or Replace with (N) as Directed by City</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_IntercepttoConnectEorReplacewithNasDirectedbyCity2.png"\
                              width="13" height="13"\
                         alt="Scope Symbol - Laterals - Intercept to Connect (E) or Replace with (N) as Directed by City"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Intercept to Connect (E) or Replace with (N) as Directed by City</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_ReplaceEwithN3.png" width="13" height="13"\
                         alt="Scope Symbol - Laterals - Replace (E) with (N)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_ReplaceEwithNasDirectedbyCity4.png"\
                              width="13" height="13"\
                         alt="Scope Symbol - Laterals - Replace (E) with (N) as Directed by City"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N) as Directed by City</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_ReplaceEwithNExtendandConnect5.png" width="13" height="13"\
                         alt="Scope Symbol - Laterals - Replace (E) with (N), Extend and Connect"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N), Extend and Connect</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/200_laterals_2_RemoveE6.png" width="13" height="13"\
                         alt="Scope Symbol - Laterals - Remove (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Remove (E)</span>\
                  </td>\
                </tr>\
              </table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += sw_sewer_feature_menu;

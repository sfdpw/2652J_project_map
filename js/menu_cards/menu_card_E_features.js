var electrical_feature_menu =
    '<div class="card">\
           <div class="card-header" id="heading_electrical_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_electrical"\
                      aria-expanded="true" aria-controls="collapse_electrical">\
                <strong>\
                  Electrical Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_electrical" class="collapse"\
                aria-labelledby="heading_electrical_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="8xx_ETR_checkbox"\
                             onchange="feature_layer_toggle(\'8xx_ETR_checkbox\',' +
    E_TS_pole_relocation_index_limits[0] + ',' + E_TS_pole_relocation_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="8xx_ETR_checkbox"><strong>Mast Arm Pole Relocations</strong></label></td>\
                </tr>';

for (var ll = E_TS_pole_relocation_index_limits[0]; ll <= E_TS_pole_relocation_index_limits[1]; ll++) // MA Pole Relocations          

{
    electrical_feature_menu += layer_card_entry_generator(ll);
}

electrical_feature_menu +=

               '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="8xx_EPB_checkbox"\
                             onchange="feature_layer_toggle(\'8xx_EPB_checkbox\',' +
    E_pullbox_index_limits[0] + ',' + E_pullbox_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="8xx_EPB_checkbox"><strong>Pullboxes</strong></label></td>\
                </tr>';

for (var ll = E_pullbox_index_limits[0]; ll <= E_pullbox_index_limits[1]; ll++) // Pullboxes           

{
    electrical_feature_menu += layer_card_entry_generator(ll);
}

electrical_feature_menu +=

               '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="8xx_ECOND_checkbox"\
                             onchange="feature_layer_toggle(\'8xx_ECOND_checkbox\',' +
    E_conduit_index_limits[0] + ',' + E_conduit_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="8xx_ECOND_checkbox"><strong>Conduit</strong></label></td>\
                </tr>';


for (var ll = E_conduit_index_limits[0]; ll <= E_conduit_index_limits[1]; ll++) // Conduit            

{
    electrical_feature_menu += layer_card_entry_generator(ll);
}


electrical_feature_menu +=

    '</table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += electrical_feature_menu;

document.getElementById("map_master_menu").innerHTML += 
       
       '<div class="card">\
          <div class="card-header" id="heading_sheet_layers">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sheet"\
                      aria-expanded="true" aria-controls="collapse_sheet">\
                <strong>\
                  Sheet Layer(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sheet" class="collapse"\
               aria-labelledby="heading_sheet_layers" data-parent="#map_master_menu">\
            <div class="card-body">\
              <table>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="003_stations_checkbox" onchange="STA_003_toggle()" checked>\
                  </td>\
                  <td>\
                    <img src="legend/003_stations_084_324.png" alt="Layer Symbol - Stations"/>\
                    <label class="layer_label" for="003_stations_checkbox">Stations</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="104_U_checkbox" onchange="U_104_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/104_U_utility_occupancy_316.png" width="13" height="13"\
                         alt="Layer Symbol - Utility Occupancy"/>\
                    <label class="layer_label" for="104_U_checkbox">U - Utility Occupancy</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="103_SW_checkbox" onchange="SW_103_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/103_SW_sewer_318.png" width="13" height="13"\
                         alt="Layer Symbol - Sewer"/>\
                    <label class="layer_label" for="103_SW_checkbox">SW - Sewer</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="107_MA_AWSS_checkbox" onchange="MA_AWSS_107_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/107_MA_AWSS_320.png" width="13" height="13"\
                         alt="Layer Symbol - AWSS"/>\
                    <label class="layer_label" for="107_MA_AWSS_checkbox"> MA - AWSS</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="105_WD_checkbox" onchange="WD_105_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/105_WD_321.png" width="13" height="13"\
                         alt="Layer Symbol - Water Work"/>\
                    <label class="layer_label" for="105_WD_checkbox">WD - Water Service</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="100_L_checkbox" onchange="L_100_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/100_L_layout_319.png" width="13" height="13"\
                         alt="Layer Symbol - Layout"/>\
                    <label class="layer_label" for="100_L_checkbox">L - Layout</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="101_C_checkbox" onchange="C_101_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/101_C_const_details_323.png" width="13" height="13"\
                         alt="Layer Symbol - Construction Detail"/>\
                    <label class="layer_label" for="101_C_checkbox">C - Construction Detail</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="102_E_checkbox" onchange="E_102_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/102_E_intersection_electricals_322.png" width="13" height="13"\
                         alt="Layer Symbol - Electric"/>\
                    <label class="layer_label" for="102_E_checkbox">E - Intersection Electricals</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="106_PD_checkbox" onchange="PD_106_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/106_PD_pavement_delineation_317.png" width="13" height="13"\
                         alt="Layer Symbol - Pavement Delineation"/>\
                    <label class="layer_label" for="106_PD_checkbox">PD - Pavement Delineation</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="999_OSM_checkbox" onchange="OSM_999_toggle()" checked>\
                  </td>\
                  <td>\
                    <img src="legend/OSM_logo.png" width="13" height="13"\
                         alt="Layer Symbol - Street Map"/>\
                    <label class="layer_label" for="999_OSM_checkbox">Street Map</label>\
                  </td>\
                </tr>\
              </table>\
            </div>\
          </div>\
        </div>';

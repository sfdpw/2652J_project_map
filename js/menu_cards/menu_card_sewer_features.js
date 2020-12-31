document.getElementById("map_master_menu").innerHTML += 
       
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
                  <td><input type="checkbox" id="202_SWMN_checkbox" onchange="SWMN_202_toggle()"></td>\
                  <td><label class="layer_label" for="202_SWMN_checkbox"><strong>Mains</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_08_in_N" onchange="SW_mains_202_08_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_08_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 8" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_08_in_N">Install (N) 8" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_08_in_L" onchange="SW_mains_202_08_in_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_08_in_L.png" width="13" height="13"\
                         alt="Feature Symbol - Line (E) 8" Pipe with CIPL"/>\
                    <label class="layer_label" for="202_SW_mains_08_in_L">Line (E) 8" Pipe with CIPL</label></hr>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_12_in_N" onchange="SW_mains_202_12_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_12_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 12" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_12_in_N">Install (N) 12" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_12_in_CP_N" onchange="SW_mains_202_12_in_CP_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_12_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 12" VCP at Concrete Parking Strip"/>\
                    <label class="layer_label" for="202_SW_mains_12_in_CP_N">Install (N) 12" VCP at Concrete Parking Strip</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_12_in_L" onchange="SW_mains_202_12_in_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_12_in_L.png" width="13" height="13"\
                         alt="Feature Symbol - Line (E) 12" Pipe with CIPL"/>\
                    <label class="layer_label" for="202_SW_mains_12_in_L">Line (E) 12" Pipe with CIPL</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_15_in_N" onchange="SW_mains_202_15_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_15_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 15" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_15_in_N">Install (N) 15" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_15_in_CP_N" onchange="SW_mains_202_15_in_CP_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_15_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 15" VCP at Concrete Parking Strip"/>\
                    <label class="layer_label" for="202_SW_mains_15_in_CP_N">Install (N) 15" VCP at Concrete Parking Strip</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_15_in_L" onchange="SW_mains_202_15_in_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_15_in_L.png" width="13" height="13"\
                         alt="Feature Symbol - Line (E) 15" Pipe with CIPL/>\
                    <label class="layer_label" for="202_SW_mains_15_in_L">Line (E) 15" Pipe with CIPL</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_18_in_N" onchange="SW_mains_202_18_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_18_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 18" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_18_in_N">Install (N) 18" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_18_in_L" onchange="SW_mains_202_18_in_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_18_in_L.png" width="13" height="13"\
                         alt="Feature Symbol - Line (E) 18" Pipe with CIPL"/>\
                    <label class="layer_label" for="202_SW_mains_18_in_L">Line (E) 18" Pipe with CIPL</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_21_in_N" onchange="SW_mains_202_21_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_21_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 21" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_21_in_N">Install (N) 21" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_21_in_L" onchange="SW_mains_202_21_in_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_21_in_L.png" width="13" height="13"\
                         alt="Feature Symbol - Replace (E) with (N) 21" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_21_in_L">Line (E) 21" Pipe with CIPL</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_24_in_N" onchange="SW_mains_202_24_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_24_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 24" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_24_in_N">Install (N) 24" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_30_in_N" onchange="SW_mains_202_30_in_N_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_30_in_N.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) 30" VCP"/>\
                    <label class="layer_label" for="202_SW_mains_30_in_N">Install (N) 30" VCP</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_2x3_ft_L" onchange="SW_mains_202_2x3_ft_L_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_2x3_ft_L.png" width="13" height="13"\
                         alt="Feature Symbol - Line (E) 2\' x 3\' Pipe with CIPL"/>\
                    <label class="layer_label" for="202_SW_mains_2x3_ft_L">Line (E) 2\' x 3\' Pipe with CIPL</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_E_to_remain" onchange="SW_mains_202_E_to_remain_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_E_to_remain.png" width="13" height="13"\
                         alt="Feature Symbol - (E) to Remain"/>\
                    <label class="layer_label" for="202_SW_mains_E_to_remain">(E) to Remain</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_plug_and_fill_E" onchange="SW_mains_202_plug_and_fill_E_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_plug_and_fill_E.png" width="13" height="13"\
                         alt="Feature Symbol - Plug and Fill (E)"/>\
                    <label class="layer_label" for="202_SW_mains_plug_and_fill_E">Plug and Fill (E)</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_mains_remove_E" onchange="SW_mains_202_remove_E_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_SW_mains_remove_E.png" width="13" height="13"\
                         alt="Feature Symbol - Remove (E)"/>\
                    <label class="layer_label" for="202_SW_mains_remove_E">Remove (E)</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="202_SW_shear_bands_1" onchange="shear_bands_1_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/202_shear_bands_1.png" width="13" height="13"\
                         alt="Feature Symbol - Install (N) Shear Band"/>\
                    <label class="layer_label" for="202_SW_shear_bands_1">Install (N) Shear Band</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="201_MH_checkbox" onchange="MH_201_toggle()"></td>\
                  <td><label class="layer_label" for="201_MH_checkbox"><strong>Manholes</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_EtoRemain0.png"\
                         alt="Scope Symbol - Manholes - (E) to Remain"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">\(E) to Remain</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_InstallNperSFPWSTDPlan871811.png"\
                         alt="Scope Symbol - Manholes - Install (N) per SFPW STD Plan 87,181"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) per SFPW STD Plan 87,181</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_InstallNperSFPWSTDPlan871822.png"\
                         alt="Scope Symbol - Manholes - Install (N) per SFPW STD Plan 87,182"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) per SFPW STD Plan 87,182</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_MortarE3.png"\
                         alt="Scope Symbol - Manholes - Mortar (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Mortar (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_ReplaceEwithNperSFPWSTDPlan871814.png"\
                         alt="Scope Symbol - Manholes - Replace (E) with (N) per SFPW STD Plan 87,181"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N) per SFPW STD Plan 87,181</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_ReplaceEwithNperSFPWSTDPlan871825.png"\
                         alt="Scope Symbol - Manholes - Replace (E) with (N) per SFPW STD Plan 87,182"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N) per SFPW STD Plan 87,182</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_ReplaceEwithangledNperSFPWSTDPlan871826.png"\
                         alt="Scope Symbol - Manholes - Replace (E) with angled (N) per SFPW STD Plan 87,182"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with angled (N) per SFPW STD Plan 87,182</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_RemoveE7.png"\
                         alt="Scope Symbol - Manholes - Remove (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Remove (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/201_MHs_5_AbandonE8.png"\
                         alt="Scope Symbol - Manholes - Abandon (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">\Abandon (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="204_CLVT_checkbox" onchange="CLVT_204_toggle()"></td>\
                  <td><label class="layer_label" for="204_CLVT_checkbox"><strong>\Culverts</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/204_culverts_3_EtoRemain0.png" width="13" height="13"\
                         alt="Scope Symbol - Culverts - (E) to Remain"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">\(E) to Remain</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/204_culverts_3_InstallNDIP1.png" width="13" height="13"\
                         alt="Scope Symbol - Culverts - Install (N) DIP"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) DIP</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/204_culverts_3_InstallNVCP2.png" width="13" height="13"\
                         alt="Scope Symbol - Culverts - Install (N) VCP"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) VCP</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/204_culverts_3_PlugE3.png" width="13" height="13"\
                         alt="Scope Symbol - Culverts - Plug (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Plug (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/204_culverts_3_ReplaceEwithNasDirectedbyCity4.png" width="13" height="13"\
                         alt="Scope Symbol - Culverts - Replace (E) with (N) as Directed by City"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N) as Directed by City</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="203_drains_checkbox" onchange="drains_203_toggle()"></td>\
                  <td><label class="layer_label" for="203_drains_checkbox"><strong>\Drains</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/203_drains_4_EtoRemain0.png"\
                         alt="Scope Symbol - Drains - (E) to Remain"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">\(E) to Remain</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/203_drains_4_AbandonE1.png"\
                        alt="Scope Symbol - Drains - Abandon (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">\Abandon (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/203_drains_4_InstallNperSFPWSTDPlan871872.png"\
                        alt="Scope Symbol - Drains - Install (N) per SFPW STD Plan 87,187"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) per SFPW STD Plan 87,187</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/203_drains_4_InstallNperSFPWSTDPlan871883.png"\
                        alt="Scope Symbol - Drains - Install (N) per SFPW STD Plan 87,188"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) per SFPW STD Plan 87,188</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/203_drains_4_InstallNperSFPWSTDPlan871894.png"\
                        alt="Scope Symbol - Drains - Install (N) per SFPW STD Plan 87,189"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) per SFPW STD Plan 87,189</span>\
                  </td>\
                </tr>\
                <tr>\
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
                    <span class="layer_label">\(E) to Remain</span>\
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



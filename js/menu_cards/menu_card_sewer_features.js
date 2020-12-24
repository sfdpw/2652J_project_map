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
                    <img src="legend/202_SW_mains_0_EtoRemain0.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - (E) to Remain"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">(E) to Remain</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/202_SW_mains_0_LineEwithCIPL1.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Line (E) with CIPL"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Line (E) with CIPL</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/202_SW_mains_0_PlugandFillE2.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Plug and Fill (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Plug and Fill (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/202_SW_mains_0_InstallNVCP3.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Install (N) VCP"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Install (N) VCP</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/202_SW_mains_0_ReplaceEwithNVCP4.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Replace (E) with (N) VCP"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Replace (E) with (N) VCP</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/202_SW_mains_0_RemoveE5.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Remove (E)"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Remove (E)</span>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/205_shear_bands_1.png" width="13" height="13"\
                         alt="Scope Symbol - SW Mains - Install (N) Shear Band"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">(N) Shear Band</span>\
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



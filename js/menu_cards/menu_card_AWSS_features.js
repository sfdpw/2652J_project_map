document.getElementById("map_master_menu").innerHTML += 
       
        '<div class="card">\
           <div class="card-header" id="heading_AWSS_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_AWSS"\
                      aria-expanded="true" aria-controls="collapse_AWSS">\
                <strong>\
                  AWSS Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_AWSS" class="collapse"\
                aria-labelledby="heading_AWSS_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="211_SMP_checkbox" onchange="SMP_211_toggle()"></td>\
                  <td><label class="layer_label" for="211_SMP_checkbox"><strong>Settlement Monitoring Points (SMPs)</strong></label></td>\
                </tr>\
                <tr>\
                  <td>\
                    <img src="legend/211_SMPs_0.png" width="13" height="13"\
                         alt="Scope Symbol - SMP"/>\
                  </td>\
                  <td>\
                    <span class="layer_label">Pre-Construction</span>\
                  </td>\
                </tr>\
              </table>\
              </div>\
            </div>\
          </div>\
         </div>';



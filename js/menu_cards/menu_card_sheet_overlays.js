var overlay_menu_subsection_content_U = "";
var overlay_menu_subsection_content_SW = "";
var overlay_menu_subsection_content_MA_AWSS = "";
var overlay_menu_subsection_content_WD = "";
var overlay_menu_subsection_content_L = "";
var overlay_menu_subsection_content_C = "";
var overlay_menu_subsection_content_E = "";
var overlay_menu_subsection_content_PD = "";

for (var ii = 0; ii < json_104_U_utility_occupancy_316['features'].length; ii++) {
  overlay_menu_subsection_content_U += json_104_U_utility_occupancy_316['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_103_SW_sewer_318['features'].length; ii++) {
  overlay_menu_subsection_content_SW += json_103_SW_sewer_318['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_107_MA_AWSS_320['features'].length; ii++) {
  overlay_menu_subsection_content_MA_AWSS += json_107_MA_AWSS_320['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_105_WD_321['features'].length; ii++) {
  overlay_menu_subsection_content_WD += json_105_WD_321['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_100_L_layout_319['features'].length; ii++) {
  overlay_menu_subsection_content_L += json_100_L_layout_319['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_101_C_const_details_323['features'].length; ii++) {
  overlay_menu_subsection_content_C += json_101_C_const_details_323['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_102_E_intersection_electricals_322['features'].length; ii++) {
  overlay_menu_subsection_content_E += json_102_E_intersection_electricals_322['features'][ii].properties.sheet + '<br>';
}

for (var ii = 0; ii < json_106_PD_pavement_delineation_317['features'].length; ii++) {
  overlay_menu_subsection_content_PD += json_106_PD_pavement_delineation_317['features'][ii].properties.sheet + '<br>';
}

var menu_card_sheet_overlay_content =

  '<div class="accordion" id="heading_sheet_overlays_0">\
     <div class="card">\
       <div class="card-header">\
         <h2 class="mb-0">\
           <button class="btn btn-link btn-layer" type="button" data-toggle="collapse"\
                   data-target="#heading_sheet_overlays_0_collapse" aria-expanded="false"\
                   aria-controls="heading_sheet_overlays_0_collapse">\
             <strong>Sheet Links and Overlay(s)</strong>\
           </button>\
         </h2>\
       </div>\
       <div id="heading_sheet_overlays_0_collapse" class="collapse"\
            aria-labelledby="heading_sheet_overlays_0" data-parent="#map_master_menu">\
         <div class="card-body">\
         <div class="scroll_card">\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_U">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_U"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_U">\
                   <strong>U - Utility Occupancy</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_U" class="collapse"\
                      aria-labelledby="sheet_overlays_U" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_U +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_SW">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_SW"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_SW">\
                   <strong>SW - Sewer</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_SW" class="collapse"\
                      aria-labelledby="sheet_overlays_SW" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_SW +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_MA_AWSS">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_MA_AWSS"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_MA_AWSS">\
                   <strong>MA - AWSS</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_MA_AWSS" class="collapse"\
                      aria-labelledby="sheet_overlays_MA_AWSS" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_MA_AWSS +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_WD">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_WD"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_WD">\
                   <strong>WD - Water Service</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_WD" class="collapse"\
                      aria-labelledby="sheet_overlays_WD" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_WD +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_L">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_L"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_L">\
                   <strong>L - Layout</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_L" class="collapse"\
                      aria-labelledby="sheet_overlays_L" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_L +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_C">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_C"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_C">\
                   <strong>C - Construction Detail</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_C" class="collapse"\
                      aria-labelledby="sheet_overlays_C" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_C +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_E">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_E"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_E">\
                   <strong>E - Intersection Electricals</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_E" class="collapse"\
                      aria-labelledby="sheet_overlays_E" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_E +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_PD">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_PD"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_PD">\
                   <strong>PD - Pavement Delineation</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_PD" class="collapse"\
                      aria-labelledby="sheet_overlays_PD" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_PD +
  '</div>\
               </div>\
             </div>\
           </div>\
\
         </div>\
         </div>\
       </div>\
     </div>\
   </div>';

document.getElementById("map_master_menu").innerHTML += menu_card_sheet_overlay_content.replace(/_aaaa/g, "_bbbb");

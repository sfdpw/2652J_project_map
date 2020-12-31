function pop_202_SW_mains_0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });

var popupContent =
        '<strong>Asset ID</strong><br>' +
        (feature.properties['PSR'] !== null ? Autolinker.link(feature.properties['PSR'].toLocaleString()) : '') +
        '<br><br>\
<strong>Diameter</strong><br>' +
        (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
        '<br><br>\
<strong>Material</strong><br>' +
        (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') +
        '<br><br>\
<strong>Scope</strong><br>' +
        (feature.properties['SCOPE_DTLS'] !== null ? Autolinker.link(feature.properties['SCOPE_DTLS'].toLocaleString()) : '') +
        '<br><br>\
<strong>Submittal(s)</strong><br>' +
        (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') +
        '<br><br>\
<strong>Status</strong><br>' +
        (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
        '<br><br>\
<strong>Bid Item(s)</strong><br>' +
        (feature.properties['BID_ITEM'] !== null ? Autolinker.link(feature.properties['BID_ITEM'].toLocaleString()) : '') +
        '<br><br>\
<strong>Payment History</strong><br>' +
        (feature.properties['PP_HISTORY'] !== null ? Autolinker.link(feature.properties['PP_HISTORY'].toLocaleString()) : '');

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}




function SWMN_202_toggle()

{

    //var overlay_layer_id = "";

    var check_box_list = document.getElementsByTagName("INPUT");

    for (var ii = 0; ii < check_box_list.length; ii++)

    {

        if (check_box_list[ii].type == 'checkbox' &&
            check_box_list[ii].id.includes('202_SW_'))

        {


            if (document.getElementById('202_SWMN_checkbox').checked)

            {

                //overlay_layer_id = check_box_list[ii].id.replace('_aaaa', '');
                //overlay_layer_id = overlay_layer_id.replace('_bbbb', '');

                if (document.getElementById(check_box_list[ii].id).checked == false)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }



            } 
            
             else

            {

                if (document.getElementById(check_box_list[ii].id).checked)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }

            }

        }

    }

}

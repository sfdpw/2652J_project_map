function pop_up_creator_for_domain(feature, layer)

{

    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,

    });


    if (layer.feature.L_index_stored_in_each_feature >= SW_main_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_main_index_limits[1])

    {

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
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= SW_MH_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_MH_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
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
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= SW_clvt_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_clvt_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['PSR'] !== null ? Autolinker.link(feature.properties['PSR'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pipe Diameter</strong><br>' +
            (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pipe Material</strong><br>' +
            (feature.properties['PIPE_MATRL'] !== null ? Autolinker.link(feature.properties['PIPE_MATRL'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
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
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= SW_drain_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_drain_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
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
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);



    } else if (layer.feature.L_index_stored_in_each_feature >= SW_lateral_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_lateral_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MAXIMO_ID'] !== null ? Autolinker.link(feature.properties['MAXIMO_ID'].toLocaleString()) : '') +
            '<br><br>\
<strong>Address</strong><br>' +
            (feature.properties['ADDRESS'] !== null ? Autolinker.link(feature.properties['ADDRESS'].toLocaleString()) : '') +
            '<br><br>\
<strong>BLKLOT</strong><br>' +
            (feature.properties['BLKLOT'] !== null ? Autolinker.link(feature.properties['BLKLOT'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Submittal(s)</strong><br>' +
            (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    }

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });

}



function pp_history_details(ffeature)

{

    var pp_history_details = "";

    if (Object.keys(ffeature.properties['PP_HISTORY']).length > 0)

    {

        pp_history_details += '<table>';

        for (const bid_item in ffeature.properties['PP_HISTORY'])

        {


            if (Object.keys(ffeature.properties['PP_HISTORY'][bid_item]).length != 0)

            {

                for (const payment_no in ffeature.properties['PP_HISTORY'][bid_item])

                {

                   for (const fund in ffeature.properties['PP_HISTORY'][bid_item][payment_no])


                    {

                     pp_history_details +=
                        pp_history_row(bid_item,
                            ffeature.properties['PP_HISTORY'][bid_item][payment_no][fund]['QTY'],
                            ffeature.properties['PP_HISTORY'][bid_item][payment_no][fund]['UNIT'],
                            payment_no,
                            fund);

                
                    }
                
                }

            }

        }

        pp_history_details += '</table>';

    } else {

        pp_history_details += 'none';

    }

    return pp_history_details;

}

function pp_history_row(bid_item, QTY, UNIT, payment_no, FUND)

{

    var NN = 0; // bid item index

    while (base_sov[NN]["Bid Item"] != bid_item) {

        NN++;
    }

    var neg_space = '';
    
    if (QTY > 0) {neg_space= '&nbsp;';}


    var row_string = '<tr><td data-toogle="tooltip" title="' +
        base_sov[NN]['Bid Item'] + ": " +
        base_sov[NN]['Description'] + " (" + base_sov[NN]['Unit'] + ')">' +
        bid_item + ':</td><td style=\"text-align: left\">' + neg_space +
        format_unit(QTY, UNIT) + '</td><td>' +
        UNIT + ' in</td><td>' +
        payment_no.substring(0, 4) + ' from</td><td>' +
        FUND + '</td></tr>';

    return row_string

}

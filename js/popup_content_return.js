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
<strong>Post-Con TVI Submittal - Video</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Submittal + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Video +
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
<strong>Post-Con TVI Submittal - Video</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Submittal + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Video +
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
<strong>Post-Con TVI Submittal - Video</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Submittal + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.Video +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= CR_fltwrk_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= CR_fltwrk_index_limits[1])

    {

        var bid_item_code = (feature.properties.install_id.substring(0, 5).replace('CR_0', 'CR_')).replace('_', '-');

        var areacalcs = ''

        if (
            bid_item_code == 'CR-3' ||
            bid_item_code == 'CR-5' ||
            bid_item_code == 'CR-7' ||
            bid_item_code == 'CR-8' ||
            bid_item_code == 'CR-9' ||
            bid_item_code == 'CR-11' ||
            bid_item_code == 'CR-16' ||
            bid_item_code == 'CR-17'
        )

        {

            areacalcs =
                '<strong>Area Calculation</strong><br>' +
                '<table style="width:100%">\
           <tr>\
             <td>Worksheet ID:</td>\
             <td style=\"text-align: right\">' + feature.properties.pp_qty_id + '</td>\
             <td></td>\
           </tr>\
           <tr>\
             <td>Modifier:</td>\
             <td style=\"text-align: right\">' + feature.properties.mdfr_instl.toFixed(2) + '</td>\
             <td></td>\
           </tr>\
           <tr>\
             <td>Width:</td>\
             <td style=\"text-align: right\">' + format_unit(feature.properties.wdth_instl, 'LF') + '</td>\
             <td>LF</td>\
           </tr>\
           <tr>\
             <td>Length:</td>\
             <td style=\"text-align: right\">' + format_unit(feature.properties.lnth_instl, 'LF') + '</td>\
             <td>LF</td>\
           </tr>\
           <tr>\
             <td>Area:</td>\
             <td style=\"text-align: right\">' +
                format_unit(
                    feature.properties.wdth_instl * feature.properties.lnth_instl * feature.properties.mdfr_instl,
                    'SF') + '</td>\
             <td>SF</td>\
           </tr>\
         </table><br>';

        } else if (bid_item_code == 'CR-4' || bid_item_code == 'CR-6')

        {

            var depthvalue = 1;

            if (bid_item_code == 'CR-6') {
                depthvalue = 0.5;
            }

            areacalcs =

                '<strong>Volume Calculation</strong><br>' +
                '<table>\
           <tr>\
             <td>Worksheet ID:</td>\
             <td style=\"text-align: right\">' + feature.properties.pp_qty_id + '</td>\
             <td></td>\
           </tr>\
           <tr>\
             <td>Modifier:</td>\
             <td style=\"text-align: right\">' + feature.properties.mdfr_instl.toFixed(2) + '</td>\
             <td></td>\
           </tr>\
           <tr>\
             <td>Width:</td>\
             <td style=\"text-align: right\">' + format_unit(feature.properties.wdth_instl, 'LF') + '</td>\
             <td>LF</td>\
           </tr>\
           <tr>\
             <td>Length:</td>\
             <td style=\"text-align: right\">' + format_unit(feature.properties.lnth_instl, 'LF') + '</td>\
             <td>LF</td>\
           </tr>\
           <tr>\
             <td>Depth:</td>\
             <td style=\"text-align: right\">' + depthvalue.toFixed(2) + '</td>\
             <td>LF</td>\
           </tr>\
           <tr>\
             <td>Volume:</td>\
             <td style=\"text-align: right\">' +
                format_unit(
                    feature.properties.wdth_instl * feature.properties.lnth_instl *
                    feature.properties.mdfr_instl * depthvalue,
                    'CY') + '</td>\
             <td>CF</td>\
           </tr>\
           <tr>\
             <td>Volume:</td>\
             <td style=\"text-align: right\">' +
                format_unit(
                    feature.properties.wdth_instl * feature.properties.lnth_instl *
                    feature.properties.mdfr_instl * depthvalue / 27,
                    'CY') + '</td>\
             <td>CY</td>\
           </tr>\
         </table><br>';

        }

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.install_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_flatwork_feature_description(bid_item_code) +
            '<br><br>' +
            '<strong>Status</strong><br>' +
            feature.properties.status + '<br><br>' +
            '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' + areacalcs +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= E_conduit_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= E_conduit_index_limits[1])

    {

        var bid_item_code = (feature.properties.install_id.substring(0, 4).replace('E_0', 'E_')).replace('_', '-');

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.install_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_conduit_feature_description(bid_item_code) +
            '<br><br>' +
            '<strong>Run Number</strong><br>' +
            feature.properties.run_no + '<br><br>' +
            '<strong>Status</strong><br>' +
            feature.properties.STATUS + '<br><br>' +
            '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= E_pullbox_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= E_pullbox_index_limits[1])

    {

        var bid_item_code = (feature.properties.install_id.substring(0, 4).replace('E_0', 'E_')).replace('_', '-');

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.install_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_pullbox_feature_description(bid_item_code) +
            '<br><br>' +
            '<strong>Status</strong><br>' +
            feature.properties.STATUS + '<br><br>' +
            '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= E_TS_pole_relocation_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= E_TS_pole_relocation_index_limits[1])

    {

        var bid_item_code = (feature.properties.install_id.substring(0, 4).replace('E_0', 'E_')).replace('_', '-');

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.install_id.replace(/_/g, "-") + '<br><br>' +
            '<strong>Pole ID</strong><br>' +
            feature.properties.Pole + 
            '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_TS_pole_relocation_feature_description(bid_item_code) +
            '<br><br>' +
            '<strong>Status</strong><br>' +
            feature.properties.STATUS + '<br><br>' +
            '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' +
            '<strong>Payment History</strong><br>';

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

    var row_string = '';
    var neg_space = '';

    if (QTY > 0) {
        neg_space = '&nbsp;';
    }


    if (QTY != 0)

    {

        if (bid_item.includes('CR-'))

        {

            row_string = '<tr><td style=\"text-align: left\">' +
                format_unit(QTY, UNIT) + '</td><td>' +
                UNIT + ' in</td><td>' +
                payment_no.substring(0, 4) + ' from</td><td>' +
                FUND + '</td></tr>';


        } else

        {

            var NN = 0; // bid item index

            while (base_sov[NN]["Bid Item"].replace('-0', '-') != bid_item.replace('-0', '-')) {

                NN++;
            }

            row_string = '<tr><td data-toogle="tooltip" title="' +
                base_sov[NN]['Bid Item'] + ": " +
                base_sov[NN]['Description'] + " (" + base_sov[NN]['Unit'] + ')">' +
                bid_item + ':</td><td style=\"text-align: left\">' + neg_space +
                format_unit(QTY, UNIT) + '</td><td>' +
                UNIT + ' in</td><td>' +
                payment_no.substring(0, 4) + ' from</td><td>' +
                FUND + '</td></tr>';

        }

    } else {


      row_string = 'Completion shown for clarity;<br>no additional QTY paid.';


    }

    return row_string

}

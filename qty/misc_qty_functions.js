function lateral_cell_qty(ll, qty_bid_item, unit_price, pp_no, fund_source) {

    var lateral_cell = '';


    if (json_200_laterals_2["features"][ll]["properties"]
        ["PP_HISTORY"][qty_bid_item]
        ["PP" + zeroPad(pp_no, 2)]["FUND"] == fund_source) {

        lateral_cell +=

            '<td class="qty_td" style="text-align:center">' +
            format_unit(json_200_laterals_2["features"][ll]["properties"]
                ["PP_HISTORY"][qty_bid_item]["PP" + zeroPad(pp_no, 2)]["QTY"],
                json_200_laterals_2["features"][ll]["properties"]
                ["PP_HISTORY"][qty_bid_item]["PP" + zeroPad(pp_no, 2)]["UNIT"]) +
            '</td>\
                         <td class="qty_td funding_td_amt_' + fund_source + '" style="text-align:center">' +
            amount_cell(unit_price * json_200_laterals_2["features"][ll]["properties"]
                ["PP_HISTORY"][qty_bid_item]["PP" + zeroPad(pp_no, 2)]["QTY"]) +
            '</td>';


    } else {


        lateral_cell += '<td class="qty_td"></td>\
		                          <td class="qty_td funding_td_amt_' + fund_source + '"></td>';

    }

    return lateral_cell

}

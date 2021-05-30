function amount_cell(input_num) {

    var return_block = '';


    if (input_num == '-' || isNaN(input_num)) {

        return_block = '-';

    } else {

        return_block =

            '<div style="text-align:left;  display:table-cell; padding:5px; width:5%;  flush:left">$</div>\
           <div style="text-align:right; display:table-cell; padding:5px; width:90%; flush:right">' +
            (input_num).toLocaleString('en', {
                style: 'currency',
                currency: 'USD'
            }).replace('$', '') + '</div>';

    }

    return return_block

}


function format_unit(input_num, unit) {

    var return_string = '';

    if (input_num > 0) {


        if (['LS', 'AL'].includes(unit)) {

            return_string = (input_num * 100).toFixed(2) + '%';

        }
        
        else if (unit == "EA") {

            return_string = input_num.toFixed(0);

        }
        
        else if (['LF','SF','CY','TON','LBS'].includes(unit)) {

            return_string = input_num.toFixed(2);

        }

    }


    return return_string

}




function to_date_details(bid_item_id) {

    var return_array = []; // 0th element to to date QTY, 1st element is to date AMT 
    var NN = 0; // bid item index

    while (base_sov[NN]['Bid Item'] != bid_item_id) {
        NN++;
    }

    return_array = [NN, 0];

    if (base_sov[NN]["Unit Price"] != "-")

    {

        for (const fund_source in base_sov[NN]["Amount to Date"])

        {

            for (const payment_no in base_sov[NN]["Amount to Date"][fund_source])

            {


                return_array[1] += base_sov[NN]["Amount to Date"][fund_source][payment_no];


            }

        }

        if (return_array[1] > 0) {

            return_array[0] = format_unit(return_array[1] / base_sov[NN]["Unit Price"], base_sov[NN]["Unit"]);

        } else

        {

            return_array = ["", ""];

        }


    } else {
        return_array = ["-", "-"];
    }

    return return_array


}




function generate_sov_table() {

    var return_block = '';
    var contract_total_amount = 0;
    var to_date_total_amount = 0;

    for (ii = 0; ii < base_sov.length; ii++) {

        if (isNaN(base_sov[ii]["Unit Price"]) == false)

           {contract_total_amount +=  base_sov[ii]["Unit Price"] * base_sov[ii]["Contract QTY"];}

        if (to_date_details(base_sov[ii]["Bid Item"])[1] > 0)

           {to_date_total_amount += to_date_details(base_sov[ii]["Bid Item"])[1];}

        return_block +=

            '<tr class="sov_tr">\
                    <td class="sov_td" style="width:6%; text-align:center">' + base_sov[ii]["Bid Item"] + '</td>\
                    <td class="sov_td" style="width:40%">' + base_sov[ii]["Description"] + '</td>\
                    <td class="sov_td" style="width:6%; text-align:center">' + base_sov[ii]["Unit"] + '</td>\
                    <td class="sov_td" style="width:6%; text-align:center">'

        if (base_sov[ii]["Unit"] == 'LS' || base_sov[ii]["Unit"] == 'AL') {


            return_block += 100 * base_sov[ii]["Contract QTY"] + '%</td>';

        } else {

            return_block += base_sov[ii]["Contract QTY"] + '</td>';

        }


        return_block +=

            '<td class="sov_td"\
                         style="width:10%;\
                                text-align:right">' +
            amount_cell(base_sov[ii]["Unit Price"]) +
            '</td>\
                    <td class="sov_td"\
                         style="width:10%;\
                                text-align:right">' +
            amount_cell(base_sov[ii]["Unit Price"] * base_sov[ii]["Contract QTY"]) +
            '</td>\
                    <td class="sov_td"\
                         style="width:6%;\
                                text-align:center">' +
            to_date_details(base_sov[ii]["Bid Item"])[0] +
            '</td>\
                    <td class="sov_td"\
                         style="width:10%;\
                                text-align:right">' +
            amount_cell(to_date_details(base_sov[ii]["Bid Item"])[1]) +
            '</td>\
                </tr>';

    }

    return_block +=
    
            '<tr class="sov_tr">\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td"></td>\
              <td class="sov_td" style="width:10%; text-align:right"><strong>Total:</strong></td>\
              <td class="sov_td">' + amount_cell(contract_total_amount) + '</td>\
              <td class="sov_td"></td>\
              <td class="sov_td">' + amount_cell(to_date_total_amount) + '</td>\
             </tr><br>';
    

    return return_block

}

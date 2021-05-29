function spec_table(selected_div)

{

    var div_list_desc = {
    
     '00':'Addenda, Procurement and Contracting Requirements',
     '01':'General Requirements',
     '02':'Existing Conditions',
     '03':'Concrete',
     '05':'Metals',
     '09':'Finishes',
     '26':'Electrical',
     '31':'Earthwork',      
     '32':'Exterior Improvements',      
     '33':'Utilities', 
     '34':'Transportation'
                                   
     };


    var active_div_list = [];

    for (ii = 0; ii < list_of_specs.length; ii++) {

        if (active_div_list.includes(list_of_specs[ii].substring(8, 10)) == false) {

            active_div_list.push(list_of_specs[ii].substring(8, 10));


        }


    }


    var return_block = '<div id="accordion">';


    for (ii = 0; ii < active_div_list.length; ii++) {

        return_block +=

            '<div class="card">\
    <div class="card-header spec_card_header" id="heading_' + active_div_list[ii] + '">\
      <h5 class="mb-0">\
        <button class="btn btn-link"\
                data-toggle="collapse"\
                data-target="#collapse_' + active_div_list[ii] + '"\
                aria-expanded="flase"\
                aria-controls="collapse_' + active_div_list[ii] + '">\
          <strong>' + active_div_list[ii] + ' - ' + div_list_desc[active_div_list[ii]] + '</strong>\
        </button>\
      </h5>\
    </div>\
    <div id="collapse_' + active_div_list[ii] + '"\
         class="collapse"\
         aria-labelledby="heading_' + active_div_list[ii] + '"\
         data-parent="#accordion">\
      <div class="card-body">';
      
        for (var jj = 0; jj < list_of_specs.length; jj++) {
     
          if (list_of_specs[jj].substring(8, 10) == active_div_list[ii]) {
     
            return_block += '<a href=".\\specs\\' + list_of_specs[jj] + '" target="_blank">'
            + list_of_specs[jj].replace(".pdf","") + '</a><br>';
     
            }
     
       }
    
     
     
     return_block +=
     
     '</div>\
    </div>\
  </div>';

    }


    return_block += '</div>';




    return return_block


}






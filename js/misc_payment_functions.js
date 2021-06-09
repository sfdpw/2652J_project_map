function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}


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

    if (input_num != 0) {


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


function amount_or_blank(input_num) {

    var return_block = '';

    if  (Math.abs(input_num) > 0)

    {
    
     return_block = amount_cell(input_num);
    
     }

    return return_block

    }
    
function qty_or_blank(input_num, unit) {

    var return_block = '';

    if  (Math.abs(input_num) > 0)

    {
    
     if ( unit == 'LF' || unit == 'SF' || unit == 'CY' ||unit == 'TON')
     
     { 
    
      return_block = input_num.toFixed(2);
    
      }
      
     else if  ( unit == 'EA')
    
      { 
    
       return_block = input_num;
    
      }
    
    
     }

    return return_block

    }  
    
    

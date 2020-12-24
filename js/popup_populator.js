/*################# SHEET ENTRY CREATOR ########################################################## */
function popup_sheet_entry_creator(popup_args = null)

{

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
    } else {

        var overlay_checkbox;
        var file_name = "";
        var file_name_length = "";
        var file_desc = "";


        for (var ii = 0; ii < popup_args.length; ii += 3)

        {

            overlay_checkbox = popup_args[ii];

            if (popup_args[ii + 1] != null) {
                file_name = popup_args[ii + 1];
            }

            file_desc = popup_args[ii + 2];



            if (overlay_checkbox == null)

            {
                output_string = output_string.concat("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            } else

            {

                output_string = output_string.concat("<input type=\"checkbox\" value=",
                                                      overlay_checkbox,
                                                      " onchange=\"handleChange(this, ",
                                                      overlay_checkbox, ");\">&nbsp;");

            }



            if (popup_args[ii + 1] != null)

            {


                output_string = output_string.concat("<a href=\".\\sheets\\2652J_dwg_", file_name, ".pdf\" target=\"_blank\">", (file_name.replace("-0", "-")).replace("_rev0", " Rev. "), "<\/a>");

                if (popup_args[ii + 2] != null) {
                    output_string = output_string.concat(" - ", file_desc);
                }

            } else {
                if (popup_args[ii + 2] != null) {
                    output_string = output_string.concat(file_desc);
                };
            }

            if (ii != popup_args.length) {
                output_string = output_string.concat("<br>");
            }


        }


    }

    return output_string

}


/*################# SPEC ENTRY CREATOR ########################################################## */

function popup_spec_entry_creator(popup_args = null)

{

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
    } else {

        var file_name = "";
        var file_name_length = "";
        var file_desc = "";


        for (var ii = 0; ii < popup_args.length; ii += 2)

        {

            file_name = popup_args[ii];
            file_desc = popup_args[ii + 1];

            for (var jj = 0; jj < list_of_specs.length; jj++)

            {


                if (file_name == list_of_specs[jj].substring(8, 8 + file_name.length))

                {

                    file_name_length = file_name.length;
                    file_name = list_of_specs[jj].substring(8, list_of_specs[jj].length - 4);


                }


            }


            if (file_desc == null)

            {
                output_string = output_string.concat("<a href=\".\\specs\\2652J - ", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length), "<\/a>", file_name.substring(file_name_length, file_name.length));
            } else

            {
                output_string = output_string.concat("<a href=\".\\specs\\2652J - ", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length), "<\/a>", ' - ', file_desc);
            }



            if (ii != popup_args.length) {
                output_string = output_string.concat("<br>");
            }


        }


    }

    return output_string

}

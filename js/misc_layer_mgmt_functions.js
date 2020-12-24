var clear_layers_button = L.Control.extend({

  options: {
    position: 'topright'
  },

  onAdd: function(map) {
    var container = L.DomUtil.create('input');
    container.type = "button";
    container.title = "Remove all Layer(s)";

    container.style.backgroundColor = '#f4f4f4';
    container.style.borderRadius = '3px';
    //container.style.border = '3px';//' rgba(255, 255, 255, 0.4)';
    container.style.backgroundClip = 'padding-box';
    container.style.backgroundImage = 'url("css/images/clear_layers.png")';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = '50% 50%';
    container.style.backgroundSize = '20px 20px';
    container.style.width = '36px';
    container.style.height = '36px';

    container.onmouseover = function() {
      container.style.backgroundColor = 'pink';
    }
    container.onmouseout = function() {
      container.style.backgroundColor = '#f4f4f4';
    }
   

    container.onclick = function() {

      sweep_clear_layers();
    }

    return container;

  }
});

function check_clone(checkbox_id)

{

  if (checkbox_id.includes("_aaaa"))

  {

    document.getElementById(checkbox_id.replace('_aaaa', '_bbbb')).checked = document.getElementById(checkbox_id).checked;

  } else if (document.getElementById(checkbox_id.replace('_bbbb', '_aaaa')) != null)

  {

    document.getElementById(checkbox_id.replace('_bbbb', '_aaaa')).checked = document.getElementById(checkbox_id).checked;

  }

}

function sweep_check_clone()

{

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].id.includes('_bbbb') &&
      document.getElementById(check_box_list[ii].id).checked &&
      document.getElementById(check_box_list[ii].id.replace('_bbbb', '_aaaa')) != null) {

      document.getElementById(check_box_list[ii].id.replace('_bbbb', '_aaaa')).checked = true;

    }

  }

}

function sweep_clear_layers()

{

  //var overlay_layer_id = "";

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].type == 'checkbox' &&
        check_box_list[ii].id.includes('003_stations') == false &&
        check_box_list[ii].id.includes('999_OSM') == false)

    {

      //overlay_layer_id = check_box_list[ii].id.replace('_aaaa', '');
      //overlay_layer_id = overlay_layer_id.replace('_bbbb', '');

      if (document.getElementById(check_box_list[ii].id).checked == true)

      {

        document.getElementById(check_box_list[ii].id).click();

      }

    }

  }

}

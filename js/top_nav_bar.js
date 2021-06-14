function top_nav(nav_element, pp_no = null, bid_item_id = null)

{

    var return_block = '';
    var nav_path = '../';
  
    if (bid_item_id != null)
  
    {
  
    var NN = 0; // bid item index

    while (base_sov[NN]['Bid Item'] != bid_item_id) {
        NN++;
    }

    }

    return_block = '<nav class="navbar navbar-dark bg-nav navbar-expand-lg fixed-top">';

    return_block +=

        '<button class="navbar-toggler"\
                type="button"\
                data-toggle="collapse"\
                data-target="#navbar-list-6"\
                aria-controls="navbarNav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
           <span class="navbar-toggler-icon"></span>\
         </button>\
         <div class="collapse navbar-collapse justify-content-start bg-center" id="navbar-list-6">\
            <ul class="navbar-nav">';

    if (nav_element == 'map')

    {

        nav_path = '';

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="index.html">Map</span></a>\
             </li>';

     }   else 
     
     
     {
     
         return_block +=

            '<li class="nav-item active custom-hover">\
              <a class="nav-link nav-link-custom" href="../index.html">Map</span></a>\
             </li>';
     
     }

        return_block +=

           '<li class="nav-item dropdown">\
              <a class="nav-link dropdown-toggle"\
                 href="#" id="navbarDropdown_sov"\
                 role="button"\
                 data-toggle="dropdown"\
                 aria-haspopup="true"\
                 aria-expanded="false">\
                 SOV\
              </a>\
              <div class="dropdown-menu" aria-labelledby="navbarDropdown_sov">\
                <a class="dropdown-item" href="' + nav_path +  'sov/sov_PP01.html">PP01</a>\
                <a class="dropdown-item" href="' + nav_path +  'sov/sov_PP02.html">PP02</a>\
                <a class="dropdown-item" href="' + nav_path +  'sov/sov_PP03.html">PP03</a>\
                <a class="dropdown-item" href="' + nav_path +  'sov/sov_PP04.html">PP04</a>\
                <a class="dropdown-item" href="' + nav_path +  'sov/sov_PP05.html">PP05</a>\
              </div>\
            </li>\
            <li class="nav-item dropdown">\
              <a class="nav-link dropdown-toggle"\
                 href="#" id="navbarDropdown_funding"\
                 role="button"\
                 data-toggle="dropdown"\
                 aria-haspopup="true"\
                 aria-expanded="false">\
                 Funding\
              </a>\
              <div class="dropdown-menu" aria-labelledby="navbarDropdown_funding">\
                <a class="dropdown-item" href="' + nav_path +  'funding/funding_PP01.html">PP01</a>\
                <a class="dropdown-item" href="' + nav_path +  'funding/funding_PP02.html">PP02</a>\
                <a class="dropdown-item" href="' + nav_path +  'funding/funding_PP03.html">PP03</a>\
                <a class="dropdown-item" href="' + nav_path +  'funding/funding_PP04.html">PP04</a>\
                <a class="dropdown-item" href="' + nav_path +  'funding/funding_PP05.html">PP05</a>\
              </div>\
            </li>\
            <li class="nav-item dropdown">\
              <a class="nav-link dropdown-toggle"\
                 href="#" id="navbarDropdown_qty"\
                 role="button"\
                 data-toggle="dropdown"\
                 aria-haspopup="true"\
                 aria-expanded="false">\
                 QTYs\
              </a>\
              <div class="dropdown-menu" aria-labelledby="navbarDropdown_qty">\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-11.html">SW-11</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-12.html">SW-12</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-13.html">SW-13</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-14.html">SW-14</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-15.html">SW-15</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-16.html">SW-16</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-17.html">SW-17</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-18.html">SW-18</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-29.html">SW-29</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-32.html">SW-32</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-36.html">SW-36</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-37.html">SW-37</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-39.html">SW-39</a>\
                <a class="dropdown-item" href="' + nav_path +  'qty/qty_SW-41.html">SW-41</a>\
              </div>\
            </li>';
         
    if (nav_element == 'specs')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
               <a class="nav-link nav-link-custom" href="' + nav_path +  'specs/specs.html">Specs</a>\
             </li>';

     } else {

        return_block +=

            '<li class="nav-item custom-hover">\
               <a class="nav-link nav-link-custom" href="' + nav_path +  'specs/specs.html">Specs</a>\
             </li>';

    }

    if (nav_element == 'sov')
    
    
    {

     return_block +=

         '</ul>\
        </div>\
        <div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>\
      </nav>';

     } 
     
     else if (nav_element == 'funding')
     
     {
    
      return_block += 
     
      '</ul>\
        </div>\
        <div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>\
      </nav>';   
     
     }
     
     else if (nav_element == 'qty')
     
     {
     
      return_block += 
     
      '</ul>\
        </div>\
        <div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="'  + base_sov[NN]['Description'] +
	                  ' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>\
      </nav>';   
     
     
     
      }
     
     
     else 
     
     {
     
     return_block +=

         '</ul>\
        </div>\
      </nav>';
     
     }


    return return_block

  }



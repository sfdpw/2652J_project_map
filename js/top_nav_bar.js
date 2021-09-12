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

    if (nav_element == 'map')

    {

        nav_path = '';

    }

    return_block =

        '<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
        <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="main_nav" >\
	  <ul class="navbar-nav">\
	    <li class="nav-item active">\
              <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
            </li>\
            <li class="nav-item dropdown">\
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SOV</a>\
              <ul class="dropdown-menu">\
                <li>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP02.html">PP02</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP03.html">PP03</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP04.html">PP04</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP05.html">PP05</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP06.html">PP06</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP07.html">PP07</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP08.html">PP08</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP09.html">PP09</a>\
                </li>\
              </ul>\
            </li>\
            <li class="nav-item dropdown">\
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Funding</a>\
              <ul class="dropdown-menu">\
	        <li>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP02.html">PP02</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP03.html">PP03</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP04.html">PP04</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP05.html">PP05</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP06.html">PP06</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP07.html">PP07</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP08.html">PP08</a>\
	          <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP09.html">PP09</a>\
	        </li>\
	      </ul>\
	    </li>\
	    <li class="nav-item dropdown">\
	      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	        <ul class="dropdown-menu">\
	          <li>\
	            <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">Grinding, Paving &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-02.html">CR-02: 1/2in HMA</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Agg. Base &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-04.html">CR-04: 12in Ag Base</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-06.html">CR-06: 6in Ag Base</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Sidewalk &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-07.html">CR-07: 3.5in Sidewalk</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-08.html">CR-08: 4in Sidewalk</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-09.html">CR-09: 6in Sidewalk</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-15.html">CR-15: 8in Bus Shelter Foundations</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-16.html">CR-16: Dark Concrete Paving</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">General / Misc. &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-03.html">CR-03: 9in JPCP Base</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-05.html">CR-05: Bus Pad</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-10.html">CR-10: Curb</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-11.html">CR-11: Parking Strip, Gutter</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_CR-12.html">CR-12: Curb Ramps</a>\
	                  </li>\
	                </ul>\
	              </li>\
	            </ul>\
	          </li>\
	          <li>\
	            <a class="dropdown-item" href="#">Electrical &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">Poll Relocations &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-34.html">E-34 - 24-4-100; 35\' SMA; 15\' LA</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Pullboxes &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-35.html">E-35 - Type I PBs</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-36.html">E-36 - Type III PBs</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-37.html">E-37 - Type 48X PBs</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Traffic Signal Cabinets &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-51.html">E-51 - TS Cabinet Foundation</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Conduit &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-38.html">E-38 - 1" PVC x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-39.html">E-39 - 2" PVC x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-40.html">E-40 - 2" PVC x2</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-41.html">E-41 - 3" PVC x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-42.html">E-42 - 3" PVC x1, 2" PVC x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-44.html">E-44 - 2" GRS x1, 2" PVC x2</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-46.html">E-46 - 2" GRS x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-48.html">E-48 - 2" GRS x3</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-49.html">E-49 - 2" GRS x6</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_E-50.html">E-50 - 2" HDPE x2</a>\
	                  </li>\
	                </ul>\
	              </li>\
	            </ul>\
	          </li>\
	          <li>\
	            <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">Laterals &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-32.html">SW-32 - Pre-Con TVI of (E) Side Sewer</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-36.html">SW-36 - Side Sewer Connection to Main</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-37.html">SW-37 - (N) 6" / 8" Side Sewer</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-39.html">SW-39 - (N) Vent / Trap for 6" / 8" Side Sewer</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Culverts &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-29.html">SW-29 - (N) 10" VCP Culvert</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-34.html">SW-34 - Pre-Con TVI of (E) Culvert</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Mains &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="#">VCP Installation / Replacement &raquo;</a>\
	                    <ul class="submenu dropdown-menu">\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-11.html">SW-11 - (N) 8" VCP SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-12.html">SW-12 - (N) 12" VCP SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-13.html">SW-13 - (N) 12" VCP SW Main at Parking Strip</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-14.html">SW-14 - (N) 15" VCP SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-15.html">SW-15 - (N) 15" VCP SW Main at Parking Strip</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-16.html">SW-16 - (N) 18" VCP SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-17.html">SW-17 - (N) 21" VCP SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-18.html">SW-18 - (N) 24" VCP SW Main</a>\
	                      </li>\
	                    </ul>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="#">Lining &raquo;</a>\
	                    <ul class="submenu dropdown-menu">\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-07.html">SW-07 - Pre-Lining TVI and Cleaning of (E) SW Main</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-08.html">SW-08 - Bypassing (E) SW Main Prior to Lining</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-27.html">SW-27 - Internal Reaming Prior to Lining</a>\
	                      </li>\
	                    </ul>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="#">General / Misc. &raquo;</a>\
	                    <ul class="submenu dropdown-menu">\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
                                   'qty/qty_SW-40.html">SW-40 - Post-Con TVI of (N) SW Main</a>\
        	              </li>\
	                    </ul>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-09.html">SW-09 - (N) CB - STD 87,188</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-42.html">SW-42 - (N) CI Trap and Cap - STD 87,194</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-02.html">SW-02 - (N) MH - STD 87,181</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-04.html">SW-04 - (N) MH - STD 87,182</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-05.html">SW-05 - (N) MH - STD 87,182 - Angled</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">General / Misc. &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-28.html">SW-28 - Reinstating Side Sewer or Culvert Connection to Newly-Lined SW Main</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
        'qty/qty_SW-41.html">SW-41 - Post-Con TVI of (N) Side Sewer or Culvert</a>\
	                  </li>\
	                </ul>\
	              </li>\
	            </ul>\
	          </li>\
	        </ul>\
	          <li class="nav-item active">\
	            <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
	          </li>\
	      </div>';

    if (nav_element == 'sov')


    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

    } else if (nav_element == 'funding')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

    } else if (nav_element == 'qty')

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[NN]['Description'] +
            ' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>';

    }

    return_block += '</nav>';

    return return_block

}

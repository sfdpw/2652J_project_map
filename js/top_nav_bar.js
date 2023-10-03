function top_nav(nav_element, pp_no = null, bid_item_id = null) {

	var return_block = '';
	var nav_path = '../';

	if (bid_item_id != null) {

		var NN = 0; // bid item index

		while (base_sov[NN]['Bid Item'] != bid_item_id) {
			NN++;
		}

	}

	if (nav_element == 'map') {

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
	      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	        <ul class="dropdown-menu">\
	          <li>\
	            <a class="dropdown-item" href="#">SOV &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">2020 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
		              <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01 - Dec 2020</a>\
		            </li>\
		          </ul>\
		       </li>\
		       <li>\
                 <a class="dropdown-item" href="#">2021 &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
			      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP02.html">PP02 - Jan 2021</a>\
			      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP03.html">PP03 - Feb 2021</a>\
			      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP04.html">PP04 - Mar 2021</a>\
			      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP05.html">PP05 - Apr 2021</a>\
                  <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP06.html">PP06 - May 2021</a>\
			      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP07.html">PP07 - Jun 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP08.html">PP08 - Jul 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP09.html">PP09 - Aug 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP10.html">PP10 - Sep 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP11.html">PP11 - Oct 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP12.html">PP12 - Nov 2021</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP13.html">PP13 - Dec 2021</a>\
	      		    </li>\
		          </ul>\
		       </li>\
		       <li>\
                        <a class="dropdown-item" href="#">2022 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP14.html">PP14 - Jan 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP15.html">PP15 - Feb 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP16.html">PP16 - Mar 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP17.html">PP17 - Apr 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP18.html">PP18 - May 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP19.html">PP19 - Jun 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP20.html">PP20 - Jul 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP21.html">PP21 - Aug 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP22.html">PP22 - Sep 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP23.html">PP23 - Oct 2022</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP24.html">PP24 - Nov 2022</a>\
	      		    </li>\
	      		  </ul>\
	              </li>\
		       <li>\
                 <a class="dropdown-item" href="#">2023 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP25.html">PP25 - Dec 2022 / Jan 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP26.html">PP26 - Feb 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP27.html">PP27 - Mar 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP28.html">PP28 - Apr 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP29.html">PP29 - May 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP30.html">PP30 - Jun 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP31.html">PP31 - Jul 2023</a>\
	      		      <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP32.html">PP32 - Aug / Sep 2023</a>\
					  </li>\
	      		  </ul>\
	              </li>\
	            </ul>\
	          </li>\
	          <li>\
	            <a class="dropdown-item" href="#">Funding Breakdown &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">2020 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	                <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01 - Dec 2020</a>\
		            </li>\
		          </ul>\
		       </li>\
		       <li>\
                        <a class="dropdown-item" href="#">2021 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP02.html">PP02 - Jan 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP03.html">PP03 - Feb 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP04.html">PP04 - Mar 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP05.html">PP05 - Apr 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP06.html">PP06 - May 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP07.html">PP07 - Jun 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP08.html">PP08 - Jul 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP09.html">PP09 - Aug 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP10.html">PP10 - Sep 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP11.html">PP11 - Oct 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP12.html">PP12 - Nov 2021</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP13.html">PP13 - Dec 2021</a>\
	      		    </li>\
		          </ul>\
		       </li>\
		       <li>\
                        <a class="dropdown-item" href="#">2022 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP14.html">PP14 - Jan 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP15.html">PP15 - Feb 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP16.html">PP16 - Mar 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP17.html">PP17 - Apr 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP18.html">PP18 - May 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP19.html">PP19 - Jun 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP20.html">PP20 - Jul 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP21.html">PP21 - Aug 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP22.html">PP22 - Sep 2022</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP23.html">PP23 - Oct 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP24.html">PP24 - Nov 2023</a>\
	                    </li>\
	                  </ul>\
	              </li>\
		       <li>\
                        <a class="dropdown-item" href="#">2023 &raquo;</a>\
	                  <ul class="submenu dropdown-menu">\
	                    <li>\
	           <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP25.html">PP25 - Dec 2022 / Jan 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP26.html">PP26 - Feb 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP27.html">PP27 - Mar 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP28.html">PP28 - Apr 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP29.html">PP29 - May 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP30.html">PP30 - Jun 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP31.html">PP31 - Jul 2023</a>\
	                      <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP32.html">PP32 - Aug / Sep 2023</a>\
						  </li>\
	                  </ul>\
	              </li>\
	            </ul>\
	          </li>\
	        </ul>\
	    </li>\
	    <li class="nav-item dropdown">\
	      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">PP QTYs</a>\
	        <ul class="dropdown-menu">\
	          <li>\
	            <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	            <ul class="submenu dropdown-menu">\
	              <li>\
	                <a class="dropdown-item" href="#">Grinding, Paving &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_CR-01.html">CR-01: Planing</a>\
	                  </li>\
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
		'qty/qty_CO-05_PCO-009_CR-15_Add.html">CR-15: 8in Shelter Foundations (Unreinforced per PCO 9)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_CR-16.html">CR-16: Dark Concrete Paving</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_CR-17.html">CR-17: 2in AC on 4in Ag Base</a>\
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
	                <a class="dropdown-item" href="#">Signals &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-01.html">E-01 - 3S12"</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-02.html">E-02 - 3S12"LA</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-09.html">E-09 - Signal Backplate</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-10.html">E-10 - Ped 1S-Count Housing</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-11.html">E-11 - Ped 1S-Count Installation</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Signal Mounting &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-04.html">E-04 - TV-1-T</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-05.html">E-05 - SV-1-T</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-06.html">E-06 - SV-2-TA</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-07.html">E-07 - SV-2-TA-SF</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-12.html">E-12 - SP-1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-13.html">E-13 - TP-1</a>\
	                  </li>\
	                </ul>\
	              </li>\
	              <li>\
	                <a class="dropdown-item" href="#">Poles &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-14.html">E-14 - PPB Poles</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-15.html">E-15 - Type 1-A Pole - 7\'</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-16.html">E-16 - Type 1-A Pole - 10\'</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-17.html">E-17 - Type 1-A Pole - 13\'</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-18.html">E-18 - 16-2-100 Pole; 20\' SMA (New)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-19.html">E-19 - 17-2-100 Pole; 20\' SMA; 8\' LA (New)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-20.html">E-20 - 19-2-100 Pole; 20\' SMA; 8\' LA (New)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-21.html">E-21 - 19-2-100 Pole; 25\' SMA; 8\' LA (New)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-24.html">E-24 - Caltrans Type 15TS</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-25.html">E-25 - Caltrans Type 21TS</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-27.html">E-27 - 19A-3-100; 25\' SMA; 8\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-28.html">E-28 - 19-2-100; 25\' SMA; 8\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-29.html">E-29 - 19-2-100; 25\' SMA; 12\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-31.html">E-31 - 19-4-100; 25\' SMA; 8\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-32.html">E-32 - 24-3-100; 35\' SMA; 8\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-33.html">E-33 - 24-4-100; 35\' SMA; 8\' LA (Relocation)</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-34.html">E-34 - 24-4-100; 35\' SMA; 15\' LA (Relocation)</a>\
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
		'qty/qty_E-43.html">E-43 - 2" GRS x1, 2" PVC x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-44.html">E-44 - 2" GRS x1, 2" PVC x2</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-45.html">E-45 - 2" GRS x1, 2" PVC x3</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-46.html">E-46 - 2" GRS x1</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-47.html">E-47 - 2" GRS x2</a>\
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
	              <li>\
	                <a class="dropdown-item" href="#">Traffic Signal Cabinets &raquo;</a>\
	                <ul class="submenu dropdown-menu">\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-51.html">E-51 - TS Cabinet Foundation</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_E-52.html">E-52 - TS Cabinet Installation</a>\
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
		'qty/qty_SW-20.html">SW-20 - Line (E) Side Sewer</a>\
	                  </li>\
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
		'qty/qty_SW-30.html">SW-30 - (N) 10" DIP Culvert</a>\
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
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-19.html">SW-19 - (N) 30" VCP SW Main</a>\
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
		'qty/qty_SW-22.html">SW-22 - Line (E) 12" SW Main with CIPL</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-23.html">SW-23 - Line (E) 15" SW Main with CIPL</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-24.html">SW-24 - Line (E) 18" SW Main with CIPL</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-25.html">SW-25 - Line (E) 21" SW Main with CIPL</a>\
	                      </li>\
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-26.html">SW-26 - Line (E) 2\' x 3\' SW Main with CIPL</a>\
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
	                      <li>\
	                        <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-46.html">SW-46 - Plug and Fill (E) SW Main</a>\
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
		'qty/qty_SW-09.html">SW-09 - (N) CB - Standard - STD 87,188</a>\
	                  </li>\
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-10.html">SW-10 - (N) CB - Curb Inlet - STD 87,187</a>\
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
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-06.html">SW-06 - Clean and Mortar (E) MH</a>\
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
	                  <li>\
	                    <a class="dropdown-item" href="' + nav_path +
		'qty/qty_SW-43.html">SW-43 - 9\" Base Beyond T-Trench Restoration Limits</a>\
	                  </li>\
	                </ul>\
	              </li>\
	            </ul>\
	          </li>\
	        </ul>\
	        <li class="nav-item dropdown">\
	          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SW Tracking</a>\
	          <ul class="dropdown-menu">\
	            <li>\
		      <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_mains.html">Mains</a>\
		    </li>\
	            <li>\
		      <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_culverts.html">Culverts</a>\
		    </li>\
	            <li>\
		      <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_laterals.html">Laterals</a>\
		    </li>\
		  </ul>\
	        </li>\
	        <li class="nav-item active">\
	          <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
	        </li>\
	        <li class="nav-item active">\
	          <a class="nav-link" href="' + nav_path + 'other/2652J_mixes.pdf" target="_blank">Mixes</a>\
	        </li>\
	      </div>';

	if (nav_element == 'sov') {

		return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

	} else if (nav_element == 'funding') {

		return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

	} else if (nav_element == 'qty') {

		return_block +=

			'<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[NN]['Description'] +
			' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>';

	} else if (nav_element.includes('Asset_Tracking')) {

		return_block +=

			'<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    >' + nav_element.replace(/_/g, " ") + '</div>';

	}



	return_block += '</nav>';

	return return_block

}

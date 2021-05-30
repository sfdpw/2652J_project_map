function top_nav(nav_element)

{

    var return_block = '';

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

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="index.html">Map</span></a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item active custom-hover">\
              <a class="nav-link nav-link-custom" href="index.html">Map</span></a>\
            </li>';

    }

    if (nav_element == 'sov')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
                <a class="nav-link nav-link-custom" href="sov.html">Bid Items</a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item custom-hover">\
                <a class="nav-link nav-link-custom" href="sov.html">Bid Items</a>\
            </li>';

    }

    if (nav_element == 'specs')

    {

        return_block +=

            '<li class="nav-item active active-custom custom-hover">\
              <a class="nav-link nav-link-custom" href="specs.html">Specs</a>\
            </li>';

    } else {

        return_block +=

            '<li class="nav-item custom-hover">\
              <a class="nav-link nav-link-custom" href="specs.html">Specs</a>\
            </li>';

    }




    return_block +=

          '</ul>\
        </div>\
        <div style="float:right; padding-right:10px; color:white; font-weight:bold">2652J - 19th Ave - Last Updated 2021 - May - 29</div>\
      </nav>'

    return return_block

}





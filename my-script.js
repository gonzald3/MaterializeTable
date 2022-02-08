$(document).ready(function() {
    $('#example').DataTable( {
        "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );


//This comes from https://stackoverflow.com/questions/6297753/inherit-width-from-another-element-on-html-page/6298760
document.getElementById("dt").width = document.getElementById("dc").width();
/* Now "dt" is a few pixels wider than "dc", so compensate by setting "dc"'s width to "dt"'s */
//document.getElementById("dc").width = document.getElementById("dt").width();
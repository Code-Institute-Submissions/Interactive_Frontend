$(document).ready(function(){
    $('#searchbox').keyup(function(){
       searchHighlight($(this).val()); 
    });
});

function searchHighlight(searchBox) {
    if (searchBox) {
        var prod = $('p').text();
        var searchExp = new RegExp(searchBox, 'ig');
        var matches = prod.match(searchExp);
        if (matches) {
            $('p').html(prod.replace(searchExp, function(match) {
                return '<span class="highlight">' + match + '</span>';
            }));
        }
        else {
            $(".highlight").removeClass("highlight");
        }
    }
    else {
        $(".highlight").removeClass("highlight");
    }
}  
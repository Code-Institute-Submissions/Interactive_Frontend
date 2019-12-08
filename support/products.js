$(document).ready(function(){
    $('#searchbox').keyup(function(){
       searchHighlight($(this).val()); 
    });
    $(".fas").click(function(){
       $(this).parents('p').siblings('div').children('p').slideToggle(500);
    });
});

function searchHighlight(searchBox) {
    if (searchBox)
    {
        var prod = $('p').text();
        var searchExp = new RegExp(searchBox, 'ig');
        var matches = prod.match(searchExp); 
        if (matches) {
            $('p').html(prod.replace(searchExp, function(match){
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

/*$(".card_image").click(function(){
        //$(this).next().children("p").slideDown();
        //$(this).next().children("p").slideToggle(300);
        $(this).siblings("div").children("p").slideToggle(500);
        $(this).siblings("p").slideToggle(300);
        
    });*/
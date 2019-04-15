$(document).ready(function () {

    $('.gallery div:lt(2)').show();
    $('.less').hide();
    var items =  4;
    var shown =  2;
    $('.more').click(function () {
        $('#works').addClass('grow'); 
        $('.gallery').addClass('grow2'); 
        $('.less').show();
        shown = $('.gallery div:visible').length+2;
        
        if(shown< items) {
          $('.gallery div:lt('+shown+')').show(300);
          $('.more').hide();
        } else {
          $('.gallery div:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('#works').removeClass('grow'); 
        $('.gallery').removeClass('grow2'); 
        $('.gallery div').not(':lt(2)').hide(300);
        $('.more').show();
        $('.less').hide();
    });

    $(function () {
      $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
      });
    });
    

});


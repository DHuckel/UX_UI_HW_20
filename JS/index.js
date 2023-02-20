console.log("Your index.js file is loaded correctly!");


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 
$('header').outerHeight();


var didScroll;
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function(){
    if (didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
        console.log("Navigation bar hidden")
    }   else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            console.log("Navigation bar revealed")            
        }
    }
    lastScrollTop = st;
}

/*==========================================================================
                                 Initialise
============================================================================*/


$( document ).ready(function() {
    console.log( "ready!" );
    //write script to test if loaded with timeout
    // e.g. if (window.TweenMax && window.CSSPlugin) {
    startScroll();
    startKnockout();
    startCarDraggable();



});

/*==========================================================================
                         K N O C K O U T  D A T A B I N D I N G
============================================================================*/

function startKnockout(){

    ko.applyBindings({
        userName: ko.observable(""),        // Initially blank
    });

}

/*==========================================================================
                         P A G E  S C R O L L I N G
============================================================================*/
var currentIndex = undefined;

function startScroll(){
    //https://github.com/peachananr/onepage-scroll
    $("#main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {

            animateScreenOut(index);
        },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {
            currentIndex = index;
            animateScreenIn(currentIndex);
        },   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
}


/*==========================================================================
                        A N I M A T I O N  P E R  S C R E E N
============================================================================*/

function animateScreenOut(i) {
    console.log("animateScreenOut "+i+"");
    //custom animation for screen
    switch(i) {
        case 1:
            //code block for screen 1
            break;
        case 2:
            //code block for screen 2
            break;
        default:
        // code block
    }
}

function animateScreenIn(i) {
    console.log("animateScreenIn "+i);
    //custom animation for screen
    switch(i) {
        case 1:
            //code block for screen 1
            break;
        case 2:
            //code block for screen 2
            break;
        default:
           // code block
    }

}


/*==========================================================================
                        A N I M A T I O N  P E R  S C R E E N
============================================================================*/

var gridWidth = 200;
var gridHeight = 100;

function startCarDraggable(){

    Draggable.create("#car", {
        type:"x",
        //type:"x,y",
        edgeResistance:0.65,
        bounds:"#screen3",
        lockAxis:true,
        throwProps:true,
        snap: {
            x: function(endValue) {
                return Math.round(endValue / gridWidth) * gridWidth;
            },
            y: function(endValue) {
                return Math.round(endValue / gridHeight) * gridHeight;
            }
        }
    });

}




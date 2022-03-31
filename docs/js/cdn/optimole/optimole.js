/***
 *
 * https://docs.optimole.com/article/1307-custom-integration
 *
 ***/

document.documentElement.className += " optimole_has_js";
(function(w, d){
    var b = d.getElementsByTagName('head')[0];
    var s = d.createElement("script");
    var v = ("IntersectionObserver" in w) ? "_no_poly" : "";
    s.async = true; // This includes the script as async.
    s.src = "https://d5jmkjjpb7yfg.cloudfront.net/v2/latest/optimole_lib" + v + ".min.js";
    w.optimoleData = {
        key: "<user_key>",
        quality: "85",
        lazyloadOnly: "optimole-lazy-only",
        nativeLazyload : false,
        scalingDisabled: false,
        watchClasses: [],
        backgroundLazySelectors: "",
backgroundReplaceClasses: [ "my-background-loaded-img" ],
        network_optimizations: false,
        ignoreDpr: true,
    };
    b.appendChild(s);
}(window, document));

document.addEventListener( "DOMContentLoaded", function() {
    document.body.className = document.body.className.replace("optimole-no-script","");
    if ( "loading" in HTMLImageElement.prototype && Object.prototype.hasOwnProperty.call( optimoleData, "nativeLazyload" ) && optimoleData.nativeLazyload === true ) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach( function (img) {
            if ( !img.dataset.optSrc) {
                return;
            }
            img.src = img.dataset.optSrc;
            delete img.dataset.optSrc;
        });
    }
} );

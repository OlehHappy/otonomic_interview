(function($) {
    $.fn.jAnalytics = function (event_type, options) {
        $(this).on(event_type, function() {
            if ($(this).attr(options)) {
                console.log("Exists");
            }  
        });
    }
})(jQuery)

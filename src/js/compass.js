jQuery(document).ready(function($) {
  
  $(window).on('mousemove', function(event) {
    
    
    var c = $("#compass");
    /*  . Mouse
     *  |\
     *  | \
     * y|  \
     *  |   \
     *  |____\. center of compass
     *     x
     */
    var x = c.offset().left + c.innerWidth() / 2 - event.pageX;
    var y = c.offset().top + c.innerHeight() / 2 - event.pageY;
    
    // Use the atan function to get the angle back 
    var angle = Math.atan(y / x) * 180 / Math.PI;
    
    // Correct for radians by adding one radian when we are further to the right
    // Also, correct for the angle's wrong quadrant
    angle = event.pageX > c.offset().left + c.innerWidth() / 2 ? angle + 90 : angle - 90;
    
    var arrow = $('.arrow').css({transform: 'rotate(' + (angle) + 'deg)'});
    
  });
  
});
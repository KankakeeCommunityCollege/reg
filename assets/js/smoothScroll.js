$(document).ready(function() {
  // URL updates and the element focus is maintained
  // originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

  // filter handling for a /dir/ OR /indexordefault.page
  function filterPath(string) {
    return string
      .replace(/^\//, '')
      .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  }

  var locationPath = filterPath(location.pathname);
  $('a[href*="#"]').each(function () {
    var thisPath = filterPath(this.pathname) || locationPath;
    var hash = this.hash;
    if ($("#" + hash.replace(/#/, '')).length) {
      if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
        var $target = $(hash), target = this.hash;
        if (target) {
          $(this).click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: $target.offset().top-60}, 1000, function () {
              location.hash = target;
              $target.focus();
              selectForm();
              if ($target.is(":focus")){ //checking if the target was focused
                return false;
              }else{
                $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                $target.focus(); //Setting focus
                selectForm();
              };
            });
          });
        }
      }
    }
  });
});
function selectForm() {
  const TARGETX_INPUT_ID = document.getElementById('tfa_11'); // targetX's stupid ID
  TARGETX_INPUT_ID.focus();
  TARGETX_INPUT_ID.select();
}

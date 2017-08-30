$(document).ready(function() {
  $(window).resize(refreshSides);

  $('img').load(function() {
    refreshSides();
  });

  if (document.fontloader) {
    document.fontloader.notifyWhenFontsReady(function() {
      refreshSides();
    });
  }

  window.setTimeout(refreshSides, 200);
  refreshSides();
});

function refreshSides() {

	$("aside").each(function() {
		var name = $(this).attr("name");
		var span = $("asideLoc[name='" + name + "']");
		if (span == null) { return; }

		if ($(document).width() < 1200)
		{
			$(this).css({position: 'static', width: 'auto'});
			$(this).css('width', 'auto');
			$(this).css('border-left-width', '1px');
			$(this).css('border-top-width', '10px');
		}
		else
		{
			var w = $(document).width()/5;
			$(this).css('width', w + 'px');
			$(this).css('position', 'absolute');
			$(this).css('top', span.position().top - 5);
			$(this).css('left', ($("#leftRef").position().left -
								 $("#rightRef").position().left) + 'px');
			$(this).css('border-left-width', '10px');
			$(this).css('border-top-width', '1px');
		}
	});
}

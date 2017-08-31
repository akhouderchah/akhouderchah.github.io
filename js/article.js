$(document).ready(function() {
	$(window).resize(function(){ refreshSides(); window.setTimeout(refreshSides, 100); });

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
	var bounds = [];
	$("aside").each(function() {
		var name = $(this).attr("name");
		var span = $("asideLoc[name='" + name + "']");
		if (span == null) { return; }
		$(this).css('top', span.position().top - 5);

		// Ensure that this aside won't overlap with any others
		var top = $(this).offset().top;
		var bottom = top + $(this).outerHeight();
		var overlap = false;
		for(var i = 0; i < bounds.length; i += 2)
		{
			if(bounds[i] <= top && top <= bounds[i+1] ||
			   bounds[i] <= bottom && bottom <= bounds[i+1])
			{
				overlap = true;
				break;
			}
		}

		if ($(document).width() < 1200 || overlap)
		{
			$(this).css({position: 'static', width: 'auto'});
			$(this).css('width', 'auto');
			$(this).css('border-left-width', '1px');
			$(this).css('border-top-width', '10px');
			$(this).css('margin-bottom', '25px');
		}
		else
		{
			bounds.push(top); bounds.push(bottom);

			var w = $(document).width()/5;
			$(this).css('width', w + 'px');
			$(this).css('position', 'absolute');
			$(this).css('left', ($("#leftRef").position().left -
								 $("#rightRef").position().left) + 'px');
			$(this).css('border-left-width', '10px');
			$(this).css('border-top-width', '1px');
			$(this).css('margin-bottom', '0px');
		}
	});
}

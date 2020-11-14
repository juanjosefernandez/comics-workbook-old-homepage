var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($) {

	$(document).on('ready'+rllArgs.custom_events, function() {
	if(rllArgs.script === 'venobox') {

	$.each($('a[rel*="'+rllArgs.selector+'"]'), function() {
		var match = $(this).attr('rel').match(new RegExp(rllArgs.selector+'\\[(gallery\\-(?:[\\da-z]{1,4}))\\]', 'ig'));

		if(match !== null) {
			$(this).attr('data-gall', match[0]);
		}
	});
	$('a[rel*="'+rllArgs.selector+'"]').venobox();
		}  else if(rllArgs.script === 'nivo_lightbox') {
			$.each($('a[rel*="'+rllArgs.selector+'"]'), function() {
				var match = $(this).attr('rel').match(new RegExp(rllArgs.selector+'\\[(gallery\\-(?:[\\da-z]{1,4}))\\]', 'ig'));

				if(match !== null) {
					$(this).attr('data-lightbox-gallery', match[0]);
				}
			});

			$('a[rel*="'+rllArgs.selector+'"]').nivoLightbox();
		} 
	});
});

}
/*
     FILE ARCHIVED ON 12:32:40 Nov 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:43 Nov 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 58.612 (3)
  load_resource: 368.945 (2)
  PetaboxLoader3.resolve: 178.835 (2)
  exclusion.robots.policy: 0.331
  exclusion.robots: 0.346
  CDXLines.iter: 24.971 (3)
  RedisCDXSource: 0.98
  esindex: 0.017
  PetaboxLoader3.datanode: 188.91 (5)
  captures_list: 88.708
*/
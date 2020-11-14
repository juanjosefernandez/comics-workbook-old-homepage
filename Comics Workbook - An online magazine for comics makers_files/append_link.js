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

// original function by c. bavota at: http://bavotasan.com/2010/add-a-copyright-notice-to-copied-text/
function addLink() {
	var body_element = document.getElementsByTagName('body')[0];
	var selection;
	selection = window.getSelection();
	var linebreaks = '';
	var link_name;


	for (i = 0; i < append_link.prepend_break; i++) {
		linebreaks = linebreaks + '<br />';
	}

	if (append_link.use_title == 'true') {
		link_name = append_link.page_title;
	}
	else {
		link_name = document.URL
	}

	if (append_link.add_site_name == 'true') {
		link_name += ' | ' + append_link.site_name;
	}

	if (append_link.always_link_site == true) {
		link_url = append_link.site_url;
	}
	else {
		link_url = document.URL;
	}

	var pagelink =
		linebreaks
		+ ' ' + append_link.read_more + ' ';

	pagelink = pagelink.replace('%link%', ' ' + link_url + ' ');

	var copytext = selection + pagelink;
	var newdiv = document.createElement('div');

	newdiv.style.position='absolute';
	newdiv.style.left='-99999px';
	body_element.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);
	window.setTimeout(function() {
		body_element.removeChild(newdiv);
	},0);
}

document.oncopy = addLink;


}
/*
     FILE ARCHIVED ON 18:31:14 Nov 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:44 Nov 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 505.418
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.082
  RedisCDXSource: 1.834
  esindex: 0.008
  LoadShardBlock: 480.716 (3)
  PetaboxLoader3.resolve: 479.644 (5)
  PetaboxLoader3.datanode: 193.092 (5)
  CDXLines.iter: 19.715 (3)
  load_resource: 554.081 (2)
*/
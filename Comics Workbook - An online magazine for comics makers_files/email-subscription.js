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


jQuery(document).ready(function(){
	jQuery('#emailSub-form').submit(function(){
		form=jQuery(this);
		form.fadeOut("Slow");

		
		//send message
		jQuery.post(form.attr("action"),{
			action: 'email_subscription',
			email:jQuery("#emailSub-email").val(),
            language:jQuery("#emailSub-language").val()
		},function(data){
			if(data.status==200){
				jQuery("#emailSub-output")
					.html(jQuery("#emailSub-success").val())
					.fadeIn("Slow");
			}
			else{
				jQuery("#emailSub-output")
				.html(jQuery("#emailSub-fail").val()+": "+data.message)
				.fadeIn("Slow");
			}
		},'json');
		
		return false;
	});

});


}
/*
     FILE ARCHIVED ON 13:26:24 Nov 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:52 Nov 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 466.947 (2)
  CDXLines.iter: 22.962 (3)
  captures_list: 1626.843
  LoadShardBlock: 1507.169 (3)
  PetaboxLoader3.datanode: 1641.002 (5)
  RedisCDXSource: 89.516
  esindex: 0.016
  exclusion.robots: 0.242
  load_resource: 688.327 (2)
  exclusion.robots.policy: 0.225
*/
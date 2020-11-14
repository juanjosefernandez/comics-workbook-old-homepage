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

(function ($) {
  $(function () {
   $('.aps-each-icon').hover(function(){
     var animation_class = $(this).find('.animated').attr('data-animation-class');
     if(animation_class!=='none')
     {
       $(this).find('.animated').addClass(animation_class);
     }
   },function(){
     var animation_class = $(this).find('.animated').attr('data-animation-class');
     if(animation_class!=='none')
     {
       $(this).find('.animated').removeClass(animation_class);
     }
   });
   $('.aps-social-icon-wrapper .aps-each-icon[data-aps-tooltip-enabled="1"]').each(function(i,el){
      var $this=$(el);
      var toolTipText=$this.attr("data-aps-tooltip");
      var toolTipBg=$this.attr("data-aps-tooltip-bg");
      var toolTipTextColor=$this.attr("data-aps-tooltip-color");
      var $toolTipHolder=$this.find('.aps-icon-tooltip');
      $toolTipHolder.text(toolTipText).css({'background-color':toolTipBg,'color':toolTipTextColor,'margin-top':'-'+($toolTipHolder.outerHeight()/2)+'px','margin-left':'-'+($toolTipHolder.outerWidth()/2)+'px'});
      $this.hover(function(){
        $toolTipHolder.stop().fadeIn();
      },function(){
        $toolTipHolder.stop().fadeOut();
      })
   });
   $('.aps-social-icon-wrapper .aps-group-vertical').each(function(){
      var widthArray=new Array();
      $(this).find('img').each(function(i,el){
        var margin=$(el).parents('.aps-each-icon').css('marginLeft').replace('px','');
        var itemWidth = parseInt(($(el).width())+(2*margin));
        widthArray.push(itemWidth);
      });
      widthArray.max=function(){
        return  Math.max.apply(Math,this);
      }
      $(this).width(widthArray.max());
   });
 });
}(jQuery));

}
/*
     FILE ARCHIVED ON 14:39:46 Nov 11, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:41 Nov 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 2.993
  esindex: 0.012
  exclusion.robots.policy: 0.174
  CDXLines.iter: 28.61 (3)
  captures_list: 122.382
  load_resource: 199.504 (2)
  PetaboxLoader3.datanode: 139.079 (5)
  exclusion.robots: 0.189
  LoadShardBlock: 85.436 (3)
  PetaboxLoader3.resolve: 78.085 (2)
*/
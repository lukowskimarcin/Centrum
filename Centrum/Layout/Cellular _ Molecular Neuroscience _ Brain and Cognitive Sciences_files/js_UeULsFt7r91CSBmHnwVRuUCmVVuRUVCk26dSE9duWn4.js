!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,u=e.meanMenuOpen,m=e.meanRevealPosition,s=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,h=".meanmenu-reveal",v=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.removeElements,p=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(p=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var C="",w=function(){if("center"===m){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";C="left:"+n+";right:auto;",p?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},x=!1,A=!1;"right"===m&&(C="right:"+s+";left:auto;"),"left"===m&&(C="left:"+s+";right:auto;"),w();var E="",M=function(){E.html(jQuery(E).is(".meanmenu-reveal.meanclose")?r:u)},P=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).show(),x=!1,A=!1,jQuery(g).removeClass("mean-remove")},W=function(){var e="background:"+l+";color:"+l+";"+C;if(o>=a){jQuery(g).addClass("mean-remove"),A=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(h).html(u),E=jQuery(h),jQuery(".mean-nav ul").hide(),v?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),E.removeClass("meanclose"),jQuery(E).click(function(e){e.preventDefault(),x===!1?(E.css("text-align","center"),E.css("text-indent","0"),E.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),x=!0):(jQuery(".mean-nav ul:first").slideUp(),x=!1),E.toggleClass("meanclose"),M(),jQuery(g).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),x=!1,jQuery(E).toggleClass("meanclose").html(u)})}else P()};p||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,P(),o>=a?(W(),w()):P()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,p?(w(),o>=a?A===!1&&W():P()):(P(),o>=a&&(W(),w()))}),W()})}}(jQuery);;
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).load(function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);
//# sourceMappingURL=jquery.cycle2.js.map;
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);;
﻿/* 
	AddThisEvent v1.5.8 <http://addthisevent.com>
	Copyright (c) 2012-2014 Michael Nilsson
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 $d(d){1d 8.5X(d)}6 1e=2G.5W;4(1e!=\'5V:\'){1e=\'5U:\'}6 21=1e+\'//5.1l/3r/3w-3g-3M.3X\';6 2H=\'\';6 2l=L;6 28=\'U\';6 1P=\'\';6 1L=\'\';6 1Z=\'5T 2g\';6 27=\'5S 2g\';6 22=\'5J 2g\';6 2j=\'5I 2g\';6 2b=\'5F 2g\';6 2c=\'5E 5C\';6 2n=U;6 2q=U;6 2r=U;6 2s=U;6 2x=U;6 2z=U;6 2D=L;6 5=7(){6 D=L,3F=5B,R=1,26=\'\',3e,3d=L,3c=L;1d{1y:7(){1t{21=21}1u(e){21=1e+\'//5.1l/3r/3w-3g-3M.3X\'}1t{2H=5A}1u(e){}1t{2l=5x}1u(e){}1t{28=5w}1u(e){}6 b=5.3B(2H);6 c=8.2d(\'*\');2e(6 d=0;d<c.1D;d+=1){6 f=\'\',2a=L,5u=c[d].V,Z=\'\';4(5.Q(c[d],\'5\')){6 g=c[d].2d(\'H\');2e(6 m=0;m<g.1D;m+=1){4(5.Q(g[m],\'39\')){g[m].I.J=\'K\'}4(5.Q(g[m],\'38\')){g[m].I.J=\'K\';f+=\'&5t=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'36\')){g[m].I.J=\'K\';f+=\'&5s=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'35\')){g[m].I.J=\'K\';f+=\'&5p=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'34\')){g[m].I.J=\'K\';f+=\'&5m=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'33\')){g[m].I.J=\'K\';f+=\'&5l=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'32\')){g[m].I.J=\'K\';f+=\'&5k=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'30\')){g[m].I.J=\'K\';f+=\'&5j=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'2Y\')){g[m].I.J=\'K\';f+=\'&5g=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'3K\')){g[m].I.J=\'K\';f+=\'&5d=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'2V\')){g[m].I.J=\'K\';f+=\'&5c=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'5b\')){g[m].I.J=\'K\';f+=\'&5a=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'59\')){g[m].I.J=\'K\';f+=\'&58=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'57\')){g[m].I.J=\'K\';f+=\'&56=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'55\')){g[m].I.J=\'K\';f+=\'&54=\'+Y(5.12(g[m].S))}4(5.Q(g[m],\'2U\')){4(g[m].S!=\'\'){g[m].I.J=\'K\';6 h=g[m].S.1o(/ /1w,"");f+=\'&2a=\'+Y(h);2a=U}}}4(b){f+=\'&53=L\'}f=f.1o(/\'/1w,"´");4(1L!=\'\'){1L=1L+\',\';6 i=1L.3j(\',\');2e(6 a=0;a<i.1D;a+=1){4(2n&&i[a]==\'1j\'){Z+=\'<H 16="3A" P-N="\'+R+\'" T="5.13(X,\\\'1j\\\',\\\'\'+f+\'\\\');">\'+1Z+\'</H>\'}4(2q&&i[a]==\'1h\'){Z+=\'<H 16="3O" P-N="\'+R+\'" T="5.13(X,\\\'1h\\\',\\\'\'+f+\'\\\');">\'+27+\'</H>\'}4(2r&&i[a]==\'1g\'){Z+=\'<H 16="3R" P-N="\'+R+\'" T="5.13(X,\\\'1g\\\',\\\'\'+f+\'\\\');">\'+22+\'</H>\'}4(2s&&i[a]==\'1q\'){Z+=\'<H 16="3U" P-N="\'+R+\'" T="5.13(X,\\\'1q\\\',\\\'\'+f+\'\\\');">\'+2j+\'</H>\'}4(2x&&i[a]==\'1f\'){Z+=\'<H 16="3Y" P-N="\'+R+\'" T="5.13(X,\\\'1f\\\',\\\'\'+f+\'\\\');">\'+2b+\'</H>\'}4(2a&&i[a]==\'1i\'){4(2z&&i[a]==\'1i\'){Z+=\'<H 16="52" P-N="\'+R+\'" T="5.13(X,\\\'1i\\\',\\\'\'+f+\'\\\');">\'+2c+\'</H>\'}}}}G{4(2n){Z+=\'<H 16="3A" P-N="\'+R+\'" T="5.13(X,\\\'1j\\\',\\\'\'+f+\'\\\');">\'+1Z+\'</H>\'}4(2q){Z+=\'<H 16="3O" P-N="\'+R+\'" T="5.13(X,\\\'1h\\\',\\\'\'+f+\'\\\');">\'+27+\'</H>\'}4(2r){Z+=\'<H 16="3R" P-N="\'+R+\'" T="5.13(X,\\\'1g\\\',\\\'\'+f+\'\\\');">\'+22+\'</H>\'}4(2s){Z+=\'<H 16="3U" P-N="\'+R+\'" T="5.13(X,\\\'1q\\\',\\\'\'+f+\'\\\');">\'+2j+\'</H>\'}4(2x){Z+=\'<H 16="3Y" P-N="\'+R+\'" T="5.13(X,\\\'1f\\\',\\\'\'+f+\'\\\');">\'+2b+\'</H>\'}4(2a){4(2z){Z+=\'<H P-N="\'+R+\'" T="5.13(X,\\\'1i\\\',\\\'\'+f+\'\\\');">\'+2c+\'</H>\'}}}4(!b){Z+=\'<1I 16="4d"><1I 16="4e"></1I><1I 16="2T" P-N="\'+R+\'" T="5.13(X,\\\'2R\\\');">51</1I></1I>\'}c[d].2w=\'2Q\'+R;c[d].V=c[d].V.1o(/5/1w,\'\');c[d].V=c[d].V+\' 5-E\';c[d].4Z=\'\';6 j=c[d].29(\'P-2C\');4(j){c[d].3x(\'P-2O\',f);c[d].3x(\'P-N\',R);c[d].T=7(){5.2C(X);1d L}}G{4(2l){c[d].4Y=7(){4X(3e);5.11(X,\'1H\',\'1H\',U)};c[d].4W=7(){3e=1O("5.3H();",4V)};c[d].T=7(){1d L}}G{c[d].T=7(){5.11(X,\'1H\',\'1H\');1d L}}}6 k=c[d];6 l=8.2k(\'H\');l.2w=\'2Q\'+R+\'-E\';l.V=\'1s\';l.S=Z;k.1F(l);R++}}4(28==\'L\'){5.1Y()}G{5.3Q(b)}},2C:7(f){6 a=f.29(\'P-2O\');6 b=f.29(\'P-2C\');5.13(f,b,a)},13:7(f,a,b){6 c=\'\',N=2G.2N,2p=U,4U=3V 4T();4(a==\'1j\'){c=1e+\'//5.1l/1V/?1J=4S\'+b+\'&1K=\'+N;2p=L}4(a==\'1h\'){c=1e+\'//5.1l/1V/?1J=4R\'+b+\'&1K=\'+N}4(a==\'1g\'){c=1e+\'//5.1l/1V/?1J=4Q\'+b+\'&1K=\'+N}4(a==\'1q\'){c=1e+\'//5.1l/1V/?1J=4P\'+b+\'&1K=\'+N}4(a==\'1f\'){c=1e+\'//5.1l/1V/?1J=4O\'+b+\'&1K=\'+N;2p=L}4(a==\'1i\'){c=1e+\'//5.1l/1V/?1J=4N\'+b+\'&1K=\'+N}4(a==\'2R\'){c=1e+\'//5.1l/\'}4(c!=\'\'){4(a!=\'2R\'){6 d=f.29(\'P-N\');6 g=$d(\'2Q\'+d);4(g){6 h=g.29(\'P-4L\');4(h!=4a){h=h.1o(/4K-3g/1w,a);1t{4j(h)}1u(e){}}}}4(2p){19.4J(c)}G{2G.2N=c}}4(1P){2e(6 i=0;i<1P.1D;i++){1t{4j(1P[i])}1u(e){4G(e.4F)}}}},3Q:7(a){4(!3c){6 b;b=\'.5-E {J:4D-1Q;1R:3n;1m-4C:4B;1x:#4A!1U;1z:#3u 2O(\'+21+\') 4z-4y 2h 50%;M-1T:K!1U;W:O 1k #4v;1x:#3D;1m-2P:3E;1m-25:3G;M-1T:K;24:2h 2S 3I 4r;-23-W-1E:1v;-2i-W-1E:1v;}\';b+=\'.5-E:2W {W:O 1k #4l;1x:#3D;1m-2P:3E;1m-25:3G;M-1T:K!1U;}\';b+=\'.5-E:5e {1r:O;}\';b+=\'.5-2Z {1z-1x:#4k;}\';4(a){b+=\'.1s {2E:2L;1R:2B;z-2y:3Z;24:1a 1a 1a 1a;1z:#2t;M-37:1b;J:K;2J-1r:-1v;2J-1b:-O;W-1r:O 1k #44;W-1A:O 1k #2A;W-47:O 1k #48;W-1b:O 1k #2A;-23-W-1E:1v;-2i-W-1E:1v;-2i-1G-1M:O 1N 1B 1S(0,0,0,0.15);-23-1G-1M:O 1N 1B 1S(0,0,0,0.15);1G-1M:O 1N 1B 1S(0,0,0,0.15);}\'}G{b+=\'.1s {2E:2L;1R:2B;z-2y:3Z;24:1B 1a 1a 1a;1z:#2t;M-37:1b;J:K;2J-1r:-1v;2J-1b:-O;W-1r:O 1k #44;W-1A:O 1k #2A;W-47:O 1k #48;W-1b:O 1k #2A;-23-W-1E:1v;-2i-W-1E:1v;-2i-1G-1M:O 1N 1B 1S(0,0,0,0.15);-23-1G-1M:O 1N 1B 1S(0,0,0,0.15);1G-1M:O 1N 1B 1S(0,0,0,0.15);}\'}b+=\'.1s H {J:1Q;3i:4g;4h-2m:3T%;1z:#2t;M-1T:K;1m-25:2S;1x:#2X;24:3I 2K 2h 4m;}\';b+=\'.1s H:2W {1z:#3u;1x:#2X;M-1T:K;1m-25:2S;}\';b+=\'.5 H {J:K!1U;}\';b+=\'.5-E .39,.5-E .38,.5-E .36,.5-E .35,.5-E .34,.5-E .33,.5-E .32,.5-E .30,.5-E .2Y,.5-E .2U,.5-E .2V {J:K!1U;}\';b+=\'.1s .4d {2E:2L;2m:4n;J:1Q;1R:3n;3i:4o;}\';b+=\'.1s .4e {2E:4p;2m:O;4q:3J;1z:#4s;1R:2B;z-2y:4t;1b:2K;1r:2h;}\';b+=\'.1s .2T {1R:2B;1r:4u;3i:4g;1A:2K;24-1b:2K;1m-I:3C;1m-2P:3C;M-37:1A;z-2y:4w;4h-2m:3T%;1z:#2t;M-1T:K;1m-25:2h;1x:#4x;}\';b+=\'.1s .2T:2W {1x:#2X;}\';6 c=8.2k("I");c.3y="M/2I";c.2w="3v";4(c.2F){c.2F.3q=b}G{c.1F(8.2M(b))}8.2d("3k")[0].1F(c);3c=U}},1Y:7(){4(!3d){1t{6 a=\'.5 {4E:3J;}\';a+=\'.5-E .39,.5-E .38,.5-E .36,.5-E .35,.5-E .34,.5-E .33,.5-E .32,.5-E .30,.5-E .2Y,.5-E .3K,.5-E .2U,.5-E .2V {J:K!1U;}\';6 b=8.2k("I");b.3y="M/2I";4(b.2F){b.2F.3q=a}G{b.1F(8.2M(a))}8.2d("3k")[0].1F(b)}1u(e){}3d=U}},4i:7(){1t{1d(31=$d(\'3v\'))?31.4H.4I(31):L}1u(e){}},11:7(f,o,a,b){6 c=f.2w;6 d=$d(c);6 g=$d(c+\'-E\');4(d&&g){4(26!=c){5.2v(26)}6 h=5.49(g,\'J\');1t{f.4M()}1u(e){};4(h==\'1Q\'){4(b){}G{5.2v(c)}}G{26=c;d.V=d.V+\' 5-2Z\';d.I.46=3F++;g.I.1b=\'1a\';g.I.1r=\'1a\';g.I.J=\'1Q\';1O("5.45();",43);D=L;6 i=1p(d.42);6 j=1p(d.40);6 k=1p(g.42);6 l=1p(g.40);6 m=5.3W();6 n=m.3j(\'/\');6 p=1p(n[0]);6 q=1p(n[1]);6 r=1p(n[2]);6 s=1p(n[3]);6 t=5.3m(g);6 u=t.3j(\'/\');6 v=1p(u[0]);6 w=1p(u[1]);6 x=w+k;6 y=q+s;6 z=v+l;6 A=p+r;6 B=0,1c=0;4(o==\'3S\'&&a==\'1b\'){B=\'1a\';1c=i+\'14\'}G 4(o==\'3N\'&&a==\'1b\'){B=\'1a\';1c=-k+\'14\'}G 4(o==\'3S\'&&a==\'1A\'){B=-(l-j)+\'14\';1c=i+\'14\'}G 4(o==\'3N\'&&a==\'1A\'){B=-(l-j)+\'14\';1c=-k+\'14\'}G 4(o==\'1H\'&&a==\'1b\'){B=\'1a\';4(x>y){1c=-k+\'14\'}G{1c=i+\'14\'}}G 4(o==\'1H\'&&a==\'1A\'){B=-(l-j)+\'14\';4(x>y){1c=-k+\'14\'}G{1c=i+\'14\'}}G{4(x>y){1c=-k+\'14\'}G{1c=i+\'14\'}4(z>A){B=-(l-j)+\'14\'}G{B=\'1a\'}}g.I.1b=B;g.I.1r=1c;6 C=\'66\'5f 8.1n?\'5h\':\'5i\';4(8.1X){8.1X(C,7(){4(D){1O(7(){5.1W(c)},3s)}},L)}G 4(8.2f){8.2f("5n"+C,7(){4(D){1O(7(){5.1W(c)},3s)}})}G{8.T=7(){5.1W(c)}}}}},1W:7(f){6 a=$d(f);6 b=$d(f+\'-E\');4(a&&b){4(D&&b.I.J==\'1Q\'){1O("5.2v(\'"+f+"\');",43)}}},3H:7(){5.1W(26)},2v:7(f){6 a=$d(f);6 b=$d(f+\'-E\');4(a&&b){a.V=a.V.1o(/5-2Z/1w,\'\');b.I.J=\'K\';b.I.46=\'\'}},45:7(){D=U},3W:7(){6 w=0,h=0,y=0,x=0;4(5o(19.3l)==\'5q\'){w=19.3l;h=19.5r}G 4(8.1n&&(8.1n.2u||8.1n.2o)){w=8.1n.2u;h=8.1n.2o}G 4(8.1C&&(8.1C.2u||8.1C.2o)){w=8.1C.2u;h=8.1C.2o}4(8.5v){x=(8.1n.3a)?8.1n.3a:8.1C.3a;y=(8.1n.3b)?8.1n.3b:8.1C.3b}G{x=19.5y;y=19.5z}1d w+\'/\'+h+\'/\'+x+\'/\'+y},3m:7(a){6 x=0,y=0;4(a.3t){x=a.3L;y=a.4b;5D(a=a.3t){x+=a.3L;y+=a.4b}}1d x+\'/\'+y},49:7(a,b){6 x=a;6 y;4(x.41){y=x.41[b]}G 4(19.3P){y=8.5G.3P(x,4a).5H(b)}1d y},3B:7(f){6 b=2G.2N;6 c=U;6 d=f;6 e=d.1D;4(e==20){6 a=d.3f(0,1);6 z=d.3f(9,10);6 m=d.3f(17,18);4(a!=\'a\'){c=L}4(z!=\'z\'){c=L}4(m!=\'m\'){c=L}}G{c=L}4(b.5K(\'5.1l\')==-1&&d==\'5L\'){c=L}1d c},5M:7(){6 a=8.2d(\'*\');2e(6 d=0;d<a.1D;d+=1){4(5.Q(a[d],\'5-E\')){a[d].V=a[d].V.1o(/5-E/1w,\'\');a[d].V=a[d].V.1o(/5/1w,\'\');a[d].V=a[d].V+\' 5\'}}5.1y()},5N:7(f){1P=f},5O:7(l,t){6 x=l.5P();4(x==\'1j\'){1Z=t}4(x==\'1h\'){27=t}4(x==\'1g\'){22=t}4(x==\'1f\'){2b=t}4(x==\'5Q\'){2c=t}},5R:7(c){4(c.3p!=F){2H=c.3p}4(c.2I!=F){4(c.2I){28=\'U\'}G{28=\'L\';5.4i()}}4(c.3z!=F){2l=c.3z}4(c.1j!=F){4(c.1j.11!=F){2n=c.1j.11}}4(c.1h!=F){4(c.1h.11!=F){2q=c.1h.11}}4(c.1g!=F){4(c.1g.11!=F){2r=c.1g.11}}4(c.1q!=F){4(c.1q.11!=F){2s=c.1q.11}}4(c.1f!=F){4(c.1f.11!=F){2x=c.1f.11}}4(c.1i!=F){4(c.1i.11!=F){2z=c.1i.11}}4(c.1j!=F){4(c.1j.M!=F){1Z=c.1j.M}}4(c.1h!=F){4(c.1h.M!=F){27=c.1h.M}}4(c.1g!=F){4(c.1g.M!=F){22=c.1g.M}}4(c.1q!=F){4(c.1q.M!=F){2j=c.1q.M}}4(c.1f!=F){4(c.1f.M!=F){2b=c.1f.M}}4(c.1i!=F){4(c.1i.M!=F){2c=c.1i.M}}4(c.3h!=F){4(c.3h.4c!=F){1L=c.3h.4c}}4(c.4f!=F){1P=c.4f}},Q:7(e,c){1d 3V 5Y(\'(\\\\s|^)\'+c+\'(\\\\s|$)\').5Z(e.V)},12:7(a){6 b=a.1o(/<60\\s*[\\/]?>/1w,"\\n");b=b.1o(/<(?:.|\\n)*?>/61,\'\');b=b.1o(/(^\\s+|\\s+$)/g,\'\');6 c=8.2k("62");6 d=8.2M(b);c.1F(d);1d c.S}}}();4(19.1X){19.1X("63",7(){2D=U;5.1Y();5.1y()},L);19.1X("64",7(){5.1y()},L)}G 4(19.2f){19.2f("65",7(){2D=U;5.1Y();5.1y()});19.2f("3o",7(){5.1y()})}G{19.3o=7(){5.1y()}}4(!2D){1O("5.1Y();5.1y();",20)}',62,379,'||||if|addthisevent|var|function|document||||||||||||||||||||||||||||||||drop|undefined|else|span|style|display|none|false|text|ref|1px|data|hasclass|dropzcx|innerHTML|onclick|true|className|border|this|encodeURIComponent|htmx||show|htmlencode|cli|px||class|||window|0px|left|dropy|return|proc|ical|yahoo|google|facebook|outlook|solid|com|font|documentElement|replace|parseInt|hotmail|top|addthisevent_dropdown|try|catch|2px|gi|color|generate|background|right|6px|body|length|radius|appendChild|box|auto|em|service|reference|_ate_dropdown|shadow|3px|setTimeout|_ate_callback|block|position|rgba|decoration|important|create|force|addEventListener|trycss|_ate_lbl_outlook||_image_path|_ate_lbl_yahoo|moz|padding|size|olddrop|_ate_lbl_google|_ate_css|getAttribute|fbevent|_ate_lbl_ical|_ate_lbl_fb_event|getElementsByTagName|for|attachEvent|Calendar|9px|webkit|_ate_lbl_hotmail|createElement|_ate_mouse|height|_ate_show_outlook|clientHeight|nw|_ate_show_google|_ate_show_yahoo|_ate_show_hotmail|fff|clientWidth|hide|id|_ate_show_ical|index|_ate_show_facebook|bebebe|absolute|direct|_d_rd|width|styleSheet|location|_ate_license|css|margin|10px|200px|createTextNode|href|url|weight|atedrop|home|12px|frs|_facebook_event|_all_day_event|hover|6d84b4|_organizer_email|selected|_organizer|hdx|_location|_description|_summary|_zonecode|_end|align|_start|_url|scrollLeft|scrollTop|css2|css1|dropmousetim|substring|calendar|dropdown|cursor|split|head|innerWidth|elementposition|relative|onload|license|cssText|gfx|300|offsetParent|f4f4f4|ate_css|icon|setAttribute|type|mouse|ateoutlook|glicense|normal|555|bold|dropzind|14px|out|8px|hidden|_attendees|offsetLeft|t1|up|ategoogle|getComputedStyle|applycss|ateyahoo|down|110|atehotmail|new|viewport|png|ateical|99999|offsetWidth|currentStyle|offsetHeight|350|c8c8c8|tim|zIndex|bottom|a8a8a8|getstyle|null|offsetTop|order|copyx|brx|callback|pointer|line|removecss|eval|f7f7f7|aab9d4|15px|21px|default|180px|overflow|35px|e0e0e0|100|5px|d9d9d9|101|cacaca|repeat|no|333|arial|family|inline|visibility|description|alert|parentNode|removeChild|open|ate|track|blur|FACEBOOK|ICAL|HOTMAIL|YAHOO|GOOGLE|OUTLOOK|Date|now|200|onmouseout|clearTimeout|onmouseover|title||AddThisEvent|atefacebook|credits|uid|_uid|drule|_recurring|alarm|_alarm_reminder|dateformat|_date_format|dallday|datte|active|in|dorgaem|touchstart|click|dorga|dloca|ddesc|dsum|on|typeof|dzone|number|innerHeight|dend|dstart|str|all|_css|_mouse|pageXOffset|pageYOffset|_license|999999|Event|while|Facebook|iCal|defaultView|getPropertyValue|Hotmail|Yahoo|indexOf|aao8iuet5zp9iqw5sm9z|refresh|callcack|setlabel|toLowerCase|facebookevent|settings|Google|Outlook|http|https|protocol|getElementById|RegExp|test|br|gm|div|DOMContentLoaded|load|onreadystatechange|ontouchstart'.split('|'),0,{}));
(function ($) {
  Drupal.behaviors.generalScripts = {
    attach: function (context, settings) { 
        
        // Add nofollow to loadmore links
        $('.pager-load-more a').attr('rel','nofollow');
        
        // Change all day form label
        $('.form-item-field-event-date-und-0-all-day label').text('This is an all day event');
        
        // refresh so that js works on ajax pages
        addthisevent.refresh();
        
          if($('.slider .view-content').children().length > 1){
            $('.slider').once('slider-pager',function(){
                $('.slider .group-featured-right, .slider .group-home-carousel-content').append('<div class="slider-controls"><a class="cycle-prev cycle-button">Prev</a><div class="cycle-pager"></div><a class="cycle-next cycle-button">Next</a></div>');          
            });
          }
          
          $('.slider .view-content').cycle({
                  slides: '> div',
                  swipe: 'true',
                  timeout: 0,
                  pager: '.cycle-pager',
                  prev: '.cycle-prev',
                  next: '.cycle-next',
                  autoHeight: getTallestSlide('.slider .view-content > div')
          });
          
          // change order of field descriptions on node add event
          if($('body').hasClass('page-node-add-event')) {            
            $('.form-item').once('move-desc',function(){
              $(this).children('label').after('<div class="description-moved">');
              $(this).children('.description').appendTo($(this).children('.description-moved'));
              //$(this).children('#field-event-speakers-values th label').after('<div class="description-moved">');
            });
            $('#field-event-speakers-values th label').after('<div class="description-moved">');
            $('.field-name-field-event-speakers-form .description').appendTo('#field-event-speakers-values th .description-moved');
            $('#field-event-speakers-values th .description-moved .description:first').hide();
          }
          
          if($('body').hasClass('page-news-events-events')) {
            if($('section').hasClass('recent-categories')) {
              var my_title = $('.recent-categories h2.block-title').text();              
              var my_content = $('.recent-categories .view-content').html();
              var my_content = my_content + $('.recent-categories .view-footer').html();
              var markup = '<div id="recent-categories-container" class="js-process closed"><div class="fieldset-title"><span>' + my_title + '</span></div><div class="fieldset-wrapper">' + my_content + '</div></div>';
            }                  

            $('.recent-categories').once('recent_move',function(){
              $('#edit-field-audience-tid-wrapper').parent().prepend(markup);
              $('.mobile-exposed-filters h2.block-title').addClass('mobile-collapsible-header js-process');
            });

            $('#recent-categories-container .fieldset-wrapper').hide();
            $('#recent-categories-container').once('click_once', function(){        
              $('#recent-categories-container .fieldset-title').click(function(){          
                $('#recent-categories-container').toggleClass('closed');
                $('#recent-categories-container .fieldset-wrapper').slideToggle('fast');
                $('#recent-categories-container').removeClass('click_once-processed')
              });
            });            
          }
        
        $('#content .view-media .views-row').wrapThese(3,'js-process-table-row');
        $('.front .program-links li:first').addClass('first');

        // manipulate home page view
        $('.front #block-quicktabs-news-events .view-news-events .view-footer').each(function(){
          $(this).parent().children('.view-content').append(this);
        });
        

        $('.front #block-quicktabs-news-events .view-header h2.block-title').each(function(){
          $(this).click(function(){
            $(this).parents('.view-news-events').children('.view-content').toggle();
          });
        });
        

        // using img alt content as caption for image        
        $('.field-name-field-feature-image figure img').each(function() {
          
          var imageCredit = $(this).attr('alt');
          
          //alert(imageCredit);
          if (typeof imageCredit !== typeof undefined && imageCredit !== false && imageCredit !== '') {
            $(this).after('<span class="img-credit">'+ imageCredit +'</span>');
          }
        });


        // main search label 
        
        $('#search-block-form .form-type-textfield input[type="search"], #block-google-appliance-ga-block-search-form .form-type-textfield input[type="text"]').once('search-text', function(){
            $(this).before('<div class="main-faux-label">Search BCS...</div>');
        });


        //remove asterisk from label before magic is conjured below 
        if($('body').hasClass('page-news-events-events')) {
          $('#bwm-event-search-form .form-item-date-entry .form-required').remove();
        }

         
        // start of news letter related toggle click functions 
        if($('body').hasClass('node-type-news-letter-header') || $('body').hasClass('node-type-newsletter-page')) {
          $('.region-sidebar-second .view h3:first').addClass('first');
          $('.region-sidebar-second .table-of-contents .view .views-row-last:last').addClass('last');
                             
            $('.region-sidebar-second .block:not(download-link) h2.block-title').click(function(){
              $(this).toggleClass('open').next().toggleClass('closed open');
            });            
        }  //end of news letter related toggle click functions 
        

        if($('tbody').hasClass('class-listing')) {
          $('.class-listing tr.class-caption').click(function(){
            $(this).parent().children('tr').toggleClass('open');
          });          
        }
      

        $('#block-system-main-menu').once('meanbar',function(){
            $('#block-system-main-menu').meanmenu({
            	meanContract: "",
            	meanExpand: "",
            	meanMenuClose: "",
            	meanScreenWidth: "768",
            });
        });
        
        $('.view-media .views-row:nth-child(2), .view-media .views-row:nth-child(5), .view-media .views-row:nth-child(8)').addClass('padding-js-process');


        
   

        move_sidebar_top();
        
        generate_tabs();

 
         //End search label magic 
         
        /* Post Mortem Note: The way this was originally done would not allow ajax to work.  
         * It was also a very lazy approach that did not utilize best practice.
         * Instead of making the Our Faculty exposed filter in a block and placing it in a better staging area to be moved, 
         * it was left as a regular filter, in it's original place and javascript was used to place it in another region.
         * This caused all sorts of issues when ajax was enabled to the point where .once() would not even work properly
         * because the filters kept reloading on refresh due to being part of the view.
         * 
         * Another issue is that this was not pulling the entire form over.  There was a keyword search that wasn't being displayed
         * at all but was still being rendered as part of the view.
        */
        $('.page-our-faculty #block-views-exp-directory-page-1').once('why-vatche-why',function(){
            $('.page-our-faculty #main-content-header, #block-views-exp-directory-page-1').prependTo('#content-column > .content-inner .content-padding');    
        });
                  
        
        $('.front #content .block h2.block-title, .section-landing-news-events .double-wide h2.block-title, .section-landing-news-events .region-sidebar-second h2.block-title').click(function(){
            $(this).toggleClass('open').next().toggleClass('closed open');
        });  
         
        mobile_triggers();
        main_search_label();
        
        //Convert date select on news page to links. (put inside conditional that detects news page)
        if($('.view-display-id-page').length){
            date_select_to_link();
        }
        
        // move add to calendar inside of share this for event detail
        $('.node-event .group-event-left .addthisevent-drop').appendTo('.sharethis-buttons');
        $('.node-event .group-event-left .addthisevent-drop img').attr('src','/sites/all/themes/bcs/css/images/white-date-add.png');
        
        
        var width = $(window).width();
        $(window).resize(function(){
        	if($(window).width() != width){
                mobile_triggers();
                main_search_label();
            }
        });
        
        $('.horizontal-tabs fieldset legend, .field-name-field-tab-title').click(function(){
            $(this).toggleClass(function(){
                if($(this).hasClass('open')){
                    $(this).removeClass('open');
                    return 'closed';
                }else{
                    $(this).removeClass('closed');
                    return 'open';
                }
            });
            $(this).siblings('.expand-content, .field-name-field-tab-body').toggle();
        });       
        
        $('#edit-field-event-speakers .link-field-title .form-item').once('speaker-label', function(){
            $(this).prepend('<label>Speaker</label>');
        });
        
        if($('#user-login').length != 0){
            $('#user-login #edit-helptext, #user-login .form-item-name, #user-login .form-item-pass, #user-login .form-actions').wrapAll('<div class="login-form">');
            $('.login-form').before('<a class="manual-login" href="#">Manual Login</a>');
            $('.login-form').hide();
            $('.manual-login').click(function(){
                $(this).siblings('.login-form').slideToggle();
                return false;
            });
                
        
        }
        
    } // end of attach function
  };

  function getTallestSlide(selector) {
  	var h = 0; // height of tallest slide
  	var t = 0; // index of tallest slide
	 
  	jQuery(selector).each(function(index,value){
  		if (jQuery(this).height() > h) {
  			h = jQuery(this).height();
  			t = index;
  		}
  	});

  	return t;      	
  }
  
  function get_window_width(){
      var currentWidth = window.innerWidth || document.documentElement.clientWidth;
      return currentWidth;
  }

  function mobile_triggers(){
	var currentWidth = get_window_width();
	
	// Mobile
	if(currentWidth <= 768){
                $('.mean-bar').once('setup-header', function(){
                    $('#header .mit-logo').clone().prependTo('.mean-bar');
                    $('#branding').clone().prependTo('.mean-bar');
                    //$('#block-search-form').clone().prependTo('.mean-nav > .menu').wrap("<li class='mobile-search'></li>");
                    $('#block-google-appliance-ga-block-search-form').clone().prependTo('.mean-nav > .menu').wrap("<li class='mobile-search'></li>");
                    $('.block-menu-utility-menu .give').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.block-menu-utility-menu .apply').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.block-menu-utility-menu .contact').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.footer-utility-1 .directions').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.footer-utility-1 .employment').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.footer-utility-1 .utility-login').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.footer-utility-1 .be-test-subject').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('<li class="phone"><a href="tel:617-253-5748">(617) 253-5748</a>').appendTo('.mean-nav > .menu');
                    $('.footer-utility-2 .mcgovern').clone().appendTo('.mean-nav > .menu').addClass('mobile');
                    $('.footer-utility-2 .picower').clone().appendTo('.mean-nav > .menu').addClass('mobile').removeClass('last');
                    $('#footer-bottom .social-icons .block-content p').clone().appendTo('.mean-nav > .menu').wrap('<li class="mobile-social"><div class="social-icons"></div></li>');
                    //$('.mobile-search #block-search-form .form-actions').children('input[type=image]').attr('src','/sites/all/themes/bcs/css/images/mobile-search-glass.png');
                    $('.mobile-search #block-google-appliance-ga-block-search-form .form-actions').children('input[type=image]').attr('src','/sites/all/themes/bcs/css/images/mobile-search-glass.png');
                    
                  events_filter_up();
                });
                
    	        $("#filter-directory").show();

                // Run this code the first time the width hits to 768
		if(!$('body').hasClass('menu-triggers-processed') ) {
			
                    $('body').addClass('menu-triggers-processed');
	                              
                    destroy_mega_menu();
                        
                    //$('.view-directory .views-row-first article').show();
                    $('.page-our-faculty #edit-field-institute-center-or-lab-wrapper .fieldset-title').text('Institute/Center');
                    $('.page-our-faculty #edit-field-area-of-research-wrapper .fieldset-title').text('Research');
                    $('.event-tools-block').appendTo('#content-column');                        
                    tabs_to_expand();
                    sharethis_to_bottom();
                    enable_expose_toggle();
                    home_toggle_headers();
                    news_events_toggle_headers();
                    newsletter_toggle_headers();
                        
		}
                
            // Crazytown
            sharethis_events_to_bottom();
            $('.page-directory #views-exposed-form-directory-page').detach().appendTo('.mobile-exposed-filters');
            // end Crazytown
	}
	//Desktop
	else {
		create_mega_menu();
        // remove the display block/none attribute from article in directory listing when going from mobile to desktop
        $('.view-directory .views-row-first article').removeAttr('style');
        $('.front #block-quicktabs-news-events .view-content').removeAttr('style');
        
        // remove the directory filter toggle created in the mobile view
        $("#filter-directory").hide();
        $("#directory-mobile-collapse").show();

        expand_to_tabs();
        sharethis_to_top();
        sharethis_events_to_top();
        events_filter_down();
//          $('.page-our-faculty #edit-field-institute-center-or-lab-wrapper .fieldset-title').text('Institute or Center');
        $('.page-our-faculty #edit-field-area-of-research-wrapper .fieldset-title').text('Research Area');
        $('#bwm-event-search-form').removeAttr('style');
        $('.event-tools-block').appendTo('.region-sidebar-first .region-inner');
        
        // Crazytown
        $('.page-directory #views-exposed-form-directory-page').detach().appendTo('#block-views-exp-directory-page .block-content');
        $('#edit-search-api-views-fulltext-wrapper').show();
        // end Crazytown
	}
        
  }  
  
  /*************
   * Functions *
   *************/
  function date_select_to_link(){
      if($('.date-year.form-select').length){
          $('.date-year.form-select').once('select-is-date', function(){
                $('.form-type-select .date-year').prepend('<div class="date-links"><ul class="date-links-list col col-1"></ul></div>');
                $('.form-type-select .date-year select').hide();

                var category = getURLParameter('field_general_categories_tid');
                var path = window.location.pathname;
                var i = 0;

                var total_dates = $('select.date-year.form-select option').length - 1;
                var column = '.col-1';

                if(total_dates > 5){
                    $('.date-links').append('<ul class="date-links-list col col-2"></ul>');
                    column = '.col-2';
                }

                $('select.date-year.form-select option').each(function(){
                    var date = $(this).text();
                    var date_url = 'date_filter[value][year]=' + date;

                    if(i > 5){
                        column = '.col-1';
                    }

                    if((date != '-Year') && category){
                      category_arg = '?field_general_categories_tid=' + category;
                      $('.date-links-list' + column).prepend('<li class="date-item"><a href="' + path + category_arg +'&' + date_url + '">' + date + '</a></li>');
                    }
                    if((date != '-Year') && !category){
                      $('.date-links-list' + column).prepend('<li class="date-item"><a href="' + path + '?' + date_url + '">' + date + '</a></li>');  
                    }
                    i = i + 1;
                }); 
          });
      }
  }
  function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  }
  function tabs_to_expand(){
      $('.horizontal-tabs fieldset legend').addClass('expand-button closed');
      $('.horizontal-tabs fieldset .fieldset-wrapper').addClass('expand-content').hide();
  }
  
  function expand_to_tabs(){
      $('.horizontal-tabs fieldset legend').removeClass('expand-button');
      $('.horizontal-tabs fieldset .fieldset-wrapper').removeClass('expand-content').show();
  }
  
  /* basic page tabs */
  function generate_tabs(){
      $('.field-name-field-tab-title').addClass('expand-button closed');
      $('.field-name-field-tab-body').removeClass('expand-content').hide();
  }

  

  // auto submit checkbox and provide label click 
  function label_click(){
    $('.form-checkboxes .form-item label').click(function(){
      if($(this).prev().prop('checked')) {
        $(this).prev().prop('checked',false);
        $(this).closest('form').submit();
      } else {
        $(this).prev().prop('checked',true);
        $(this).closest('form').submit();
      }
    });      
  }
  
  /* move sharethis */
  function sharethis_to_bottom(){      
    // check that it is NOT an event detail page
    if(!$('body').hasClass('node-type-event')) {
      $('.sharethis-buttons').once('sharemove',function(){      
        $('#block-system-main').after('<div id="sharethis-mobile"></div>');
        $('#block-system-main .sharethis-buttons .sharethis-wrapper').appendTo('#sharethis-mobile');
        $('#sharethis-mobile .st_sharethis_custom').html('<div class="share-text">Share</div>');
      });      
    }
    
  } // end sharethis to bottom
  
  function sharethis_to_top(){
    // check that it is NOT an event detail page
    if(!$('body').hasClass('node-type-event')) {
      if($('#block-system-main .sharethis-buttons')) {
        $('#sharethis-mobile .sharethis-wrapper').appendTo('.sharethis-buttons');
        $('#sharethis-mobile, .share-text').remove();
        $('.sharethis-buttons').removeClass('sharemove-processed');
      }
    }
  }// end share this to top
  
  function sharethis_events_to_bottom() {
    // check that it IS on an event detail page
    if($('body').hasClass('node-type-event')) {
      $('.group-event-left-bottom').once('event_share_move',function(){
        $('.field-group-htabs-wrapper').before('<div id="sharethis-mobile" class="group-event-left"></div>');
        $('.group-event-left-bottom').children().appendTo('#sharethis-mobile');
        $('#sharethis-mobile .st_sharethis_custom').html('<div class="share-text">Share</div>');
        $('#sharethis-mobile .addthisevent-drop img').after('<div class="share-text">Add to Calendar</div>');
        $('#sharethis-mobile .field-name-field-event-register-link a').html('<div class="share-text">Register</div>');
      });
      $('.group-event-description .expand-button').removeClass('closed').addClass('open');
      $('.group-event-description .expand-content').show();
    }
  } // end of sharethis events to bottom
  
  function sharethis_events_to_top() {
    if($('body').hasClass('node-type-event')) {      
      $('#sharethis-mobile').children().appendTo('.group-event-top-lower .group-event-left-bottom');
      $('#sharethis-mobile').remove();
      $('.group-event-top-lower .group-event-left-bottom .share-text').remove();
      $('.group-event-left-bottom .field-name-field-event-register-link a').text('Register');
      $('.group-event-left-bottom').removeClass('event_share_move-processed');
    }
  }// end of sharethis events to top
  
  function home_toggle_headers() {
    $('.front #content .block h2.block-title').removeClass('open');
    $('.front #content .block h2.block-title').next().removeClass('open'); 
    $('.front #content .block h2.block-title').next().addClass('closed');
  }
  
  function newsletter_toggle_headers() {    
    $('.node-type-news-letter-header .region-sidebar-second .block:not(download-link) h2.block-title').removeClass('open');
    $('.node-type-news-letter-header .region-sidebar-second .block:not(download-link) h2.block-title').next().removeClass('open'); 
    $('.node-type-news-letter-header .region-sidebar-second .block:not(download-link) h2.block-title').next().addClass('closed');
    
    $('.node-type-newsletter-page .region-sidebar-second .block:not(download-link) h2.block-title').removeClass('open');
    $('.node-type-newsletter-page .region-sidebar-second .block:not(download-link) h2.block-title').next().removeClass('open'); 
    $('.node-type-newsletter-page .region-sidebar-second .block:not(download-link) h2.block-title').next().addClass('closed');
  }
  
  function news_events_toggle_headers() {
    $('.section-landing-news-events .double-wide h2.block-title, .section-landing-news-events .region-sidebar-second h2.block-title').removeClass('open');
    $('.section-landing-news-events .double-wide h2.block-title, .section-landing-news-events .region-sidebar-second h2.block-title').next().removeClass('open'); 
    $('.section-landing-news-events .double-wide h2.block-title, .section-landing-news-events .region-sidebar-second h2.block-title').next().addClass('closed');  
  } 
  
  function enable_expose_toggle() { 
    $('.page-news-events-news .views-widget-filter-field_general_categories_tid label, .page-news-events-news .double-wide h2.block-title').click(function(){
      $(this).parent().toggleClass('open');
    });
  }
  
  function create_mega_menu(){
        if($('#mega-menu-region').length === 0){
            $('#menubar-wrapper').after('<div id="mega-menu-region"><div class="container"><div id="mega-menu"></div></div></div>');

            $('#menu-bar nav > .menu > li').each(function(){
                var liId = $(this).attr('id');
                if($(this).children('ul').length !== 0){
                    $(this).children('ul').addClass(liId + '-sub sub-menu');
                }else{
                    $('<ul></ul>').addClass(liId + '-sub sub-menu').appendTo(this);
                }
            });

            $('#menu-bar .menu ul.sub-menu').each(function(){
                $(this).clone().appendTo('#mega-menu');
                $(this).addClass('disabled');
            });
            
      //$('#block-system-main-menu, #mega-menu-region').hover(function(){
            
//            $('#block-system-main-menu').hover(function(){
//              $('#mega-menu-region').slideDown();
//            },
//            function(){
//              $('#mega-menu-region').slideUp();
//            });         
            
            $('#block-system-main-menu').mouseenter(function(){
              $('#mega-menu-region').stop(true,true).slideDown();
            });
            
            $('#block-system-main-menu').mouseleave(function(){
              $('#mega-menu-region').stop(true,true).delay(50).slideUp();
            });

            $('#mega-menu-region').mouseenter(function(){
              $(this).stop(true,true).slideDown();
            });
            
            $('#mega-menu-region').mouseleave(function(){
              $(this).stop(true,true).delay(50).slideUp();
            });
            
            $('.sub-menu').hover(function(){
                    switch($(this).attr('class').split(' ')[2]){
                            case 'main-about-sub':
                                    $('#main-about').addClass('hover');
                            break;
                            case 'main-academic-sub':
                                    $('#main-academic').addClass('hover');
                            break;
                            case 'main-research-sub':
                                    $('#main-research').addClass('hover');
                            break;
                            case 'main-news-events-sub':
                                    $('#main-news-events').addClass('hover');
                            break;
                            case 'main-directory-sub':
                                    $('#main-directory').addClass('hover');
                            break;
                    }

            },
            function(){
                    switch($(this).attr('class').split(' ')[2]){
                            case 'main-about-sub':
                                    $('#main-about').removeClass('hover');
                            break;
                            case 'main-academic-sub':
                                    $('#main-academic').removeClass('hover');
                            break;
                            case 'main-research-sub':
                                    $('#main-research').removeClass('hover');
                            break;
                            case 'main-news-events-sub':
                                    $('#main-news-events').removeClass('hover');
                            break;
                            case 'main-directory-sub':
                                    $('#main-directory').removeClass('hover');
                            break;
                    }
            });
        }
  }
  
  function destroy_mega_menu(){
      if($('#mega-menu-region').length !== 0){
          $('#mega-menu ul.menu').each(function(){
              $('#mega-menu-region').remove();
          });
      }
  }

  function main_search_label() {
        $('#search-block-form .form-type-textfield input, #block-google-appliance-ga-block-search-form .form-type-textfield input').focus(function(){          
          if($(this).attr('value') == ''){
            $('.main-faux-label').hide();
          }
        });

        $('#search-block-form .form-type-textfield input, #block-google-appliance-ga-block-search-form .form-type-textfield input').blur(function(){
          if($(this).attr('value') == ''){
            $('.main-faux-label').show();  
          }
        });  
  }

  function events_filter_up() {
    //testing
    if($('body').hasClass('page-news-events-events')) {
      $('.region-sidebar-first section.block-views').detach().appendTo('.mobile-exposed-filters');
        $('.block-views h2.block-title').each(function(){
          var theText = $(this).text();
          if($(theText) === 'filter') {
            $(this).text('filter events');
          }          
        });
      
      $('#bwm-event-search-form, .mobile-exposed-filters .block-views .block-content').addClass('mobile-collapse');
      
      // prepend search box only when it is moved up
      $('#block-bwm-event-search').once('mobile_title', function(){
        $('#block-bwm-event-search').prepend('<h2 class="block-title">go to date</h2>');
      });
            
      $('.mobile-exposed-filters h2.block-title').addClass('mobile-collapsible-header js-process');   
      
      // adding exposed filter manipulation here          
      $('.mobile-collapsible-header').once('toggle-1', function(){
        $(this).click(function(){
          $(this).toggleClass('open');
          $(this).next('.mobile-collapse').slideToggle();
        });
      });
    } // end page news events events
  }

  function events_filter_down() {
    //testing
    if($('body').hasClass('page-news-events-events')) {
      $('.mobile-exposed-filters section.block-views').detach().prependTo('.region-sidebar-first');
        $('.block-views h2.block-title').each(function(){
          var theText = $(this).text();
          if($(theText) === 'filter events') {
            $(this).text('filter');
          }          
        });            
      
      $('section.block-views .block-content').removeClass('mobile-collapse').removeAttr('style');
      $('.mobile-collapsible-header').removeClass('toggle-1-processed, open');
    }
  }
  
  function create_last_name_menu() {
      
	  var last_name_select = $('<div id="last-name-select" class="last-name-select"><label>Last name begins with</label><div class="select-wrap"><select></select></div></div>');

	  $("#filter-directory").parent().after(last_name_select);
    
      //Go to new directory page on select of the letter drop down.
      $("#last-name-select select").change(function(){
      	console.log("last name select");
      	var goto = $(this).val();
      	window.location = goto;
      });

      //Go through each li and create an option in the select that matches.
      $('ul.switch-to-select li').each(function(){
          if($(this).children('a').attr('href')){
              var href = $(this).children('a').attr('href');
              var text = $(this).children('a').text();
              var selected = '';
              if($(this).children('a').hasClass('active')){
                  selected = ' selected';
              }
              $('.last-name-select select').append('<option value="' + href + '"' + selected + '>' + text + '</option>');
          }
      });
	  
  }
  
  function move_sidebar_top() {
	  console.log("move_sidebar_top");
	  var someHTML = '<div class="mobile-exposed-filters">';
	  $('body.one-sidebar').once('move_sidebars',function(){
		$(someHTML).prependTo('#columns');
                // Crazytown
                
                // start of list to select
                // turning unsorted list items in to a select drop down

                $('.alphabet-sort .item-list ul').addClass('switch-to-select');

                //Create elements that mobile function is looking for.
                //$('ul.switch-to-select').before('<div class="last-name-select"><label>Last name begins with</label><div class="select-wrap"><select></select></div></div>');

	  			var filter_directory = $('<h2 id="filter-directory" class="mobile-collapsible-header js-process">filter directory</h2>');

                $("#views-exposed-form-directory-page").find('.views-exposed-widgets').prepend(filter_directory);
                  //$('.page-directory .mobile-exposed-filters .views-exposed-widget:first').after('<h2 class="mobile-collapsible-header js-process">filter directory</h2>');
                  
                  
                  $('#edit-field-area-of-research-wrapper, #edit-field-bcs-affiliation-wrapper, #edit-field-institute-center-or-lab-wrapper, #edit-field-status-wrapper').wrapAll('<div id="directory-mobile-collapse" class="mobile-collapse js-process" style="display:none;" />')
                  
                  var directory_mobile_collapse = $("#directory-mobile-collapse").detach();
                  console.log(directory_mobile_collapse);
          
                  
                  //$("#filter-directory").after($("edit-search-api-views-fulltext-wrapper"));
                  $("#filter-directory").after(directory_mobile_collapse);
                  
                  create_last_name_menu();
                  
                  
                  // move search bar above filters
                  var search = $("#edit-search-api-views-fulltext-wrapper").detach();           
                  $("#views-exposed-form-directory-page").find('.views-exposed-widgets').prepend(search);
                		  
                  
                  // end Crazytown
          });

	    
        
       
//        // Crazytown
        // provide click functionality for name to toggle bio
        $('.view-directory .views-row-first .collapsible-header').addClass('open');
        //$('.view-directory .views-row-first article').show();

	   // for each directory listing user use their name as the drop down in mobile
           $('.views-row .user-full-name-link').each(function(){
             if($(this).parents('.views-row').children('.collapsible-header').length == 0){
             $(this).clone().addClass('collapsible-header').prependTo($(this).parents('.views-row'));
            }
           });  

            $('.views-row .user-full-name-link.collapsible-header').once('name_link',function(){
            	$(this).click(function(){
             	   $(this).toggleClass('open').next('article').slideToggle();

                   // since the name is a link return false so it does not take them anywhere when they click to toggle
              	   return false;

            	});
           });
        // end Crazytown
        
        
	  // news and events event page manipulation - this will all be added to a function later
	  // move header in news and events / events section above the page content 
	  if($('body').hasClass('page-news-events-events')) {
		  $('.page-news-events-events #main-content-header').once('events-moves',function(){
			  $('#main-content-header').prependTo('#columns');
			  $('#main-content-header').wrap('<div class="content-padding js-process-header">');
			  $('#block-menu-menu-events-menu').appendTo('.mobile-exposed-filters');
                          $('#block-bwm-event-search').appendTo('.mobile-exposed-filters');
//			  $('#block-bwm-event-search').prepend('<h2 class="block-title">go to date</h2>').appendTo('.mobile-exposed-filters');
//			  $('.mobile-exposed-filters').appendTo('.js-process-header');			  
		  });          
	  }
        
        // adding exposed filter manipulation here          
        $('.mobile-collapsible-header').once('toggle', function(){
        	$(this).click(function(){
            	console.log("toggle");

        		$(this).toggleClass('open');
        		$(this).next('.mobile-collapse').slideToggle();
        	});
        });
                
        
        // not sure why this needs to be here, the fieldset legends should toggle regardless of where they are, because of this temp fix
        // the content is not sliding down just showing or hiding. Would prefer to use slideToggle();
        $('.bef-select-as-checkboxes-fieldset legend').click(function(){
          $(this).parent().toggleClass('collapsed');
          return false;
        });            
        
        /* Search Label Magic for exposed filters  in directory, faculty, and main search */
        
        $('.views-widget-filter-search_api_views_fulltext .form-text').each(function(){
        	console.log("views-widget-filter-search_api_views_fulltext");
        	var label = $(this).parents('.views-widget-filter-search_api_views_fulltext').children('label').text();
            label = $.trim(label);
            if($(this).attr('value') == ''){
                $(this).before('<div class="faux-label">' + label + '</div>');
            }
        });
        
        $('.views-widget-filter-search_api_views_fulltext .form-text').focus(function(){
        	
                    if($(this).attr('value') == ''){
                            $('.faux-label').hide();
                        }
        });


        $('.views-widget-filter-search_api_views_fulltext .form-text').blur(function(){
            if($(this).attr('value') == ''){
                $('.faux-label').show();  
            }
        });               
               
        $('#bwm-event-search-form .form-type-textfield').each(function(){
            var label = $(this).children('label').text();
            label = $.trim(label);
            if($(this).children('input[type="text"]').attr('value') == ''){
                $(this).children('input[type="text"]').before('<div class="faux-label">' + label + '</div>');
            }
        });
        
        $('#bwm-event-search-form .form-type-textfield input').focus(function(){
            if($(this).attr('value') == ''){
                $('.faux-label').hide();
            }
        });
        
        $('#bwm-event-search-form .form-type-textfield input').blur(function(){
            if($(this).attr('value') == ''){
                $('.faux-label').show();  
            }
          });  
        // end of events manipulation
  }// end of move sidebar to top       
  
  // creating function to wrap items and put them in their own row
  $.fn.wrapThese = function(count, className) {
    var length = this.length;
    for(var i = 0; i < length; i+=count) {
      this.slice(i, i+count).wrapAll('<div class="' + className + '"></div>');
    }
    return this;
  }; 
    
})(jQuery);;

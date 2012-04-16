(function(b){b(function(){b.support.transition=function(){var e=(document.body||document.documentElement).style;return(e.transition!==void 0||e.WebkitTransition!==void 0||e.MozTransition!==void 0||e.MsTransition!==void 0||e.OTransition!==void 0)&&{end:function(){var a;return b.browser.webkit?a="webkitTransitionEnd":b.browser.mozilla?a="transitionend":b.browser.opera&&(a="oTransitionEnd"),"TransitionEnd"}()}}()})})(window.jQuery);
(function(b){var e=function(a){b(a).on("click",'[data-dismiss="alert"]',this.close)};e.prototype={constructor:e,close:function(a){function c(){g.trigger("closed").remove()}var d=b(this),f=d.attr("data-target"),g;f||(f=d.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));g=b(f);g.trigger("close");a&&a.preventDefault();g.length||(g=d.hasClass("alert")?d:d.parent());g.trigger("close").removeClass("in");b.support.transition&&g.hasClass("fade")?g.on(b.support.transition.end,c):c()}};b.fn.alert=function(a){return this.each(function(){var c=
b(this),d=c.data("alert");d||c.data("alert",d=new e(this));typeof a=="string"&&d[a].call(c)})};b.fn.alert.Constructor=e;b(function(){b("body").on("click.alert.data-api",'[data-dismiss="alert"]',e.prototype.close)})})(window.jQuery);
(function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.button.defaults,c)};e.prototype={constructor:e,setState:function(a){var b=this.$element,d=b.data(),f=b.is("input")?"val":"html";a+="Text";d.resetText||b.data("resetText",b[f]());b[f](d[a]||this.options[a]);setTimeout(function(){a=="loadingText"?b.addClass("disabled").attr("disabled","disabled"):b.removeClass("disabled").removeAttr("disabled")},0)},toggle:function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');
a&&a.find(".active").removeClass("active");this.$element.toggleClass("active")}};b.fn.button=function(a){return this.each(function(){var c=b(this),d=c.data("button"),f=typeof a=="object"&&a;d||c.data("button",d=new e(this,f));a=="toggle"?d.toggle():a&&d.setState(a)})};b.fn.button.defaults={loadingText:"loading..."};b.fn.button.Constructor=e;b(function(){b("body").on("click.button.data-api","[data-toggle^=button]",function(a){a=b(a.target);a.hasClass("btn")||(a=a.closest(".btn"));a.button("toggle")})})})(window.jQuery);
(function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.carousel.defaults,c);this.options.slide&&this.slide(this.options.slide);this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};e.prototype={cycle:function(){return this.interval=setInterval(b.proxy(this.next,this),this.options.interval),this},to:function(a){var c=this.$element.find(".active"),d=c.parent().children(),c=d.index(c),f=this;return a>
d.length-1||a<0?void 0:this.sliding?this.$element.one("slid",function(){f.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",b(d[a]))},pause:function(){return clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(a,c){var d=this.$element.find(".active"),f=c||d[a](),g=this.interval,e=a=="next"?"left":"right",h=a=="next"?"first":"last",j=this;this.sliding=
!0;g&&this.pause();f=f.length?f:this.$element.find(".item")[h]();return f.hasClass("active")?void 0:(!b.support.transition&&this.$element.hasClass("slide")?(this.$element.trigger("slide"),d.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger("slid")):(f.addClass(a),d.addClass(e),f.addClass(e),this.$element.trigger("slide"),this.$element.one(b.support.transition.end,function(){f.removeClass([a,e].join(" ")).addClass("active");d.removeClass(["active",e].join(" "));j.sliding=
!1;setTimeout(function(){j.$element.trigger("slid")},0)})),g&&this.cycle(),this)}};b.fn.carousel=function(a){return this.each(function(){var c=b(this),d=c.data("carousel"),f=typeof a=="object"&&a;d||c.data("carousel",d=new e(this,f));typeof a=="number"?d.to(a):typeof a=="string"||(a=f.slide)?d[a]():d.cycle()})};b.fn.carousel.defaults={interval:5E3,pause:"hover"};b.fn.carousel.Constructor=e;b(function(){b("body").on("click.carousel.data-api","[data-slide]",function(a){var c=b(this),d,f=b(c.attr("data-target")||
(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),c=!f.data("modal")&&b.extend({},f.data(),c.data());f.carousel(c);a.preventDefault()})})})(window.jQuery);
(function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.collapse.defaults,c);this.options.parent&&(this.$parent=b(this.options.parent));this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var a=this.dimension(),c=b.camelCase(["scroll",a].join("-")),d=this.$parent&&this.$parent.find(".in"),f;d&&d.length&&(f=d.data("collapse"),d.collapse("hide"),f||d.data("collapse",null));
this.$element[a](0);this.transition("addClass","show","shown");this.$element[a](this.$element[0][c])},hide:function(){var a=this.dimension();this.reset(this.$element[a]());this.transition("removeClass","hide","hidden");this.$element[a](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto"),this.$element[a?"addClass":"removeClass"]("collapse"),this},transition:function(a,c,d){var f=this,g=function(){c=="show"&&f.reset();f.$element.trigger(d)};this.$element.trigger(c)[a]("in");
b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,g):g()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};b.fn.collapse=function(a){return this.each(function(){var c=b(this),d=c.data("collapse"),f=typeof a=="object"&&a;d||c.data("collapse",d=new e(this,f));typeof a=="string"&&d[a]()})};b.fn.collapse.defaults={toggle:!0};b.fn.collapse.Constructor=e;b(function(){b("body").on("click.collapse.data-api","[data-toggle=collapse]",function(a){var c=
b(this),d,a=c.attr("data-target")||a.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),c=b(a).data("collapse")?"toggle":c.data();b(a).collapse(c)})})})(window.jQuery);
(function(b){function e(){b(a).parent().removeClass("open")}var a='[data-toggle="dropdown"]',c=function(a){var c=b(a).on("click.dropdown.data-api",this.toggle);b("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(){var a=b(this),c=a.attr("data-target"),g,i;return c||(c=a.attr("href"),c=c&&c.replace(/.*(?=#[^\s]*$)/,"")),g=b(c),g.length||(g=a.parent()),i=g.hasClass("open"),e(),!i&&g.toggleClass("open"),!1}};b.fn.dropdown=function(a){return this.each(function(){var f=
b(this),g=f.data("dropdown");g||f.data("dropdown",g=new c(this));typeof a=="string"&&g[a].call(f)})};b.fn.dropdown.Constructor=c;b(function(){b("html").on("click.dropdown.data-api",e);b("body").on("click.dropdown.data-api",a,c.prototype.toggle)})})(window.jQuery);
(function(b){function e(){var c=this,d=setTimeout(function(){c.$element.off(b.support.transition.end);a.call(c)},500);this.$element.one(b.support.transition.end,function(){clearTimeout(d);a.call(c)})}function a(){this.$element.hide().trigger("hidden");c.call(this)}function c(a){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=b.support.transition&&c;this.$backdrop=b('<div class="modal-backdrop '+c+'" />').appendTo(document.body);this.options.backdrop!="static"&&
this.$backdrop.click(b.proxy(this.hide,this));this.$backdrop.addClass("in");f?this.$backdrop.one(b.support.transition.end,a):a()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(d,this)):d.call(this)):a&&a()}function d(){this.$backdrop.remove();this.$backdrop=null}function f(){var a=this;this.isShown&&this.options.keyboard?b(document).on("keyup.dismiss.modal",function(b){b.which==
27&&a.hide()}):this.isShown||b(document).off("keyup.dismiss.modal")}var g=function(a,c){this.options=c;this.$element=b(a).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this))};g.prototype={constructor:g,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var a=this;if(!this.isShown)b("body").addClass("modal-open"),this.isShown=!0,this.$element.trigger("show"),f.call(this),c.call(this,function(){var c=b.support.transition&&a.$element.hasClass("fade");
!a.$element.parent().length&&a.$element.appendTo(document.body);a.$element.show();a.$element.addClass("in");c?a.$element.one(b.support.transition.end,function(){a.$element.trigger("shown")}):a.$element.trigger("shown")})},hide:function(c){c&&c.preventDefault();if(this.isShown)this.isShown=!1,b("body").removeClass("modal-open"),f.call(this),this.$element.trigger("hide").removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?e.call(this):a.call(this)}};b.fn.modal=function(a){return this.each(function(){var c=
b(this),d=c.data("modal"),f=b.extend({},b.fn.modal.defaults,c.data(),typeof a=="object"&&a);d||c.data("modal",d=new g(this,f));typeof a=="string"?d[a]():f.show&&d.show()})};b.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0};b.fn.modal.Constructor=g;b(function(){b("body").on("click.modal.data-api",'[data-toggle="modal"]',function(a){var c=b(this),d,f=b(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),c=f.data("modal")?"toggle":b.extend({},f.data(),c.data());a.preventDefault();
f.modal(c)})})})(window.jQuery);
(function(b){var e=function(a,b){this.init("tooltip",a,b)};e.prototype={constructor:e,init:function(a,c,d){var f,g;this.type=a;this.$element=b(c);this.options=this.getOptions(d);this.enabled=!0;this.options.trigger!="manual"&&(f=this.options.trigger=="hover"?"mouseenter":"focus",g=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(f,this.options.selector,b.proxy(this.enter,this)),this.$element.on(g,this.options.selector,b.proxy(this.leave,this)));this.options.selector?this._options=
b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(a){return a=b.extend({},b.fn[this.type].defaults,a,this.$element.data()),a.delay&&typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),a},enter:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);!c.options.delay||!c.options.delay.show?c.show():(c.hoverState="in",setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show))},leave:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);
!c.options.delay||!c.options.delay.hide?c.hide():(c.hoverState="out",setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide))},show:function(){var a,b,d,f,g,e,h;if(this.hasContent()&&this.enabled){a=this.tip();this.setContent();this.options.animation&&a.addClass("fade");e=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;b=/in/.test(e);a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body);
d=this.getPosition(b);f=a[0].offsetWidth;g=a[0].offsetHeight;switch(b?e.split(" ")[1]:e){case "bottom":h={top:d.top+d.height,left:d.left+d.width/2-f/2};break;case "top":h={top:d.top-g,left:d.left+d.width/2-f/2};break;case "left":h={top:d.top+d.height/2-g/2,left:d.left-f};break;case "right":h={top:d.top+d.height/2-g/2,left:d.left+d.width}}a.css(h).addClass(e).addClass("in")}},setContent:function(){var a=this.tip();a.find(".tooltip-inner").html(this.getTitle());a.removeClass("fade in top bottom left right")},
hide:function(){function a(){var a=setTimeout(function(){c.off(b.support.transition.end).remove()},500);c.one(b.support.transition.end,function(){clearTimeout(a);c.remove()})}var c=this.tip();c.removeClass("in");b.support.transition&&this.$tip.hasClass("fade")?a():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},
getPosition:function(a){return b.extend({},a?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,d=this.options;return a=b.attr("data-original-title")||(typeof d.title=="function"?d.title.call(b[0]):d.title),a=(a||"").toString().replace(/(^\s*|\s*$)/,""),a},tip:function(){return this.$tip=this.$tip||b(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=
null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}};b.fn.tooltip=function(a){return this.each(function(){var c=b(this),d=c.data("tooltip"),f=typeof a=="object"&&a;d||c.data("tooltip",d=new e(this,f));typeof a=="string"&&d[a]()})};b.fn.tooltip.Constructor=e;b.fn.tooltip.defaults={animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",
title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}})(window.jQuery);
(function(b){var e=function(a,b){this.init("popover",a,b)};e.prototype=b.extend({},b.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var a=this.tip(),c=this.getTitle(),d=this.getContent();a.find(".popover-title")[b.type(c)=="object"?"append":"html"](c);a.find(".popover-content > *")[b.type(d)=="object"?"append":"html"](d);a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,
d=this.options;return a=b.attr("data-content")||(typeof d.content=="function"?d.content.call(b[0]):d.content),a=a.toString().replace(/(^\s*|\s*$)/,""),a},tip:function(){return this.$tip||(this.$tip=b(this.options.template)),this.$tip}});b.fn.popover=function(a){return this.each(function(){var c=b(this),d=c.data("popover"),f=typeof a=="object"&&a;d||c.data("popover",d=new e(this,f));typeof a=="string"&&d[a]()})};b.fn.popover.Constructor=e;b.fn.popover.defaults=b.extend({},b.fn.tooltip.defaults,{placement:"right",
content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})})(window.jQuery);
(function(b){function e(a,c){var d=b.proxy(this.process,this),f=b(a).is("body")?b(window):b(a),e;this.options=b.extend({},b.fn.scrollspy.defaults,c);this.$scrollElement=f.on("scroll.scroll.data-api",d);this.selector=(this.options.target||(e=b(a).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=b("body").on("click.scroll.data-api",this.selector,d);this.refresh();this.process()}e.prototype={constructor:e,refresh:function(){this.targets=this.$body.find(this.selector).map(function(){var a=
b(this).attr("href");return/^#\w/.test(a)&&b(a).length?a:null});this.offsets=b.map(this.targets,function(a){return b(a).position().top})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.offsets,d=this.targets,f=this.activeTarget,e;for(e=b.length;e--;)f!=d[e]&&a>=b[e]&&(!b[e+1]||a<=b[e+1])&&this.activate(d[e])},activate:function(a){var b;this.activeTarget=a;this.$body.find(this.selector).parent(".active").removeClass("active");b=this.$body.find(this.selector+'[href="'+
a+'"]').parent("li").addClass("active");b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active")}};b.fn.scrollspy=function(a){return this.each(function(){var c=b(this),d=c.data("scrollspy"),f=typeof a=="object"&&a;d||c.data("scrollspy",d=new e(this,f));typeof a=="string"&&d[a]()})};b.fn.scrollspy.Constructor=e;b.fn.scrollspy.defaults={offset:10};b(function(){b('[data-spy="scroll"]').each(function(){var a=b(this);a.scrollspy(a.data())})})})(window.jQuery);
(function(b){var e=function(a){this.element=b(a)};e.prototype={constructor:e,show:function(){var a=this.element,c=a.closest("ul:not(.dropdown-menu)"),d=a.attr("data-target"),f,e;d||(d=a.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));a.parent("li").hasClass("active")||(f=c.find(".active a").last()[0],a.trigger({type:"show",relatedTarget:f}),e=b(d),this.activate(a.parent("li"),c),this.activate(e,e.parent(),function(){a.trigger({type:"shown",relatedTarget:f})}))},activate:function(a,c,d){function f(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
a.addClass("active");i?a.addClass("in"):a.removeClass("fade");a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active");d&&d()}var e=c.find("> .active"),i=d&&b.support.transition&&e.hasClass("fade");i?e.one(b.support.transition.end,f):f();e.removeClass("in")}};b.fn.tab=function(a){return this.each(function(){var c=b(this),d=c.data("tab");d||c.data("tab",d=new e(this));typeof a=="string"&&d[a]()})};b.fn.tab.Constructor=e;b(function(){b("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',
function(a){a.preventDefault();b(this).tab("show")})})})(window.jQuery);
(function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.typeahead.defaults,c);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.$menu=b(this.options.menu).appendTo("body");this.source=this.options.source;this.shown=!1;this.listen()};e.prototype={constructor:e,select:function(){return this.$element.val(this.$menu.find(".active").attr("data-value")),this.$element.change(),
this.hide()},show:function(){var a=b.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:a.top+a.height,left:a.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var a=this,c;return this.query=this.$element.val(),this.query?(c=b.grep(this.source,function(b){if(a.matcher(b))return b}),c=this.sorter(c),c.length?this.render(c.slice(0,this.options.items)).show():this.shown?this.hide():
this):this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){for(var b=[],d=[],e=[],g;g=a.shift();)g.toLowerCase().indexOf(this.query.toLowerCase())?~g.indexOf(this.query)?d.push(g):e.push(g):b.push(g);return b.concat(d,e)},highlighter:function(a){return a.replace(RegExp("("+this.query+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(a){var c=this;return a=b(a).map(function(a,e){return a=b(c.options.item).attr("data-value",
e),a.find("a").html(c.highlighter(e)),a[0]}),a.first().addClass("active"),this.$menu.html(a),this},next:function(){var a=this.$menu.find(".active").removeClass("active").next();a.length||(a=b(this.$menu.find("li")[0]));a.addClass("active")},prev:function(){var a=this.$menu.find(".active").removeClass("active").prev();a.length||(a=this.$menu.find("li").last());a.addClass("active")},listen:function(){this.$element.on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",
b.proxy(this.keyup,this));(b.browser.webkit||b.browser.msie)&&this.$element.on("keydown",b.proxy(this.keypress,this));this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this))},keyup:function(a){switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation();a.preventDefault()},keypress:function(a){if(this.shown){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();
break;case 38:a.preventDefault();this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()}},blur:function(){var a=this;setTimeout(function(){a.hide()},150)},click:function(a){a.stopPropagation();a.preventDefault();this.select()},mouseenter:function(a){this.$menu.find(".active").removeClass("active");b(a.currentTarget).addClass("active")}};b.fn.typeahead=function(a){return this.each(function(){var c=b(this),d=c.data("typeahead"),f=typeof a=="object"&&a;d||c.data("typeahead",d=new e(this,
f));typeof a=="string"&&d[a]()})};b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'};b.fn.typeahead.Constructor=e;b(function(){b("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(a){var c=b(this);c.data("typeahead")||(a.preventDefault(),c.typeahead(c.data()))})})})(window.jQuery);

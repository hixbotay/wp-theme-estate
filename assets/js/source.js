


function close_modal_alert(){
	$('#modal_alert').hide();
}


function openPopupWindow(obj) { 
	var wID = $(obj).attr('data-id');
	var url = $(obj).attr('data-url')+'&display=popup';
	var width = $(obj).attr('data-width');
	var height = $(obj).attr('data-height');
	var w = window.open(url,wID, 'width='+width+',height='+height+',location=1,status=1,resizable=yes');
	var coords = getCenteredCoords(width,height);
	w.moveTo(coords[0],coords[1]);
}


$(document).ready(function(){
	var width = $(window).width();
	$(window).resize(function() {
		width = $(window).width();
	});
	if(width < 990 ){
		$(".level_0").click(function(){
			$(this).find(".highlight").slideToggle('display-open');
		});

  // bottom menu
  $(".menu-bottom .level0").click(function(){

  	$("#menu-sub1").slideToggle('display-open');
  });
}
})

function fb_support_online(){

	jQuery(".chat_fb").click(function() {
		jQuery('.fchat').toggle( "slow", function(display ) {      
			if ( $('.fchat') .css('display') == 'none' ) {
				$('.chat_fb').addClass('chat_fb_closed').removeClass('chat_fb_openned');
				$('#cfacebook').css('width','auto');
			} else {

        // $('#cfacebook').css('top','0%');
        $('.chat_fb').removeClass('chat_fb_closed').addClass('chat_fb_openned');
        $('#cfacebook').css('width','310px');
    }
});
	});

};!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;/*************** CHECK FORM ***************/
//If the length of the element's string is 0 then display helper message
function notEmpty(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length == 0){
		invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function notEmpty2(elemid,txt_default, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length == 0){
		invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}else if(elem.val() == txt_default){
		invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
//For texarea
function notEmptyTextarea(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length==0){
		invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function isPhone(elemid, helperMsg){
	elem  = $('#'+elemid);
	var numericExpression = /^[0-9 .]+$/;
	if(elem.val().match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}
function notValue(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val()=='0'){
		invalid(elemid,helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function isUsername(elemid, helperMsg){
	elem  = $('#'+elemid);
	var strExp = /^[0-9a-zA-Z_-]+$/;
	if(elem.val().match(strExp)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}

//If the element's string matches the regular expression it is all numbers

function isNumeric(elemid, helperMsg){
	elem  = $('#'+elemid);
	var numericExpression = /^[0-9]+$/;
	if(elem.val().match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		elem.focus();
		return false;
	}
}

/*
 * check number list follow: 048082354;09238549; 
 */
function isNumericList(elemid, helperMsg){
	elem  = $('#'+elemid);
	var numericExpression = /^[0-9; ]+$/;
	if(elem.val().match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is all letters
function isAlphabet(elemid, helperMsg){
	elem  = $('#'+elemid);
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.val().match(alphaExp)){
		return true;
	}else{
		invalid(elemid,helperMsg);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is numbers and letters
function isAlphanumeric(elemid, helperMsg){
	
	elem  = $('#'+elemid);
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(elem.val().match(alphaExp)){
		return true;
	}else{
		invalid(elemid,helperMsg);
		elem.focus();
		return false;
	}
}


// Limit length
function lengthRestriction(elemid, min, max){
	elem  = $('#'+elemid);
	var uInput = elem.val();
	if(uInput.length >= min && uInput.length <= max){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,'Please enter between ' +min+ ' and ' +max+ ' characters');
		elem.focus();
		return false;
	}
}

// Min length
function lengthMin(elemid, min, helperMsg){
	elem  = $('#'+elemid);
	var uInput = elem.val();
	if(uInput.length >= min ){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}


// Select box ( multi select)
function madeSelection(elemid, helperMsg){
	elem  = $('#'+elemid);
	  var i;
	  for (i=0; i<elem.options.length; i++) {
	    if (elem.options[i].selected && ( elem.options[i].value != "") ){
	      return true;
	    }
	  }
	  invalid(elemid,helperMsg);
	  return false;
}

// Select checkbox
function madeCheckbox(elemid, helperMsg)
{
	elem  = $('#'+elemid);
	if(elem.is(':checked') == false){
		alert(helperMsg);
		return false;
		invalid(elemid);
	}
	else
	{
		return true;
	}
}

/*
 *  For checkbox multi.
 *  Min 1 item is checked
 */
function checkMultiCheckbox(containerid,helperMsg) {
	fields = $('#'+containerid).find('input:checked');
	length_checked = fields.length;
	if (!length_checked) {
		invalid(elemid,helperMsg);
        return false; // The form will *not* submit
    }
    return true;
}


// Email
function emailValidator(elemid, helperMsg){
	elem  = $('#'+elemid);
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.val().match(emailExp)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}

// Password and repassword
function checkMatchPass(helperMsg){
	elem_value  = $('#password').val();
	elem2_value  = $('#re-password').val();
	
	if(elem_value != elem2_value ){
		invalid('re-password',helperMsg);
		return false;
	}else{
		valid('re-password');
		return true;
	}
}
function checkMatchPass_2(pass,repass,helperMsg){
	elem_value  = $('#'+pass).val();
	elem2_value  = $('#'+repass).val();
	if(elem_value != elem2_value )
	{
		invalid(repass,helperMsg);
		return false;
	}
	else
	{
		valid(repass);
		return true;
	}
}

// Email and re-email

function checkMatchEmail(helperMsg){
	elem_value  = $('#email').val();
	elem2_value  = $('#re-email').val();
	
	if(elem_value != elem2_value )
	{
		invalid('re-email',helperMsg);
		return false;
	}
	else
	{	
		valid('re-email');
		return true;
	}
}

/*
 * Change border color where valid
 */
function valid(element){
	$("#"+element).removeClass("redborder");
	$("#"+element).parent().find('.label_error').prev().remove();
	$("#"+element).parent().find('.label_error').remove();
	$("#"+element).parent().find('.label_success').prev().remove();
	$("#"+element).parent().find('.label_success').remove();
}
/*
 * Change border color where invalid
 */
function invalid(element,helperMsg){
	$("#"+element).parent().find('.label_error').prev().remove();
	$("#"+element).parent().find('.label_error').remove();
	$("#"+element).parent().find('.label_success').prev().remove();
	$("#"+element).parent().find('.label_success').remove();
	$('<br/><div class=\'label_error\'>'+helperMsg+'</div>').insertAfter($('#'+element).parent().children(':last'));
	$("#"+element).addClass("redborder");
	$("#"+element).focus();
}

var smartTab = jQuery("#smartTab");
var fixedTop = 0;
var headerTabTop = fixedTop + 80;
var clickNum = -1;

;﻿(function(j,h,c,g,d,k,e){/*! Jssor */
new(function(){});var f=j.$Jease$={$Swing:function(a){return-c.cos(a*c.PI)/2+.5},$Linear:function(a){return a},$InQuad:function(a){return a*a},$OutQuad:function(a){return-a*(a-2)},$InOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$InCubic:function(a){return a*a*a},$OutCubic:function(a){return(a-=1)*a*a+1},$InOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$InQuart:function(a){return a*a*a*a},$OutQuart:function(a){return-((a-=1)*a*a*a-1)},$InOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$InQuint:function(a){return a*a*a*a*a},$OutQuint:function(a){return(a-=1)*a*a*a*a+1},$InOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$InSine:function(a){return 1-c.cos(c.PI/2*a)},$OutSine:function(a){return c.sin(c.PI/2*a)},$InOutSine:function(a){return-1/2*(c.cos(c.PI*a)-1)},$InExpo:function(a){return a==0?0:c.pow(2,10*(a-1))},$OutExpo:function(a){return a==1?1:-c.pow(2,-10*a)+1},$InOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.pow(2,10*(a-1)):1/2*(-c.pow(2,-10*--a)+2)},$InCirc:function(a){return-(c.sqrt(1-a*a)-1)},$OutCirc:function(a){return c.sqrt(1-(a-=1)*a)},$InOutCirc:function(a){return(a*=2)<1?-1/2*(c.sqrt(1-a*a)-1):1/2*(c.sqrt(1-(a-=2)*a)+1)},$InElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b))},$OutElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.pow(2,-10*a)*c.sin((a-d)*2*c.PI/b)+1},$InOutElastic:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b):c.pow(2,-10*(a-=1))*c.sin((a-d)*2*c.PI/b)*.5+1},$InBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$OutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$InOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$InBounce:function(a){return 1-f.$OutBounce(1-a)},$OutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$InOutBounce:function(a){return a<1/2?f.$InBounce(a*2)*.5:f.$OutBounce(a*2-1)*.5+.5},$GoBack:function(a){return 1-c.abs(2-1)},$InWave:function(a){return 1-c.cos(a*c.PI*2)},$OutWave:function(a){return c.sin(a*c.PI*2)},$OutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$InJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a},$Early:c.ceil,$Late:c.floor};var b=j.$Jssor$=new function(){var i=this,Ab=/\S+/g,N=1,jb=2,mb=3,lb=4,pb=5,O,t=0,l=0,u=0,A=0,B=0,E=navigator,ub=E.appName,o=E.userAgent,z=h.documentElement,q=parseFloat;function Ib(){if(!O){O={fe:"ontouchstart"in j||"createTouch"in h};var a;if(E.pointerEnabled||(a=E.msPointerEnabled))O.Vd=a?"msTouchAction":"touchAction"}return O}function w(g){if(!t){t=-1;if(ub=="Microsoft Internet Explorer"&&!!j.attachEvent&&!!j.ActiveXObject){var e=o.indexOf("MSIE");t=N;u=q(o.substring(e+5,o.indexOf(";",e)));/*@cc_on A=@_jscript_version@*/;l=h.documentMode||u}else if(ub=="Netscape"&&!!j.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),f=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){t=jb;l=q(o.substring(d+8))}else if(b>=0){var i=o.substring(0,b).lastIndexOf("/");t=f>=0?lb:mb;l=q(o.substring(i+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){t=N;l=u=q(a[1])}}if(c>=0)B=q(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){t=pb;l=q(a[2])}}}return g==t}function r(){return w(N)}function ib(){return r()&&(l<6||h.compatMode=="BackCompat")}function Bb(){return w(jb)}function kb(){return w(mb)}function Eb(){return w(lb)}function ob(){return w(pb)}function eb(){return kb()&&B>534&&B<535}function I(){w();return B>537||l>42||t==N&&l>=11}function gb(){return r()&&l<9}function fb(a){var b,c;return function(g){if(!b){b=d;var f=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(h,d){var b=a;if(d)b=h+f;if(g.style[b]!=e)return c=b})}return c}}function db(b){var a;return function(c){a=a||fb(b)(c)||b;return a}}var P=db("transform");function tb(a){return{}.toString.call(a)}var qb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){qb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(tb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function H(a){return a==g?String(a):qb[tb(a)]||"object"}function rb(a){for(var b in a)return d}function C(a){try{return H(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function p(a,b){return{x:a,y:b}}function yb(b,a){setTimeout(b,a||0)}function D(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a&&(c+=(!a.indexOf(" ")?"":" ")+a);return c}function U(b,a){if(l<9)b.style.filter=a}function vb(a,b){if(a===e)a=b;return a}i.$Device=Ib;i.$IsBrowserIE=r;i.$IsBrowserIeQuirks=ib;i.$IsBrowserFireFox=Bb;i.$IsBrowserSafari=kb;i.$IsBrowserChrome=Eb;i.$IsBrowserOpera=ob;i.Le=I;fb("transform");i.$BrowserVersion=function(){return l};i.$BrowserEngineVersion=function(){return u||l};i.$WebKitVersion=function(){w();return B};i.$Delay=yb;i.X=vb;i.Ee=function(a,b){b.call(a);return G({},a)};function Z(a){a.constructor===Z.caller&&a.Wb&&a.Wb.apply(a,Z.caller.arguments)}i.Wb=Z;i.$GetElement=function(a){if(i.Te(a))a=h.getElementById(a);return a};function v(a){return a||j.event}i.$EvtSrc=function(b){b=v(b);var a=b.target||b.srcElement||h;if(a.nodeType==3)a=i.Mc(a);return a};i.Rd=function(a){a=v(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};i.$WindowSize=function(){var a=h.body;return{x:a.clientWidth||z.clientWidth,y:a.clientHeight||z.clientHeight}};function x(c,d,a){if(a!==e)c.style[d]=a==e?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&j.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,g);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function bb(b,c,a,d){if(a===e){a=q(x(b,c));isNaN(a)&&(a=g);return a}if(a==g)a="";else d&&(a+="px");x(b,c,a)}function m(c,a){var d=a?bb:x,b;if(a&4)b=db(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Db(b){if(r()&&u<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?q(a[1])/100:1}else return q(b.style.opacity||"1")}function Fb(b,a,f){if(r()&&u<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=D(h,[i],d);U(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var Q={$Rotate:["rotate"],$RotateX:["rotateX"],$RotateY:["rotateY"],$SkewX:["skewX"],$SkewY:["skewY"]};if(!I())Q=G(Q,{$ScaleX:["scaleX",2],$ScaleY:["scaleY",2],$TranslateZ:["translateZ",1]});function R(d,a){var c="";if(a){if(r()&&l&&l<10){delete a.$RotateX;delete a.$RotateY;delete a.$TranslateZ}b.$Each(a,function(d,b){var a=Q[b];if(a){var e=a[1]||0;if(S[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(I()){if(a.$TranslateX||a.$TranslateY||a.$TranslateZ!=e)c+=" translate3d("+(a.$TranslateX||0)+"px,"+(a.$TranslateY||0)+"px,"+(a.$TranslateZ||0)+"px)";if(a.$ScaleX==e)a.$ScaleX=1;if(a.$ScaleY==e)a.$ScaleY=1;if(a.$ScaleX!=1||a.$ScaleY!=1)c+=" scale3d("+a.$ScaleX+", "+a.$ScaleY+", 1)"}}d.style[P(d)]=c}i.ke=m("transformOrigin",4);i.Zd=m("backfaceVisibility",4);i.ae=m("transformStyle",4);i.de=m("perspective",6);i.Ce=m("perspectiveOrigin",4);i.ze=function(b,a){if(r()&&u<9||u<10&&ib())b.style.zoom=a==1?"":a;else{var c=P(b),f=a==1?"":"scale("+a+")",e=b.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=D(e,[g],f);b.style[c]=d}};i.$AddEvent=function(a,c,d,b){a=i.$GetElement(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.S=function(a,c,d,b){a=i.$GetElement(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.$FireEvent=function(c,b){var a;if(h.createEvent){a=h.createEvent("HTMLEvents");a.initEvent(b,k,k);c.dispatchEvent(a)}else{var d="on"+b;a=h.createEventObject();c.fireEvent(d,a)}};i.$CancelEvent=function(a){a=v(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=k};i.$StopEvent=function(a){a=v(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};i.$CreateCallback=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};i.$InnerText=function(a,b){if(b==e)return a.textContent||a.innerText;var c=h.createTextNode(b);i.Ac(a);a.appendChild(c)};i.$InnerHtml=function(a,b){if(b==e)return a.innerHTML;a.innerHTML=b};i.$ClearInnerHtml=function(a){a.innerHTML=""};i.$Children=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function sb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:g;a;a=a.nextSibling)if(a.nodeType==1){if(M(a,b)==c)return a;if(!e){var d=sb(a,c,e,b);if(d)return d}}}i.$FindChild=sb;function X(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:g;a;a=a.nextSibling)if(a.nodeType==1){M(a,b)==d&&c.push(a);if(!f){var e=X(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function nb(a,c,d){for(a=a?a.firstChild:g;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=nb(a,c,d);if(b)return b}}}i.zf=nb;i.nf=function(b,a){return b.getElementsByTagName(a)};i.Hb=function(a,f,d){d=d||"u";var e;do{if(a.nodeType==1){var c=b.$AttributeEx(a,d);if(c&&c==vb(f,c)){e=a;break}}a=b.Mc(a)}while(a&&a!=h.body);return e};function G(){var f=arguments,d,c,b,a,h=1&f[0],g=1+h;d=f[g-1]||{};for(;g<f.length;g++)if(c=f[g])for(b in c){a=c[b];if(a!==e){a=c[b];var i=d[b];d[b]=h&&(C(i)||C(a))?G(h,{},i,a):a}}return d}i.s=G;function ab(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(C(a)&&C(b)){a=ab(a,b);e=!rb(a)}!e&&(d[c]=a)}}return d}i.Qd=function(a){return H(a)=="function"};i.Te=function(a){return H(a)=="string"};i.fc=function(a){return!isNaN(q(a))&&isFinite(a)};i.$Each=n;i.rd=C;function V(a){return h.createElement(a)}i.$CreateElement=V;i.$CreateDiv=function(){return V("DIV")};i.Pf=function(){return V("SPAN")};i.Ud=function(){};function F(b,c,a){if(a==e)return b.getAttribute(c);b.setAttribute(c,a)}function M(a,b){return F(a,b)||F(a,"data-"+b)}i.$Attribute=F;i.$AttributeEx=M;i.U=function(d,b,c){var a=i.Hf(M(d,b));if(isNaN(a))a=c;return a};function y(b,a){return F(b,"class",a)||""}function xb(b){var a={};n(b,function(b){if(b!=e)a[b]=b});return a}function zb(b,a){return b.match(a||Ab)}function T(b,a){return xb(zb(b||"",a))}i.Uc=xb;i.Jf=zb;function cb(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function K(a,c,b){y(a,cb(" ",G(ab(T(y(a)),T(c)),T(b))))}i.Mc=function(a){return a.parentNode};i.V=function(a){i.Nb(a,"none")};i.A=function(a,b){i.Nb(a,b?"none":"")};i.Qf=function(b,a){b.removeAttribute(a)};i.Mf=function(d,a){if(a)d.style.clip="rect("+c.round(a.$Top||a.C||0)+"px "+c.round(a.$Right)+"px "+c.round(a.$Bottom)+"px "+c.round(a.$Left||a.B||0)+"px)";else if(a!==e){var h=d.style.cssText,g=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],f=D(h,g,"");b.$CssCssText(d,f)}};i.R=function(){return+new Date};i.$AppendChild=function(b,a){b.appendChild(a)};i.Mb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};i.ac=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};i.of=function(a,b){n(a,function(a){i.ac(a,b)})};i.Ac=function(a){i.of(i.$Children(a,d),a)};i.rc=function(a,b){var c=i.Mc(a);b&1&&i.J(a,(i.$CssWidth(c)-i.$CssWidth(a))/2);b&2&&i.H(a,(i.$CssHeight(c)-i.$CssHeight(a))/2)};var W={$Top:g,$Right:g,$Bottom:g,$Left:g,v:g,u:g};i.Ne=function(a){var b=i.$CreateDiv();s(b,{bc:"block",ab:i.Y(a),$Top:0,$Left:0,v:0,u:0});var d=i.Wc(a,W);i.Mb(b,a);i.$AppendChild(b,a);var e=i.Wc(a,W),c={};n(d,function(b,a){if(b==e[a])c[a]=b});s(b,W);s(b,c);s(a,{$Top:0,$Left:0});return c};i.Hf=q;function Y(d,c,b){var a=d.cloneNode(!c);!b&&i.Qf(a,"id");return a}i.$CloneNode=Y;i.Lb=function(e,f){var a=new Image;function b(e,d){i.S(a,"load",b);i.S(a,"abort",c);i.S(a,"error",c);f&&f(a,d)}function c(a){b(a,d)}if(ob()&&l<11.6||!e)b(!e);else{i.$AddEvent(a,"load",b);i.$AddEvent(a,"abort",c);i.$AddEvent(a,"error",c);a.src=e}};i.qg=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){i.Lb(a.src,b)});b()};i.Vc=function(a,g,i,h){if(h)a=Y(a);var c=X(a,g);if(!c.length)c=b.nf(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=Y(i);y(e,y(d));b.$CssCssText(e,d.style.cssText);b.Mb(e,d);b.ac(d)}return a};function Gb(a){var l=this,p="",r=["av","pv","ds","dn"],d=[],q,k=0,g=0,f=0;function j(){K(a,q,(d[f||g&2||g]||"")+" "+(d[k]||""));b.$Css(a,"pointer-events",f?"none":"")}function c(){k=0;j();i.S(h,"mouseup",c);i.S(h,"touchend",c);i.S(h,"touchcancel",c)}function o(a){if(f)i.$CancelEvent(a);else{k=4;j();i.$AddEvent(h,"mouseup",c);i.$AddEvent(h,"touchend",c);i.$AddEvent(h,"touchcancel",c)}}l.yd=function(a){if(a===e)return g;g=a&2||a&1;j()};l.$Enable=function(a){if(a===e)return!f;f=a?0:3;j()};l.$Elmt=a=i.$GetElement(a);F(a,"data-jssor-button","1");var m=b.Jf(y(a));if(m)p=m.shift();n(r,function(a){d.push(p+a)});q=cb(" ",d);d.unshift("");i.$AddEvent(a,"mousedown",o);i.$AddEvent(a,"touchstart",o)}i.mc=function(a){return new Gb(a)};i.$Css=x;i.Jb=m("overflow");i.H=m("top",2);i.Bg=m("right",2);i.vg=m("bottom",2);i.J=m("left",2);i.$CssWidth=m("width",2);i.$CssHeight=m("height",2);i.gf=m("marginLeft",2);i.Xe=m("marginTop",2);i.Y=m("position");i.Nb=m("display");i.z=m("zIndex",1);i.xc=function(b,a,c){if(a!=e)Fb(b,a,c);else return Db(b)};i.$CssCssText=function(a,b){if(b!=e)a.style.cssText=b;else return a.style.cssText};i.Zf=function(b,a){if(a===e){a=x(b,"backgroundImage")||"";var c=/\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a)||[];return c[1]}x(b,"backgroundImage",a?"url('"+a+"')":"")};var L;i.Yf=L={$Opacity:i.xc,$Top:i.H,$Right:i.Bg,$Bottom:i.vg,$Left:i.J,v:i.$CssWidth,u:i.$CssHeight,ab:i.Y,bc:i.Nb,$ZIndex:i.z};i.Wc=function(c,b){var a={};n(b,function(d,b){if(L[b])a[b]=L[b](c)});return a};function s(h,l){var f=gb(),b=I(),d=eb(),j=P(h);function k(b,d,a){var e=b.yb(p(-d/2,-a/2)),f=b.yb(p(d/2,-a/2)),g=b.yb(p(d/2,a/2)),h=b.yb(p(-d/2,a/2));b.yb(p(300,300));return p(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var n=a.$TranslateZ||0,p=(a.$RotateX||0)%360,q=(a.$RotateY||0)%360,u=(a.$Rotate||0)%360,l=a.$ScaleX,m=a.$ScaleY,g=a.ih;if(l==e)l=1;if(m==e)m=1;if(g==e)g=1;if(f){n=0;p=0;q=0;g=0}var c=new Cb(a.$TranslateX,a.$TranslateY,n);c.$RotateX(p);c.$RotateY(q);c.Xf(u);c.Wf(a.$SkewX,a.$SkewY);c.$Scale(l,m,g);if(b){c.$Move(a.B,a.C);d.style[j]=c.hg()}else if(!A||A<9){var o="",h={x:0,y:0};if(a.$OriginalWidth)h=k(c,a.$OriginalWidth,a.$OriginalHeight);i.Xe(d,h.y);i.gf(d,h.x);o=c.kg();var s=d.style.filter,t=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),r=D(s,[t],o);U(d,r)}}s=function(f,c){c=c||{};var j=c.B,k=c.C,h;n(L,function(a,b){h=c[b];h!==e&&a(f,h)});i.Mf(f,c.$Clip);if(!b){j!=e&&i.J(f,(c.wd||0)+j);k!=e&&i.H(f,(c.xd||0)+k)}if(c.gg)if(d)yb(i.$CreateCallback(g,R,f,c));else a(f,c)};i.kc=R;if(d)i.kc=s;if(f)i.kc=a;else if(!b)a=R;i.D=s;s(h,l)}i.kc=s;i.D=s;function Cb(j,k,o){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,j||0,k||0,o||0,1],i=c.sin,h=c.cos,l=c.tan;function f(a){return a*c.PI/180}function n(a,b){return{x:a,y:b}}function m(b,c,f,g,i,l,n,o,q,t,u,w,y,A,C,F,a,d,e,h,j,k,m,p,r,s,v,x,z,B,D,E){return[b*a+c*j+f*r+g*z,b*d+c*k+f*s+g*B,b*e+c*m+f*v+g*D,b*h+c*p+f*x+g*E,i*a+l*j+n*r+o*z,i*d+l*k+n*s+o*B,i*e+l*m+n*v+o*D,i*h+l*p+n*x+o*E,q*a+t*j+u*r+w*z,q*d+t*k+u*s+w*B,q*e+t*m+u*v+w*D,q*h+t*p+u*x+w*E,y*a+A*j+C*r+F*z,y*d+A*k+C*s+F*B,y*e+A*m+C*v+F*D,y*h+A*p+C*x+F*E]}function e(c,a){return m.apply(g,(a||b).concat(c))}d.$Scale=function(a,c,d){if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.$Move=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.$RotateX=function(c){if(c){a=f(c);var d=h(a),g=i(a);b=e([1,0,0,0,0,d,g,0,0,-g,d,0,0,0,0,1])}};d.$RotateY=function(c){if(c){a=f(c);var d=h(a),g=i(a);b=e([d,0,-g,0,0,1,0,0,g,0,d,0,0,0,0,1])}};d.Xf=function(c){if(c){a=f(c);var d=h(a),g=i(a);b=e([d,g,0,0,-g,d,0,0,0,0,1,0,0,0,0,1])}};d.Wf=function(a,c){if(a||c){j=f(a);k=f(c);b=e([1,l(k),0,0,l(j),1,0,0,0,0,1,0,0,0,0,1])}};d.yb=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return n(a[12],a[13])};d.hg=function(){return"matrix3d("+b.join(",")+")"};d.kg=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new(function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.$ScaleX=function(b,c){return a.Bd(b,c,0)};a.$ScaleY=function(b,c){return a.Bd(b,0,c)};a.Bd=function(a,c,d){return b(a,[[c,0],[0,d]])};a.yb=function(d,c){var a=b(d,[[c.x],[c.y]]);return p(a[0][0],a[1][0])}});var S={wd:0,xd:0,B:0,C:0,$Zoom:1,$ScaleX:1,$ScaleY:1,$Rotate:0,$RotateX:0,$RotateY:0,$TranslateX:0,$TranslateY:0,$TranslateZ:0,$SkewX:0,$SkewY:0};i.Dc=function(c,d){var a=c||{};if(c)if(b.Qd(c))a={X:a};else if(b.Qd(c.$Clip))a.$Clip={X:c.$Clip};a.X=a.X||d;if(a.$Clip)a.$Clip.X=a.$Clip.X||d;return a};function wb(c,a){var b={};n(c,function(c,d){var f=c;if(a[d]!=e)if(i.fc(c))f=c+a[d];else f=wb(c,a[d]);b[d]=f});return b}i.ne=wb;i.Fd=function(n,j,s,t,B,C,o){var a=j;if(n){a={};for(var i in j){var D=C[i]||1,z=B[i]||[0,1],h=(s-z[0])/z[1];h=c.min(c.max(h,0),1);h=h*D;var x=c.floor(h);if(h!=x)h-=x;var k=t.X||f.$Linear,m,E=n[i],q=j[i];if(b.fc(q)){k=t[i]||k;var A=k(h);m=E+q*A}else{m=b.s({ic:{}},n[i]);var y=t[i]||{};b.$Each(q.ic||q,function(d,a){k=y[a]||y.X||k;var c=k(h),b=d*c;m.ic[a]=b;m[a]+=b})}a[i]=m}var w=b.$Each(j,function(b,a){return S[a]!=e});w&&b.$Each(S,function(c,b){if(a[b]==e&&n[b]!==e)a[b]=n[b]});if(w){if(a.$Zoom)a.$ScaleX=a.$ScaleY=a.$Zoom;a.$OriginalWidth=o.$OriginalWidth;a.$OriginalHeight=o.$OriginalHeight;if(r()&&l>=11&&(j.B||j.C)&&s!=0&&s!=1)a.$Rotate=a.$Rotate||1e-8;a.gg=d}}if(j.$Clip&&o.$Move){var p=a.$Clip.ic,v=(p.$Top||0)+(p.$Bottom||0),u=(p.$Left||0)+(p.$Right||0);a.$Left=(a.$Left||0)+u;a.$Top=(a.$Top||0)+v;a.$Clip.$Left-=u;a.$Clip.$Right-=u;a.$Clip.$Top-=v;a.$Clip.$Bottom-=v}if(a.$Clip&&!a.$Clip.$Top&&!a.$Clip.$Left&&!a.$Clip.C&&!a.$Clip.B&&a.$Clip.$Right==o.$OriginalWidth&&a.$Clip.$Bottom==o.$OriginalHeight)a.$Clip=g;return a}};function o(){var a=this,d=[];function h(a,b){d.push({Ec:a,Bc:b})}function g(a,c){b.$Each(d,function(b,e){b.Ec==a&&b.Bc===c&&d.splice(e,1)})}a.$On=a.addEventListener=h;a.$Off=a.removeEventListener=g;a.j=function(a){var c=[].slice.call(arguments,1);b.$Each(d,function(b){b.Ec==a&&b.Bc.apply(j,c)})}}var l=function(A,D,g,L,O,J){A=A||0;var a=this,p,m,n,t,B=0,H,I,G,C,z=0,h=0,l=0,y,i,e,f,o,x,v=[],w;function P(a){e+=a;f+=a;i+=a;h+=a;l+=a;z+=a}function s(p){var j=p;if(o)if(!x&&(j>=f||j<e)||x&&j>=e)j=((j-e)%o+o)%o+e;if(!y||t||h!=j){var k=c.min(j,f);k=c.max(k,e);if(!y||t||k!=l){if(J){var m=(k-i)/(D||1);if(g.$Reverse)m=1-m;var n=b.Fd(O,J,m,H,G,I,g);if(w)b.$Each(n,function(b,a){w[a]&&w[a](L,b)});else b.D(L,n)}a.qc(l-i,k-i);var r=l,q=l=k;b.$Each(v,function(b,c){var a=!y&&x||j<=h?v[v.length-c-1]:b;a.M(l-z)});h=j;y=d;a.Qb(r,q)}}}function E(a,b,d){b&&a.$Shift(f);if(!d){e=c.min(e,a.Yb()+z);f=c.max(f,a.mb()+z)}v.push(a)}var u=j.requestAnimationFrame||j.webkitRequestAnimationFrame||j.mozRequestAnimationFrame||j.msRequestAnimationFrame;if(b.$IsBrowserSafari()&&b.$BrowserVersion()<7||!u)u=function(a){b.$Delay(a,g.$Interval)};function K(){if(p){var d=b.R(),e=c.min(d-B,g.Dd),a=h+e*n;B=d;if(a*n>=m*n)a=m;s(a);if(!t&&a*n>=m*n)M(C);else u(K)}}function r(g,i,j){if(!p){p=d;t=j;C=i;g=c.max(g,e);g=c.min(g,f);m=g;n=m<h?-1:1;a.Ed();B=b.R();u(K)}}function M(b){if(p){t=p=C=k;a.md();b&&b()}}a.$Play=function(a,b,c){r(a?h+a:f,b,c)};a.od=r;a.vb=M;a.af=function(a){r(a)};a.db=function(){return h};a.kd=function(){return m};a.cb=function(){return l};a.M=s;a.hf=function(){s(f,d)};a.$Move=function(a){s(h+a)};a.$IsPlaying=function(){return p};a.jf=function(a){o=a};a.$Shift=P;a.O=function(a,b){E(a,0,b)};a.Fc=function(a){E(a,1)};a.td=function(a){f+=a};a.Yb=function(){return e};a.mb=function(){return f};a.Qb=a.Ed=a.md=a.qc=b.Ud;a.Pc=b.R();g=b.s({$Interval:16,Dd:50},g);o=g.Hc;x=g.He;w=g.Ke;e=i=A;f=A+D;I=g.$Round||{};G=g.$During||{};H=b.Dc(g.$Easing)};var m={Pb:"data-scale",Ic:"data-scale-ratio",rb:"data-autocenter"},n=new function(){var a=this;a.W=function(c,a,e,d){(d||!b.$Attribute(c,a))&&b.$Attribute(c,a,e)};a.Ub=function(a){var c=b.U(a,m.rb);b.rc(a,c)}},q=j.$JssorSlideshowFormations$=new function(){var h=this,b=0,a=1,f=2,e=3,s=1,r=2,t=4,q=8,w=256,x=512,v=1024,u=2048,j=u+s,i=u+r,o=x+s,m=x+r,n=w+t,k=w+q,l=v+t,p=v+q;function y(a){return(a&r)==r}function z(a){return(a&t)==t}function g(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}h.$FormationStraight=function(f){for(var d=f.$Cols,e=f.$Rows,s=f.$Assembly,t=f.Xb,r=[],a=0,b=0,p=d-1,q=e-1,h=t-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(s){case j:c=h-(a*e+(q-b));break;case l:c=h-(b*d+(p-a));break;case o:c=h-(a*e+b);case n:c=h-(b*d+a);break;case i:c=a*e+b;break;case k:c=b*d+(p-a);break;case m:c=a*e+(q-b);break;default:c=b*d+a}g(r,c,[b,a])}return r};h.$FormationSwirl=function(q){var x=q.$Cols,y=q.$Rows,B=q.$Assembly,w=q.Xb,A=[],z=[],u=0,c=0,h=0,r=x-1,s=y-1,t,p,v=0;switch(B){case j:c=r;h=0;p=[f,a,e,b];break;case l:c=0;h=s;p=[b,e,a,f];break;case o:c=r;h=s;p=[e,a,f,b];break;case n:c=r;h=s;p=[a,e,b,f];break;case i:c=0;h=0;p=[f,b,e,a];break;case k:c=r;h=0;p=[a,f,b,e];break;case m:c=0;h=s;p=[e,b,f,a];break;default:c=0;h=0;p=[b,f,a,e]}u=0;while(u<w){t=h+","+c;if(c>=0&&c<x&&h>=0&&h<y&&!z[t]){z[t]=d;g(A,u++,[h,c])}else switch(p[v++%p.length]){case b:c--;break;case f:h--;break;case a:c++;break;case e:h++}switch(p[v%p.length]){case b:c++;break;case f:h++;break;case a:c--;break;case e:h--}}return A};h.$FormationZigZag=function(p){var w=p.$Cols,x=p.$Rows,z=p.$Assembly,v=p.Xb,t=[],u=0,c=0,d=0,q=w-1,r=x-1,y,h,s=0;switch(z){case j:c=q;d=0;h=[f,a,e,a];break;case l:c=0;d=r;h=[b,e,a,e];break;case o:c=q;d=r;h=[e,a,f,a];break;case n:c=q;d=r;h=[a,e,b,e];break;case i:c=0;d=0;h=[f,b,e,b];break;case k:c=q;d=0;h=[a,f,b,f];break;case m:c=0;d=r;h=[e,b,f,b];break;default:c=0;d=0;h=[b,f,a,f]}u=0;while(u<v){y=d+","+c;if(c>=0&&c<w&&d>=0&&d<x&&typeof t[y]=="undefined"){g(t,u++,[d,c]);switch(h[s%h.length]){case b:c++;break;case f:d++;break;case a:c--;break;case e:d--}}else{switch(h[s++%h.length]){case b:c--;break;case f:d--;break;case a:c++;break;case e:d++}switch(h[s++%h.length]){case b:c++;break;case f:d++;break;case a:c--;break;case e:d--}}}return t};h.$FormationStraightStairs=function(q){var u=q.$Cols,v=q.$Rows,e=q.$Assembly,t=q.Xb,r=[],s=0,c=0,d=0,f=u-1,h=v-1,x=t-1;switch(e){case j:case m:case o:case i:var a=0,b=0;break;case k:case l:case n:case p:var a=f,b=0;break;default:e=p;var a=f,b=0}c=a;d=b;while(s<t){if(z(e)||y(e))g(r,x-s++,[d,c]);else g(r,s++,[d,c]);switch(e){case j:case m:c--;d++;break;case o:case i:c++;d--;break;case k:case l:c--;d--;break;case p:case n:default:c++;d++}if(c<0||d<0||c>f||d>h){switch(e){case j:case m:a++;break;case k:case l:case o:case i:b++;break;case p:case n:default:a--}if(a<0||b<0||a>f||b>h){switch(e){case j:case m:a=f;b++;break;case o:case i:b=h;a++;break;case k:case l:b=h;a--;break;case p:case n:default:a=0;b++}if(b>h)b=h;else if(b<0)b=0;else if(a>f)a=f;else if(a<0)a=0}d=b;c=a}}return r};h.$FormationRectangle=function(f){var d=f.$Cols||1,e=f.$Rows||1,h=[],a,b,i;i=c.round(c.min(d/2,e/2))+1;for(a=0;a<d;a++)for(b=0;b<e;b++)g(h,i-c.min(a+1,b+1,d-a,e-b),[b,a]);return h};h.$FormationRandom=function(d){for(var e=[],a,b=0;b<d.$Rows;b++)for(a=0;a<d.$Cols;a++)g(e,c.ceil(1e5*c.random())%13,[b,a]);return e};h.$FormationCircle=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,h=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)g(h,c.round(c.sqrt(c.pow(b-i,2)+c.pow(a-j,2))),[a,b]);return h};h.$FormationCross=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,h=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)g(h,c.round(c.min(c.abs(b-i),c.abs(a-j))),[a,b]);return h};h.$FormationRectangleCross=function(f){for(var h=f.$Cols||1,i=f.$Rows||1,j=[],a,d=h/2-.5,e=i/2-.5,k=c.max(d,e)+1,b=0;b<h;b++)for(a=0;a<i;a++)g(j,c.round(k-c.max(d-c.abs(b-d),e-c.abs(a-e)))-1,[a,b]);return j}};j.$JssorSlideshowRunner$=function(m,s,p,u,z,A){var a=this,v,h,e,y=0,x=u.$TransitionsOrder,r,i=8;function t(a){if(a.$Top)a.C=a.$Top;if(a.$Left)a.B=a.$Left;b.$Each(a,function(a){b.rd(a)&&t(a)})}function j(h,e,g){var a={$Interval:e,$Duration:1,$Delay:0,$Cols:1,$Rows:1,$Opacity:0,$Zoom:0,$Clip:0,$Move:k,$SlideOut:k,$Reverse:k,$Formation:q.$FormationRandom,$Assembly:1032,$ChessMode:{$Column:0,$Row:0},$Easing:f.$Linear,$Round:{},oc:[],$During:{}};b.s(a,h);if(a.$Rows==0)a.$Rows=c.round(a.$Cols*g);t(a);a.Xb=a.$Cols*a.$Rows;a.$Easing=b.Dc(a.$Easing,f.$Linear);a.rf=c.ceil(a.$Duration/a.$Interval);a.lf=function(c,b){c/=a.$Cols;b/=a.$Rows;var f=c+"x"+b;if(!a.oc[f]){a.oc[f]={v:c,u:b};for(var d=0;d<a.$Cols;d++)for(var e=0;e<a.$Rows;e++)a.oc[f][e+","+d]={$Top:e*b,$Right:d*c+c,$Bottom:e*b+b,$Left:d*c}}return a.oc[f]};if(a.$Brother){a.$Brother=j(a.$Brother,e,g);a.$SlideOut=d}return a}function n(z,i,a,v,n,l){var y=this,t,u={},h={},m=[],f,e,r,p=a.$ChessMode.$Column||0,q=a.$ChessMode.$Row||0,g=a.lf(n,l),o=B(a),C=o.length-1,s=a.$Duration+a.$Delay*C,w=v+s,j=a.$SlideOut,x;w+=50;function B(a){var b=a.$Formation(a);return a.$Reverse?b.reverse():b}y.fd=w;y.pc=function(d){d-=v;var e=d<s;if(e||x){x=e;if(!j)d=s-d;var f=c.ceil(d/a.$Interval);b.$Each(h,function(a,e){var d=c.max(f,a.yf);d=c.min(d,a.length-1);if(a.Tc!=d){if(!a.Tc&&!j)b.A(m[e]);else d==a.wf&&j&&b.V(m[e]);a.Tc=d;b.D(m[e],a[d])}})}};i=b.$CloneNode(i);A(i,0,0);b.$Each(o,function(i,m){b.$Each(i,function(G){var I=G[0],H=G[1],v=I+","+H,o=k,s=k,x=k;if(p&&H%2){if(p&3)o=!o;if(p&12)s=!s;if(p&16)x=!x}if(q&&I%2){if(q&3)o=!o;if(q&12)s=!s;if(q&16)x=!x}a.$Top=a.$Top||a.$Clip&4;a.$Bottom=a.$Bottom||a.$Clip&8;a.$Left=a.$Left||a.$Clip&1;a.$Right=a.$Right||a.$Clip&2;var C=s?a.$Bottom:a.$Top,z=s?a.$Top:a.$Bottom,B=o?a.$Right:a.$Left,A=o?a.$Left:a.$Right;a.$Clip=C||z||B||A;r={};e={C:0,B:0,$Opacity:1,v:n,u:l};f=b.s({},e);t=b.s({},g[v]);if(a.$Opacity)e.$Opacity=2-a.$Opacity;if(a.$ZIndex){e.$ZIndex=a.$ZIndex;f.$ZIndex=0}var K=a.$Cols*a.$Rows>1||a.$Clip;if(a.$Zoom||a.$Rotate){var J=d;if(J){e.$Zoom=a.$Zoom?a.$Zoom-1:1;f.$Zoom=1;var N=a.$Rotate||0;e.$Rotate=N*360*(x?-1:1);f.$Rotate=0}}if(K){var i=t.ic={};if(a.$Clip){var w=a.$ScaleClip||1;if(C&&z){i.$Top=g.u/2*w;i.$Bottom=-i.$Top}else if(C)i.$Bottom=-g.u*w;else if(z)i.$Top=g.u*w;if(B&&A){i.$Left=g.v/2*w;i.$Right=-i.$Left}else if(B)i.$Right=-g.v*w;else if(A)i.$Left=g.v*w}r.$Clip=t;f.$Clip=g[v]}var L=o?1:-1,M=s?1:-1;if(a.x)e.B+=n*a.x*L;if(a.y)e.C+=l*a.y*M;b.$Each(e,function(a,c){if(b.fc(a))if(a!=f[c])r[c]=a-f[c]});u[v]=j?f:e;var D=a.rf,y=c.round(m*a.$Delay/a.$Interval);h[v]=new Array(y);h[v].yf=y;h[v].wf=y+D-1;for(var F=0;F<=D;F++){var E=b.Fd(f,r,F/D,a.$Easing,a.$During,a.$Round,{$Move:a.$Move,$OriginalWidth:n,$OriginalHeight:l});E.$ZIndex=E.$ZIndex||1;h[v].push(E)}})});o.reverse();b.$Each(o,function(a){b.$Each(a,function(c){var f=c[0],e=c[1],d=f+","+e,a=i;if(e||f)a=b.$CloneNode(i);b.D(a,u[d]);b.Jb(a,"hidden");b.Y(a,"absolute");z.Se(a);m[d]=a;b.A(a,!j)})})}function w(){var a=this,b=0;l.call(a,0,v);a.Qb=function(c,a){if(a-b>i){b=a;e&&e.pc(a);h&&h.pc(a)}};a.Kc=r}a.Oe=function(){var a=0,b=u.$Transitions,d=b.length;if(x)a=y++%d;else a=c.floor(c.random()*d);b[a]&&(b[a].sb=a);return b[a]};a.uf=function(x,y,k,l,b,t){a.wb();r=b;b=j(b,i,t);var g=l.Ld,f=k.Ld;g["no-image"]=!l.dc;f["no-image"]=!k.dc;var o=g,q=f,w=b,d=b.$Brother||j({},i,t);if(!b.$SlideOut){o=f;q=g}var u=d.$Shift||0;h=new n(m,q,d,c.max(u-d.$Interval,0),s,p);e=new n(m,o,w,c.max(d.$Interval-u,0),s,p);h.pc(0);e.pc(0);v=c.max(h.fd,e.fd);a.sb=x};a.wb=function(){m.wb();h=g;e=g};a.tf=function(){var a=g;if(e)a=new w;return a};if(z&&b.$WebKitVersion()<537)i=16;o.call(a);l.call(a,-1e7,1e7)};var p={ec:1};j.$JssorBulletNavigator$=function(a,E){var f=this;o.call(f);a=b.$GetElement(a);var u,C,B,t,l=0,e,q,j,y,z,i,h,s,r,D=[],A=[];function x(a){a!=-1&&A[a].yd(a==l)}function v(a){f.j(p.ec,a*q)}f.$Elmt=a;f.Lc=function(a){if(a!=t){var d=l,b=c.floor(a/q);l=b;t=a;x(d);x(b)}};f.Oc=function(c){b.A(a,c)};var w;f.Gc=function(x){if(!w){u=c.ceil(x/q);l=0;var n=s+y,o=r+z,m=c.ceil(u/j)-1;C=s+n*(!i?m:j-1);B=r+o*(i?m:j-1);b.$CssWidth(a,C);b.$CssHeight(a,B);for(var f=0;f<u;f++){var t=b.Pf();b.$InnerText(t,f+1);var k=b.Vc(h,"numbertemplate",t,d);b.Y(k,"absolute");var p=f%(m+1);b.J(k,!i?n*p:f%j*n);b.H(k,i?o*p:c.floor(f/(m+1))*o);b.$AppendChild(a,k);D[f]=k;e.$ActionMode&1&&b.$AddEvent(k,"click",b.$CreateCallback(g,v,f));e.$ActionMode&2&&b.$AddEvent(k,"mouseenter",b.$CreateCallback(g,v,f));A[f]=b.mc(k)}w=d}};f.Vb=e=b.s({$SpacingX:10,$SpacingY:10,$Orientation:1,$ActionMode:1},E);h=b.$FindChild(a,"prototype");s=b.$CssWidth(h);r=b.$CssHeight(h);b.ac(h,a);q=e.$Steps||1;j=e.$Rows||1;y=e.$SpacingX;z=e.$SpacingY;i=e.$Orientation-1;e.$Scale==k&&n.W(a,m.Pb,1);e.$AutoCenter&&n.W(a,m.rb,e.$AutoCenter);n.Ub(a)};j.$JssorArrowNavigator$=function(a,e,i,A,z,x){var c=this;o.call(c);var j,h,f,l;b.$CssWidth(a);b.$CssHeight(a);var s,r;function q(a){c.j(p.ec,a,d)}function v(c){b.A(a,c);b.A(e,c)}function u(){s.$Enable(i.$Loop||!j.xe(h));r.$Enable(i.$Loop||!j.ye(h))}c.Lc=function(c,a,b){h=a;!b&&u()};c.Oc=v;var t;c.Gc=function(c){h=0;if(!t){b.$AddEvent(a,"click",b.$CreateCallback(g,q,-l));b.$AddEvent(e,"click",b.$CreateCallback(g,q,l));s=b.mc(a);r=b.mc(e);t=d}};c.Vb=f=b.s({$Steps:1},i);l=f.$Steps;j=x;if(f.$Scale==k){n.W(a,m.Pb,1);n.W(e,m.Pb,1)}if(f.$AutoCenter){n.W(a,m.rb,f.$AutoCenter);n.W(e,m.rb,f.$AutoCenter)}n.Ub(a);n.Ub(e)};j.$JssorThumbnailNavigator$=function(f,E){var l=this,x,A,s,a,y=[],B,z,e,q,r,w,v,j,t,h,u;o.call(l);f=b.$GetElement(f);function D(n,f){var h=this,c,m,j;function o(){m.yd(s==f)}function i(g){if(g||!t.Be()){var c=e-f%e,a=t.Id((f+c)/e-1),b=a*e+e-c;if(a<0)b+=x%e;if(a>=A)b-=x%e;l.j(p.ec,b,k,d)}}h.sb=f;h.Hd=o;j=n.Ae||n.dc||b.$CreateDiv();h.jc=c=b.Vc(u,"thumbnailtemplate",j,d);m=b.mc(c);a.$ActionMode&1&&b.$AddEvent(c,"click",b.$CreateCallback(g,i,0));a.$ActionMode&2&&b.$AddEvent(c,"mouseenter",b.$CreateCallback(g,i,1))}l.Lc=function(a,f,d){if(a!=s){var b=s;s=a;b!=-1&&y[b].Hd();y[a].Hd()}!d&&t.$PlayTo(t.Id(c.floor(a/e)))};l.Oc=function(a){b.A(f,a)};var C;l.Gc=function(F,G){if(!C){x=F;A=c.ceil(x/e);s=-1;var g=a.$Orientation&1;j=j||c.ceil((B+q)/(w+q)*g+(z+r)/(v+r)*(1-g));j=c.min(j,A);var u=w+(w+q)*(e-1)*(1-g),p=v+(v+r)*(e-1)*g,o=u+(u+q)*(j-1)*g,n=p+(p+r)*(j-1)*(1-g);o=c.min(B,o);n=c.min(z,n);b.Y(h,"absolute");b.Jb(h,"hidden");b.$CssWidth(h,o);b.$CssHeight(h,n);b.rc(h,3);var m=[];b.$Each(G,function(k,f){var i=new D(k,f),d=i.jc,a=c.floor(f/e),j=f%e;b.J(d,(w+q)*j*(1-g));b.H(d,(v+r)*j*g);if(!m[a]){m[a]=b.$CreateDiv();b.$AppendChild(h,m[a])}b.$AppendChild(m[a],d);y.push(i)});var E=b.s({$AutoPlay:0,$NaviQuitDrag:k,$SlideWidth:u,$SlideHeight:p,$SlideSpacing:q*g+r*(1-g),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$Cols:j,$PlayOrientation:a.$Orientation,$DragOrientation:a.$NoDrag||a.$DisableDrag?0:a.$Orientation},a);t=new i(f,E);l.Kf=t.Kf;C=d}};l.Vb=a=b.s({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},E);B=b.$CssWidth(f);z=b.$CssHeight(f);h=b.$FindChild(f,"slides",d);u=b.$FindChild(h,"prototype");w=b.$CssWidth(u);v=b.$CssHeight(u);b.ac(u,h);e=a.$Rows||1;q=a.$SpacingX;r=a.$SpacingY;j=a.$Cols;a.$Scale==k&&n.W(f,m.Pb,1);a.$AutoCenter&=a.$Orientation;a.$AutoCenter&&n.W(f,m.rb,a.$AutoCenter);n.Ub(f)};function r(e,d,c){var a=this;l.call(a,0,c);a.id=b.Ud;a.gd=0;a.ed=c}j.$JssorCaptionSlideo$=function(t,k,B,E){var a=this,u,o={},v=k.$Transitions,r=k.$Controls,m=new l(0,0),p=[],h=[],D=E,e=D?1e8:0;l.call(a,0,0);function q(d,c){var a={};b.$Each(d,function(d,f){var e=o[f];if(e){if(b.rd(d))d=q(d,c||f=="e");else if(c)if(b.fc(d))d=u[d];a[e]=d}});return a}function s(d,e){var a=[],c=b.$Children(d);b.$Each(c,function(c){var d=v[b.U(c,"t")];d&&a.push({$Elmt:c,Kc:d});a=a.concat(s(c,e+1))});return a}function n(c,e){var a=p[c];if(a==g){a=p[c]={bb:c,wc:[],Sd:[]};var d=0;!b.$Each(h,function(a,b){d=b;return a.bb>c})&&d++;h.splice(d,0,a)}return a}function y(s,t,h){var a,f;if(r){var m=r[b.U(s,"c")];if(m){a=n(m.r,0);a.sf=m.e||0}}b.$Each(t,function(i){var g=b.s(d,{},q(i)),j=b.Dc(g.$Easing);delete g.$Easing;if(g.$Left){g.B=g.$Left;j.B=j.$Left;delete g.$Left}if(g.$Top){g.C=g.$Top;j.C=j.$Top;delete g.$Top}var o={$Easing:j,$OriginalWidth:h.v,$OriginalHeight:h.u},k=new l(i.b,i.d,o,s,h,g);e=c.max(e,i.b+i.d);if(a){if(!f)f=new l(i.b,0);f.O(k)}else{var m=n(i.b,i.b+i.d);m.wc.push(k)}h=b.ne(h,g)});if(a&&f){f.hf();var i=f,k,j=f.Yb(),o=f.mb(),p=c.max(o,a.sf);if(a.bb<o){if(a.bb>j){i=new l(j,a.bb-j);i.O(f,d)}else i=g;k=new l(a.bb,p-j,{Hc:p-a.bb,He:d});k.O(f,d)}i&&a.wc.push(i);k&&a.Sd.push(k)}return h}function x(a){b.$Each(a,function(f){var a=f.$Elmt,e=b.$CssWidth(a),d=b.$CssHeight(a),c={$Left:b.J(a),$Top:b.H(a),B:0,C:0,$Opacity:1,$ZIndex:b.z(a)||0,$Rotate:0,$RotateX:0,$RotateY:0,$ScaleX:1,$ScaleY:1,$TranslateX:0,$TranslateY:0,$TranslateZ:0,$SkewX:0,$SkewY:0,v:e,u:d,$Clip:{$Top:0,$Right:e,$Bottom:d,$Left:0}};c.wd=c.$Left;c.xd=c.$Top;y(a,f.Kc,c)})}function A(f,e,g){var c=f.b-e;if(c){var b=new l(e,c);b.O(m,d);b.$Shift(g);a.O(b)}a.td(f.d);return c}function z(e){var c=m.Yb(),d=0;b.$Each(e,function(e,f){e=b.s({d:3e3},e);A(e,c,d);c=e.b;d+=e.d;if(!f||e.t==2){a.gd=c;a.ed=c+e.d}})}function j(k,d,f){var g=d.length;if(g>4)for(var m=c.ceil(g/4),a=0;a<m;a++){var h=d.slice(a*4,c.min(a*4+4,g)),i=new l(h[0].bb,0);j(i,h,f);k.O(i)}else b.$Each(d,function(a){b.$Each(f?a.Sd:a.wc,function(a){f&&a.td(e-a.mb());k.O(a)})})}a.id=function(){a.M(-1,d)};u=[f.$Linear,f.$Swing,f.$InQuad,f.$OutQuad,f.$InOutQuad,f.$InCubic,f.$OutCubic,f.$InOutCubic,f.$InQuart,f.$OutQuart,f.$InOutQuart,f.$InQuint,f.$OutQuint,f.$InOutQuint,f.$InSine,f.$OutSine,f.$InOutSine,f.$InExpo,f.$OutExpo,f.$InOutExpo,f.$InCirc,f.$OutCirc,f.$InOutCirc,f.$InElastic,f.$OutElastic,f.$InOutElastic,f.$InBack,f.$OutBack,f.$InOutBack,f.$InBounce,f.$OutBounce,f.$InOutBounce,f.$Early,f.$Late];var C={$Top:"y",$Left:"x",$Bottom:"m",$Right:"t",$Rotate:"r",$RotateX:"rX",$RotateY:"rY",$ScaleX:"sX",$ScaleY:"sY",$TranslateX:"tX",$TranslateY:"tY",$TranslateZ:"tZ",$SkewX:"kX",$SkewY:"kY",$Opacity:"o",$Easing:"e",$ZIndex:"i",$Clip:"c"};b.$Each(C,function(b,a){o[b]=a});x(s(t,1));j(m,h);var w=k.$Breaks||[],i=w[b.U(t,"b")]||[];i=i.concat({b:e,d:i.length?0:B});z(i);e=c.max(e,a.mb());j(a,h,d);a.M(-1)};var i=j.$JssorSlider$=function(){var a=this;b.Ee(a,o);var Gb="data-jssor-slider",Wb="data-jssor-thumb",v,n,U,lb,db,qb,cb,S,M,K,Qb,lc,pc=1,kc=1,Yb=1,bc={},y,Z,Eb,Sb,Pb,pb,sb,rb,kb,s=-1,Jb,q,I,H,fb,yb,zb,W,L,N,ab,x,X,xb,gb=[],gc,ic,cc,qc,Lc,u,mb,G,ec,wb,Hb,fc,R,Cb=0,P=0,J=Number.MAX_VALUE,E=Number.MIN_VALUE,hc,C,nb,T,O=1,bb,A,eb,Kb=0,Lb=0,Q,tb,ub,ob,w,ib,z,Mb,hb=[],Tb=b.$Device(),vb=Tb.fe,B=[],D,V,F,Fb,Vb,Y;function xc(e,k,o){var l=this,h={$Top:2,$Right:1,$Bottom:2,$Left:1},n={$Top:"top",$Right:"right",$Bottom:"bottom",$Left:"left"},g,a,f,i,j={};l.$Elmt=e;l.$ScaleSize=function(q,p,t){var l,s=q,r=p;if(!f){f=b.Ne(e);g=e.parentNode;i={$Scale:b.U(e,m.Pb,1),$AutoCenter:b.U(e,m.rb)};b.$Each(n,function(c,a){j[a]=b.U(e,"data-scale-"+c,1)});a=e;if(k){a=b.$CloneNode(g,d);b.D(a,{$Top:0,$Left:0});b.$AppendChild(a,e);b.$AppendChild(g,a)}}if(o){l=c.max(q,p);if(k)if(t>0&&t<1){var v=c.min(q,p);l=c.min(l/v,1/(1-t))*v}}else s=r=l=c.pow(M<K?p:q,i.$Scale);b.ze(a,l);b.$Attribute(a,m.Ic,l);b.$CssWidth(g,f.v*s);b.$CssHeight(g,f.u*r);var u=b.$IsBrowserIE()&&b.$BrowserEngineVersion()<9||b.$BrowserEngineVersion()<10&&b.$IsBrowserIeQuirks()?l:1,w=(s-u)*f.v/2,x=(r-u)*f.u/2;b.J(a,w);b.H(a,x);b.$Each(f,function(d,a){if(h[a]&&d){var e=(h[a]&1)*c.pow(q,j[a])*d+(h[a]&2)*c.pow(p,j[a])*d/2;b.Yf[a](g,e)}});b.rc(g,i.$AutoCenter)}}function Kc(){var b=this;l.call(b,-1e8,2e8);b.og=function(){var a=b.cb();a=t(a);var d=c.round(a),g=d,f=a-c.floor(a),e=Xb(a);return{sb:g,tg:d,ab:f,bc:a,sg:e}};b.Qb=function(e,b){var g=t(b);if(c.abs(b-e)>1e-5){var f=c.floor(b);if(f!=b&&b>e&&(C&1||b>P))f++;jc(f,g,d)}a.j(i.$EVT_POSITION_CHANGE,g,t(e),b,e)}}function Jc(){var a=this;l.call(a,0,0,{Hc:q});b.$Each(B,function(b){C&1&&b.jf(q);a.Fc(b);b.$Shift(R/W)})}function Ic(){var a=this,b=Mb.$Elmt;l.call(a,-1,2,{$Easing:f.$Linear,Ke:{ab:oc},Hc:q},b,{ab:1},{ab:-2});a.jc=b}function Ac(o,m){var b=this,e,f,h,j,c;l.call(b,-1e8,2e8,{Dd:100});b.Ed=function(){bb=d;eb=g;a.j(i.$EVT_SWIPE_START,t(w.db()),w.db())};b.md=function(){bb=k;j=k;var b=w.og();a.j(i.$EVT_SWIPE_END,t(w.db()),w.db());if(!A){Mc(b.tg,s);(!b.ab||b.sg)&&jc(s,b.bc)}};b.Qb=function(g,d){var a;if(j)a=c;else{a=f;if(h){var b=d/h;a=n.$SlideEasing(b)*(f-e)+e}}w.M(a)};b.nc=function(a,d,c,g){e=a;f=d;h=c;w.M(a);b.M(0);b.od(c,g)};b.oe=function(a){j=d;c=a;b.$Play(a,g,d)};b.kf=function(a){c=a};w=new Kc;w.O(o);w.O(m)}function Bc(){var c=this,a=mc();b.z(a,0);b.$Css(a,"pointerEvents","none");c.$Elmt=a;c.Se=function(c){b.$AppendChild(a,c);b.A(a)};c.wb=function(){b.V(a);b.Ac(a)}}function Hc(m,f){var e=this,r,K,w,j,x=[],F,y,R,G,P,C,J,h,v,p;l.call(e,-L,L+1,{});function A(a){r&&r.id();Q(m,a,0);C=d;r=new db.$Class(m,db,b.U(m,"idle",ec),!u);r.M(0)}function U(){r.Pc<db.Pc&&A()}function N(p,r,o){if(!G){G=d;if(j&&o){var g=o.width,c=o.height,m=g,l=c;if(g&&c&&n.$FillMode){if(n.$FillMode&3&&(!(n.$FillMode&4)||g>I||c>H)){var h=k,q=I/H*c/g;if(n.$FillMode&1)h=q>1;else if(n.$FillMode&2)h=q<1;m=h?g*H/c:I;l=h?H:c*I/g}b.$CssWidth(j,m);b.$CssHeight(j,l);b.H(j,(H-l)/2);b.J(j,(I-m)/2)}b.Y(j,"absolute");a.j(i.$EVT_LOAD_END,f)}}b.V(r);p&&p(e)}function S(g,b,c,d){if(d==eb&&s==f&&u)if(!Lc){var a=t(g);D.uf(a,f,b,e,c,H/I);b.Me();ib.$Shift(a-ib.Yb()-1);ib.M(a);z.nc(a,a,0)}}function W(b){if(b==eb&&s==f){if(!h){var a=g;if(D)if(D.sb==f)a=D.tf();else D.wb();U();h=new Gc(m,f,a,r);h.Yc(p)}!h.$IsPlaying()&&h.Jc()}}function E(a,d,k){if(a==f){if(a!=d)B[d]&&B[d].Nd();else!k&&h&&h.Ue();p&&p.$Enable();var l=eb=b.R();e.Lb(b.$CreateCallback(g,W,l))}else{var j=c.min(f,a),i=c.max(f,a),o=c.min(i-j,j+q-i),m=L+n.$LazyLoading-1;(!P||o<=m)&&e.Lb()}}function X(){if(s==f&&h){h.vb();p&&p.$Quit();p&&p.$Disable();h.Yd()}}function Y(){s==f&&h&&h.vb()}function V(b){!T&&a.j(i.$EVT_CLICK,f,b)}function O(){p=v.pInstance;h&&h.Yc(p)}e.Lb=function(e,c){c=c||w;if(x.length&&!G){b.A(c);if(!R){R=d;a.j(i.$EVT_LOAD_START,f);b.$Each(x,function(a){if(!b.$Attribute(a,"src")){a.src=b.$AttributeEx(a,"src2")||"";b.Nb(a,a["display-origin"])}})}b.qg(x,j,b.$CreateCallback(g,N,e,c))}else N(e,c)};e.Uf=function(){if(q==1){e.Nd();E(f,f)}else{var a;if(D)a=D.Oe(q);if(a){var h=eb=b.R(),c=f+mb,d=B[t(c)];return d.Lb(b.$CreateCallback(g,S,c,d,a,h),w)}else Ob(mb)}};e.zc=function(){E(f,f,d)};e.Nd=function(){p&&p.$Quit();p&&p.$Disable();e.Wd();h&&h.Tf();h=g;A()};e.Me=function(){b.V(m)};e.Wd=function(){b.A(m)};e.vf=function(){p&&p.$Enable()};function Q(a,f,c,h){if(b.$Attribute(a,Gb))return;if(!C){if(a.tagName=="IMG"){x.push(a);if(!b.$Attribute(a,"src")){P=d;a["display-origin"]=b.Nb(a);b.V(a)}}var e=b.Zf(a);if(e){var g=new Image;b.$AttributeEx(g,"src2",e);x.push(g)}c&&b.z(a,(b.z(a)||0)+1)}var i=b.$Children(a);b.$Each(i,function(a){var e=a.tagName,g=b.$AttributeEx(a,"u");if(g=="player"&&!v){v=a;if(v.pInstance)O();else b.$AddEvent(v,"dataavailable",O)}if(g=="caption"){if(f){b.ke(a,b.$AttributeEx(a,"to"));b.Zd(a,b.$AttributeEx(a,"bf"));J&&b.$AttributeEx(a,"3d")&&b.ae(a,"preserve-3d")}}else if(!C&&!c&&!j){if(e=="A"){if(b.$AttributeEx(a,"u")=="image")j=b.zf(a,"IMG");else j=b.$FindChild(a,"image",d);if(j){F=a;b.D(F,kb);y=b.$CloneNode(F,d);b.xc(y,0);b.$Css(y,"backgroundColor","#000")}}else if(e=="IMG"&&b.$AttributeEx(a,"u")=="image")j=a;if(j){j.border=0;b.D(j,kb)}}Q(a,f,c+1,h)})}e.qc=function(c,b){var a=L-b;oc(K,a)};e.sb=f;o.call(e);J=b.$AttributeEx(m,"p");b.de(m,J);b.Ce(m,b.$AttributeEx(m,"po"));var M=b.$FindChild(m,"thumb",d);if(M){e.Ae=b.$CloneNode(M);b.V(M)}b.A(m);w=b.$CloneNode(Z);b.z(w,1e3);b.$AddEvent(m,"click",V);A(d);e.dc=j;e.Jd=y;e.Ld=m;e.jc=K=m;b.$AppendChild(K,w);a.$On(203,E);a.$On(28,Y);a.$On(24,X)}function Gc(z,g,p,q){var c=this,n=0,v=0,h,j,f,e,m,t,r,o=B[g];l.call(c,0,0);function w(){b.Ac(V);qc&&m&&o.Jd&&b.$AppendChild(V,o.Jd);b.A(V,!m&&o.dc)}function x(){c.Jc()}function y(a){r=a;c.vb();c.Jc()}c.Jc=function(){var b=c.cb();if(!A&&!bb&&!r&&s==g){if(!b){if(h&&!m){m=d;c.Yd(d);a.j(i.$EVT_SLIDESHOW_START,g,n,v,h,e)}w()}var k,p=i.$EVT_STATE_CHANGE;if(b!=e)if(b==f)k=e;else if(b==j)k=f;else if(!b)k=j;else k=c.kd();a.j(p,g,b,n,j,f,e);var l=u&&(!G||O);if(b==e)(f!=e&&!(G&12)||l)&&o.Uf();else(l||b!=f)&&c.od(k,x)}};c.Ue=function(){f==e&&f==c.cb()&&c.M(j)};c.Tf=function(){D&&D.sb==g&&D.wb();var b=c.cb();b<e&&a.j(i.$EVT_STATE_CHANGE,g,-b-1,n,j,f,e)};c.Yd=function(a){p&&b.Jb(ab,a&&p.Kc.$Outside?"":"hidden")};c.qc=function(c,b){if(m&&b>=h){m=k;w();o.Wd();D.wb();a.j(i.$EVT_SLIDESHOW_END,g,n,v,h,e)}a.j(i.$EVT_PROGRESS_CHANGE,g,b,n,j,f,e)};c.Yc=function(a){if(a&&!t){t=a;a.$On($JssorPlayer$.Fe,y)}};p&&c.Fc(p);h=c.mb();c.Fc(q);j=h+q.gd;e=c.mb();f=u?h+q.ed:e}function Ib(a,c,d){b.J(a,c);b.H(a,d)}function oc(c,b){var a=x>0?x:U,d=(yb*b+Cb)*(a&1),e=(zb*b+Cb)*(a>>1&1);Ib(c,d,e)}function Db(a){if(!(C&1))a=c.min(J,c.max(a,E));return a}function Xb(a){return!(C&1)&&(a-E<.0001||J-a<.0001)}function dc(){Fb=bb;Vb=z.kd();F=w.db()}function sc(){dc();if(A||!O&&G&12){z.vb();a.j(i.Ef)}}function rc(g){if(!A&&(O||!(G&12))&&!z.$IsPlaying()){var b=w.db(),a=F,e=0;if(g&&c.abs(Q)>=n.$MinDragOffsetToSlide){a=b;e=ub}if(Xb(b)){if(!g||T)a=c.round(a)}else a=c.ceil(a);a=Db(a+e);if(!(C&1)){if(J-a<.5)a=J;if(a-E<.5)a=E}var d=c.abs(a-b);if(d<1&&n.$SlideEasing!=f.$Linear)d=1-c.pow(1-d,5);if(!T&&Fb)z.af(Vb);else if(b==a){Jb.vf();Jb.zc()}else z.nc(b,a,d*wb)}}function Ub(a){!b.Hb(b.$EvtSrc(a),"nodrag")&&b.$CancelEvent(a)}function Ec(a){nc(a,1)}function nc(c,j){var f=b.$EvtSrc(c);xb=k;var l=b.Hb(f,"1",Wb);if((!l||l===v)&&!X&&(!j||c.touches.length==1)){xb=b.Hb(f,"nodrag")||!nb||!Fc();var n=b.Hb(f,e,m.Ic);if(n)Yb=b.$Attribute(n,m.Ic);if(j){var p=c.touches[0];Kb=p.clientX;Lb=p.clientY}else{var o=b.Rd(c);Kb=o.x;Lb=o.y}A=d;eb=g;b.$AddEvent(h,j?"touchmove":"mousemove",Rb);b.R();T=0;sc();if(!Fb)x=0;Q=0;tb=0;ub=0;a.j(i.$EVT_DRAG_START,t(F),F,c)}}function Rb(g){if(A){var a;if(g.type!="mousemove")if(g.touches.length==1){var o=g.touches[0];a={x:o.clientX,y:o.clientY}}else jb();else a=b.Rd(g);if(a){var e=a.x-Kb,f=a.y-Lb;if(x||c.abs(e)>1.5||c.abs(f)>1.5){if(c.floor(F)!=F)x=x||U&X;if((e||f)&&!x){if(X==3)if(c.abs(f)>c.abs(e))x=2;else x=1;else x=X;if(vb&&x==1&&c.abs(f)>c.abs(e)*2.4)xb=d}var n=f,i=zb;if(x==1){n=e;i=yb}if(Q-tb<-1.5)ub=0;else if(Q-tb>1.5)ub=-1;tb=Q;Q=n;Y=F-Q/i/Yb;if(!(C&1)){var l=0,j=[-F+P,0,F-q+N-P];b.$Each(j,function(b,d){if(b>0){var a=c.pow(b,1/1.6);a=c.tan(a*c.PI/2);l=(a-b)*(d-1)}});var h=l+Y,m=k;j=[-h+P,0,h-q+N-P];b.$Each(j,function(a,b){if(a>0){a=c.min(a,i);a=c.atan(a)*2/c.PI;a=c.pow(a,1.6);Y=a*(b-1)+P;if(b)Y+=q-N;m=d}});if(!m)Y=h}if(Q&&x&&!xb){b.$CancelEvent(g);if(!bb)z.oe(Y);else z.kf(Y)}}}}}function jb(){Cc();if(A){T=Q;b.R();b.S(h,"mousemove",Rb);b.S(h,"touchmove",Rb);T&&u&8&&(u=0);z.vb();A=k;var c=w.db();a.j(i.$EVT_DRAG_END,t(c),c,t(F),F);G&12&&dc();rc(d)}}function wc(c){var a=b.$EvtSrc(c),d=b.Hb(a,"1",Gb);if(v===d)if(T){b.$StopEvent(c);while(a&&v!==a){(a.tagName=="A"||b.$Attribute(a,"data-jssor-button"))&&b.$CancelEvent(c);a=a.parentNode}}else u&4&&(u=0)}function Nc(d){if(d!=s){var b=ob.cb(),a=Db(d),e=c.round(t(a));if(b-a<.5)a=b;B[s];s=e;Jb=B[s];w.M(a)}}function Mc(b,c){x=0;Nc(b);if(u&2&&(mb>0&&s==q-1||mb<0&&!s))u=0;a.j(i.$EVT_PARK,s,c)}function jc(a,d,e){if(!(C&1)){a=c.max(0,a);a=c.min(a,q-N+P);a=c.round(a)}a=t(a);b.$Each(gb,function(b){b.Lc(a,d,e)})}function Fc(){var b=i.cd||0,a=nb;i.cd|=a;return X=a&~b}function Cc(){if(X){i.cd&=~nb;X=0}}function mc(){var a=b.$CreateDiv();b.D(a,kb);return a}function t(b,a){a=a||q||1;return(b%a+a)%a}function Bb(c,a,b){u&8&&(u=0);Ab(c,wb,a,b)}function Nb(){b.$Each(gb,function(a){a.Oc(a.Vb.$ChanceToShow<=O)})}function uc(){if(!O){O=1;Nb();if(!A){G&12&&rc();G&3&&B[s]&&B[s].zc()}}a.j(i.$EVT_MOUSE_LEAVE)}function tc(){if(O){O=0;Nb();A||!(G&12)||sc()}a.j(i.$EVT_MOUSE_ENTER)}function vc(){b.$Each(hb,function(a){b.D(a,kb);b.Jb(a,"hidden");b.V(a)});b.D(Z,kb)}function Ob(b,a){Ab(b,a,d)}function Ab(l,g,m,o){if(!A&&(O||!(G&12))||n.$NaviQuitDrag){bb=d;A=k;z.vb();if(g==e)g=wb;var b=t(ob.cb()),f=l;if(m){f=b+l;f=c.round(f)}var a=f;if(!(C&1)){if(o)a=t(a);else if(C&2&&(a<0&&c.abs(b-E)<.0001||a>q-N&&c.abs(b-J)<.0001))a=a<0?J:E;a=Db(a);if(J-a<.5)a=J;if(a-E<.5)a=E}var j=(a-b)%q;a=b+j;var h=b==a?0:g*c.abs(j),i=1;if(L>1)i=(U&1?sb:rb)/W;h=c.min(h,g*i*1.5);z.nc(b,a,h||1)}}a.$SlidesCount=function(){return hb.length};a.$CurrentIndex=function(){return s};a.$AutoPlay=function(a){if(a==e)return u;if(a!=u){u=a;u&&B[s]&&B[s].zc()}};a.$IsDragging=function(){return A};a.$IsSliding=function(){return bb};a.$IsMouseOver=function(){return!O};a.Be=function(){return T};a.$OriginalWidth=function(){return M};a.$OriginalHeight=function(){return K};a.$ScaleHeight=function(b){if(b==e)return lc||K;a.$ScaleSize(b/K*M,b)};a.$ScaleWidth=function(b){if(b==e)return Qb||M;a.$ScaleSize(b,b/M*K)};a.$ScaleSize=function(c,a,d){b.$CssWidth(v,c);b.$CssHeight(v,a);pc=c/M;kc=a/K;b.$Each(bc,function(a){a.$ScaleSize(pc,kc,d)});if(!Qb){b.Mb(ab,y);b.H(ab,0);b.J(ab,0)}Qb=c;lc=a};a.xe=function(a){return c.abs(a-E)<.0001};a.ye=function(a){return c.abs(a-J)<.0001};a.$PlayTo=Ab;a.$GoTo=function(a){z.nc(a,a,0)};a.$Next=function(){Ob(1)};a.$Prev=function(){Ob(-1)};a.$Pause=function(){u=0};a.$Play=function(){a.$AutoPlay(u||1)};a.$SetSlideshowTransitions=function(a){n.$SlideshowOptions.$Transitions=a};a.$SetCaptionTransitions=function(a){db.$Transitions=a;db.Pc=b.R()};a.Id=function(a){a=t(a);if(C&1){var d=R/W,b=t(ob.cb()),e=t(a-b+d),f=t(c.abs(a-b));if(e>=L){if(f>q/2)if(a>b)a-=q;else a+=q}else if(a>b&&e<d)a-=q;else if(a<b&&e>d)a+=q}return a};a.Wb=function(Q,o){a.$Elmt=v=b.$GetElement(Q);M=b.$CssWidth(v);K=b.$CssHeight(v);n=b.s({$FillMode:0,$LazyLoading:1,$ArrowKeyNavigation:1,$StartIndex:0,$AutoPlay:0,$Loop:1,$HWA:d,$NaviQuitDrag:d,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:f.$OutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},o);n.$HWA=n.$HWA&&b.Le();if(n.$Idle!=e)n.$AutoPlayInterval=n.$Idle;if(n.$DisplayPieces!=e)n.$Cols=n.$DisplayPieces;if(n.$ParkingPosition!=e)n.$Align=n.$ParkingPosition;U=n.$PlayOrientation&3;lb=n.$SlideshowOptions;db=b.s({$Class:r},n.$CaptionSliderOptions);qb=n.$BulletNavigatorOptions;cb=n.$ArrowNavigatorOptions;S=n.$ThumbnailNavigatorOptions;!n.$UISearchMode;var s=b.$Children(v);b.$Each(s,function(a,d){var c=b.$AttributeEx(a,"u");if(c=="loading")Z=a;else{if(c=="slides")y=a;if(c=="navigator")Eb=a;if(c=="arrowleft")Sb=a;if(c=="arrowright")Pb=a;if(c=="thumbnavigator")pb=a;if(a.tagName!="STYLE"&&a.tagName!="SCRIPT")bc[c||d]=new xc(a,c=="slides",b.Uc(["slides","thumbnavigator"])[c])}});Z=Z||b.$CreateDiv(h);sb=b.$CssWidth(y);rb=b.$CssHeight(y);I=n.$SlideWidth||sb;H=n.$SlideHeight||rb;kb={v:I,u:H,$Top:0,$Left:0,bc:"block",ab:"absolute"};fb=n.$SlideSpacing;yb=I+fb;zb=H+fb;W=U&1?yb:zb;var i=U&1?sb:rb;mb=n.$AutoPlaySteps;G=n.$PauseOnHover;ec=n.$AutoPlayInterval;wb=n.$SlideDuration;Mb=new Bc;if(n.$HWA&&(!b.$IsBrowserFireFox()||vb))Ib=function(a,c,d){b.kc(a,{$TranslateX:c,$TranslateY:d})};u=n.$AutoPlay&63;a.Vb=o;b.$Attribute(v,Gb,"1");b.z(y,b.z(y)||0);b.Y(y,"absolute");ab=b.$CloneNode(y,d);b.Mb(ab,y);ib=new Ic;b.$AppendChild(ab,ib.jc);b.Jb(y,"hidden");G&=vb?10:5;var x=b.$Children(y),O=b.Uc(["DIV","A","LI"]);b.$Each(x,function(a){O[a.tagName.toUpperCase()]&&!b.$AttributeEx(a,"u")&&hb.push(a);b.z(a,(b.z(a)||0)+1)});V=mc();b.$Css(V,"backgroundColor","#000");b.xc(V,0);b.z(V,0);b.Mb(V,y.firstChild,y);q=hb.length;var m=c.ceil((i+fb)/W);if(n.$Cols)m=n.$Cols;L=c.min(q,m);N=(i+fb)/W;hc=L<q;C=hc?n.$Loop:0;if(q){vc();R=n.$Align;if(R==e){var w=U&1?I:H;R=(i-w)/2}if(q<N){R=0;N=q;Cb=(i-W*q+fb)/2}if(lb){qc=lb.$ShowLink;Hb=lb.$Class;fc=!R&&L==1&&q>1&&Hb&&(!b.$IsBrowserIE()||b.$BrowserVersion()>=9)}if(!(C&1)){P=R/W;E=P;J=E+q-N}nb=(L>1||R?U:-1)&n.$DragOrientation;Tb.Vd&&b.$Css(y,Tb.Vd,([g,"pan-y","pan-x","none"])[nb]||"");if(fc)D=new Hb(Mb,I,H,lb,vb,Ib);for(var k=0;k<hb.length;k++){var A=hb[k],F=new Hc(A,k);B.push(F)}b.V(Z);ob=new Jc;z=new Ac(ob,ib);b.$AddEvent(v,"click",wc,d);b.$AddEvent(v,"mouseleave",uc);b.$AddEvent(v,"mouseenter",tc);b.$AddEvent(v,"mousedown",nc);b.$AddEvent(v,"touchstart",Ec);b.$AddEvent(v,"dragstart",Ub);b.$AddEvent(v,"selectstart",Ub);b.$AddEvent(j,"mouseup",jb);b.$AddEvent(h,"mouseup",jb);b.$AddEvent(h,"touchend",jb);b.$AddEvent(h,"touchcancel",jb);b.$AddEvent(j,"blur",jb);if(Eb&&qb){gc=new qb.$Class(Eb,qb,M,K);gb.push(gc)}if(cb&&Sb&&Pb){cb.$Loop=C;ic=new cb.$Class(Sb,Pb,cb,M,K,a);gb.push(ic)}if(pb&&S){S.$StartIndex=n.$StartIndex;S.$ArrowKeyNavigation=S.$ArrowKeyNavigation||0;cc=new S.$Class(pb,S);!S.$NoDrag&&b.$Attribute(pb,Wb,"1");gb.push(cc)}b.$Each(gb,function(a){a.Gc(q,B,Z);a.$On(p.ec,Bb)});b.$Css(v,"visibility","visible");a.$ScaleSize(M,K);Nb();n.$ArrowKeyNavigation&&b.$AddEvent(h,"keydown",function(a){if(a.keyCode==37)Bb(-n.$ArrowKeyNavigation,d);else a.keyCode==39&&Bb(n.$ArrowKeyNavigation,d)});var l=n.$StartIndex;l=t(l);Ab(l,0)}};b.Wb(a)};i.$EVT_CLICK=21;i.$EVT_DRAG_START=22;i.$EVT_DRAG_END=23;i.$EVT_SWIPE_START=24;i.$EVT_SWIPE_END=25;i.$EVT_LOAD_START=26;i.$EVT_LOAD_END=27;i.Ef=28;i.$EVT_MOUSE_ENTER=31;i.$EVT_MOUSE_LEAVE=32;i.$EVT_POSITION_CHANGE=202;i.$EVT_PARK=203;i.$EVT_SLIDESHOW_START=206;i.$EVT_SLIDESHOW_END=207;i.$EVT_PROGRESS_CHANGE=208;i.$EVT_STATE_CHANGE=209})(window,document,Math,null,true,false); jssor_1_slider_init = function() {
  var jssor_1_SlideshowTransitions = [
  {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
  ];
  var jssor_1_options = {
    $AutoPlay: 1,
    $Loop: 0,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $ThumbnailNavigatorOptions: {
      $Class: $JssorThumbnailNavigator$,
      $SpacingX: 5,
      $SpacingY: 5
    }
  };
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  /*#region responsive code begin*/
  var MAX_WIDTH = 1170;
  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;
    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
      jssor_1_slider.$ScaleWidth(expectedWidth);
    }
    else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();
  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};

$(document).ready(function () {
  jssor_1_slider_init();

  var width = $(window).width();
      $(window).resize(function() {
        width = $(window).width();
  });

  if( width < 990){
    $('.sb-toggle-left').click(function(){
      $('#megamenu').slideToggle('display_open');
      
    });

    $('.field_item').click(function(){
      $(this).find('.filters_in_field').slideToggle('display_open');
    });
  }

});
function scroll_menu(){
  var width = $(window).width();
  $(window).resize(function() {
    width = $(window).width();
  });
var lastScrollTop = 0;
  $(window).scroll(function () {
  st = $(this).scrollTop();
    Itid = $('#Itid').val();
    if(width > 990){ // pc
          if (st >150) {
          //$(".header_wrapper").css('background','#3333338c');
           $(".header_wrapper").css('min-height','50px');
            $(".header .logo").css('margin-top','10px');
              $(".header .logo").addClass('logo_scroll');
            $(".header>div").css('margin-top','20px');
             $(".highlight").css('top','40px');
             $(".menu_item_a").css('padding-bottom','20px');

             

        }
        else {
           //$(".header_wrapper").css('background','#3333334f');
           $(".menu_item_a").css('padding-bottom','36px');
            $(".header_wrapper").css('min-height','80px');
           $(".header .logo").removeClass('logo_scroll');
             $(".header>div").css('margin-top','40px');
              $(".highlight").css('top','55px');
        }
      if (st >150) {
          //$(".header_wrapper").css('background','#333333cf');

        if(st <  lastScrollTop) {
                $(".header_wrapper").removeClass("slide-down").addClass("slide-up").css({position:'fixed',top:'0px'});
              $('.ups').css('margin-bottom','100px');
          }
          else {
            $(".header_wrapper").removeClass("slide-up").addClass("slide-down").css({position:'fix'});
            $('.ups').css('margin-bottom','0px'); 
            $(".menu_item_a").css('padding-bottom','15px');
          }
        
      } else {
        // $('.ups').fadeOut(200);
          $(".menu_item_a").css('padding-bottom','36px');
        $(".header_wrapper").css({position:'fixed'}).removeClass("slide-up").removeClass("slide-down");
          $('.ups').css('margin-bottom','0px'); 
      }
    }else{ // mobile
      if (st >150) {
         $(".head").css('min-height','70px');
           $(".header").css('min-height','70px')
       // $(".header_wrapper").css('background','#3333338c');
           $(".header_wrapper").css('min-height','40px');
            $(".header .logo").css('margin-top','5px');
            $(".search_home").css('margin-top','0px');
        
          if(st <  lastScrollTop) {
                $(".header_wrapper").removeClass("m-slide-down").addClass("m-slide-up").css({position:'fixed',top:'0px'});
                $('.ups').addClass('m-menu-fix');

          }
          else {
            $(".header_wrapper").removeClass("m-slide-up").addClass("m-slide-down").css({position:'fixed'});
            $('.ups').removeClass('m-menu-fix'); 
  
          }

        
      } else {
        // $('.ups').fadeOut(200);
          $(".head").css('min-height','70px')
               $(".header").css('min-height','70px')
             // $(".header_wrapper").css('background','#3333334f');
            $(".header_wrapper").css('min-height','50px');
            $(".header .logo").css('margin-top','10px');
               $(".search_home").css('margin-top','0px');
        $(".header_wrapper").css({position:'fixed'}).removeClass("m-slide-up").removeClass("m-slide-down");
        $('.ups').addClass('m-menu-fix'); 
        
      }
    }
    lastScrollTop = st;
  });
  
}


;!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(e){"use strict";function t(n,o){var s=this;s.element=n,s.el=e(n),s.suggestions=[],s.badQueries=[],s.selectedIndex=-1,s.currentValue=s.element.value,s.timeoutId=null,s.cachedResponse={},s.onChangeTimeout=null,s.onChange=null,s.isLocal=!1,s.suggestionsContainer=null,s.noSuggestionsContainer=null,s.options=e.extend({},t.defaults,o),s.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},s.hint=null,s.hintValue="",s.selection=null,s.initialize(),s.setOptions(o)}var n={escapeRegExChars:function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(e){var t=document.createElement("div");return t.className=e,t.style.position="absolute",t.style.display="none",t}},o={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},s=e.noop;t.utils=n,e.Autocomplete=t,t.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:function(e,t){if(!t)return e.value;var o="("+n.escapeRegExChars(t)+")";return e.value.replace(new RegExp(o,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")},formatGroup:function(e,t){return'<div class="autocomplete-group">'+t+"</div>"},delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:s,onSearchComplete:s,onSearchError:s,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(e,t,n){return-1!==e.value.toLowerCase().indexOf(n)},paramName:"query",transformResult:function(t){return"string"==typeof t?e.parseJSON(t):t},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},t.prototype={initialize:function(){var n,o=this,s="."+o.classes.suggestion,i=o.classes.selected,a=o.options;o.element.setAttribute("autocomplete","off"),o.noSuggestionsContainer=e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),o.suggestionsContainer=t.utils.createNode(a.containerClass),(n=e(o.suggestionsContainer)).appendTo(a.appendTo||"body"),"auto"!==a.width&&n.css("width",a.width),n.on("mouseover.autocomplete",s,function(){o.activate(e(this).data("index"))}),n.on("mouseout.autocomplete",function(){o.selectedIndex=-1,n.children("."+i).removeClass(i)}),n.on("click.autocomplete",s,function(){o.select(e(this).data("index"))}),n.on("click.autocomplete",function(){clearTimeout(o.blurTimeoutId)}),o.fixPositionCapture=function(){o.visible&&o.fixPosition()},e(window).on("resize.autocomplete",o.fixPositionCapture),o.el.on("keydown.autocomplete",function(e){o.onKeyPress(e)}),o.el.on("keyup.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("blur.autocomplete",function(){o.onBlur()}),o.el.on("focus.autocomplete",function(){o.onFocus()}),o.el.on("change.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("input.autocomplete",function(e){o.onKeyUp(e)})},onFocus:function(){var e=this;e.fixPosition(),e.el.val().length>=e.options.minChars&&e.onValueChange()},onBlur:function(){var e=this;e.blurTimeoutId=setTimeout(function(){e.hide()},200)},abortAjax:function(){var e=this;e.currentRequest&&(e.currentRequest.abort(),e.currentRequest=null)},setOptions:function(t){var n=this,o=e.extend({},n.options,t);n.isLocal=Array.isArray(o.lookup),n.isLocal&&(o.lookup=n.verifySuggestionsFormat(o.lookup)),o.orientation=n.validateOrientation(o.orientation,"bottom"),e(n.suggestionsContainer).css({"max-height":o.maxHeight+"px",width:o.width+"px","z-index":o.zIndex}),this.options=o},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var e=this;e.disabled=!0,clearTimeout(e.onChangeTimeout),e.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var t=this,n=e(t.suggestionsContainer),o=n.parent().get(0);if(o===document.body||t.options.forceFixPosition){var s=t.options.orientation,i=n.outerHeight(),a=t.el.outerHeight(),u=t.el.offset(),r={top:u.top,left:u.left};if("auto"===s){var l=e(window).height(),c=e(window).scrollTop(),g=-c+u.top-i,d=c+l-(u.top+a+i);s=Math.max(g,d)===g?"top":"bottom"}if(r.top+="top"===s?-i:a,o!==document.body){var p,h=n.css("opacity");t.visible||n.css("opacity",0).show(),p=n.offsetParent().offset(),r.top-=p.top,r.top+=o.scrollTop,r.left-=p.left,t.visible||n.css("opacity",h).hide()}"auto"===t.options.width&&(r.width=t.el.outerWidth()+"px"),n.css(r)}},isCursorAtEnd:function(){var e,t=this,n=t.el.val().length,o=t.element.selectionStart;return"number"==typeof o?o===n:!document.selection||((e=document.selection.createRange()).moveStart("character",-n),n===e.text.length)},onKeyPress:function(e){var t=this;if(t.disabled||t.visible||e.which!==o.DOWN||!t.currentValue){if(!t.disabled&&t.visible){switch(e.which){case o.ESC:t.el.val(t.currentValue),t.hide();break;case o.RIGHT:if(t.hint&&t.options.onHint&&t.isCursorAtEnd()){t.selectHint();break}return;case o.TAB:if(t.hint&&t.options.onHint)return void t.selectHint();if(-1===t.selectedIndex)return void t.hide();if(t.select(t.selectedIndex),!1===t.options.tabDisabled)return;break;case o.RETURN:if(-1===t.selectedIndex)return void t.hide();t.select(t.selectedIndex);break;case o.UP:t.moveUp();break;case o.DOWN:t.moveDown();break;default:return}e.stopImmediatePropagation(),e.preventDefault()}}else t.suggest()},onKeyUp:function(e){var t=this;if(!t.disabled){switch(e.which){case o.UP:case o.DOWN:return}clearTimeout(t.onChangeTimeout),t.currentValue!==t.el.val()&&(t.findBestHint(),t.options.deferRequestBy>0?t.onChangeTimeout=setTimeout(function(){t.onValueChange()},t.options.deferRequestBy):t.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)this.ignoreValueChange=!1;else{var t=this,n=t.options,o=t.el.val(),s=t.getQuery(o);t.selection&&t.currentValue!==s&&(t.selection=null,(n.onInvalidateSelection||e.noop).call(t.element)),clearTimeout(t.onChangeTimeout),t.currentValue=o,t.selectedIndex=-1,n.triggerSelectOnValidInput&&t.isExactMatch(s)?t.select(0):s.length<n.minChars?t.hide():t.getSuggestions(s)}},isExactMatch:function(e){var t=this.suggestions;return 1===t.length&&t[0].value.toLowerCase()===e.toLowerCase()},getQuery:function(t){var n,o=this.options.delimiter;return o?(n=t.split(o),e.trim(n[n.length-1])):t},getSuggestionsLocal:function(t){var n,o=this.options,s=t.toLowerCase(),i=o.lookupFilter,a=parseInt(o.lookupLimit,10);return n={suggestions:e.grep(o.lookup,function(e){return i(e,t,s)})},a&&n.suggestions.length>a&&(n.suggestions=n.suggestions.slice(0,a)),n},getSuggestions:function(t){var n,o,s,i,a=this,u=a.options,r=u.serviceUrl;u.params[u.paramName]=t,!1!==u.onSearchStart.call(a.element,u.params)&&(o=u.ignoreParams?null:u.params,e.isFunction(u.lookup)?u.lookup(t,function(e){a.suggestions=e.suggestions,a.suggest(),u.onSearchComplete.call(a.element,t,e.suggestions)}):(a.isLocal?n=a.getSuggestionsLocal(t):(e.isFunction(r)&&(r=r.call(a.element,t)),s=r+"?"+e.param(o||{}),n=a.cachedResponse[s]),n&&Array.isArray(n.suggestions)?(a.suggestions=n.suggestions,a.suggest(),u.onSearchComplete.call(a.element,t,n.suggestions)):a.isBadQuery(t)?u.onSearchComplete.call(a.element,t,[]):(a.abortAjax(),i={url:r,data:o,type:u.type,dataType:u.dataType},e.extend(i,u.ajaxSettings),a.currentRequest=e.ajax(i).done(function(e){var n;a.currentRequest=null,n=u.transformResult(e,t),a.processResponse(n,t,s),u.onSearchComplete.call(a.element,t,n.suggestions)}).fail(function(e,n,o){u.onSearchError.call(a.element,t,e,n,o)}))))},isBadQuery:function(e){if(!this.options.preventBadQueries)return!1;for(var t=this.badQueries,n=t.length;n--;)if(0===e.indexOf(t[n]))return!0;return!1},hide:function(){var t=this,n=e(t.suggestionsContainer);e.isFunction(t.options.onHide)&&t.visible&&t.options.onHide.call(t.element,n),t.visible=!1,t.selectedIndex=-1,clearTimeout(t.onChangeTimeout),e(t.suggestionsContainer).hide(),t.signalHint(null)},suggest:function(){if(this.suggestions.length){var t,n=this,o=n.options,s=o.groupBy,i=o.formatResult,a=n.getQuery(n.currentValue),u=n.classes.suggestion,r=n.classes.selected,l=e(n.suggestionsContainer),c=e(n.noSuggestionsContainer),g=o.beforeRender,d="",p=function(e,n){var i=e.data[s];return t===i?"":(t=i,o.formatGroup(e,t))};o.triggerSelectOnValidInput&&n.isExactMatch(a)?n.select(0):(e.each(n.suggestions,function(e,t){s&&(d+=p(t,0)),d+='<div class="'+u+'" data-index="'+e+'">'+i(t,a,e)+"</div>"}),this.adjustContainerWidth(),c.detach(),l.html(d),e.isFunction(g)&&g.call(n.element,l,n.suggestions),n.fixPosition(),l.show(),o.autoSelectFirst&&(n.selectedIndex=0,l.scrollTop(0),l.children("."+u).first().addClass(r)),n.visible=!0,n.findBestHint())}else this.options.showNoSuggestionNotice?this.noSuggestions():this.hide()},noSuggestions:function(){var t=this,n=t.options.beforeRender,o=e(t.suggestionsContainer),s=e(t.noSuggestionsContainer);this.adjustContainerWidth(),s.detach(),o.empty(),o.append(s),e.isFunction(n)&&n.call(t.element,o,t.suggestions),t.fixPosition(),o.show(),t.visible=!0},adjustContainerWidth:function(){var t,n=this,o=n.options,s=e(n.suggestionsContainer);"auto"===o.width?(t=n.el.outerWidth(),s.css("width",t>0?t:300)):"flex"===o.width&&s.css("width","")},findBestHint:function(){var t=this,n=t.el.val().toLowerCase(),o=null;n&&(e.each(t.suggestions,function(e,t){var s=0===t.value.toLowerCase().indexOf(n);return s&&(o=t),!s}),t.signalHint(o))},signalHint:function(t){var n="",o=this;t&&(n=o.currentValue+t.value.substr(o.currentValue.length)),o.hintValue!==n&&(o.hintValue=n,o.hint=t,(this.options.onHint||e.noop)(n))},verifySuggestionsFormat:function(t){return t.length&&"string"==typeof t[0]?e.map(t,function(e){return{value:e,data:null}}):t},validateOrientation:function(t,n){return t=e.trim(t||"").toLowerCase(),-1===e.inArray(t,["auto","bottom","top"])&&(t=n),t},processResponse:function(e,t,n){var o=this,s=o.options;e.suggestions=o.verifySuggestionsFormat(e.suggestions),s.noCache||(o.cachedResponse[n]=e,s.preventBadQueries&&!e.suggestions.length&&o.badQueries.push(t)),t===o.getQuery(o.currentValue)&&(o.suggestions=e.suggestions,o.suggest())},activate:function(t){var n,o=this,s=o.classes.selected,i=e(o.suggestionsContainer),a=i.find("."+o.classes.suggestion);return i.find("."+s).removeClass(s),o.selectedIndex=t,-1!==o.selectedIndex&&a.length>o.selectedIndex?(n=a.get(o.selectedIndex),e(n).addClass(s),n):null},selectHint:function(){var t=this,n=e.inArray(t.hint,t.suggestions);t.select(n)},select:function(e){var t=this;t.hide(),t.onSelect(e)},moveUp:function(){var t=this;if(-1!==t.selectedIndex)return 0===t.selectedIndex?(e(t.suggestionsContainer).children("."+t.classes.suggestion).first().removeClass(t.classes.selected),t.selectedIndex=-1,t.ignoreValueChange=!1,t.el.val(t.currentValue),void t.findBestHint()):void t.adjustScroll(t.selectedIndex-1)},moveDown:function(){var e=this;e.selectedIndex!==e.suggestions.length-1&&e.adjustScroll(e.selectedIndex+1)},adjustScroll:function(t){var n=this,o=n.activate(t);if(o){var s,i,a,u=e(o).outerHeight();s=o.offsetTop,a=(i=e(n.suggestionsContainer).scrollTop())+n.options.maxHeight-u,s<i?e(n.suggestionsContainer).scrollTop(s):s>a&&e(n.suggestionsContainer).scrollTop(s-n.options.maxHeight+u),n.options.preserveInput||(n.ignoreValueChange=!0,n.el.val(n.getValue(n.suggestions[t].value))),n.signalHint(null)}},onSelect:function(t){var n=this,o=n.options.onSelect,s=n.suggestions[t];n.currentValue=n.getValue(s.value),n.currentValue===n.el.val()||n.options.preserveInput||n.el.val(n.currentValue),n.signalHint(null),n.suggestions=[],n.selection=s,e.isFunction(o)&&o.call(n.element,s)},getValue:function(e){var t,n,o=this,s=o.options.delimiter;return s?(t=o.currentValue,n=t.split(s),1===n.length?e:t.substr(0,t.length-n[n.length-1].length)+e):e},dispose:function(){var t=this;t.el.off(".autocomplete").removeData("autocomplete"),e(window).off("resize.autocomplete",t.fixPositionCapture),e(t.suggestionsContainer).remove()}},e.fn.devbridgeAutocomplete=function(n,o){return arguments.length?this.each(function(){var s=e(this),i=s.data("autocomplete");"string"==typeof n?i&&"function"==typeof i[n]&&i[n](o):(i&&i.dispose&&i.dispose(),i=new t(this,n),s.data("autocomplete",i))}):this.first().data("autocomplete")},e.fn.autocomplete||(e.fn.autocomplete=e.fn.devbridgeAutocomplete)});;function submit_form_search(){
	itemid = 10; 
	url = '';
	var keyword = $('#keyword').val();
	keyword = keyword.replace(' ','+'); 
	keyword = encodeURIComponent(encodeURIComponent(keyword));
	var link_search = $('#link_search').val();
	if( keyword != '')	{
		url += 	'&keyword='+keyword;
		var check = 1;
	}else{
		var check =0;
	}
	if(check == 0){
		alert('Bạn phải nhập tham số tìm kiếm');
		return false;
	}
	link = link_search.replace('keyword',keyword);
    window.location.href=link;
    return false;
}	
$(document).ready(function(){
	$('.button_a').click(function(){
		$('#search_form').css('display','block');
		$('#search_form').css('width','300px');
		$('#search_form').css('transform','rotateY(0deg)');
	});
		$('.dclose').click(function(){
			$('#search_form').css('width','0px');
		$('#search_form').css('transform','rotateY(90deg)');
	});
	$('#keyword').autocomplete({
		serviceUrl:"/index.php?module=products&view=search&raw=1&task=get_ajax_search",
		groupBy:"brand",
		minChars:2,
		formatResult:function(n,t){
			t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");
			var i=n.data.text.split(" "),r="";
			for(j=0;j<i.length;j++)
				r+=t.toLowerCase().indexOf(i[j].toLowerCase())>=0?"<strong>"+i[j]+"</strong> ":i[j]+" ";
			return' <a href = "'+n.value+'" > <img src = "'+n.data.image+'" /> <label> <span> '+r+' </span> <span class = "price"> '+n.data.price+"</span></label></a>"
		},
		onSelect:function(n){
			$(".control input[name=kwd]").val(n.data.text)
		}
		});
});

setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'8c5e205b775b4ad09732f5fddf4e5c9f',
                comparisonItems:[{name : 'cmp', value : 10550922},{name : 'plmt', value : 10554930}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_165009986795');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var impId = '8c5e205b775b4ad09732f5fddf4e5c9f';var dvObj = $dvbs;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });$dvbs.pubSub.subscribe("AfterDecisionRender",'8c5e205b775b4ad09732f5fddf4e5c9f',"PerformanceCollector", 
                function() { 
                    try { 
                        if (typeof(_dv_win) == 'undefined' || typeof($dvbs) == 'undefined' || typeof($dvbs.tags) == 'undefined' || typeof($dvbs.tags['8c5e205b775b4ad09732f5fddf4e5c9f']) == 'undefined' || typeof($dvbs.tags['8c5e205b775b4ad09732f5fddf4e5c9f'].perf) == 'undefined') return; 
                        var perf = {}; 
                        for (var i = 0; i < $dvbs.tags['8c5e205b775b4ad09732f5fddf4e5c9f'].perf.count; i++) { 
                            perf['dvp_r' + i] = $dvbs.tags['8c5e205b775b4ad09732f5fddf4e5c9f'].perf['r' + i] 
                        } 

                        var guid = '165009986795'; 
                        if (window.performance && typeof(window.performance.getEntries) === 'function') 
                            var perfEntries = window.performance.getEntries(); 
                        var duration = -1; 
                        if (perfEntries) { 
                            for (var i = 0; i < perfEntries.length; i++) { 
                                var entry = perfEntries[i]; 
                                var regexStr = 'verify\.js.*' + guid; 
                                if ((new RegExp(regexStr, 'i')).test(entry.name)) 
                                    duration = Math.floor(entry.duration); 
                            } 
                        } 
                        perf.dvp_fetchd = duration; 
                        $dvbs.registerEventCall('8c5e205b775b4ad09732f5fddf4e5c9f', perf, 0) 
                    } catch (e) {} 
                });(function() {var dvObj = $dvbs;var impId = '8c5e205b775b4ad09732f5fddf4e5c9f';dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CTITS",function(){var a=-1;try{top.frames&&(a=top.frames.length),dvObj.registerEventCall(impId,{dvp_fcifrms:a})}catch(b){dvObj.registerEventCall(impId,{dvp_fcierr:b.message.slice(0,100)})}});})();(function() {var dvObj = $dvbs;var impId = '8c5e205b775b4ad09732f5fddf4e5c9f';var dvParams = {"mouseMvLogRate": "10","isDvp": "true","sampleInterval": "5","maxArrayLength": "10"};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CMPC", function() {function m(e,f,g){e.addEventListener?e.addEventListener(f,g):e.attachEvent?e.attachEvent("on"+f,g):e["on"+f]=g}function n(e,f,g){e.removeEventListener?e.removeEventListener(f,g):e.detachEvent?e.detachEvent("on"+f,g):e["on"+f]=null}function x(e,f){this.toString=function(){return"("+e+","+f+")"}} 
function A(e){var f=e||5,g=[],k=this;this.enqueue=function(e){g.length>=f&&k.a();g.push(e)};this.a=function(){0<g.length&&g.splice(0,1)};this.size=function(){return g.length};this.constructor.prototype.toString=function(){return"[object Queue]"};this.join=function(e){"undefined"===typeof e&&(e="|");return Array.prototype.join.call(g,e)};this.clear=function(){g=[]}} 
function B(e,f){function g(){try{var d={};d[a.a.K]=a.state.N>>>0;c(d)}catch(b){a.b(b.message)}}function k(){try{var d={};d[a.a.L]=a.state.P>>>0;c(d)}catch(b){a.b(b.message)}}function l(){try{var d={};d[a.a.F]=a.state.g.toFixed(a.u);c(d)}catch(b){a.b(b.message)}}function y(){try{var d=a.state.j,b={};b[a.a.C]=(a.state.g/(Date.now()-a.state.B)*1E3).toFixed(a.u);b[a.a.H]=d.toFixed(a.u);c(b)}catch(t){a.b(t.message)}}function z(){try{var d={};d[a.a.M]=("ontouchstart"in document.documentElement)>>>0;c(d)}catch(b){a.b(b.U)}} 
function u(){try{if(!a.state.i){var d=a.state.A.size(),b={};b[a.a.J]=d;c(b)}}catch(t){a.b(t.U)}}function h(){try{var d={};d[a.a.I]=a.state.R.size();c(d)}catch(b){a.b(b.message)}}function v(){try{var d={};d[a.a.l]=!!a.state.m.size()>>>0;d[a.a.G]=encodeURI(a.state.m.join().slice(0,100));a.o(a.h,d)}catch(b){a.b(b.message)}}function w(){try{var d={};d[a.a.D]=a.state.O>>>0;c(d)}catch(b){a.b(b.message)}}var a=this;e=e||{};this.s=parseInt(e.maxArrayLength)||5;this.u=parseInt(e.numPrecision)||4;this.T=function(){a.state= 
{O:0,i:0,R:new A(this.s),A:new A(this.s),m:new A(this.s),P:0,v:0,w:0,g:0,j:0,timeStamp:null,B:null,N:0};a.a={D:"mpcc",G:"mpcerr",I:"mpcp",l:"mpcf",J:"mpcpbt",M:"mpcts",L:"mpctmv",C:"mpcavgspd",H:"mpcmaxspd",F:"mpcdistrl",K:"mpct"};if("true"===e.isDvp){var d=a.a,b;for(b in d)d.hasOwnProperty(b)&&(d[b]="dvp_"+d[b])}a.h={};a.h[a.a.l]=-1;a.h[a.a.G]="";a.c={};a.c[a.a.D]=-1;a.c[a.a.I]=-1;a.c[a.a.J]=-1;a.c[a.a.M]=-1;a.c[a.a.L]=-1;a.c[a.a.C]="0";a.c[a.a.H]="0";a.c[a.a.F]="0";a.c[a.a.K]=-1};this.T();this.b= 
function(d){a.f({m:d})};this.o=function(d,b){try{for(var c in b)b.hasOwnProperty(c)&&(d[c]instanceof A?d[c].enqueue(b[c]):d[c]=b[c]);"[object Function]"===Object.prototype.toString.call(f)&&f(a.state,a.c)}catch(p){a.b(p.message)}};this.f=this.o.bind(this,this.state);var c=this.o.bind(this,this.c);this.V=function(d,b){try{var c=a.state.timeStamp,e=a.state.B;if(null===c||null===e)a.f({v:d,w:b,j:0,timeStamp:Date.now(),B:Date.now(),g:0});else{var g=a.state.g,f=a.state.j,h=d-a.state.v,k=b-a.state.w,l= 
Math.sqrt(h*h+k*k),f=Math.max(l/(Date.now()-c)*1E3,f);a.f({v:d,w:b,j:f,timeStamp:Date.now(),g:g+l})}}catch(C){a.b(C.message)}};this.S=function(d){try{for(var b=[w,h,u,z,y,l,l,k,g,v],c=0;c<b.length;++c)try{b[c]()}catch(p){a.b(p.message)}}catch(p){}finally{1===a.h[a.a.l]?d(a.h):d(a.c)}}} 
function D(){function e(b){try{c.f({N:b.isTrusted})}catch(r){c.b(r.message)}try{c.f({O:1}),setTimeout(function(){if(!a)try{c.S(function(a){dvObj.registerEventCall(impId,a)}),c=new B(h,void 0)}catch(r){c&&"function"===typeof c.b&&c.b(r.message)}finally{a=!0}},10)}catch(r){}}function f(){try{c.f({P:1})}catch(q){c&&"function"===typeof c.b&&c.b(q.message)}}function g(){c=null;a=!1}function k(){try{c.f({i:0}),w=!0}catch(q){c&&"function"===typeof c.b&&c.b(q.message)}}function l(){try{c.f({i:1}),c.state.A.clear(), 
v=!0}catch(q){c&&"function"===typeof c.b&&c.b(q.message)}}function y(b){try{a||(v?v=!1:w?w=!1:(u+=1,h=h||{},u===(parseInt(h.sampleInterval)||1)&&(c.f({R:new x(b.clientX,b.clientY)}),c.V(b.clientX,b.clientY),c.state.i&&c.f({A:new x(b.clientX,b.clientY)}),u=0)))}catch(r){c&&"function"===typeof c.b&&c.b(r.message)}}function z(){c=new B(h,null)}var u=0,h=dvParams,v=!1,w=!1,a=!1,c=new B(h,null),d,b;try{b=parent,d=b.document}catch(q){b=window,d=b.document}m(b,"mouseover",z);m(b,"mousedown",l);m(b,"mousemove", 
y);m(b,"mouseup",k);m(d,"mouseout",g);m(d,"touchmove",f);m(b,"click",e);var t=h.W||5E4,p=h.X||84E4;setTimeout(function(){n(b,"click",e);n(b,"mouseover",z);n(b,"mousedown",l);n(b,"mousemove",y);n(b,"mouseup",k);n(d,"mouseout",g);n(d,"touchmove",f)},"object"===window.$dvbs||"object"===window.$dvbsr?t:p)}try{D()}catch(e){};});})();var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("8c5e205b775b4ad09732f5fddf4e5c9f",false);


try{__tagObject_callback_165009986795({ImpressionID:"8c5e205b775b4ad09732f5fddf4e5c9f", ServerPublicDns:"tps611.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "8c5e205b775b4ad09732f5fddf4e5c9f");}catch(e){}
try{__verify_callback_165009986795({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "8c5e205b775b4ad09732f5fddf4e5c9f");}catch(e){}

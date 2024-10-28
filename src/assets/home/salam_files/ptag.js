!function(e){function p(f){return void 0!==f&&""!==f?f.substring(f.indexOf("?")+1,f.length)+".js":"0.js"}
function d(){return p(e.currentScript.src);}
function defaultparams(t){var aud="data_"+t.replace('.js','');if("undefined"===typeof window[aud]){window[aud]=[];if("undefined"!==typeof rtgsettings){window[aud].push(rtgsettings);}else{if("undefined"!==typeof window.data_0001){window[aud]=window.data_0001;}}}
if("undefined"===typeof window[aud]){return;}else{if(window[aud].length===0){window[aud].push({pagetype:"generic",PageType:"generic",gdpr:0});}else{if(window[aud].length>1){window[aud][0]=window[aud][window[aud].length-1];}
var p=window[aud][0].gdpr;if("undefined"===typeof p){window[aud][0].gdpr=0;}else if(p.toString().indexOf("$")>-1){window[aud][0].gdpr=0;}
if("undefined"===typeof window[aud][0].PageType){window[aud][0].PageType="generic";}}}}
t=d();var botflag=/bot|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebot|ia_archiver|crawler|spider|robot|crawling/i.test(navigator.userAgent);if(!botflag){var scrpath=document.currentScript.src;if(scrpath==null||"undefined"==typeof scrpath){scrpath=document.getElementById("DLFNPMMP1").getAttribute('src');}
var path="https://"+scrpath.split("/")[2]+"/aud/clientjs/"+t+"?";if(("?4916,?7492,?7879,?3186").indexOf(document.currentScript.src.split('.js')[1])>-1){path+=encodeURIComponent(window.location.href);}
var pixEle=document.getElementById("DLFNPM101");if(pixEle){var id15=t.replace('.js','');var lbkey="LB"+id15;var datakey="data_"+id15;var alkey="AL"+id15;if(typeof window[lbkey]!=='undefined'){window[lbkey].init(window[datakey][0]);}
window[alkey]();}
else{defaultparams(t);var n=path,r=e.createElement("script");r.async=!0,r.id="DLFNPM101",r.type="text/javascript",r.src=n;var c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}}}(document);
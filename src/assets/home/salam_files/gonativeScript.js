(()=>{var e={p:""};e.p=window.urls.jsPublicPath,(()=>{function e(e){let t="",i="";"success"===e.status&&(t=JSON.stringify(e.data),window.gonative.storage.cloud.get({key:`password_ck_${window.preferences.siteCustomerList}`,callback(e){"success"===e.status&&(i=JSON.stringify(e.data)),0!==t.trim().length&&0!==i.trim().length&&window.preferences.siteId&&function(e,t,i){const s={email:e,password:t,siteId:i};$.ajax({url:$("#updateSessionActionUrl").val(),method:"POST",data:s,success(e){if(e.success){const e=(new Date).getTime();window.gonative.storage.cloud.set({key:`ck_login_time_${window.preferences.siteCustomerList}`,value:e}),window.location.reload()}}})}(t,i,window.preferences.siteId)}}))}function t(t){t.status&&t.data&&t.data===window.preferences.siteCustomerList&&window.gonative.storage.cloud.get({key:`email_ck_${window.preferences.siteCustomerList}`,callback:e})}function i(e){if(e.status){const i=Number(e.data);let s=0;const o=(new Date).getTime()-i;Number.isNaN(o)||(s=o/36e5),s>Number(window.preferences.gonativeSessionExpireDuration)?(window.gonative.storage.cloud.delete({key:`email_ck_${window.preferences.siteCustomerList}`}),window.gonative.storage.cloud.delete({key:`password_ck_${window.preferences.siteCustomerList}`}),window.gonative.storage.cloud.delete({key:`ck_login_site_type_${window.preferences.siteCustomerList}`}),window.gonative.storage.cloud.delete({key:`ck_login_time_${window.preferences.siteCustomerList}`})):window.gonative.storage.cloud.get({key:`ck_login_site_type_${window.preferences.siteCustomerList}`,callback:t})}}window.addEventListener("DOMContentLoaded",(()=>{document.getElementsByClassName("updateLoginedCustomerSession").length>0&&navigator.userAgent.indexOf("gonative ios")>-1&&window.gonative.deviceInfo().then((e=>{const{gonativeRememberMeConfig:s}=window.preferences;if(s&&s.iosOs&&s.iosappVersion&&(window.preferences.enableGonativeLocalSettings=s.iosOs.indexOf(e.os)>-1&&e.appVersion>s.iosappVersion,window.preferences.enableGonativeLocalSettings)){const e=window.preferences.gonativeSessionExpireDuration;"NaN"!==Number(e)&&Number(e)>=0?window.gonative.storage.cloud.get({key:`ck_login_time_${window.preferences.siteCustomerList}`,callback:i}):window.gonative.storage.cloud.get({key:`ck_login_site_type_${window.preferences.siteCustomerList}`,callback:t})}}))}))})()})();
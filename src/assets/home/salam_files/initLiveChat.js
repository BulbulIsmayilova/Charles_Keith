(()=>{var e={p:""};e.p=window.urls.jsPublicPath,(()=>{if("true"!==function(){const e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,((t,n,i)=>{e[n]=i})),e}().appview){const{liveChatPreferences:e}=window.preferences,t=function(t){const n=document.getElementById("embeddedSvcSettings"),i=n.getAttribute("data-embedded-svc-settings")||"",s=n.getAttribute("data-customer-data");let d,o;if(i.length)try{d=JSON.parse(i)}catch(e){console.error("Can't parse embeddedSvcSettings custom preference. Error: ",e)}if(s.length)try{o=JSON.parse(s)}catch(e){console.error("Can't parse customer data. Error: ",e)}Object.assign(embedded_svc.settings,d||{}),embedded_svc.settings.directToButtonRouting=function(t){return"Retail Enquiry"===t[2].value?e.retailEnquiryId:e.buttonId},o&&(embedded_svc.settings.prepopulatedPrechatFields={FirstName:o.firstName,LastName:o.lastName,SuppliedEmail:o.email}),embedded_svc.init(e.baseCoreURL,e.communityEndpointURL,t,e.orgId,e.eswConfigDevName,{baseLiveAgentContentURL:e.baseLiveAgentContentURL,deploymentId:e.deploymentId,buttonId:e.buttonId,baseLiveAgentURL:e.baseLiveAgentURL,eswLiveAgentDevName:e.eswLiveAgentDevName,isOfflineSupportEnabled:e.isOfflineSupportEnabled})};if(window.embedded_svc)t(e.gslbBaseURL);else{const n=document.createElement("script");n.setAttribute("src",e.fallbackScriptUrl||""),n.onload=function(){t(null)},document.body.appendChild(n)}document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelector(".js-liveChat-btn");const t=document.querySelector(".kakao_liveChat");if(!e&&t&&(e=document.querySelector(".js-kakao-livechat-chat-btn")),window.embedded_svc&&window.embedded_svc.settings&&window.embedded_svc.settings.displayHelpButton&&e){function n(e){e.preventDefault();const t=document.querySelector(".helpButtonEnabled"),n=document.querySelector(".embeddedServiceSidebarMinimizedDefaultUI");n?n.click():t&&t.click()}function i(t){t.preventDefault();const n=e.getAttribute("data-contact-us-url");n&&"null"!==n&&(window.location.href=n)}document.addEventListener("click",(t=>{"string"==typeof t.target.className&&-1!==t.target.className.indexOf("js-liveChat")&&(t.preventDefault(),e.click())}));setInterval((()=>{window.embedded_svc.settings.agentAvailableOnButtonClick?function(e,n,i){e.classList.contains("online")||(e.classList.remove("d-none","offline"),t&&t.classList.remove("d-none"),e.classList.add("online"),e.removeEventListener("click",i),e.addEventListener("click",n))}(e,n,i):window.embedded_svc.settings.isOfflineSupportEnabled&&function(e,n,i){e.classList.contains("offline")||(e.classList.remove("d-none","online"),t&&t.classList.remove("d-none"),e.classList.add("offline"),e.removeEventListener("click",n),e.addEventListener("click",i))}(e,n,i)}),1e4)}}))}})()})();
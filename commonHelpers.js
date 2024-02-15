import{S as g,a as u,i as p}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const L=document.querySelector(".gallery");let b=new g(".gallery-link",{captionsData:"alt",captionDelay:500});function w(e){const{largeImageURL:r,webformatURL:i,tags:s,likes:t,views:o,comments:l,downloads:y}=e;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${s}" />
      </a>
      <ul class="gallery-body">
        <li class="info-box">
          <h3>Likes:</h3>
          <p>${t}</p>
        </li>
        <li class="info-box">
          <h3>Views:</h3>
          <p>${o}</p>
        </li>
        <li class="info-box">
          <h3>Comments:</h3>
          <p>${l}</p>
        </li>
        <li class="info-box">
          <h3>Downloads:</h3>
          <p>${y}</p>
        </li>
      </ul>
    </li>`}function q(e){const r=e.hits.map(i=>w(i)).join(`
`);L.insertAdjacentHTML("beforeend",r),b.refresh()}u.defaults.baseURL="https://pixabay.com/api/";async function m(e,r=1,i=15){try{const s=await u.get("",{params:{key:"42112521-3ff4dfc201bab0977369cd2bc",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:i}});if(s.status===200)return s.data;throw new Error("Failed to fetch images")}catch(s){throw console.log(s),new Error("Failed to fetch images")}}const S=document.querySelector(".search-form"),v=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=document.querySelector(".load-more");let a=1,n="";S.addEventListener("submit",x);f.addEventListener("click",F);async function x(e){if(e.preventDefault(),v.innerHTML="",n=e.target.elements.query.value.trim(),n===""){d("Please enter a search query!");return}c.classList.remove("hidden"),a=1;try{const r=await m(n,a);h(r)}catch(r){console.error(r),d("Failed to fetch images")}finally{c.classList.add("hidden")}}async function F(){c.classList.remove("hidden"),a++;try{const e=await m(n,a);h(e),$()}catch(e){console.error(e),d("Failed to fetch images")}finally{c.classList.add("hidden")}}function h(e){e.hits.length===0?d("Sorry, there are no images matching your search query. Please try again!"):q(e),a*e.hits.length>=e.totalHits?f.classList.add("hidden"):f.classList.remove("hidden")}function d(e){p.show({message:e,messageColor:"#fff",backgroundColor:"#FF0000",position:"topRight"})}function $(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

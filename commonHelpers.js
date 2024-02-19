import{S as p,a as m,i as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const b=document.querySelector(".gallery");let w=new p(".gallery-link",{captionsData:"alt",captionDelay:500});function v(e){const{largeImageURL:r,webformatURL:s,tags:l,likes:t,views:o,comments:n,downloads:g}=e;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${s}" alt="${l}" />
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
          <p>${n}</p>
        </li>
        <li class="info-box">
          <h3>Downloads:</h3>
          <p>${g}</p>
        </li>
      </ul>
    </li>`}function q(e){const r=e.hits.map(s=>v(s)).join(`
`);b.insertAdjacentHTML("beforeend",r),w.refresh()}m.defaults.baseURL="https://pixabay.com/api/";async function h(e,r=1,s=15){return(await m.get("",{params:{key:"42112521-3ff4dfc201bab0977369cd2bc",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}})).data}const S=document.querySelector(".search-form"),P=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector(".load-more");let i=1,d="",f=0;const x=15;a.classList.add("hidden");S.addEventListener("submit",$);a.addEventListener("click",F);async function $(e){if(e.preventDefault(),P.innerHTML="",d=e.target.elements.query.value.trim(),d===""){c("Please enter a search query!");return}u.classList.remove("hidden"),i=1;try{const r=await h(d,i);f=Math.ceil(r.totalHits/x),a.classList.remove("hidden"),i>=f?a.classList.add("hidden"):a.classList.remove("hidden"),y(r)}catch(r){console.error(r),c("Failed to fetch images")}finally{u.classList.add("hidden")}}async function F(){u.classList.remove("hidden"),i++;try{const e=await h(d,i);y(e),M()}catch(e){console.error(e),c("Failed to fetch images")}finally{u.classList.add("hidden")}}function y(e){e.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):q(e),i>=f?(a.classList.add("hidden"),c("We're sorry, but you've reached the end of search results.")):a.classList.remove("hidden")}function c(e){L.show({message:e,messageColor:"#fff",backgroundColor:"#FF0000",position:"topRight"})}function M(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

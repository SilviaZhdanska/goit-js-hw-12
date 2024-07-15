import{a as l,S as d,i}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function u(a){const s={key:"44784729-ebc9a0f5cc587c2700d41657d",q:a,imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15},o="https://pixabay.com/api/";try{const r=await l.get(o,{params:s});if(r.status!==200)throw new Error("Request failed with status ${response.status}");return r.data}catch(r){throw new Error(r.message)}}document.querySelector(".card-container");function p(a){const s=document.querySelector(".card-container"),o=a.map(e=>`
    <div class="card">
      <div class="card-img-top">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" >
        </a>
      </div>
      <div class="card-body">
        <h2 class="card-title visually-hidden">${e.tags}</h2>
        <p class="card-text">Likes: ${e.likes}</p>
        <p class="card-text">Views: ${e.views}</p>
        <p class="card-text">Comments: ${e.comments}</p>
        <p class="card-text">Downloads: ${e.downloads}</p>
      </div>
    </div>
  `).join("");s.innerHTML=o,new d(".card-img-top a",{captions:!0,captionsData:"alt"}).refresh()}function f(){i.info({backgroundColor:"red",position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(){console.error("Error fetching images"),i.error({title:"Error",message:"Sorry, there was an error fetching images. Please try again later."})}const h=document.querySelector(".search-form"),n=document.querySelector(".loader");n.style.display="none";h.addEventListener("submit",m);async function m(a){a.preventDefault();const s=a.currentTarget,o=s.elements.query.value.trim().toLowerCase();if(o){n.style.display="inline-block";try{const r=await u(o);n.style.display="none",r.hits.length===0?f():p(r.hits)}catch{n.style.display="none",y()}finally{s.reset()}}}
//# sourceMappingURL=commonHelpers.js.map

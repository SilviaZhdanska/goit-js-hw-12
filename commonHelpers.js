import{a as v,S,i as d}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const $="44780398-b9dbe1b89370a8f5261d05d93",M="https://pixabay.com/api/";let l=1,y="";async function f(r){try{r!==y&&(l=1,y=r);const o=await v.get(M,{params:{key:$,q:r,page:l,per_page:15}});return l+=1,o.data}catch(o){throw console.error("Error fetching images:",o),o}}const q=document.querySelector(".card-container"),u=document.querySelector(".load-more-button");function p(r){const o=r.map(e=>`
      <div class="card">
        <div class="card-img-top">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}">
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
    `).join("");q.innerHTML+=o,new S(".card-img-top a",{captions:!0,captionsData:"alt"}).refresh(),m()}function x(){d.info({backgroundColor:"red",position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),c()}function h(){console.error("Error fetching images"),d.error({title:"Error",message:"Sorry, there was an error fetching images. Please try again later."}),c()}function c(){u.style.display="none"}function m(){u.style.display="block"}function E(){d.info({backgroundColor:"green",position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."}),c()}function g(){u.scrollIntoView({behavior:"smooth"})}const P=document.querySelector(".search-form"),b=document.querySelector(".load-more-button"),n=document.querySelector(".loader"),O=document.querySelector(".card-container");n.style.display="none";b.style.display="none";let w=1,L="";P.addEventListener("submit",C);async function C(r){r.preventDefault();const o=r.currentTarget,a=o.elements.query.value.trim().toLowerCase();if(a){n.style.display="inline-block",O.innerHTML="";try{const e=await f(a);n.style.display="none",e.hits.length===0?(x(),c()):(p(e.hits),m(),g(),w=1,L=a)}catch{n.style.display="none",h()}finally{o.reset()}}}b.addEventListener("click",async()=>{n.style.display="inline-block";try{const r=await f(L);n.style.display="none",r.hits.length===0?(E(),c()):(p(r.hits),g(),w++)}catch{n.style.display="none",h()}});
//# sourceMappingURL=commonHelpers.js.map

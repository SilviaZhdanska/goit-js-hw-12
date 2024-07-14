import{a as l,S as d,i}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="44780398-b9dbe1b89370a8f5261d05d93";async function f(s){const t=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await l.get(t)).data}catch(o){throw new Error(o.message)}}document.querySelector(".card-container");function p(s){const t=document.querySelector(".card-container"),o=s.map(e=>`
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
  `).join("");t.innerHTML=o,new d(".card-img-top a",{captions:!0,captionsData:"alt"}).refresh()}function y(){i.info({backgroundColor:"red",position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}function h(){console.error("Error fetching images"),i.error({title:"Error",message:"Sorry, there was an error fetching images. Please try again later."})}const m=document.querySelector(".search-form"),n=document.querySelector(".loader");n.style.display="none";m.addEventListener("submit",g);async function g(s){s.preventDefault();const t=s.currentTarget,o=t.elements.query.value.trim().toLowerCase();if(o){n.style.display="inline-block";try{const a=await f(o);n.style.display="none",a.hits.length===0?y():p(a.hits)}catch{n.style.display="none",h()}finally{t.reset()}}}
//# sourceMappingURL=commonHelpers.js.map

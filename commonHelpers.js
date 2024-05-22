import{S as c,i as m}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const u="43997870-ac002090f9f8b16e802d8cd1f",d="https://pixabay.com/api/",f=a=>{const e=new URLSearchParams({q:a,key:u,image_type:"photo",safesearch:"true",orientation:"horizontal",height:"200px"});return fetch(`${d}?${e}`).then(t=>{if(!t.ok)throw new Error;return t.json()})},h=a=>a.map(e=>`<li class="img-card">
            <a href="${e.largeImageURL}" class="card-link">
                <img 
                class="img"
                src="${e.largeImageURL}" 
                alt="${e.tags}">
            </a>
        <ul class="params-list">
            <li class="params-items">Likes</li>
            <li class="params-items">Views</li>
            <li class="params-items">Comments</li>
            <li class="params-items">Downloads</li>
        </ul>
        <ul class="params-list">
            <li class="params-item">${e.likes}</li>
            <li class="params-item">${e.views}</li>
            <li class="params-item">${e.comments}</li>
            <li class="params-item">${e.downloads}</li>
        </ul>`).join(""),i={form:document.querySelector(".form"),galleryList:document.querySelector(".card-list"),loader:document.querySelector(".loader")};function n(a,e="error"){m[e]({message:a,position:"topRight",maxWidth:"300px"})}function p(a){a.preventDefault();const e=a.target.elements.searchKeywords.value.trim();if(e===""){n("Sorry, there are no images matching your search query. Please try again!"),i.galleryList.innerHTML="";return}i.loader.classList.remove("is-hidden"),f(e).then(t=>{if(t.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}return t}).then(t=>{const o=h(t.hits);i.galleryList.innerHTML=o,new c(".card-list a")}).catch(t=>{console.error("Error:",t)}).finally(()=>{a.target.reset(),i.loader.classList.add("is-hidden")})}i.form.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map

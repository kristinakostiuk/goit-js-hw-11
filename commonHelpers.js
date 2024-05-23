import{S as c,i as m}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const u="43997870-ac002090f9f8b16e802d8cd1f",d="https://pixabay.com/api/",f=s=>{const e=new URLSearchParams({q:s,key:u,image_type:"photo",safesearch:"true",orientation:"horizontal",height:"200px"});return fetch(`${d}?${e}`).then(i=>{if(!i.ok)throw new Error;return i.json()})},h=s=>s.map(e=>`<li class="img-card">
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
        </ul>`).join(""),a={form:document.querySelector(".form"),galleryList:document.querySelector(".card-list"),loader:document.querySelector(".loader")},p=new c(".card-list a");function n(s,e="error"){m[e]({message:s,position:"topRight",maxWidth:"300px"})}function y(s){s.preventDefault();const e=s.target.elements.searchKeywords.value.trim();if(e===""){n("Sorry, there are no images matching your search query. Please try again!"),a.galleryList.innerHTML="";return}a.loader.classList.remove("is-hidden"),f(e).then(i=>{if(i.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!"),a.galleryList.innerHTML="";return}return i}).then(i=>{const o=h(i.hits);a.galleryList.innerHTML=o,p.refresh()}).catch(i=>{}).finally(()=>{s.target.reset(),a.loader.classList.add("is-hidden")})}a.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map

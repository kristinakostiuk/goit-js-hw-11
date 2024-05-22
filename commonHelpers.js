import{i as n,S as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const m="43997870-ac002090f9f8b16e802d8cd1f",u="https://pixabay.com/api/",d=i=>{const e=new URLSearchParams({q:i,key:m,image_type:"photo",safesearch:"true",orientation:"horizontal",height:"200px"});return fetch(`${u}?${e}`).then(t=>{if(!t.ok)throw new Error;return t.json()})},h=i=>i.map(e=>`<li class="img-card">
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
        </ul>`).join(""),o={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-btn"),galleryList:document.querySelector(".card-list"),loader:document.querySelector(".loader")};function f(i){i.preventDefault();const e=i.target.elements.searchKeywords.value.trim();if(e===""){o.galleryList.innerHTML="",i.target.reset(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}o.loader.classList.remove("is-hidden"),d(e).then(t=>(t.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"}),t)).then(t=>{const a=h(t.hits);o.galleryList.innerHTML=a,new c(".card-list a")}).catch(t=>{console.error("Error:",t),n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight",maxWidth:"300px"})}).finally(()=>{i.target.reset(),o.loader.classList.add("is-hidden")})}o.form.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map

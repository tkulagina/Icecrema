(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();let e=0;!function t(){let o,n=document.getElementsByClassName("mySlides");for(o=0;o<n.length;o++)n[o].style.display="none";e++,e>n.length&&(e=1);n[e-1].style.display="block",setTimeout(t,3e3)}();
//# sourceMappingURL=index.c3f01d57.js.map

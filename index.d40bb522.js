(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();let e=0;!function t(){let o,c=document.getElementsByClassName("mySlides");for(o=0;o<c.length;o++)c[o].style.display="none";e++,e>c.length&&(e=1);c[e-1].style.display="block",setTimeout(t,3e3)}();document.querySelector(".marker-list").addEventListener("click",(e=>{if(e.target===e.currentTarget)return;const t=document.querySelector(".customer-box.is-active");t&&t.classList.remove("is-active");const o=e.target.dataset.id;document.querySelector(`#${o}`).classList.add("is-active")}));
//# sourceMappingURL=index.d40bb522.js.map

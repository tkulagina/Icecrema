!function(){var e,t,c,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=function(){var c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var o=0;!function e(){var t,c=document.getElementsByClassName("mySlides");for(t=0;t<c.length;t++)c[t].style.display="none";++o>c.length&&(o=1);c[o-1].style.display="block",setTimeout(e,3e3)}(),document.querySelector(".marker-list").addEventListener("click",(function(e){if(e.target!==e.currentTarget){var t=document.querySelector(".customer-box.is-active");t&&t.classList.remove("is-active");var c=e.target.dataset.id;document.querySelector("#".concat(c)).classList.add("is-active")}}))}();
//# sourceMappingURL=index.e68af021.js.map

(()=>{var e={562:()=>{const e=document.querySelector(".collapse-button"),t=document.querySelector(".text-container");e.addEventListener("click",(()=>{const e=t.offsetHeight;if(void 0===t.dataset.open||"false"===t.dataset.open){t.dataset.open="true";const e=t.scrollHeight;t.style.height=`${e}px`}else t.style.height=`${e}px`,t.dataset.open="false",setTimeout((()=>{t.style.height="0px"}),0)})),t.addEventListener("transitionend",(()=>{"0px"!==t.style.height&&(t.style.height="auto")}))}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(562)})()})();
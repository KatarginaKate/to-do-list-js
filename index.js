import{n as a}from"./assets/vendor-BY9c7rfI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c={headerForm:document.querySelector(".header-form"),tasksList:document.querySelector(".tasks-list")};function l(o){const r=`
            <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${o.name}</h3>
      <p>${o.description}</p>
  </li>
        `;c.tasksList.insertAdjacentHTML("beforeend",r)}function u(o){o.preventDefault();const{taskName:r,taskDescription:s}=o.target.elements;if(console.log(s),r.value.trim()===""||s.value.trim()===""){alert("Будь ласка, заповніть всі поля форми!");return}const i={name:r.value.trim(),description:s.value.trim(),id:a()};l(i),o.target.reset()}c.headerForm.addEventListener("submit",u);
//# sourceMappingURL=index.js.map

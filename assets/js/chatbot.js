/* Minimal stub. Replace with full chatbot.js from your doc if needed. */
(function(){
  const root = document.createElement("div");
  root.id = "swastic-chatbot";
  root.innerHTML = '<button class="scb-btn" aria-label="Chat">💬</button><div class="scb-panel"><div class="scb-header"><img src="assets/img/logo.svg" alt="Swastic" height="28"/><div style="margin-left:8px;font-weight:700">Swastic Drilling</div></div><div class="scb-body"></div><div class="scb-footer"><input class="scb-input" placeholder="Type…"/><button class="scb-send">Send</button></div></div>';
  document.body.appendChild(root);
  const btn = root.querySelector(".scb-btn");
  const panel = root.querySelector(".scb-panel");
  const body = root.querySelector(".scb-body");
  function bubble(t){ const d=document.createElement('div'); d.className='scb-msg'; d.innerHTML='<div class="scb-bubble b">'+t+'</div>'; body.appendChild(d); body.scrollTop=body.scrollHeight; }
  btn.onclick = ()=>{ panel.style.display = (panel.style.display==='flex'?'none':'flex'); if(panel.style.display==='flex'){ body.innerHTML=''; bubble('Hola / Hello — ¿Cómo podemos ayudar?'); } };
  panel.style.display='none'; panel.style.flexDirection='column';
})();
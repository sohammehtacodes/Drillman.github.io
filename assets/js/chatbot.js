/* Swastic Chatbot — simple Q&A + contact prompt */
(function () {
  const root = document.createElement("div");
  root.id = "swastic-chatbot";
  root.innerHTML =
    '<button class="scb-btn" aria-label="Chat">💬</button>' +
    '<div class="scb-panel">' +
      '<div class="scb-header"><div style="margin-left:8px;font-weight:700">Swastic Chatbot</div></div>' +
      '<div class="scb-body"></div>' +
      '<div class="scb-footer"><input class="scb-input" placeholder="Type…"/><button class="scb-send">Send</button></div>' +
    '</div>';
  document.body.appendChild(root);

  const btn   = root.querySelector(".scb-btn");
  const panel = root.querySelector(".scb-panel");
  const body  = root.querySelector(".scb-body");
  const input = root.querySelector(".scb-input");
  const sendBtn = root.querySelector(".scb-send");

  /* Bubble helper: who = 'user' or 'bot' */
  function bubble(text, who = "bot") {
    const wrap = document.createElement("div");
    wrap.className = "scb-msg" + (who === "user" ? " user" : "");
    const clazz = who === "user" ? "a" : "b";
    wrap.innerHTML = '<div class="scb-bubble ' + clazz + '">' + text + "</div>";
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  /* Use the nav Products link so URLs work on every page depth */
  function getProductsHref() {
    const link = document.querySelector('a[href*="products/index.html"]');
    return link ? link.getAttribute("href") : "products/index.html";
  }

  function botReply() {
    const href = getProductsHref();
    bubble(
      'Which product are you interested in?<br>' +
      'Browse all products on our <a href="' + href + '">Products page</a>.<br>' +
      "If you can’t find what you’re looking for, please share your contact info (name, company, phone/email) and we’ll get in touch shortly."
    , "bot");
  }

  function send() {
    const text = (input.value || "").trim();
    if (!text) return;
    bubble(text, "user");
    input.value = "";
    botReply();
  }

  // Open/close + greeting
  btn.onclick = () => {
    panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    if (panel.style.display === "flex") {
      body.innerHTML = "";
      bubble("Hello — how can we help you? / Hola — ¿Cómo podemos ayudarle?", "bot");
    }
  };

  // Input handlers: Enter to send, button to send
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  panel.style.display = "none";
  panel.style.flexDirection = "column";
})();

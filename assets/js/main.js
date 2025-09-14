
(function(){
  const menuBtn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('nav ul');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Defer loading any non-critical iframes (replace data-src -> src on idle)
  const iframes = document.querySelectorAll('iframe[data-src]');
  const onIdle = window.requestIdleCallback || function(cb){return setTimeout(cb, 1)};
  onIdle(()=>{
    iframes.forEach(fr=>{ fr.src = fr.dataset.src; });
  });
})();

// Navbar scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
});

// Mobile menu
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}

// Scroll reveal
const obs=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*80);
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ===== Brands carousel (Lenskart-style smooth infinite slide) =====
const brandTrack=document.getElementById('brandsTrack');
let brandIndex=0, brandOrig=0, brandStep=0, brandTimer=null, brandListenersAdded=false;
const BRAND_GAP=24;            // must match CSS gap
const BRAND_INTERVAL=2800;    // auto-slide speed (ms)

function brandMeasure(){
  if(!brandTrack) return;
  const card=brandTrack.querySelector('.brand-card');
  if(card) brandStep=card.getBoundingClientRect().width+BRAND_GAP;
}

function brandApply(animate){
  if(!brandTrack) return;
  brandTrack.style.transition=animate?'transform .6s cubic-bezier(.4,0,.2,1)':'none';
  brandTrack.style.transform='translateX('+(-brandIndex*brandStep)+'px)';
  const active=((brandIndex-brandOrig)%brandOrig+brandOrig)%brandOrig;
  document.querySelectorAll('.bnav-dot').forEach((d,i)=>d.classList.toggle('active',i===active));
}

function nextBrand(){ brandIndex++; brandApply(true); }
function slideBrands(dir){ brandIndex+=dir; brandApply(true); brandResetTimer(); }
function goBrand(i){ brandIndex=brandOrig+i; brandApply(true); brandResetTimer(); }
function brandStart(){ if(brandTrack){ if(brandTimer)clearInterval(brandTimer); brandTimer=setInterval(nextBrand,BRAND_INTERVAL); } }
function brandResetTimer(){ if(brandTimer){clearInterval(brandTimer);brandTimer=null;} brandStart(); }

function brandOneTimeListeners(){
  if(brandListenersAdded||!brandTrack) return;
  brandListenersAdded=true;
  brandTrack.addEventListener('transitionend',(e)=>{
    if(e.target!==brandTrack||e.propertyName!=='transform') return;
    if(brandIndex>=brandOrig*2){ brandIndex-=brandOrig; brandApply(false); }
    else if(brandIndex<brandOrig){ brandIndex+=brandOrig; brandApply(false); }
  });
  // Brands slider: tab background me jaaye to timer rok do (warna counter badhta rehta aur slide gayab ho jaati); wapas aane par position theek karke chaalu karo
  document.addEventListener('visibilitychange',function(){
    if(document.hidden){ if(brandTimer){clearInterval(brandTimer);brandTimer=null;} }
    else {
      brandMeasure();
      if(brandOrig>0){ brandIndex=brandOrig + (((brandIndex-brandOrig)%brandOrig)+brandOrig)%brandOrig; }
      brandApply(false);
      brandResetTimer();
    }
  });
  window.addEventListener('resize',()=>{ brandMeasure(); brandApply(false); });
}

function setupBrands(){
  if(!brandTrack) return;
  if(brandTimer){clearInterval(brandTimer);brandTimer=null;}   // re-run safe
  const cards=Array.from(brandTrack.children);
  brandOrig=cards.length;
  if(brandOrig===0) return;
  // clone full set after AND before, for seamless looping both directions
  cards.forEach(c=>{const cl=c.cloneNode(true);cl.classList.add('visible');brandTrack.appendChild(cl);});
  cards.slice().reverse().forEach(c=>{const cl=c.cloneNode(true);cl.classList.add('visible');brandTrack.insertBefore(cl,brandTrack.firstChild);});
  brandTrack.querySelectorAll('.brand-card').forEach(c=>c.classList.add('visible'));
  // build dots
  const dotsWrap=document.getElementById('brandDots');
  if(dotsWrap){
    dotsWrap.innerHTML='';
    for(let i=0;i<brandOrig;i++){
      const d=document.createElement('div');
      d.className='bnav-dot'+(i===0?' active':'');
      d.onclick=()=>goBrand(i);
      dotsWrap.appendChild(d);
    }
  }
  brandIndex=brandOrig; // start on first real card
  brandMeasure();
  brandApply(false);
  brandStart();
  brandOneTimeListeners();
}
setupBrands();
// Firebase dynamic brands aane par isse dobara setup hota hai:
window.refreshBrandsCarousel=setupBrands;

// Form submit
function handleSubmit(){
  const btn=document.querySelector('.submit-btn');
  btn.textContent='✅ Inquiry Sent! We will contact you soon.';
  btn.style.background='linear-gradient(135deg,#2e7d32,#4caf50)';
  setTimeout(()=>{
    btn.textContent='Send Inquiry →';
    btn.style.background='';
  },3000);
}

// ===== Hero image slider (seamless, drift-proof) — rebuildable =====
window.buildHero = function(){
  const track=document.getElementById('hsTrack');
  const dotsWrap=document.getElementById('heroDots');
  const hero=document.getElementById('heroSlides');
  if(!track) return;
  // teardown previous instance (timer, observer, visibility handler, clone, dots)
  if(window.__heroTimer){ clearInterval(window.__heroTimer); window.__heroTimer=null; }
  if(window.__heroObs){ try{ window.__heroObs.disconnect(); }catch(e){} window.__heroObs=null; }
  if(window.__heroVis){ document.removeEventListener('visibilitychange', window.__heroVis); window.__heroVis=null; }
  track.querySelectorAll('.hero-slide.__clone').forEach(c=>c.remove());
  if(dotsWrap) dotsWrap.innerHTML='';
  const slides=track.querySelectorAll('.hero-slide');
  if(!slides.length) return;
  const N=slides.length;
  const EASE='transform .7s cubic-bezier(.4,0,.2,1)';
  const clone=slides[0].cloneNode(true); clone.classList.add('__clone'); track.appendChild(clone);
  let idx=0, inView=true;
  for(let i=0;i<N;i++){ const d=document.createElement('div'); d.className='hdot'+(i===0?' active':''); d.onclick=()=>{go(i);reset();}; if(dotsWrap) dotsWrap.appendChild(d); }
  const dots=dotsWrap?dotsWrap.querySelectorAll('.hdot'):[];
  function setDots(){ const a=((idx%N)+N)%N; dots.forEach((d,i)=>d.classList.toggle('active',i===a)); }
  function snap(n){ idx=n; track.style.transition='none'; track.style.transform='translateX('+(-idx*100)+'%)'; void track.offsetWidth; track.style.transition=EASE; setDots(); }
  function go(n){ idx=n; track.style.transition=EASE; track.style.transform='translateX('+(-idx*100)+'%)'; setDots(); }
  track.addEventListener('transitionend',function(e){ if(e.target!==track) return; if(idx>=N) snap(0); });
  function next(){ if(idx>=N){ snap(0); } go(idx+1); }
  function stop(){ if(window.__heroTimer){clearInterval(window.__heroTimer);window.__heroTimer=null;} }
  function start(){ stop(); if(inView && !document.hidden) window.__heroTimer=setInterval(next,4500); }
  function reset(){ start(); }
  if('IntersectionObserver' in window && hero){
    window.__heroObs=new IntersectionObserver(function(ents){ ents.forEach(function(en){ inView=en.isIntersecting; if(inView){ if(idx>=N) snap(0); start(); } else stop(); }); },{threshold:0.15});
    window.__heroObs.observe(hero);
  }
  window.__heroVis=function(){ if(document.hidden){ stop(); } else { if(idx>=N) snap(0); start(); } };
  document.addEventListener('visibilitychange', window.__heroVis);
  snap(0); start();
};
window.buildHero();

// ===== Testimonials auto-slider (cards slide hote rehte hain) =====
(function(){
  const grid = document.getElementById('testiGrid');
  if(!grid) return;
  let busy = false;
  function perView(){ return window.innerWidth <= 860 ? 1 : 3; }
  setInterval(function(){
    const cards = grid.children;
    if(busy || cards.length <= perView()) return;
    busy = true;
    const first = cards[0];
    const gap = parseFloat(getComputedStyle(grid).gap) || 24;
    const shift = first.getBoundingClientRect().width + gap;
    grid.style.transition = 'transform 0.8s ease';
    grid.style.transform = 'translateX(-' + shift + 'px)';
    setTimeout(function(){
      grid.style.transition = 'none';
      grid.style.transform = 'none';
      grid.appendChild(first);
      busy = false;
    }, 820);
  }, 3500);
})();
// ===== Count-up for numbers (har baar view me aane par ginti) — sabhi .cf-count =====
(function(){
  const els=document.querySelectorAll('.cf-count');
  if(!els.length) return;
  function animate(el){
    const target=parseInt(el.getAttribute('data-target')||'0',10);
    if(el._raf) cancelAnimationFrame(el._raf);   // pehle wali animation rok do
    const dur=1500, t0=performance.now();
    (function tick(now){
      const p=Math.min((now-t0)/dur,1);
      el.textContent=Math.round(target*(1-Math.pow(1-p,3)));
      if(p<1){ el._raf=requestAnimationFrame(tick); } else { el.textContent=target; el._raf=null; }
    })(t0);
  }
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(function(ents){
      ents.forEach(function(e){
        if(e.isIntersecting){
          animate(e.target);                     // har baar view me aaye to dobara chale
        } else {
          if(e.target._raf){ cancelAnimationFrame(e.target._raf); e.target._raf=null; }
          e.target.textContent='0';              // bahar jaate hi 0 par reset, taaki agli baar fresh chale
        }
      });
    },{threshold:0.4});
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(animate);
  }
})();

// ===== Language toggle: English / Hindi (Google Translate) =====
(function(){
  function setCookie(n,v){
    var host=location.hostname;
    document.cookie=n+"="+v+";path=/";
    document.cookie=n+"="+v+";path=/;domain="+host;
    if(host.indexOf('.')>0){ document.cookie=n+"="+v+";path=/;domain=."+host; }
  }
  function getCookie(n){ var m=document.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)'); return m?m.pop():''; }
  function currentLang(){ var c=getCookie('googtrans'); return (c && c.indexOf('/hi')>-1) ? 'hi' : 'en'; }
  function switchLang(lang){
    setCookie('googtrans', lang==='hi' ? '/en/hi' : '/en/en');
    location.reload();
  }
  // brand / company names ko translate se bachao (proper naam waise hi rahein)
  try{
    document.querySelectorAll('.brand-name,.pd-brand-name,.group-name,.gal-cap,.nav-brand-name,.footer-brand-name,.testi-name,.product-name,.pd-title,.tag,.pd-tag,.pd-brand-tag,.brand-tag,.sbar-num,.cf-count').forEach(function(el){
      el.classList.add('notranslate'); el.setAttribute('translate','no');
    });
  }catch(e){}
  // hidden google element + loader
  if(!document.getElementById('google_translate_element')){
    var gdiv=document.createElement('div'); gdiv.id='google_translate_element'; gdiv.style.display='none';
    document.body.appendChild(gdiv);
  }
  window.googleTranslateElementInit=function(){
    try{ new google.translate.TranslateElement({pageLanguage:'en', includedLanguages:'en,hi', autoDisplay:false}, 'google_translate_element'); }catch(e){}
  };
  var gs=document.createElement('script');
  gs.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(gs);
  // toggle button in navbar
  var nav=document.getElementById('navLinks');
  if(nav){
    var btn=document.createElement('a');
    btn.href='javascript:void(0)';
    btn.className='lang-toggle notranslate';
    btn.setAttribute('translate','no');
    function render(){ btn.textContent = (currentLang()==='hi') ? 'English' : 'हिंदी'; }
    render();
    btn.onclick=function(){ switchLang(currentLang()==='hi'?'en':'hi'); };
    var cta=nav.querySelector('.nav-cta');
    if(cta) nav.insertBefore(btn, cta); else nav.appendChild(btn);
  }
})();

// ===== Reliable trigger for top-to-bottom "open" image reveal (.rv-open) =====
(function(){
  var els=document.querySelectorAll('.rv-open');
  if(!els.length) return;
  function check(){
    var vh=window.innerHeight||document.documentElement.clientHeight;
    els.forEach(function(e){
      if(e.classList.contains('visible')) return;
      var r=e.getBoundingClientRect();
      if(r.top < vh*0.85 && r.bottom > 0){ e.classList.add('visible'); }
    });
  }
  window.addEventListener('scroll',check,{passive:true});
  window.addEventListener('resize',check);
  check();
})();

// ===== Video: scroll karke bahar jaate hi pause + start (poster) par reset =====
(function(){
  var vids=document.querySelectorAll('.video-el');
  if(!vids.length) return;
  // Ek time par ek hi video chale — koi play ho to baaki pause
  vids.forEach(function(v){
    v.addEventListener('play',function(){
      vids.forEach(function(o){ if(o!==v && !o.paused){ o.pause(); } });
    });
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting){
          var v=e.target;
          try{
            if(!v.paused) v.pause();
            v.currentTime=0;
            v.load();            // wapas poster (pehle jaisa) dikha do
          }catch(err){}
        }
      });
    },{threshold:0.2});
    vids.forEach(function(v){ io.observe(v); });
  }
})();

// ---------- Dynamic product card builder (admin se add kiye naye products) ----------
window.makeProductCard = function(id, x){
  function esc2(s){ return String(s==null?"":s); }
  var a=document.createElement("a");
  a.href="product.html?id="+encodeURIComponent(id);
  a.className="product-card reveal";
  var img=document.createElement("img");
  img.className="product-img"; img.loading="lazy";
  img.src=x.photoURL||"images/c2.jpg?v=1"; img.alt=esc2(x.name||"Product");
  a.appendChild(img);
  var ic=document.createElement("div"); ic.className="product-icon pi-g"; ic.textContent="📦"; a.appendChild(ic);
  var nm=document.createElement("div"); nm.className="product-name"; nm.textContent=esc2(x.name||"Product"); a.appendChild(nm);
  var ds=document.createElement("p"); ds.className="product-desc";
  var dtext=String(x.desc||"");
  // card par sirf pehli 160 char (chhota preview)
  if(dtext.length>160) dtext=dtext.slice(0,157).replace(/\s+\S*$/,"")+"…";
  ds.textContent=dtext; a.appendChild(ds);
  if(x.tags){
    var tg=document.createElement("div"); tg.className="product-tags";
    String(x.tags).split(",").forEach(function(t){ t=t.trim(); if(!t) return; var s=document.createElement("span"); s.className="tag tgn"; s.textContent=t; tg.appendChild(s); });
    if(tg.children.length) a.appendChild(tg);
  }
  var cta=document.createElement("span"); cta.className="product-cta";
  cta.innerHTML='View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  a.appendChild(cta);
  return a;
};

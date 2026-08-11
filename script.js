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
  // Brands slider hamesha auto-move kare (scroll ya tab-switch ke baad bhi)
  document.addEventListener('visibilitychange',function(){ if(!document.hidden) brandResetTimer(); });
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

// ===== Hero image slider (seamless, drift-proof) =====
(function(){
  const track=document.getElementById('hsTrack');
  const slides=document.querySelectorAll('.hero-slide');
  const dotsWrap=document.getElementById('heroDots');
  const hero=document.getElementById('heroSlides');
  if(!track||!slides.length) return;
  const N=slides.length;
  const EASE='transform .7s cubic-bezier(.4,0,.2,1)';
  // clone first slide at end for seamless loop
  track.appendChild(slides[0].cloneNode(true));
  let idx=0, timer=null, inView=true;
  for(let i=0;i<N;i++){
    const d=document.createElement('div');
    d.className='hdot'+(i===0?' active':'');
    d.onclick=()=>{go(i);reset();};
    if(dotsWrap) dotsWrap.appendChild(d);
  }
  const dots=document.querySelectorAll('.hero-dots .hdot');
  function setDots(){ const a=((idx%N)+N)%N; dots.forEach((d,i)=>d.classList.toggle('active',i===a)); }
  // snap to a valid real slide instantly (no animation) — recovers from any drift
  function snap(n){
    idx=n;
    track.style.transition='none';
    track.style.transform='translateX('+(-idx*100)+'%)';
    void track.offsetWidth;            // force reflow
    track.style.transition=EASE;
    setDots();
  }
  function go(n){
    idx=n;
    track.style.transition=EASE;
    track.style.transform='translateX('+(-idx*100)+'%)';
    setDots();
  }
  track.addEventListener('transitionend',function(e){
    if(e.target!==track) return;
    if(idx>=N) snap(0);                 // reached clone (or beyond) -> back to first
  });
  function next(){
    if(idx>=N){ snap(0); }              // safety: never sit past the clone
    go(idx+1);
  }
  function stop(){ if(timer){clearInterval(timer);timer=null;} }
  function start(){ stop(); if(inView && !document.hidden) timer=setInterval(next,4500); }
  function reset(){ start(); }
  // Pause auto-slide when hero is off-screen; resume (and fix position) when it returns
  if('IntersectionObserver' in window && hero){
    new IntersectionObserver(function(ents){
      ents.forEach(function(en){
        inView=en.isIntersecting;
        if(inView){ if(idx>=N) snap(0); start(); }
        else stop();
      });
    },{threshold:0.15}).observe(hero);
  }
  start();
  document.addEventListener('visibilitychange',function(){
    if(document.hidden){ stop(); }
    else { if(idx>=N) snap(0); start(); }
  });
})();

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
// ===== Count-up for capacity number (scroll par ginti) =====
(function(){
  const el=document.querySelector('.cf-count');
  if(!el) return;
  const target=parseInt(el.getAttribute('data-target')||'0',10);
  let done=false;
  const io=new IntersectionObserver(function(ents){
    ents.forEach(function(e){
      if(e.isIntersecting && !done){
        done=true;
        const dur=1500, t0=performance.now();
        (function tick(now){
          const p=Math.min((now-t0)/dur,1);
          const val=Math.round(target*(1-Math.pow(1-p,3)));
          el.textContent=val;
          if(p<1) requestAnimationFrame(tick); else el.textContent=target;
        })(t0);
      }
    });
  },{threshold:0.4});
  io.observe(el);
})();

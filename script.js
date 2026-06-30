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
function brandStart(){ if(brandTrack) brandTimer=setInterval(nextBrand,BRAND_INTERVAL); }
function brandResetTimer(){ if(brandTimer){clearInterval(brandTimer);brandTimer=null;} brandStart(); }

function brandOneTimeListeners(){
  if(brandListenersAdded||!brandTrack) return;
  brandListenersAdded=true;
  brandTrack.addEventListener('transitionend',(e)=>{
    if(e.target!==brandTrack||e.propertyName!=='transform') return;
    if(brandIndex>=brandOrig*2){ brandIndex-=brandOrig; brandApply(false); }
    else if(brandIndex<brandOrig){ brandIndex+=brandOrig; brandApply(false); }
  });
  const wrap=document.querySelector('.brands-slider-wrap');
  if(wrap){
    wrap.addEventListener('mouseenter',()=>{if(brandTimer){clearInterval(brandTimer);brandTimer=null;}});
    wrap.addEventListener('mouseleave',brandStart);
  }
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

// ===== Hero image slideshow (auto-rotate with pause) =====
(function(){
  const slides=document.querySelectorAll('.hero-slide');
  const dotsWrap=document.getElementById('heroDots');
  if(!slides.length) return;
  let idx=0, timer=null;
  slides.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='hdot'+(i===0?' active':'');
    d.onclick=()=>{go(i);reset();};
    if(dotsWrap) dotsWrap.appendChild(d);
  });
  const dots=document.querySelectorAll('.hero-dots .hdot');
  function go(n){
    slides[idx].classList.remove('active'); if(dots[idx])dots[idx].classList.remove('active');
    idx=(n+slides.length)%slides.length;
    slides[idx].classList.add('active'); if(dots[idx])dots[idx].classList.add('active');
  }
  function next(){ go(idx+1); }
  function start(){ timer=setInterval(next,4500); }   // ~4.5s pause per slide
  function reset(){ if(timer){clearInterval(timer);timer=null;} start(); }
  start();
  const hero=document.querySelector('.hero');
  if(hero){
    hero.addEventListener('mouseenter',()=>{if(timer){clearInterval(timer);timer=null;}});
    hero.addEventListener('mouseleave',start);
  }
})();
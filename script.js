/*!
Ikshit Sethi | script.js | source provenance 6d7d7ef3
Copyright 2026 Ikshit Sethi. Original interaction implementation is reserved.
Permission terms: COPYRIGHT.md; lawful exceptions and third-party rights remain applicable.
Official publication: https://ikshitsethi.in/
*/
const button=document.querySelector('#expand');button.addEventListener('click',()=>{const entries=[...document.querySelectorAll('.career')];const open=entries.some(e=>!e.open);entries.forEach(e=>e.open=open);button.textContent=open?'Collapse all roles':'Expand all roles';});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.06});document.querySelectorAll('.project,.award-grid article,.writing-list article').forEach(e=>{e.classList.add('reveal');observer.observe(e)});
const gallery=document.querySelector('#gallery');
if(gallery){
 const group=gallery.querySelector('.gallery-group');let pausedUntil=0,hover=false,drag=null,moved=false,last=0,autoPosition=0;
 const pause=()=>pausedUntil=performance.now()+4500;
 const normalizeGallery=()=>{const width=group.offsetWidth;if(!width)return;let shift=0;if(gallery.scrollLeft>=width)shift=-width;else if(gallery.scrollLeft<1)shift=width;if(shift){gallery.scrollLeft+=shift;if(drag)drag.left+=shift;}};
 gallery.addEventListener('scroll',normalizeGallery,{passive:true});
 gallery.addEventListener('mouseenter',()=>{if(matchMedia('(hover: hover)').matches)hover=true;});gallery.addEventListener('mouseleave',()=>hover=false);gallery.addEventListener('touchstart',pause,{passive:true});gallery.addEventListener('touchend',pause,{passive:true});
 gallery.addEventListener('wheel',event=>{if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){event.preventDefault();gallery.scrollLeft+=event.deltaY;}pause();},{passive:false});
 gallery.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={x:event.clientX,left:gallery.scrollLeft};moved=false;pause();});
 window.addEventListener('pointermove',event=>{if(!drag)return;const distance=event.clientX-drag.x;if(Math.abs(distance)>5){moved=true;gallery.classList.add('dragging');gallery.scrollLeft=drag.left-distance;}});
 window.addEventListener('pointerup',()=>{drag=null;gallery.classList.remove('dragging');pause();});
 gallery.addEventListener('click',event=>{if(moved){event.preventDefault();moved=false;}});
 gallery.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();gallery.scrollLeft+=event.key==='ArrowRight'?240:-240;pause();}});
 const randomStart=()=>{if(group.offsetWidth)gallery.scrollLeft=Math.floor(Math.random()*group.offsetWidth);};if(document.readyState==='complete')randomStart();else window.addEventListener('load',randomStart,{once:true});
 const frame=time=>{const dt=last?Math.min(time-last,50):0;last=time;if(!hover&&!drag&&time>pausedUntil&&!(matchMedia('(hover: hover)').matches&&gallery.contains(document.activeElement))&&!matchMedia('(prefers-reduced-motion: reduce)').matches){autoPosition+=dt*.035;if(autoPosition>=1){const step=Math.floor(autoPosition);autoPosition-=step;gallery.scrollLeft+=step;}normalizeGallery();}requestAnimationFrame(frame);};requestAnimationFrame(frame);
}
(()=>{
 const rail=document.querySelector('.iit-gallery');if(!rail)return;
 const group=rail.firstElementChild,copy=group.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.querySelectorAll('a').forEach(a=>a.tabIndex=-1);rail.append(copy);
 const wrap=rail.closest('.iit-gallery-wrap'),toggle=wrap.querySelector('[data-iit-pause]');let until=0,paused=false,hover=false,drag=null,moved=false,last=0,fraction=0;
 const hold=()=>until=performance.now()+4500;
 const normalize=()=>{const width=group.offsetWidth;if(!width)return;if(rail.scrollLeft>=width)rail.scrollLeft-=width;else if(rail.scrollLeft<=0)rail.scrollLeft+=width;};
 const advance=amount=>{normalize();rail.scrollLeft+=amount;normalize();hold();};
 wrap.querySelector('[data-iit-prev]').onclick=()=>advance(-298);wrap.querySelector('[data-iit-next]').onclick=()=>advance(298);
 toggle.onclick=()=>{paused=!paused;toggle.textContent=paused?'Play':'Pause';toggle.setAttribute('aria-label',paused?'Resume automatic scrolling':'Pause automatic scrolling');};
 rail.addEventListener('mouseenter',()=>{if(matchMedia('(hover: hover)').matches)hover=true;});rail.addEventListener('mouseleave',()=>hover=false);
 rail.addEventListener('touchstart',hold,{passive:true});rail.addEventListener('touchend',hold,{passive:true});rail.addEventListener('scroll',normalize,{passive:true});
 rail.addEventListener('wheel',e=>{e.preventDefault();advance(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY);},{passive:false});
 rail.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();advance(e.key==='ArrowRight'?298:-298);}});
 rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag={x:e.clientX,left:rail.scrollLeft};moved=false;hold();});
 window.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>5){moved=true;rail.classList.add('dragging');rail.scrollLeft=drag.left-dx;}});
 window.addEventListener('pointerup',()=>{if(drag){drag=null;rail.classList.remove('dragging');hold();}});
 rail.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false;}});
 const start=()=>rail.scrollLeft=Math.max(1,Math.floor(Math.random()*group.offsetWidth));if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true});
 const frame=t=>{const dt=last?Math.min(t-last,50):0;last=t;if(!paused&&!hover&&!drag&&t>until&&!rail.matches(':focus-within')&&!document.hidden&&!matchMedia('(prefers-reduced-motion: reduce)').matches){fraction+=dt*.075;if(fraction>=1){const step=Math.floor(fraction);fraction-=step;rail.scrollLeft+=step;normalize();}}requestAnimationFrame(frame);};requestAnimationFrame(frame);
})();


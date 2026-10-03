const button=document.querySelector('#expand');button.addEventListener('click',()=>{const entries=[...document.querySelectorAll('.career')];const open=entries.some(e=>!e.open);entries.forEach(e=>e.open=open);button.textContent=open?'Collapse all roles':'Expand all roles';});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.06});document.querySelectorAll('.project,.award-grid article,.writing-list article').forEach(e=>{e.classList.add('reveal');observer.observe(e)});
const gallery=document.querySelector('#gallery');
if(gallery){
 const group=gallery.querySelector('.gallery-group');let pausedUntil=0,hover=false,drag=null,moved=false,last=0,autoPosition=0;
 const pause=()=>pausedUntil=performance.now()+4500;
 gallery.addEventListener('mouseenter',()=>{if(matchMedia('(hover: hover)').matches)hover=true;});gallery.addEventListener('mouseleave',()=>hover=false);gallery.addEventListener('touchstart',pause,{passive:true});gallery.addEventListener('touchend',pause,{passive:true});
 gallery.addEventListener('wheel',event=>{if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){event.preventDefault();gallery.scrollLeft+=event.deltaY;}pause();},{passive:false});
 gallery.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={x:event.clientX,left:gallery.scrollLeft};moved=false;pause();});
 window.addEventListener('pointermove',event=>{if(!drag)return;const distance=event.clientX-drag.x;if(Math.abs(distance)>5){moved=true;gallery.classList.add('dragging');gallery.scrollLeft=drag.left-distance;}});
 window.addEventListener('pointerup',()=>{drag=null;gallery.classList.remove('dragging');pause();});
 gallery.addEventListener('click',event=>{if(moved){event.preventDefault();moved=false;}});
 gallery.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();gallery.scrollLeft+=event.key==='ArrowRight'?240:-240;pause();}});
 const randomStart=()=>{if(group.offsetWidth)gallery.scrollLeft=Math.floor(Math.random()*group.offsetWidth);};if(document.readyState==='complete')randomStart();else window.addEventListener('load',randomStart,{once:true});
 const frame=time=>{const dt=last?Math.min(time-last,50):0;last=time;if(!hover&&!drag&&time>pausedUntil&&!(matchMedia('(hover: hover)').matches&&gallery.contains(document.activeElement))&&!matchMedia('(prefers-reduced-motion: reduce)').matches){autoPosition+=dt*.035;if(autoPosition>=1){const step=Math.floor(autoPosition);autoPosition-=step;gallery.scrollLeft+=step;}if(gallery.scrollLeft>=group.offsetWidth)gallery.scrollLeft-=group.offsetWidth;}requestAnimationFrame(frame);};requestAnimationFrame(frame);
}

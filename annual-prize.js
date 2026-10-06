/*!
Copyright (c) 2026 Ikshit Sethi. All rights reserved.
Original website code, design, writing and original media: Ikshit Sethi.
No licence to copy, republish, redistribute, sell or adapt original material is granted
without prior written permission, except uses permitted by applicable law.
Third-party libraries, logos, certificates and media retain their respective owners' rights.
Official source: https://ikshitsethi.in/ | Ownership marker: IKSHIT-SETHI-PORTFOLIO-2026
*/
(()=>{
const video=document.querySelector('.annual-video');if(!video)return;
const sound=document.querySelector('.annual-sound-button'),flash=document.querySelector('.annual-mute-flash'),pause=document.querySelector('.annual-toggle-play');let firstCycle=true;
video.controls=false;video.loop=false;
function sync(){pause.textContent=video.paused?'Play':'Pause';pause.setAttribute('aria-label',video.paused?'Play ceremony':'Pause ceremony')}
video.addEventListener('play',sync);video.addEventListener('pause',sync);
pause.addEventListener('click',()=>{if(video.paused)video.play().catch(()=>{});else video.pause()});
video.addEventListener('ended',()=>{video.muted=true;video.loop=true;video.currentTime=0;if(firstCycle){firstCycle=false;flash.classList.add('visible');setTimeout(()=>flash.classList.remove('visible'),1700)}video.play().catch(()=>{})});
sound.addEventListener('click',()=>{firstCycle=true;video.loop=false;video.currentTime=0;video.muted=false;video.play().catch(()=>{})});
video.muted=false;video.play().catch(()=>{video.muted=true;video.play().catch(()=>{})});sync();
})();

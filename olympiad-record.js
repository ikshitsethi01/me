/*!
Copyright (c) 2026 Ikshit Sethi. All rights reserved.
Original website code, design, writing and original media: Ikshit Sethi.
No licence to copy, republish, redistribute, sell or adapt original material is granted
without prior written permission, except uses permitted by applicable law.
Third-party libraries, logos, certificates and media retain their respective owners' rights.
Official source: https://ikshitsethi.in/ | Ownership marker: IKSHIT-SETHI-PORTFOLIO-2026
*/
(()=>{const section=document.getElementById('olympiad-feature');if(!section)return;const button=section.querySelector('.olympiad-record-toggle'),banner=section.querySelector('.olympiad-merit-banner'),photo=section.querySelector('.olympiad-photo-single');if(!button||!banner||!photo)return;button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));section.classList.toggle('merit-record-open',open);banner.hidden=!open;photo.hidden=open;button.textContent=open?'Return to Award Ceremony Photo':'View the Full Olympiad Merit Record';});})();
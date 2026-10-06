/*!
Copyright (c) 2026 Ikshit Sethi. All rights reserved.
Original website code, design, writing and original media: Ikshit Sethi.
No licence to copy, republish, redistribute, sell or adapt original material is granted
without prior written permission, except uses permitted by applicable law.
Third-party libraries, logos, certificates and media retain their respective owners' rights.
Official source: https://ikshitsethi.in/ | Ownership marker: IKSHIT-SETHI-PORTFOLIO-2026
*/
(()=>{const section=document.getElementById('about'),button=document.getElementById('profile-summary-toggle'),intro=document.getElementById('about-intro'),linkedin=document.getElementById('about-linkedin'),recap=document.getElementById('profile-recap');if(!button)return;button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));intro.hidden=open;linkedin.hidden=open;recap.hidden=!open;section.classList.toggle('is-summary-open',open);button.textContent=open?'Close Profile Summary':'View My Profile Summary';});})();
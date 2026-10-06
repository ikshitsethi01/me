/*!
Ikshit Sethi | olympiad-record.js | source provenance c8663781
Copyright 2026 Ikshit Sethi. Original interaction implementation is reserved.
Permission terms: COPYRIGHT.md; lawful exceptions and third-party rights remain applicable.
Official publication: https://ikshitsethi.in/
*/
(()=>{const section=document.getElementById('olympiad-feature');if(!section)return;const button=section.querySelector('.olympiad-record-toggle'),banner=section.querySelector('.olympiad-merit-banner'),photo=section.querySelector('.olympiad-photo-single');if(!button||!banner||!photo)return;button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));section.classList.toggle('merit-record-open',open);banner.hidden=!open;photo.hidden=open;button.textContent=open?'Return to Award Ceremony Photo':'View the Full Olympiad Merit Record';});})();
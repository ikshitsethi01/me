/*!
Ikshit Sethi | profile-summary.js | source provenance e67d97f0
Copyright 2026 Ikshit Sethi. Original interaction implementation is reserved.
Permission terms: COPYRIGHT.md; lawful exceptions and third-party rights remain applicable.
Official publication: https://ikshitsethi.in/
*/
(()=>{const section=document.getElementById('about'),button=document.getElementById('profile-summary-toggle'),intro=document.getElementById('about-intro'),linkedin=document.getElementById('about-linkedin'),recap=document.getElementById('profile-recap');if(!button)return;button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));intro.hidden=open;linkedin.hidden=open;recap.hidden=!open;section.classList.toggle('is-summary-open',open);button.textContent=open?'Close Profile Summary':'View My Profile Summary';});})();
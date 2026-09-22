(function(){
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();


(function(){var url=encodeURIComponent(location.href);var title=encodeURIComponent(document.title);var fb=document.getElementById('shareFb');if(fb)fb.addEventListener('click',function(){window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'_blank','noopener');});var x=document.getElementById('shareX');if(x)x.addEventListener('click',function(){window.open('https://twitter.com/intent/tweet?url='+url+'&text='+title,'_blank','noopener');});var li=document.getElementById('shareLi');if(li)li.addEventListener('click',function(){window.open('https://www.linkedin.com/sharing/share-offsite/?url='+url,'_blank','noopener');});var mail=document.getElementById('shareMail');if(mail)mail.addEventListener('click',function(){location.href='mailto:?subject='+title+'&body='+url;});var copy=document.getElementById('shareCopy');if(copy)copy.addEventListener('click',function(){navigator.clipboard.writeText(location.href).then(function(){copy.classList.add('is-copied');copy.setAttribute('aria-label','Lien copie');setTimeout(function(){copy.classList.remove('is-copied');copy.setAttribute('aria-label','Copier le lien');},2000);});});})();
(function(){var fb=document.getElementById('shareFb');if(fb&&!document.getElementById('shareWa')){var wa=document.createElement('a');wa.className='share-btn';wa.id='shareWa';wa.target='_blank';wa.rel='noopener';wa.setAttribute('aria-label','Partager sur WhatsApp');wa.href='https://wa.me/?text='+encodeURIComponent(document.title+' '+location.href);wa.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.44.79 3.07 1.2 4.78 1.2h.01c5.46 0 9.91-4.45 9.91-9.91.01-5.46-4.44-9.91-9.91-9.91zm5.8 14.17c-.24.68-1.4 1.33-1.93 1.38-.5.05-1.03.26-3.46-.72-2.93-1.17-4.83-4.13-4.97-4.32-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.79-.36h.55c.18 0 .41-.03.63.48.24.58.82 2 .89 2.14.08.14.13.31.02.5-.1.19-.16.31-.31.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.77 1.28 1.66 2.08 1.14 1.02 2.1 1.34 2.4 1.49.29.14.46.12.63-.08.18-.2.75-.87.94-1.17.2-.29.4-.24.66-.14.27.1 1.72.82 2.02.97.29.15.48.22.55.34.08.12.08.68-.15 1.36z"/></svg>';fb.insertAdjacentElement('afterend',wa);}})();

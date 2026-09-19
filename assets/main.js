(function(){
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();


(function(){var url=encodeURIComponent(location.href);var title=encodeURIComponent(document.title);var fb=document.getElementById('shareFb');if(fb)fb.href='https://www.facebook.com/sharer/sharer.php?u='+url;var x=document.getElementById('shareX');if(x)x.href='https://twitter.com/intent/tweet?url='+url+'&text='+title;var li=document.getElementById('shareLi');if(li)li.href='https://www.linkedin.com/sharing/share-offsite/?url='+url;var mail=document.getElementById('shareMail');if(mail)mail.href='mailto:?subject='+title+'&body='+url;var copy=document.getElementById('shareCopy');if(copy)copy.addEventListener('click',function(){navigator.clipboard.writeText(location.href).then(function(){copy.classList.add('is-copied');copy.setAttribute('aria-label','Lien copie');setTimeout(function(){copy.classList.remove('is-copied');copy.setAttribute('aria-label','Copier le lien');},2000);});});})();

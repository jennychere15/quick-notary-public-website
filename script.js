document.addEventListener('DOMContentLoaded',()=>{
  const cal='https://calendar.app.google/HERnW7iBHC2KgWi48';
  const nav='<a href="index.html">Home</a><a href="services.html">Services</a><a href="in-office.html">Visit Our Office</a><a href="resources.html">Resources</a><a href="associate-notaries.html">Associate Notaries</a><a href="client-portal.html">Client Portal</a><a href="about.html">About</a><a href="contact.html">Contact</a><a class="nav-cta" href="'+cal+'" target="_blank" rel="noopener">Book</a>';
  document.querySelectorAll('.brand').forEach(b=>{b.innerHTML='<img class="brand-logo" src="assets/quick-notary-logo-original.jpg?v=20261004" alt="Quick Notary Public LLC">';});
  document.querySelectorAll('.main-nav').forEach(n=>n.innerHTML=nav);
  document.querySelectorAll('.topbar').forEach(t=>t.innerHTML='In-office · Bonita Springs · Mon–Fri 10 AM–4 PM &nbsp; | &nbsp; <a href="tel:+19414045379">941-404-5379</a>');
  document.querySelectorAll('.alertbar').forEach(t=>t.innerHTML='<strong>24/7 RON</strong> • SERVING CLIENTS NATIONWIDE &nbsp;&nbsp; <strong>7 DAYS</strong> • MOBILE NOTARY APPOINTMENTS THROUGHOUT FLORIDA');
  document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.setAttribute('aria-expanded','false');btn.addEventListener('click',()=>{const nav=btn.closest('.site-header').querySelector('.main-nav');const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close menu':'Open menu');});});
  document.querySelectorAll('.footer-logo').forEach(el=>{el.className='footer-brand';el.innerHTML='<img src="assets/quick-notary-logo-original.jpg?v=20261004" alt="Quick Notary Public LLC">';});
  if(!document.querySelector('.footer')){
    document.body.insertAdjacentHTML('beforeend','<footer class="footer"><div class="footer-grid"><div class="footer-brand"><img src="assets/quick-notary-logo-original.jpg?v=20261004" alt="Quick Notary Public LLC"><p>12+ years of experience. In-office in Bonita Springs, mobile throughout Florida, and remote online nationwide.</p></div><div><h4>Quick Links</h4><p><a href="services.html">Services</a><br><a href="resources.html">Resource Directory</a><br><a href="associate-notaries.html">Associate Notaries</a><br><a href="client-portal.html">Client Portal</a></p></div><div><h4>Contact</h4><p><a href="tel:+19414045379">941-404-5379</a><br><a href="mailto:Schedule.quicknotary@gmail.com">Schedule.quicknotary@gmail.com</a><br>11100 Bonita Beach Road, Unit 108-B-1&amp;2<br>Bonita Springs, FL 34135<br><a href="in-office.html">Visit our office →</a></p><p>In-office: Monday–Friday, 10 AM–4 PM<br>Mobile: by appointment, 7 days a week, anywhere in Florida<br>Remote online: 24/7 nationwide for eligible documents</p></div></div></footer>');
  }
  if(!document.querySelector('.contact-strip')){
    document.body.insertAdjacentHTML('beforeend','<div class="contact-strip"><a href="tel:+19414045379">Call</a><a href="sms:+19414045379">Text</a><a href="'+cal+'" target="_blank" rel="noopener">24/7 Book</a></div>');
  }
  const f=document.getElementById('serviceFinderForm');
  if(f){
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const service=document.getElementById('finderService').value,where=document.getElementById('finderWhere').value,res=document.getElementById('finderResult');
      let msg='',href=cal,label='Book now';
      if(service==='office'){msg='We see clients in-office at Oak Creek Crossing in Bonita Springs, Monday–Friday, 10 AM–4 PM.';href='in-office.html';label='Office address & directions'}
      else if(service==='ron'){msg=where==='florida'?'24/7 Remote Online Notary is available for eligible documents.':'We serve clients nationwide by Remote Online Notary for eligible documents, subject to platform, document and receiving-party requirements.';href='remote-online-notary.html';label='Explore 24/7 RON'}
      else if(service==='mobile'){msg=where==='florida'?'Mobile notary appointments are available 7 days a week throughout Florida by scheduling and availability.':'Our mobile notary service is Florida-based. For clients outside Florida, Remote Online Notary may be available for eligible documents.';href=where==='florida'?'mobile-notary.html':'remote-online-notary.html';label='View best option'}
      else if(service==='loan'){msg='Loan and real-estate signing support is available for title companies, lenders, signing services and private clients.';href='loan-signing.html';label='Loan signing services'}
      else if(service==='apostille'){msg='Apostille facilitation can help organize eligible documents and the correct state or federal authentication path.';href='apostille.html';label='Apostille support'}
      else{msg='Choose the service you need and we will guide you to the right appointment option.';href='services.html';label='View services'}
      res.innerHTML=msg+' <a href="'+href+'">'+label+' →</a>';res.classList.add('show');
    });
  }
  const search=document.getElementById('resourceSearch');
  if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('.resource-card').forEach(c=>c.dataset.hidden=String(q && !c.innerText.toLowerCase().includes(q)));});}
  const af=document.getElementById('associateForm');
  if(af){af.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(af);const body=[...fd.entries()].map(([k,v])=>k+': '+v).join('\n');location.href='mailto:Schedule.quicknotary@gmail.com?subject=Associate%20Notary%20Application&body='+encodeURIComponent(body);});}
});
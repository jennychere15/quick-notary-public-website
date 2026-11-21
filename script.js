document.addEventListener('DOMContentLoaded',()=>{
  const cal='https://calendar.app.google/HERnW7iBHC2KgWi48';
  document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.setAttribute('aria-expanded','false');btn.addEventListener('click',()=>{const nav=btn.closest('.site-header').querySelector('.main-nav');const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close menu':'Open menu');});});
  const f=document.getElementById('serviceFinderForm');
  if(f){
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const service=document.getElementById('finderService').value,where=document.getElementById('finderWhere').value,res=document.getElementById('finderResult');
      let msg='',href=cal,label='Book now';
      if(service==='office'){msg='We see clients in-office at Oak Creek Crossing in Bonita Springs, Monday–Friday, 10 AM–4 PM.';href='in-office.html';label='Office address & directions'}
      else if(service==='ron'){msg=where==='florida'?'Remote Online Notary appointments may be available for eligible documents.':'We serve clients nationwide by Remote Online Notary for eligible documents, subject to platform, document and receiving-party requirements.';href='remote-online-notary.html';label='Explore remote online service'}
      else if(service==='mobile'){msg=where==='florida'?'Mobile notary appointments are available 7 days a week throughout Florida by scheduling and availability.':'Our mobile notary service is Florida-based. For clients outside Florida, Remote Online Notary may be available for eligible documents.';href=where==='florida'?'mobile-notary.html':'remote-online-notary.html';label='View best option'}
      else if(service==='loan'){msg='Loan and real-estate signing support is available for title companies, lenders, signing services and private clients.';href='loan-signing.html';label='Loan signing services'}
      else if(service==='apostille'){msg='Apostille facilitation can help organize eligible documents and the correct state or federal authentication path.';href='apostille.html';label='Apostille support'}
      else{msg='Choose the service you need and we will guide you to the right appointment option.';href='services.html';label='View services'}
      res.innerHTML=msg+' <a href="'+href+'">'+label+'</a>';res.classList.add('show');
    });
  }
  const search=document.getElementById('resourceSearch');
  if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('.resource-card').forEach(c=>c.dataset.hidden=String(q && !c.innerText.toLowerCase().includes(q)));});}
  const af=document.getElementById('associateForm');
  if(af){af.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(af);const body=[...fd.entries()].map(([k,v])=>k+': '+v).join('\n');location.href='mailto:Schedule.quicknotary@gmail.com?subject=Associate%20Notary%20Application&body='+encodeURIComponent(body);});}
});
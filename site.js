
(function(){
"use strict";
const PHONE="27607726248",DISPLAY="060 772 6248",EMAIL="info@riaansgraragedoors.co.za";
const P={
sa1:"https://images.pexels.com/photos/20548104/pexels-photo-20548104.jpeg?auto=compress&cs=tinysrgb&w=1600",
sa2:"https://images.pexels.com/photos/19841150/pexels-photo-19841150.jpeg?auto=compress&cs=tinysrgb&w=1600",
sa3:"https://images.pexels.com/photos/19739988/pexels-photo-19739988.jpeg?auto=compress&cs=tinysrgb&w=1600",
sa4:"https://images.pexels.com/photos/20600282/pexels-photo-20600282.jpeg?auto=compress&cs=tinysrgb&w=1600",
sa5:"https://images.pexels.com/photos/20548098/pexels-photo-20548098.jpeg?auto=compress&cs=tinysrgb&w=1600",
old:"https://images.pexels.com/photos/16846353/pexels-photo-16846353.jpeg?auto=compress&cs=tinysrgb&w=1600",
urban:"https://images.pexels.com/photos/37341629/pexels-photo-37341629.jpeg?auto=compress&cs=tinysrgb&w=1600"
};
const SERVICES=[
["Garage Door Installation","New garage doors, replacements and upgrades for homes and businesses. Ask about door styles and the installation process.",P.sa1,"New & replacement doors"],
["Garage Door Repairs","Is your garage door stuck, noisy, damaged or not opening? Tell us the problem and let us assist with the next steps.",P.sa2,"Repair & fault enquiries"],
["Garage Door Maintenance","Keep your garage door working smoothly with inspections, servicing and attention to worn or faulty components.",P.sa3,"Routine care & servicing"],
["24/7 Emergency Enquiries","A garage door stuck open or closed can be stressful. Contact us for urgent assistance and current availability.",P.sa4,"Urgent assistance"]
];
const PHOTOS=[
["Contemporary Double Garage","Residential",P.sa1,"Photographed in Pretoria, South Africa. Illustrative Pexels photograph; not a completed Riaan’s project."],
["Brick Home Garage Entrance","Residential",P.sa2,"Pretoria property photograph. Style inspiration only."],
["South African Driveway","Residential",P.sa3,"Pretoria home exterior. Style inspiration only."],
["Urban Garage Door","Door Styles",P.urban,"Illustrative garage-door photograph, not customer work."],
["Traditional Garage Entrance","Door Styles",P.old,"Illustrative garage-door photograph; different property."],
["Garage & Property Exterior","Residential",P.sa4,"Illustrative South African residential property photograph."],
["Modern Property Design","Door Styles",P.sa5,"Illustrative garage/property styling reference."]
];
const FAQ=[
["What garage door services do you offer?","We take enquiries for garage door installation, repairs, maintenance and emergency assistance. Tell us your door type, the problem and your location."],
["Can I call you about an emergency garage door problem?","Yes. 24/7 emergency services are advertised. Contact 060 772 6248 with details. Response and call-out availability must be confirmed directly."],
["My garage door is stuck. What should I do?","Avoid forcing the door or attempting to repair high-tension springs. Contact us with the type of door and whether it is stuck open, closed or partly open."],
["Do you install new or replacement garage doors?","Yes. Contact us for a discussion about garage door installation or replacement. Provide measurements or a photo if available."],
["How can I request a quotation?","Call 060 772 6248 or use the quotation wizard on this site. You can send a detailed WhatsApp enquiry with the door type, location and requirements."],
["Do you provide maintenance?","Yes, garage door maintenance is one of our advertised services. Ask about inspections, adjustments and servicing requirements."],
["Which areas do you cover?","Please send us your suburb or town to confirm local service coverage and call-out availability before booking."],
["Do you offer same-day service?","Same-day service is advertised subject to availability and location. Contact the business to confirm a suitable time."]
];
const LOGO='<svg viewBox="0 0 64 64" aria-hidden="true" role="img"><path d="M4 27 32 6l28 21v30H4Z" fill="#b96a32" stroke="#f2a660" stroke-width="3"/><path d="M10 28h44v26H10Z" fill="#242d35" stroke="#fff" stroke-width="2"/><path d="M14 32h36M14 39h36M14 46h36" stroke="#aeb5ba" stroke-width="3"/><path d="M4 26 32 5l28 21" fill="none" stroke="#202329" stroke-width="6"/></svg>';
const NAV=[["Home","index.html"],["About","about.html"],["Services","services.html"],["Gallery","gallery.html"],["FAQ","faq.html"],["Testimonials","testimonials.html"],["Contact","contact.html"]];
const page=(location.pathname.split("/").pop()||"index.html").replace(".html","");
function escapeHTML(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function wa(message){return "https://wa.me/"+PHONE+"?text="+encodeURIComponent(message)}
function brand(){return '<span class="logo">'+LOGO+'<span class="brandtext">RIAAN’S<small>GARAGE DOORS REPAIRS</small></span></span>'}
function header(){
return '<div class="topline"><div class="wrap"><span>FAST • RELIABLE • PROFESSIONAL REPAIRS</span><span>Emergency enquiries • 24/7</span><a href="tel:+27607726248">CALL '+DISPLAY+'</a></div></div>'+
'<header class="header"><div class="wrap navrow"><a href="index.html" aria-label="Riaan’s Garage Doors Repairs home">'+brand()+'</a><button id="menuToggle" class="menubtn" aria-expanded="false" aria-controls="navLinks">☰ Menu</button><nav id="navLinks" class="navlinks" aria-label="Main menu">'+NAV.map(function(n){return '<a href="'+n[1]+'"'+(page===n[1].replace(".html","")?' class="current" aria-current="page"':"")+'>'+n[0]+'</a>'}).join("")+'<a class="navcta" href="tel:+27607726248">CALL US ↗</a></nav></div></header><div id="scrollProgress" class="scrollbar"></div>';
}
function footer(){
return '<section class="cta"><div class="wrap"><div><span class="eyebrow">READY WHEN YOU NEED US</span><h2>LET’S GET YOUR GARAGE DOOR SORTED.</h2></div><button class="btn" data-chat>REQUEST ASSISTANCE ↗</button></div></section>'+
'<footer class="footer"><div class="wrap"><div class="footer-top"><div><div style="margin-bottom:20px">'+brand()+'</div><p>Fast, reliable and professional garage door installations, repairs and maintenance. Contact us about urgent service assistance.</p><p><a href="tel:+27607726248">Call / WhatsApp: '+DISPLAY+'</a></p></div><div><h4>Quick Links</h4><ul>'+NAV.map(function(n){return '<li><a href="'+n[1]+'">'+n[0]+'</a></li>'}).join("")+'</ul></div><div><h4>Our Services</h4><ul>'+SERVICES.map(function(s){return '<li><a href="services.html">'+s[0]+'</a></li>'}).join("")+'</ul><p><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div></div><div class="footer-bottom">© <span id="year"></span> Riaan’s Garage Doors Repairs • All rights reserved. <span> | Designed by <a href="https://webdevpro.co.za" target="_blank" rel="noopener noreferrer">WebDevPro.co.za</a> • <a href="tel:+27812159792">+27 81 215 9792</a></span><p class="install-note"><button data-install class="btn btn-dark" style="padding:9px 13px;min-height:36px">Install App ↗</button> &nbsp; Licensed illustrative imagery. Client project photos coming soon.</p></div></div></footer>'+
'<nav class="mobilebar" aria-label="Mobile quick navigation"><a href="index.html"><span>⌂</span>Home</a><a href="services.html"><span>▦</span>Services</a><button data-chat><span>◉</span>Chat</button><a href="contact.html"><span>✉</span>Contact</a><button data-install><span>⇩</span>Install</button></nav><button class="float-chat" data-chat aria-label="Open WhatsApp enquiry assistant">✦ &nbsp; 24/7 Assistance</button><div id="modalRoot"></div>';
}
function hero(title,desc,img){
return '<div class="innerhero" style="--innerimg:url(&quot;'+img+'&quot;)"><div class="wrap"><span class="eyebrow">RIAAN’S GARAGE DOORS REPAIRS</span><h1 class="type" data-full="'+escapeHTML(title)+'">'+title+'</h1><p>'+desc+'</p><div class="actions"><button data-chat class="btn">REQUEST A QUOTE ↗</button><a class="btn btn-line" href="tel:+27607726248">CALL '+DISPLAY+'</a></div></div></div>';
}
function title(kicker,h,sub){
return '<div class="section-top reveal"><div><span class="kicker">'+kicker+'</span><h2 class="type" data-full="'+escapeHTML(h)+'">'+h+'</h2>'+(sub?'<p class="sub">'+sub+'</p>':"")+'</div></div>';
}
function serviceCards(arr){
return '<div class="grid3">'+arr.map(function(s,i){return '<article class="panel reveal"><div style="overflow:hidden"><img class="service-photo" src="'+s[2]+'" loading="lazy" alt="Illustrative photograph of a residential garage door"></div><div class="panel-body"><span class="panel-num">0'+(i+1)+' / '+escapeHTML(s[3])+'</span><h3>'+escapeHTML(s[0])+'</h3><p>'+escapeHTML(s[1])+'</p><button class="tlink" data-service="'+escapeHTML(s[0])+'" style="background:none;border:0;padding-left:0">ENQUIRE ABOUT THIS ↗</button></div></article>'}).join("")+'</div>';
}
function flips(items){return '<div class="flips">'+items.map(function(t,i){return '<button class="flip reveal" type="button" aria-pressed="false"><span class="flipinside"><span class="face front"><span class="number">0'+(i+1)+'</span><strong>'+t[0]+'</strong><small>Tap or hover to explore ↗</small></span><span class="face back"><small>RIAAN’S GARAGE DOORS</small><strong>'+t[1]+'</strong><small>'+t[2]+'</small><small>Tap to turn back ↩</small></span></span></button>'}).join("")+'</div>'}
function photoCard(p){return '<button class="photo-card reveal" data-photo="'+PHOTOS.indexOf(p)+'" aria-label="View '+escapeHTML(p[0])+'" style="border:0;text-align:left"><img src="'+p[2]+'" alt="'+escapeHTML(p[0])+' — illustrative photograph" loading="lazy"><span><small>'+escapeHTML(p[1])+'</small>'+escapeHTML(p[0])+' ↗</span></button>'}
function home(){
return '<section class="hero" id="home"><div class="hero-photo active" style="background-image:url(&quot;'+P.sa1+'&quot;)"></div><div class="hero-photo" style="background-image:url(&quot;'+P.sa2+'&quot;)"></div><div class="hero-photo" style="background-image:url(&quot;'+P.sa3+'&quot;)"></div><div class="wrap hero-body"><span class="eyebrow">FAST • RELIABLE • PROFESSIONAL REPAIRS</span><h1 class="type" data-full="GARAGE DOORS THAT WORK. SERVICE YOU CAN TRUST.">GARAGE DOORS THAT WORK. SERVICE YOU CAN TRUST.</h1><p>Garage door repairs, installations and maintenance for your home or property. Stuck door? Need a replacement? One message gets the conversation started.</p><div class="hero-actions"><button class="btn" data-chat>GET ASSISTANCE ↗</button><a class="btn btn-line" href="services.html">EXPLORE OUR SERVICES ↗</a></div></div><div class="slide-ctrl"><button id="prevSlide" aria-label="Previous hero image">‹</button><span id="slideCount">01 / 03</span><button id="nextSlide" aria-label="Next hero image">›</button></div></section>'+
'<div class="thinfeatures"><div class="wrap"><span><i>✓</i> GARAGE DOOR REPAIRS</span><span><i>✓</i> INSTALLATIONS</span><span><i>✓</i> MAINTENANCE</span><span><i>✓</i> EMERGENCY ENQUIRIES</span></div></div>'+
'<section class="section"><div class="wrap">'+title("WHAT WE DO","GARAGE DOOR SOLUTIONS BUILT AROUND YOU","From new installations to urgent repair enquiries, explore the services offered by Riaan’s Garage Doors Repairs.")+serviceCards(SERVICES.slice(0,3))+'</div></section>'+
'<section class="section section-cream"><div class="wrap aboutsplit"><div class="reveal"><img src="'+P.sa2+'" loading="lazy" alt="Double garage on a brick property in Pretoria"></div><div class="reveal"><span class="kicker">YOUR GARAGE DOOR MATTERS</span><h2>KEEP YOUR PROPERTY MOVING.</h2><p>When a garage door is not working, convenience and security can be affected. We help you explore installation, repairs and routine servicing with clear communication from first contact.</p><div class="checkrow"><b>✓</b> Repairs for doors that stick or stop working</div><div class="checkrow"><b>✓</b> New and replacement garage door enquiries</div><div class="checkrow"><b>✓</b> Routine maintenance and inspection enquiries</div><div class="checkrow"><b>✓</b> 24/7 emergency enquiry contact</div><a class="btn btn-dark" href="about.html">MORE ABOUT US ↗</a></div></div></section>'+
'<section class="section"><div class="wrap">'+title("INTERACTIVE SERVICE EXPLORER","FLIP TO SEE HOW WE CAN HELP","Tap, click or hover over a card to see more about each core garage-door service.")+flips([["INSTALLATIONS","New & replacement garage doors","Discuss the style, opening and type of garage door you need."],["REPAIRS","Troubleshooting & repair","Tell us about door damage, faulty operation or unusual noise."],["MAINTENANCE","Care & service","Ask about inspections, lubrication, adjustments and general servicing."]])+'</div></section>'+
'<section class="section section-dark"><div class="wrap">'+title("GARAGE DOOR INSPIRATION","REALISTIC IMAGES. REAL OPTIONS.","Representative South African residential photography and garage-door styles. These photographs are licensed examples, not our completed customer work.")+'<div class="photo-grid">'+PHOTOS.slice(0,3).map(photoCard).join("")+'</div><p style="margin-top:30px"><a class="btn" href="gallery.html">EXPLORE THE GALLERY ↗</a></p></div></section>'+
'<section class="section"><div class="wrap">'+title("SERVICE AT A GLANCE","GET THE HELP YOU NEED","We make it simple to start a conversation about garage-door services.")+'<div class="stats"><div class="stat reveal"><b>24/7</b><span>Emergency enquiries</span></div><div class="stat reveal"><b>03</b><span>Core service categories</span></div><div class="stat reveal"><b>01</b><span>Direct WhatsApp contact</span></div><div class="stat reveal"><b>✓</b><span>Request a quote online</span></div></div></div></section>';
}
function about(){
return hero("ABOUT RIAAN’S GARAGE DOORS","Helping property owners with garage door installations, repairs, maintenance and emergency enquiries.",P.sa1)+
'<section class="section"><div class="wrap aboutsplit"><div><span class="kicker">WHO WE ARE</span><h2>GARAGE DOOR HELP, WITHOUT THE COMPLICATIONS.</h2><p>Riaan’s Garage Doors Repairs focuses on practical solutions for garage-door needs. Whether you are planning a new installation or dealing with a door that is not functioning as it should, start by telling us what you need.</p><p><strong>Fast • Reliable • Professional Repairs</strong></p><button class="btn" data-chat>CONTACT US ↗</button></div><img src="'+P.sa3+'" loading="lazy" alt="South African driveway and garage entrance"></div></section>'+
'<section class="section section-cream"><div class="wrap">'+title("OUR APPROACH","FOUR SIMPLE STEPS","Discuss your requirements and arrange assistance based on your location and availability.")+'<div class="steps">'+[["Tell us the problem","Explain the type of door, the fault and your location."],["Discuss your options","Talk through repair, replacement or servicing possibilities."],["Arrange assistance","Confirm availability, access and the next steps."],["Check the result","Make sure the door operates as expected and request maintenance guidance."]].map(function(x,i){return '<div class="step reveal"><em>0'+(i+1)+'</em><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>'}).join("")+'</div></div></section>'+
'<section class="section"><div class="wrap">'+title("OUR PROMISE","SERVICE-FOCUSED, FROM FIRST CONTACT")+flips([["CLEAR COMMUNICATION","Tell us what is happening","We start with the door type, symptoms and location."],["PRACTICAL SUPPORT","Repairs, installs & maintenance","Discuss options that match the type of help requested."],["EASY CONTACT","CALL OR WHATSAPP","Reach us directly on 060 772 6248."]])+'</div></section>';
}
function services(){
return hero("GARAGE DOOR SERVICES","Professional repairs, installation and maintenance enquiries. Tell us what your garage door needs.",P.sa2)+
'<section class="section"><div class="wrap">'+title("OUR SERVICES","THE RIGHT HELP FOR YOUR DOOR","Choose the service you need, then request an enquiry directly through WhatsApp.")+serviceCards(SERVICES)+'</div></section>'+
'<section class="section section-cream"><div class="wrap">'+title("COMMON PROBLEMS","HOW CAN WE HELP TODAY?")+flips([["STUCK DOOR","Not opening or closing","Tell us if the door is stuck and whether it is motorised or manual."],["BROKEN COMPONENTS","Damage & wear","Discuss damaged panels, hardware and other suspected faults. Do not adjust high-tension springs yourself."],["NEW GARAGE DOOR","Upgrading your property","Tell us the garage size and preferred material or appearance."]])+'</div></section>'+
'<section class="section"><div class="wrap aboutsplit"><div><span class="kicker">URGENT ASSISTANCE</span><h2>DOOR STUCK OPEN OR SHUT?</h2><p>Unexpected garage-door problems are inconvenient. Contact us to explain the situation and confirm whether an emergency call-out is available in your area.</p><p><b>Emergency service enquiries are advertised 24/7; actual response times depend on availability.</b></p><button class="btn" data-service="24/7 Emergency Enquiries">REQUEST EMERGENCY ASSISTANCE ↗</button></div><img loading="lazy" src="'+P.sa4+'" alt="Illustrative garage-door property exterior"></div></section>';
}
function gallery(){
return hero("GARAGE DOOR GALLERY","Browse realistic garage-door and residential exterior photographs for inspiration.",P.sa3)+
'<section class="section"><div class="wrap">'+title("DESIGN INSPIRATION","EXPLORE GARAGE DOOR STYLES","Gallery photographs are licensed illustrative images of different properties, including Pretoria. They are not Riaan’s completed installations.")+
'<div class="filters" id="filters"><button class="filter active" data-filter="All">All Styles</button><button class="filter" data-filter="Residential">Residential</button><button class="filter" data-filter="Door Styles">Door Styles</button></div><div class="photo-grid" id="galleryGrid">'+PHOTOS.map(photoCard).join("")+'</div></div></section>'+
'<section class="section section-cream"><div class="wrap">'+title("STYLE COMPARISON","DRAG TO COMPARE TWO LOOKS","A fun style comparison of two different illustrative properties — not before-and-after work by Riaan’s.")+'<div class="comparison" id="comparison" style="--split:50%"><img src="'+P.sa1+'" alt="Illustrative contemporary double garage"><div class="comparebefore"><img src="'+P.old+'" alt="Illustrative traditional garage entry"></div><span class="comparelabel" style="left:15px">STYLE A</span><span class="comparelabel" style="right:15px">STYLE B</span><input id="compareRange" type="range" min="0" max="100" value="50" aria-label="Compare illustrative door styles"></div><p class="notice">Different example properties; not an actual before-and-after transformation.</p></div></section>';
}
function faq(){return hero("FREQUENTLY ASKED QUESTIONS","Questions about garage door installation, repairs, maintenance and emergency enquiries.",P.sa5)+
'<section class="section"><div class="wrap faq">'+title("HELPFUL ANSWERS","WHAT WOULD YOU LIKE TO KNOW?")+FAQ.map(function(f){return '<details class="reveal"><summary>'+escapeHTML(f[0])+'</summary><p>'+escapeHTML(f[1])+'</p></details>'}).join("")+'</div></section>'}
function testimonials(){return hero("CUSTOMER FEEDBACK","We value genuine customer experiences. Approved reviews will appear here when available.",P.sa4)+
'<section class="section"><div class="wrap aboutsplit"><div><span class="kicker">REAL FEEDBACK ONLY</span><h2>YOUR WORDS MATTER.</h2><p>We believe reviews should be authentic. No fictional ratings or testimonials have been added to this site.</p><p>If you have used Riaan’s garage-door services, you can contact us to share your experience.</p><button class="btn" data-chat>SHARE FEEDBACK ↗</button></div><img src="'+P.sa2+'" alt="Residential garage doors in Pretoria" loading="lazy"></div></section>'+
'<section class="section section-cream"><div class="wrap">'+title("WHAT WE OFFER","SERVICE YOU CAN CONTACT US ABOUT")+flips([["REPAIRS","Fast & reliable enquiries","Get help discussing issues with garage doors."],["INSTALLATIONS","New garage door enquiries","Talk through an installation or replacement request."],["MAINTENANCE","Care & servicing","Ask about inspections and routine garage-door care."]])+'</div></section>'}
function contact(){
return hero("CONTACT RIAAN’S GARAGE DOORS","Request garage door installation, repairs, servicing or emergency assistance on 060 772 6248.",P.sa1)+
'<section class="section"><div class="wrap">'+title("LET’S TALK","TELL US WHAT YOU NEED","Contact us directly or fill in the form. WhatsApp opens with your prepared enquiry; you decide when to send it.")+
'<div class="contact-layout"><div class="contact-card reveal"><span class="kicker">GET IN TOUCH</span><h3>DIRECT CONTACT DETAILS</h3><div class="contact-links"><a href="tel:+27607726248"><b>☎</b> Call '+DISPLAY+'</a><a href="https://wa.me/'+PHONE+'" target="_blank" rel="noopener noreferrer"><b>◉</b> WhatsApp '+DISPLAY+'</a><a href="mailto:'+EMAIL+'"><b>✉</b> '+EMAIL+'</a></div><p style="margin-top:20px;color:#5c6269">Emergency enquiries: 24/7. Same-day service subject to availability. Ask us to confirm service coverage in your area.</p></div>'+
'<form class="contact-card reveal" id="quickForm"><span class="kicker">QUOTATION WIZARD</span><h3>REQUEST A QUOTE</h3><div class="field"><label for="qname">Full name *</label><input id="qname" name="name" required autocomplete="name" placeholder="Your name"></div><div class="field"><label for="qphone">Your phone *</label><input id="qphone" name="phone" required inputmode="tel" placeholder="Your contact number"></div><div class="field"><label for="qservice">Garage door service *</label><select id="qservice" name="service" required>'+SERVICES.map(function(s){return '<option>'+s[0]+'</option>'}).join("")+'</select></div><div class="field"><label for="qloc">Town / suburb *</label><input id="qloc" name="location" required placeholder="Your area"></div><div class="field"><label for="qdetails">What needs attention? *</label><textarea id="qdetails" name="details" required placeholder="Describe the garage door, fault or installation you need"></textarea></div><button class="btn" type="submit">OPEN WHATSAPP WITH MY REQUEST ↗</button><p class="notice">You must confirm sending inside WhatsApp.</p></form></div></div></section>';
}
const VIEW={index:home,about:about,services:services,gallery:gallery,faq:faq,testimonials:testimonials,contact:contact};
document.title=(page==="index"?"Home":page.charAt(0).toUpperCase()+page.slice(1))+" | Riaan's Garage Doors Repairs";
document.getElementById("root").innerHTML=header()+'<main id="main" class="shell">'+(VIEW[page]||home)()+'</main>'+footer();
document.getElementById("year").textContent=new Date().getFullYear();
function bind(){
const menu=document.getElementById("menuToggle"), nav=document.getElementById("navLinks");
menu.addEventListener("click",function(){let on=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(on))});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){nav.classList.remove("open");menu.setAttribute("aria-expanded","false");closeModal()}});
document.addEventListener("click",function(e){
if(!nav.contains(e.target)&&!menu.contains(e.target)&&nav.classList.contains("open")){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}
const flip=e.target.closest(".flip");if(flip){const val=flip.classList.toggle("flipped");flip.setAttribute("aria-pressed",String(val))}
const chat=e.target.closest("[data-chat]");if(chat)openChat();
const service=e.target.closest("[data-service]");if(service)openChat(service.getAttribute("data-service"));
const photo=e.target.closest("[data-photo]");if(photo)showPhoto(+photo.getAttribute("data-photo"));
const install=e.target.closest("[data-install]");if(install)installApp();
const close=e.target.closest("[data-close]");if(close)closeModal();
const filter=e.target.closest("[data-filter]");if(filter)applyFilter(filter.getAttribute("data-filter"));
});
const q=document.getElementById("quickForm");if(q)q.addEventListener("submit",function(e){
e.preventDefault();const d=new FormData(q), msg="Hello Riaan's Garage Doors Repairs. I would like to request a quotation.\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\nService: "+d.get("service")+"\nArea: "+d.get("location")+"\nDetails: "+d.get("details");window.open(wa(msg),"_blank","noopener,noreferrer");
});
const range=document.getElementById("compareRange");if(range)range.addEventListener("input",function(){document.getElementById("comparison").style.setProperty("--split",range.value+"%")});
const photos=Array.from(document.querySelectorAll(".hero-photo"));if(photos.length){
let i=0;function go(n){photos[i].classList.remove("active");i=(n+photos.length)%photos.length;photos[i].classList.add("active");document.getElementById("slideCount").textContent="0"+(i+1)+" / 03"}
document.getElementById("prevSlide").onclick=function(){go(i-1)};
document.getElementById("nextSlide").onclick=function(){go(i+1)};
setInterval(function(){if(!document.hidden)go(i+1)},6100);
}
window.addEventListener("scroll",function(){const h=document.documentElement;document.getElementById("scrollProgress").style.width=(100*h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight))+"%"},{passive:true});
const observer="IntersectionObserver" in window?new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:.09}):null;
document.querySelectorAll(".reveal").forEach(function(el){if(observer)observer.observe(el);else el.classList.add("visible")});
const titles=document.querySelectorAll(".type");const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
titles.forEach(function(el){const full=el.getAttribute("data-full")||el.textContent;if(reduced)return;el.textContent="";el.classList.add("typing");let n=0;function step(){if(!el.isConnected)return;n=Math.min(full.length,n+1);el.textContent=full.slice(0,n);if(n<full.length)setTimeout(step,full.length>45?33:48);else el.classList.remove("typing")}setTimeout(step,180)});
}
function applyFilter(cat){document.querySelectorAll(".filter").forEach(function(b){b.classList.toggle("active",b.getAttribute("data-filter")===cat)});
document.querySelectorAll("#galleryGrid .photo-card").forEach(function(c){c.hidden=cat!=="All"&&PHOTOS[+c.getAttribute("data-photo")][1]!==cat})}
function closeModal(){document.getElementById("modalRoot").innerHTML="";document.body.style.overflow=""}
function modal(t,b,cls){document.getElementById("modalRoot").innerHTML='<div class="modal-cover" role="presentation" id="modalCover"><section class="modal '+(cls||"")+'" role="dialog" aria-modal="true" aria-label="'+escapeHTML(t)+'"><div class="modal-header"><h3>'+escapeHTML(t)+'</h3><button class="close" data-close aria-label="Close dialog">×</button></div><div class="modal-body">'+b+'</div></section></div>';document.body.style.overflow="hidden";document.getElementById("modalCover").addEventListener("click",function(e){if(e.target.id==="modalCover")closeModal()});const first=document.querySelector(".modal input,.modal button");if(first)first.focus()}
function showPhoto(n){const p=PHOTOS[n];if(!p)return;modal(p[0],'<img src="'+p[2]+'" alt="'+escapeHTML(p[0])+'" style="width:100%;max-height:64vh;object-fit:contain;border-radius:8px"><p>'+escapeHTML(p[3])+'</p><p class="notice">Licensed illustrative stock photograph; not completed Riaan’s work.</p>','lightbox')}
function openChat(selected){
let options=SERVICES.map(function(s){return '<option'+(s[0]===selected?" selected":"")+'>'+escapeHTML(s[0])+'</option>'}).join("");
modal("24/7 Garage Door Enquiry",'<p>Complete the details below, review the information and open WhatsApp. You confirm sending the message.</p><form id="chatForm"><div class="field"><label for="cname">Your name *</label><input id="cname" required name="name" autocomplete="name"></div><div class="field"><label for="cphone">Contact number *</label><input id="cphone" required name="phone" inputmode="tel"></div><div class="field"><label for="cservice">Service *</label><select id="cservice" name="service">'+options+'</select></div><div class="field"><label for="cloc">Suburb / town *</label><input id="cloc" name="location" required></div><div class="field"><label for="cdetail">Garage door issue or request *</label><textarea id="cdetail" name="details" required placeholder="Door type, fault, measurements or any helpful details"></textarea></div><button type="submit" class="btn">REVIEW MY MESSAGE ↗</button></form><p class="modal-status">This is an automated enquiry assistant, not live chat.</p>');
document.getElementById("chatForm").addEventListener("submit",function(e){e.preventDefault();const d=new FormData(e.currentTarget),m="Hello Riaan's Garage Doors Repairs,\nI would like assistance with my garage door.\n\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\nService: "+d.get("service")+"\nLocation: "+d.get("location")+"\nDetails: "+d.get("details");modal("Review Your Enquiry",'<p>Please check your details before opening WhatsApp.</p><pre style="white-space:pre-wrap;overflow-wrap:anywhere;background:#f4eee5;padding:18px;border-radius:12px">'+escapeHTML(m)+'</pre><div class="actions"><a class="btn" target="_blank" rel="noopener noreferrer" href="'+wa(m)+'">OPEN WHATSAPP ↗</a><button class="btn btn-dark" data-close>Close</button></div><p class="notice">Your message is sent only if you press Send in WhatsApp.</p>')});
}
let deferredPrompt=null;window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();deferredPrompt=e});
function installApp(){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;return}modal("Install Riaan's Garage Doors",'<p>Install this garage door website as an app for quick access. On iPhone: open in Safari, tap Share and choose Add to Home Screen. On Android/Chrome, use the browser menu and select Install app or Add to Home screen when available.</p>')}
bind();
if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").catch(function(){})})}
})();
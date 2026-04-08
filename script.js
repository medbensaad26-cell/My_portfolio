/* ─── DATA ─── */
const skills = {
  sg1: [
    {icon:'',name:'Scikit-learn',lvl:90},{icon:'',name:'XGBoost',lvl:85},{icon:'',name:'Pandas',lvl:90},
    {icon:'',name:'Feature engineering',lvl:78},{icon:'',name:'Anomaly Detection',lvl:80},{icon:'',name:'EDA',lvl:80},
    {icon:'',name:'Regression',lvl:90},{icon:'',name:'Gradient descent',lvl:85}  
  ],
  
  sg2: [{icon:'',name:'Python',lvl:90},{icon:'',name:'FASTAPI',lvl:85},{icon:'',name:'C/C++',lvl:90},{icon:'',name:'leaflet.js',lvl:90},
    {icon:'',name:'HTML/CSS/Javascript',lvl:85}
  ]
};

const projects = [{
    num:'01',
    icon:'🇹🇳',
    title:'Tunisia AI Traffic Map',
    desc:'An AI-powered web application that predicts road congestion and recommends the least crowded driving route between two locations in Tunisia. The first tool of its kind built specifically for the Tunisian road network.',
    tags:['Python','Scikit-learn','FastAPI','XGBoost','leaflet.js'],
    detail:'More detailed explanation shown on the back of the card when hovered.',
    gh:'https://github.com/medbensaad26-cell/Tunisia_AI_Traffic_Map',
    link:'https://medbensaad26-cell.github.io/Tunisia_AI_Traffic_Map/'
  }];

const timeline = [
  {
    period: '2025 — 2028',
    role: 'Computer Science Engineering Degree',
    org: 'ENICarthage — National Engineering School of Carthage',
    desc: 'Pursuing a computer science engineering degree with a focus on software engineering, algorithms, AI, and system architecture. Building real-world ML engineering skills alongside academic fundamentals.',
    tags: ['Computer Science','AI','Software Engineering','Algorithms']
  },
  {
    period: '2023 — 2025',
    role: 'Preparatory Cycle for Engineering Studies',
    org: 'IPEIM — Preparatory Institute for Engineering Studies, Monastir',
    desc: 'Completed a rigorous two-year preparatory program specializing in Math-Physics, laying a strong analytical and scientific foundation for engineering school admission.',
    tags: ['Mathematics','Physics','Algorithms','Sciences']
  },
  {
    period: 'Feb 2026',
    role: 'Data Analysis with Python',
    org: 'IBM',
    desc: 'Completed a professional certification focused on data analysis using Python, covering data cleaning, visualization, and statistical analysis with libraries such as Pandas, NumPy, and Matplotlib. Applied techniques to extract insights from real-world datasets and support data-driven decision-making.',
    tags: ['Python','Pandas','NumPy','Matplotlib','Data Analysis','EDA']
  }
];

/* ─── RENDER SKILLS ─── */
Object.entries(skills).forEach(([id, items]) => {
  const el = document.getElementById(id);
  items.forEach(s => {
    el.innerHTML += `<div class="skill-badge" style="transition-delay:${Math.random()*.3}s">
      <span class="skill-icon">${s.icon}</span>${s.name}
      <div class="skill-level" style="width:${s.lvl}%"></div>
    </div>`;
  });
});

/* ─── RENDER PROJECTS ─── */
const pg = document.getElementById('projectsGrid');
projects.forEach((p,i) => {
  pg.innerHTML += `<div class="project-card reveal" style="transition-delay:${i*.08}s">
    <div class="card-inner">
      <div class="card-front">
        <div class="project-num">${p.num}</div>
        <div class="project-icon-area">${p.icon}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="tech-tags">${p.tags.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="flip-hint">hover to flip →</div>
      </div>
      <div class="card-back">
        <div>
          <div class="card-back-title">↗ ${p.title}</div>
          <div class="card-back-detail">${p.detail}</div>
          <div class="tech-tags" style="margin-top:.8rem">${p.tags.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="card-links">
          <a href="${p.gh}" class="card-link link-gh">GitHub</a>
          <a href="${p.link}" class="card-link link-link">website link</a>
        </div>
      </div>
    </div>
  </div>`;
});

/* ─── RENDER TIMELINE ─── */
const tl = document.getElementById('timeline');
timeline.forEach((t,i) => {
  tl.innerHTML += `<div class="timeline-item reveal" style="transition-delay:${i*.12}s">
    <div class="timeline-dot"></div>
    <div class="tl-period">${t.period}</div>
    <div class="tl-role">${t.role}</div>
    <div class="tl-org">${t.org}</div>
    <div class="tl-desc">${t.desc}</div>
    <div class="tl-tags">${t.tags.map(tt=>`<span class="tl-tag">${tt}</span>`).join('')}</div>
  </div>`;
});

/* ─── MARQUEE ─── */
const marqueeItems = ['Machine Learning','Deep Learning','LLMs','RAG Pipelines','Computer Vision','NLP','MLOps','Data Science','PyTorch','Transformers','Conformal Prediction','Causal Inference'];
const mi = document.getElementById('marqueeInner');
const doubled = [...marqueeItems,...marqueeItems];
mi.innerHTML = doubled.map(t=>`<div class="marquee-item">${t}</div>`).join('');

/* ─── PARTICLES ─── */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles=[];
function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
resize(); window.addEventListener('resize',resize);

class Particle {
  constructor(){
    this.x=Math.random()*W; this.y=Math.random()*H;
    this.vx=(Math.random()-.5)*.4; this.vy=(Math.random()-.5)*.4;
    this.r=Math.random()*1.5+.5; this.a=Math.random()*.6+.1;
    this.color=Math.random()>.5?'14,165,233':'34,211,238';
  }
  update(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0||this.x>W)this.vx*=-1;
    if(this.y<0||this.y>H)this.vy*=-1;
  }
  draw(){
    ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(${this.color},${this.a})`; ctx.fill();
  }
}

for(let i=0;i<110;i++) particles.push(new Particle());

function drawLines(){
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<100){
        ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(14,165,233,${.15*(1-dist/100)})`; ctx.lineWidth=.6; ctx.stroke();
      }
    }
  }
}

let mouse={x:0,y:0};
window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});

function animate(){
  ctx.clearRect(0,0,W,H);
  // subtle mouse-reactive particles
  particles.forEach(p=>{
    const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
    if(d<120){p.vx+=dx/d*.02;p.vy+=dy/d*.02;}
    p.update(); p.draw();
  });
  drawLines();
  requestAnimationFrame(animate);
}
animate();

/* ─── CUSTOM CURSOR ─── */
const cursor=document.getElementById('cursor');
const ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
function animCursor(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a,button,.project-card,.skill-badge,.social-link').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='20px';cursor.style.height='20px';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='var(--cyan)';});
  el.addEventListener('mouseleave',()=>{cursor.style.width='12px';cursor.style.height='12px';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='var(--blue)';});
});

/* ─── NAVBAR SCROLL ─── */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{ navbar.classList.toggle('scrolled',window.scrollY>60); });

/* ─── REVEAL ON SCROLL ─── */
const revealEls=document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible');} });
},{threshold:.1});
revealEls.forEach(el=>observer.observe(el));

/* ─── PARALLAX HERO ─── */
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  const orb=document.getElementById('neuralOrb');
  if(orb) orb.style.transform=`translate(-50%,calc(-50% + ${y*.08}px))`;
  const heroContent=document.querySelector('.hero-content');
  if(heroContent) heroContent.style.transform=`translateY(${y*.04}px)`;
});

/* ─── 3D TILT ON CARDS ─── */
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(600px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  card.addEventListener('mouseleave',()=>{ card.style.transform='perspective(600px) rotateY(0deg) rotateX(0deg)'; });
});

/* ─── TYPING EFFECT ─── */
const nameEl=document.getElementById('heroName');
const name='Mohamed Bensaad';
nameEl.textContent='';
let ni=0;
function typeChar(){
  if(ni<name.length){ nameEl.textContent+=name[ni++]; setTimeout(typeChar,110); }
}
setTimeout(typeChar,600);

/* ─── NEURAL NODE DRAWING ─── */
const orbEl=document.querySelector('.neural-orb');
const nodesContainer=document.createElement('div');
nodesContainer.className='neural-nodes';
orbEl.appendChild(nodesContainer);
const nodePositions=[];
for(let i=0;i<12;i++){
  const a=Math.random()*Math.PI*2, r=80+Math.random()*120;
  const x=50+Math.cos(a)*r*.7, y=50+Math.sin(a)*r*.7;
  nodePositions.push({x,y});
  const n=document.createElement('div');
  n.className='node';
  const s=Math.random()*4+2;
  n.style.cssText=`width:${s}px;height:${s}px;left:${x}%;top:${y}%;opacity:${Math.random()*.7+.3};animation:blink ${2+Math.random()*2}s infinite;animation-delay:${Math.random()*2}s;background:${Math.random()>.5?'var(--cyan)':'var(--blue)'};box-shadow:0 0 ${s*3}px currentColor;`;
  nodesContainer.appendChild(n);
}

/*SENDING MESSAGE*/
function sendEmail() {
  const inputs = document.querySelectorAll('.contact-form input');
  
  const name    = inputs[0].value;
  const email   = inputs[1].value;
  const subject = inputs[2].value;
  const message = document.querySelector('.contact-form textarea').value;

  const fullBody = `From: ${name} (${email})\n\n${message}`;

  window.open(
    `https://mail.google.com/mail/?view=cm&to=mohamed.bensaad@enicar.ucar.tn&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`,
    '_blank'
  );
}

/* =====================================================================
   CUSTOMIZE HERE — edit the defaults below (or use the ⚙ panel live).
   - name / letter / closing / signature: your words. \n\n = new paragraph.
   - music: optional path to an MP3 sitting next to index.html, e.g. "song.mp3".
     (Or upload one in the ⚙ panel. Music only starts after the first tap.)
   - photoEverySeconds: seconds between falling photos (lower = more).
   - Photos: drop your pictures into the `photos` folder (next to index.html)
     and list their file names in `photoFiles`, e.g. ["us1.jpg","trip.webp"].
     (A browser can't read a folder's contents by itself, so the names must be listed.)
     You can also add extra photos live in the ⚙ panel (kept only until refresh).
   ===================================================================== */
const CONFIG={
  name:"Gwen",
  dear:false,   // true = start with "Dear <name>," before the letter
  letter:`Hi gwen so umm hello, where do i start? hmm... okay so hi gwen how are you? wala ka nag expect ani no? haha surprise? at first kulbaan jud ko na i send ni saimo (i personally code/made this website by the way:>) and then nag wonder ko wala may mawala sako ug mo try ko diba so yeah nandito ako ngayon and you reading this, i hope dili ko nimo i judge:> okay mag sugod nako HAHAHAHAHA

at first jud gwen, i only saw you as my classmate lang jud like no intentions, and of course youre beautiful thats why na notice kita agad, But the more I got to know you, the deeper it grew. And now I can't pretend anymore that it's nothing, at first simple admiration lang jud to cause youre smart, talented, sporty, and so so beautiful pero i didn't know na nagka dugay mas nidako akong pag tan aw saimo gwen i dont see you as a friend na but more than friends, im starting to miss you, ginapangita na tika and like naga pa buta² jud ko ato saakong feelings and wako kabalo na moabot ko sa ingani na point, i know complicated sya cause we were friends eh nice na unta atong pag-uban.

pero every time I see you, I just feel happy. Like, my mood instantly changes. Even if I'm having a bad day, just seeing your smile mapagaan na akong sarili, like grabe jud sya even me dili makatuo😆

and you're really beautiful jud gwen like soso beautiful. Not just the way you look, because yes, you're really pretty, and I notice it every single time. But also the way you are. The way you laugh, the way you talk, the way you carry yourself, and you're attitude really caught me jud like frrrrr

I'm not saying this gwen to make things awkward ha (mag tagdanay japun ta please) I'm saying this lang because you deserve to know how much you make someone feel. and mapa happy ko without you even trying

And I think that's the most beautiful thing about you.

again gwen, I LIKE YOU. I really do.

And I don't expect anything back from you. I'm not saying this para mapugos ka, or para ma-pressure ka to like me back. I'm saying this because I got tired of hiding na eh

If you don't feel the same, it's okay like fr. I promise, I won't be mad. I won't change how I treat you. I just wanted you to know na  someone out there genuinely likes you diay, for who you are

Just seeing you happy is already enough for me. Just seeing you smile when I see you, it already makes my day complete.

You don't have to say anything gwen. You don't have to reply in a certain way. need lang jud nako ni ipagawas, because you deserve to know how much you mean to me, even if it's just from afar.

Whatever you decide, thank you for letting me feel this. Thank you for making me happy, even without trying☺️☺️`,
  closing:"",   // optional extra line under the letter
  signature:"[Your Name]",
  music:"ordinary.mp3",          // put your own copy of the song next to index.html with this exact name
  musicTitle:"Ordinary — Marc Velasco",
  photoFolder:"photos/",
  photoFiles:["sample1.jpg","sample2.jpg","sample3.jpg"], // replace with your own file names
  photoEverySeconds:4
};

(()=>{
const $=s=>document.querySelector(s), NS='http://www.w3.org/2000/svg';
const cfg={...CONFIG};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Blue bouquet (all flowers blue) ---------- */
const PAL=[['#5aa9f5','#b9dcff','#eaf5ff'],['#2f6fd6','#7db4f0','#dcecff'],['#1f4fa8','#4f86dc','#cfe2ff'],['#9fd3ff','#e3f3ff','#ffffff'],['#f6bf26','#ffd95a','#6b4423']]; // last = sunflower
const FL=[[150,95,38,8,0],[96,128,32,7,1],[204,128,32,7,2],[52,182,28,6,3],[248,182,28,6,0],[150,160,36,14,4],[98,192,32,13,4],[202,192,32,13,4],[100,242,26,6,2],[200,242,26,6,1],[128,228,32,8,3],[172,228,32,8,1]]; // [x,y,size,petals,palette] palette 4 = sunflower
function el(n,a,p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
(function(){const s=$('#bq');
  FL.forEach(f=>el('path',{d:`M150 335 Q${(150+f[0])/2} ${(335+f[1])/2+20} ${f[0]} ${f[1]+f[2]*.5}`,stroke:'#2d5c9e',fill:'none','stroke-width':4,'stroke-linecap':'round'},s));
  [[100,205,-50],[200,205,50],[70,160,-70],[230,160,70],[150,190,0]].forEach(l=>el('ellipse',{cx:l[0],cy:l[1],rx:9,ry:24,fill:'#3a6db0',transform:`rotate(${l[2]} ${l[0]} ${l[1]})`},s));
  FL.slice().sort((a,b)=>a[1]-b[1]).forEach(([x,y,r,n,p])=>{
    const g=el('g',{transform:`translate(${x} ${y})`},s),c=PAL[p];
    if(p===4){ // sunflower: many narrow yellow petals + brown seed head
      for(let i=0;i<n;i++)el('ellipse',{cx:0,cy:-r*.62,rx:r*.15,ry:r*.4,fill:c[0],stroke:'rgba(180,110,0,.35)','stroke-width':.6,transform:`rotate(${i*360/n})`},g);
      for(let i=0;i<n;i++)el('ellipse',{cx:0,cy:-r*.5,rx:r*.13,ry:r*.32,fill:c[1],transform:`rotate(${(i+.5)*360/n})`},g);
      el('circle',{r:r*.34,fill:c[2]},g);el('circle',{r:r*.22,fill:'#3d2612'},g);
      for(let k=0;k<8;k++)el('circle',{cx:Math.cos(k*2.4)*r*.12*(k%3+1)/2,cy:Math.sin(k*2.4)*r*.12*(k%3+1)/2,r:1.1,fill:'#9a6a35'},g);
      return}
    for(let i=0;i<n;i++)el('ellipse',{cx:0,cy:-r*.55,rx:r*.32,ry:r*.56,fill:c[0],stroke:'rgba(255,255,255,.45)','stroke-width':.8,transform:`rotate(${i*360/n})`},g);
    for(let i=0;i<n;i++)el('ellipse',{cx:0,cy:-r*.34,rx:r*.2,ry:r*.36,fill:c[1],opacity:.9,transform:`rotate(${(i+.5)*360/n})`},g);
    el('circle',{r:r*.17,fill:c[2]},g);el('circle',{r:r*.07,fill:c[0]},g);
  });
  el('path',{d:'M50 255 Q150 288 250 255 L172 352 Q150 360 128 352 Z',fill:'#dcebff',stroke:'#9fc4ee','stroke-width':1.5},s);
  el('path',{d:'M90 266 L140 350 M150 276 L150 356 M210 266 L160 350',stroke:'#b9d4f4',fill:'none','stroke-width':1.2},s);
  el('path',{d:'M150 300 Q118 280 112 304 Q122 322 150 304 Q178 322 188 304 Q182 280 150 300Z',fill:'#4f86dc'},s);
  el('circle',{cx:150,cy:303,r:6,fill:'#2f6fd6'},s);
})();

/* ---------- Canvas petals ---------- */
const cv=$('#fx'),cx=cv.getContext('2d');let W,H,dpr;
function size(){dpr=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0)}
addEventListener('resize',size);size();
const AMB=reduce?10:(W<600?26:44);
const SUN=['#f6bf26','#ffd95a','#f0a81c'];
const BLUES=['#8ec9ff','#5aa9f5','#2f6fd6','#b9dcff','#1f4fa8','#9fd3ff'],PINKS=['#f7c6d0','#fbd9df'];
const petals=[];let running=false;
function mk(x,y,o={}){const s=o.s||6+Math.random()*9;
  return{x,y,vx:o.vx||0,vy:o.vy||0,s,r:Math.random()*6.28,vr:(Math.random()-.5)*.07,ph:Math.random()*6.28,fq:.012+Math.random()*.02,fl:Math.random()*6.28,
    c:o.c||(()=>{const q=Math.random();return q<.14?PINKS[Math.random()*2|0]:q<.28?SUN[Math.random()*3|0]:BLUES[Math.random()*BLUES.length|0]})(),a:.55+Math.random()*.4,burst:!!o.burst,tv:.6+s*.08}}
function drawPetal(p){const s=p.s,f=Math.cos(p.fl);cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.scale(Math.max(.25,Math.abs(f)),1);
  cx.globalAlpha=p.a;cx.fillStyle=p.c;cx.beginPath();cx.moveTo(0,-s);cx.bezierCurveTo(s*.9,-s*.6,s*.7,s*.7,0,s);cx.bezierCurveTo(-s*.7,s*.7,-s*.9,-s*.6,0,-s);cx.fill();cx.restore()}
function stepPetal(p,dt){
  if(p.burst){const d=Math.pow(.955,dt);p.vx*=d;p.vy*=d;p.vy+=.035*dt;if(p.vy>0&&Math.hypot(p.vx,p.vy)<p.tv*1.6)p.burst=false}
  else{p.vy+=(p.tv-p.vy)*.04*dt;p.vx+=(Math.sin(p.ph)*.55-p.vx)*.03*dt}
  p.ph+=p.fq*dt;p.fl+=.04*dt;p.r+=p.vr*dt;p.x+=p.vx*dt;p.y+=p.vy*dt}
function explode(){ // petals fly out of every flower, then ease into falling
  const b=$('#bq').getBoundingClientRect();
  FL.forEach(([fx,fy,r,n,pi])=>{const X=b.left+fx/300*b.width,Y=b.top+fy/360*b.height,cnt=reduce?3:W<600?7:10;
    for(let i=0;i<cnt;i++){const a=Math.random()*6.283,sp=2.5+Math.random()*6.5;
      const col=pi===4?[PAL[4][0],PAL[4][1],SUN[2]][Math.random()*3|0]:[PAL[pi][0],PAL[pi][1],'#2f6fd6',BLUES[Math.random()*6|0]][Math.random()*4|0];
      petals.push(mk(X,Y,{vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2.5,burst:true,c:col,s:7+Math.random()*9}))}});
  const ring=$('#ring');ring.style.left=(b.left+b.width/2)+'px';ring.style.top=(b.top+b.height*.4)+'px';ring.classList.add('go')}

/* ---------- Falling photos ---------- */
const layer=$('#photos'),photos=[],live=[];let nid=0,acc=0,nextAt=1500;
function spawnPhoto(){const mob=W<600;if(!photos.length||live.length>=(mob?5:8))return;
  const ph=photos[Math.random()*photos.length|0],w=(mob?62:84)+Math.random()*(mob?38:56);
  const d=document.createElement('div');d.className='photo';d.style.width=w+'px';
  const im=new Image();im.src=ph.url;im.alt='';im.decoding='async';im.onerror=()=>removePhoto(ph.id); // skip missing/broken files
  d.appendChild(im);layer.appendChild(d);
  live.push({d,id:ph.id,x:Math.random()*(W-w),y:-w*1.4,vy:.35+Math.random()*.6,ph:Math.random()*6.28,amp:.25+Math.random()*.4,r:(Math.random()-.5)*30,vr:(Math.random()-.5)*.1})}
function addPhoto(url,keep){const p={id:++nid,url,keep};photos.push(p);thumb(p)}
function thumb(p){const t=document.createElement('div');t.className='th';t.innerHTML='<img alt=""><button aria-label="Remove photo">×</button>';
  t.firstChild.src=p.url;t.lastChild.onclick=()=>removePhoto(p.id);t.dataset.id=p.id;$('#thumbs').appendChild(t)}
function removePhoto(id){const i=photos.findIndex(p=>p.id===id);if(i<0)return;
  if(!photos[i].keep)URL.revokeObjectURL(photos[i].url); // free memory
  photos.splice(i,1);$(`.th[data-id="${id}"]`)?.remove();
  for(let k=live.length-1;k>=0;k--)if(live[k].id===id){live[k].d.remove();live.splice(k,1)}}
cfg.photoFiles.forEach(f=>addPhoto(/^(https?:|data:|blob:)/.test(f)?f:cfg.photoFolder+encodeURIComponent(f).replace(/%2F/g,'/'),true));

/* ---------- Main loop (one rAF for petals + photos) ---------- */
let last=0;
function loop(t){requestAnimationFrame(loop);const dt=Math.min((t-last)/16.67||1,3);last=t;
  cx.clearRect(0,0,W,H);
  if(running){let amb=0;for(const p of petals)if(!p.burst)amb++;
    if(amb<AMB&&Math.random()<.08*dt)petals.push(Object.assign(mk(Math.random()*W,-20),{vy:.5}));
    acc+=dt*16.67;if(acc>=nextAt){acc=0;nextAt=cfg.photoEverySeconds*1000*(.6+Math.random()*.8);spawnPhoto()}}
  for(let i=petals.length-1;i>=0;i--){const p=petals[i];stepPetal(p,dt);
    if(p.y>H+20||p.x<-60||p.x>W+60){petals.splice(i,1);continue}drawPetal(p)}
  for(let i=live.length-1;i>=0;i--){const o=live[i];o.y+=o.vy*dt;o.ph+=.012*dt;o.x+=Math.sin(o.ph)*o.amp*dt;o.r+=o.vr*dt;
    if(o.y>H+20){o.d.remove();live.splice(i,1);continue}o.d.style.transform=`translate3d(${o.x}px,${o.y}px,0) rotate(${o.r}deg)`}}
requestAnimationFrame(loop);

/* ---------- Music ---------- */
const au=new Audio();au.loop=true;au.volume=.6;let started=false,mUrl=null;
function setMusic(src){au.src=src;if(started)au.play().catch(()=>{});sync()}
function sync(){$('#pp').textContent=(!au.paused&&au.src)?'❚❚':'▶'}
$('#pp').onclick=()=>{if(!au.src){$('#cfg').classList.add('open');return}au.paused?au.play().catch(()=>{}):au.pause();sync()};
au.onplay=au.onpause=sync;$('#vol').oninput=e=>au.volume=+e.target.value;
if(cfg.music){au.src=cfg.music;$('#mt').textContent=cfg.musicTitle}
au.onerror=()=>{au.removeAttribute('src');au.load();$('#mt').textContent='';sync()}; // file missing -> button opens the panel instead

/* ---------- Flow: tap bouquet -> envelope -> letter ---------- */
let tapped=false,opened=false,typer=0,skip=false;
$('#bqBtn').addEventListener('click',()=>{if(tapped)return;tapped=true;started=true;
  if(au.src)au.play().catch(()=>{}); // music begins only after this first interaction
  const bq=$('#bq');bq.classList.add('press');
  setTimeout(()=>{bq.classList.remove('press');bq.classList.add('pop');explode();running=true;$('.kicker').parentNode.style.transition='opacity 1s';
    $('.kicker').style.opacity=$('.sub').style.opacity=0;$('#glow').style.opacity=0},140);
  setTimeout(()=>{$('#s1').classList.add('hide');const s2=$('#s2');s2.classList.remove('gone');requestAnimationFrame(()=>requestAnimationFrame(()=>s2.classList.remove('hide')));
    $('#pl').classList.remove('hide');sync()},1300);
  setTimeout(()=>$('#s1').classList.add('gone'),2600)});

function hearts(){for(let i=0;i<7;i++){const h=document.createElement('span');h.className='hrt';h.textContent='♥';
  h.style.left=(8+Math.random()*84)+'vw';h.style.fontSize=(12+Math.random()*16)+'px';h.style.animationDuration=(9+Math.random()*7)+'s';h.style.animationDelay=(Math.random()*8)+'s';document.body.appendChild(h)}}

$('#open').onclick=()=>{if(opened)return;opened=true;$('#env').classList.add('open');$('#open').style.opacity=0;$('#open').style.pointerEvents='none';
  setTimeout(()=>$('#env').classList.add('away'),900);
  setTimeout(()=>{$('#envIn').style.display='none';$('#paper').classList.add('show');hearts();write()},1700)};

function write(){clearTimeout(typer);skip=false;const out=$('#out'),paper=$('#paper');
  const full=(cfg.dear?`Dear ${cfg.name},\n\n`:'')+cfg.letter;let i=0;out.textContent='';out.classList.add('typing');$('#end').classList.remove('show');
  $('#close').textContent=cfg.closing;$('#sig').textContent=cfg.signature;
  const tick=()=>{i=skip?full.length:i+1;out.textContent=full.slice(0,i);paper.scrollTop=paper.scrollHeight;
    if(i<full.length){const c=full[i-1];typer=setTimeout(tick,/[.!?]/.test(c)?170:c===','?100:c==='\n'?140:22)}
    else{out.classList.remove('typing');setTimeout(()=>{$('#end').classList.add('show');paper.scrollTo({top:paper.scrollHeight,behavior:'smooth'})},500)}};
  tick()}
$('#paper').addEventListener('click',()=>{skip=true}); // tap the letter to finish typing instantly

/* ---------- Settings panel ---------- */
const cf=$('#cfg');
$('#iName').value=cfg.name;$('#iLetter').value=cfg.letter;$('#iClose').value=cfg.closing;$('#iSig').value=cfg.signature;
$('#gear').onclick=()=>cf.classList.toggle('open');$('#done').onclick=()=>cf.classList.remove('open');
$('#apply').onclick=()=>{cfg.name=$('#iName').value;cfg.letter=$('#iLetter').value;cfg.closing=$('#iClose').value;cfg.signature=$('#iSig').value;
  if(opened&&$('#paper').classList.contains('show'))write();cf.classList.remove('open')};
$('#addPh').onclick=()=>$('#iPhotos').click();
$('#iPhotos').onchange=e=>{[...e.target.files].filter(f=>/^image\/(jpeg|png|webp)$/.test(f.type)).forEach(f=>addPhoto(URL.createObjectURL(f)));e.target.value=''};
$('#clrPh').onclick=()=>[...photos].forEach(p=>removePhoto(p.id));
const fr=$('#iFreq'),fv=$('#fv');fr.value=cfg.photoEverySeconds;
const showF=()=>fv.textContent='every ~'+fr.value+'s';showF();
fr.oninput=()=>{cfg.photoEverySeconds=+fr.value;showF();nextAt=Math.min(nextAt,cfg.photoEverySeconds*1000)};
$('#addMu').onclick=()=>$('#iMusic').click();
$('#iMusic').onchange=e=>{const f=e.target.files[0];if(!f)return;if(mUrl)URL.revokeObjectURL(mUrl);mUrl=URL.createObjectURL(f);$('#mt').textContent=f.name.replace(/\.[^.]+$/,'');setMusic(mUrl)};
addEventListener('pagehide',()=>{photos.forEach(p=>!p.keep&&URL.revokeObjectURL(p.url));if(mUrl)URL.revokeObjectURL(mUrl)});
})();
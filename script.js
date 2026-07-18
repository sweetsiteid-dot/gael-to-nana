function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "2902"){

document.getElementById("passwordScreen")
.style.display="none";

document.getElementById("websiteContent")
.style.display="block";

document.body.style.overflowY="auto";

}else{

alert("Wrong Password 🖤");

}

}

function openGift(){

const music =
document.getElementById("music");

music.play();

document.getElementById("giftSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* FLOATING HEARTS */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🖤";

heart.style.position="absolute";

heart.style.left=
Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=
(Math.random()*20+15)+"px";

heart.style.opacity=
Math.random();

heart.style.animation=
`fall ${Math.random()*4+6}s linear`;

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);

/* HEART ANIMATION */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(110vh);
opacity:0;
}

}

.fade-in{

opacity:0;

transform:
translateY(40px);

transition:
all 1s ease;
}

.fade-in.show{

opacity:1;

transform:
translateY(0);
}

`;

document.head.appendChild(style);

/* SCROLL ANIMATION */

const observer=
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.polaroid,.reason-card,.final-section,.ending"
).forEach(el=>{

el.classList.add("fade-in");

observer.observe(el);

});

/* POLAROID EFFECT */

const polaroids=
document.querySelectorAll(".polaroid");

polaroids.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=
"scale(1.08) rotate(0deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* PARALLAX HERO */

window.addEventListener("scroll",()=>{

const hero=
document.querySelector(".hero");

const scroll=
window.pageYOffset;

hero.style.backgroundPositionY=
scroll*0.4+"px";

});

/* LOVE LETTER QUOTES */

const quotes=[

"Thank you for everything 🖤",

"Some people make life feel lighter ✨",

"I'm still learning to understand you 🤍",

"Thank you for staying 🌙",

"Not perfect, but always sincere 🖤",

"Thank you for listening 🤍",

"I appreciate your presence every day ✨",

"Choosing to stay matters 🖤"

];

const quoteElement=
document.createElement("div");

quoteElement.className=
"floating-quote";

quoteElement.innerText=
quotes[0];

document.body.appendChild(
quoteElement
);

let currentQuote=0;

setInterval(()=>{

currentQuote++;

if(currentQuote>=quotes.length){
currentQuote=0;
}

quoteElement.style.opacity=0;

setTimeout(()=>{

quoteElement.innerText=
quotes[currentQuote];

quoteElement.style.opacity=1;

},500);

},5000);

/* QUOTE STYLE */

const quoteStyle=
document.createElement("style");

quoteStyle.innerHTML=`

.floating-quote{

position:fixed;

bottom:20px;

left:50%;

transform:translateX(-50%);

background:
rgba(255,255,255,.08);

backdrop-filter:blur(10px);

padding:12px 20px;

border-radius:50px;

font-size:14px;

color:white;

z-index:999;

transition:.5s;

border:
1px solid rgba(255,255,255,.08);

box-shadow:
0 0 15px rgba(255,255,255,.05);

}

`;

document.head.appendChild(
quoteStyle
);

/* AUTO PLAY MUSIC AFTER UNLOCK */

document.addEventListener(
"click",
function(){

const music=
document.getElementById("music");

if(
music &&
music.paused &&
document.getElementById("passwordScreen")
.style.display==="none"
){

music.play().catch(()=>{});

}

},
{
once:true
}
);

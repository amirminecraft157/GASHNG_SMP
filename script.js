// Glow animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Copy Server IP
const ipBox = document.querySelector(".ip");

if(ipBox){
    ipBox.style.cursor = "pointer";

    ipBox.onclick = () => {

        navigator.clipboard.writeText("play.zyrocraft.net");

        ipBox.innerHTML = "✅ IP Copied!";
        
        setTimeout(()=>{
            ipBox.innerHTML="IP : play.zyrocraft.net";
        },2000);

    };
}

// Floating animation for cards
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Random glowing logo
const logo=document.querySelector(".logo");

setInterval(()=>{

logo.style.textShadow=`0 0 ${15+Math.random()*20}px #b84dff`;

},300);

// Smooth appearance
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.rank,.status,.hero").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s";

observer.observe(el);

});
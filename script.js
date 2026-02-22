/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(c=>{
if(c.getBoundingClientRect().top < window.innerHeight-100)c.classList.add("show");
});
});

/* AI ASSISTANT */
function toggleAI(){
let box=document.getElementById("aiBox");
box.style.display=box.style.display=="flex"?"none":"flex";
}
function sendAI(){
let input=document.getElementById("aiInput");
let msg=input.value;
if(!msg)return;
let chat=document.getElementById("aiMessages");
chat.innerHTML+=`<p><b>You:</b> ${msg}</p>`;
let reply="I can help with courses, career guidance, coding tips, and AI learning.";
if(msg.toLowerCase().includes("python"))reply="Python is perfect for AI, ML, and automation.";
if(msg.toLowerCase().includes("web"))reply="Start with HTML, CSS, then JavaScript!";
chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;
input.value="";
chat.scrollTop=chat.scrollHeight;
}
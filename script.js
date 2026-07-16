/* ==========================
      TYPING ANIMATION
========================== */

const words = [
    "Frontend Developer",
    "Web Developer",
    "BCA Student",
    "Data Analyst Aspirant"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    let currentWord = words[wordIndex];

    if(isDeleting){

        typing.textContent =
        currentWord.substring(0,charIndex--);

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length+1){

        isDeleting = true;

        speed = 1500;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();



/* ==========================
      MOBILE MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(menuBtn.innerHTML.includes("bars")){

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});

}



/* ==========================
 CLOSE MENU AFTER CLICK
========================== */

document
.querySelectorAll("#navLinks a")
.forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

    if(menuBtn){

    menuBtn.innerHTML =
    '<i class="fa-solid fa-bars"></i>';

    }

});

});



/* ==========================
 ACTIVE NAVBAR
========================== */

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".navbar a")
.forEach(link=>{

const file =
link.getAttribute("href");

if(file===currentPage){

link.classList.add("active");

}

});



/* ==========================
 STICKY NAVBAR
========================== */

window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background =
"rgba(15,23,42,.95)";

}

else{

navbar.style.background =
"rgba(15,23,42,.80)";

}

});



/* ==========================
 SCROLL TO TOP
========================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#38bdf8;
color:#0f172a;
font-size:20px;
cursor:pointer;
display:none;
z-index:9999;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>250){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/* ==========================
 EMAIL JS
========================== */

const form =
document.getElementById("contact-form");

if(form){

emailjs.init({

publicKey:"zHvI62Fhz8VFDt1Jy"

});

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_46dptr8",

"template_dv7x87i",

this

)

.then(()=>{

alert("Message Sent Successfully ✅");

form.reset();

})

.catch(()=>{

alert("Message Failed ❌");

});

});

}
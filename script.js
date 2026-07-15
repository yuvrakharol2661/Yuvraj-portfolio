// Typing Animation 

const texts = [
    "Frontend Developer",
    "Web Developer",
    "BCA Student",
    "Data Analytics learner",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(document.getElementById("typing")){

        if(count === texts.length){
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById("typing").textContent = letter;

        if(letter.length === currentText.length){
            count++;
            index = 0;
            setTimeout(type,1500);
        }else{
            setTimeout(type,100);
        }
    }

})();


// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("light")
            ? "light"
            : "dark"
        );

    });

}

// Load Saved Theme

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
}


// Mobile Menu

const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".navbar ul");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}


// EmailJS Contact Form


const contactForm = document.getElementById("contact-form");


if(contactForm){


emailjs.init({

    publicKey:"zHvI62Fhz8VFDt1Jy"

});



contactForm.addEventListener("submit", function(e){


e.preventDefault();



emailjs.sendForm(

    "service_46dptr8",

    "template_dv7x87i",

    this

)


.then(function(){


alert("Message Sent Successfully ✅");


contactForm.reset();


}, function(error){


console.log(error);


alert("Message Failed ❌");


});


});


}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
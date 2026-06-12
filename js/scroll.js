const fadeElements =
document.querySelectorAll(".fade-up");

function reveal(){

    fadeElements.forEach((element)=>{

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll",reveal);

reveal();
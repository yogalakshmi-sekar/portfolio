const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Research Enthusiast",
  "Technical Writer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(deleteEffect,1500);
    }
}

function deleteEffect(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();
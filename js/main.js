window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.85)";
    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.3)";
    }

});

const counters =
document.querySelectorAll(".counter");

const speed = 100;

const animateCounters = () => {

    counters.forEach(counter => {

        const target =
        parseFloat(counter.dataset.target);

        const count =
        parseFloat(counter.innerText);

        const increment =
        target / speed;

        if(count < target){

            counter.innerText =
            (count + increment).toFixed(2);

            setTimeout(animateCounters,20);
        }

        else{

            counter.innerText = target;
        }

    });
};

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounters();
        }

    });

});

document
.querySelectorAll(".journey-section")
.forEach(section=>{

    observer.observe(section);
});

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

});






/* =========================
   CERTIFICATE MODAL
========================= */

const modal =
    document.getElementById("certificateModal");

const modalImg =
    document.getElementById("modalImage");

const closeModal =
    document.querySelector(".close-modal");

document
.querySelectorAll(".achievement-image img")
.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";
});
const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .about-item, .workflow-step"
);

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
function animateOnScroll() {
    // Select all elements with the class "animate-on-scroll"
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    // Create an IntersectionObserver with threshold of 0.05
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is in view, add the "in-view" class
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("in-view");
            }
            // If the element is out of view, remove the "in-view" class
            if (entry.intersectionRatio <= 0) {
                entry.target.classList.remove("in-view");
                entry.target.classList.add("animate-on-scroll");
            }
        });
    });

    // Observe each element with the class "animate-on-scroll"
    animateElements.forEach((element) => {
        observer.observe(element);
    });
}

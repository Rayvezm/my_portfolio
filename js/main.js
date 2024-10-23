document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const header = document.getElementById("header-top");
        if (scrollPosition > 100) {
            header.classList.add("header");
        } else {
            header.classList.remove("header");
        }
    })
})
let navLinksAll = document.querySelectorAll(".nav-link");

navLinksAll.forEach(link => {

    link.addEventListener("click", () => {

        navLinksAll.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

const menu = document.getElementById("menu");
const links = document.querySelector(".links");
// const navLinksAll = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
    links.classList.toggle("show");
});



navLinksAll.forEach(link => {

    link.addEventListener("click", () => {
        links.classList.remove("show");
    });

});



document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;

        const plus = q.querySelector(".plus-icon");
        const minus = q.querySelector(".dash-icon");

        answer.classList.toggle("d-none");

        plus.classList.toggle("d-none");
        minus.classList.toggle("d-none");
    });
});

document.querySelectorAll(".btns").forEach(btn => {

    btn.addEventListener("click", () => {

        let season = btn.closest(".Season");

        let arrowDown = btn.querySelector(".arrow-down");
        let arrowUp = btn.querySelector(".arrow-up");

        let seasonBoxes = season.querySelectorAll(".Seaason-box");

        arrowDown.classList.toggle("d-none");
        arrowUp.classList.toggle("d-none");

        seasonBoxes.forEach(box => {
            box.classList.toggle("d-none");
        });

    });

});
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
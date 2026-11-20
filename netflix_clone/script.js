let faqs = document.querySelectorAll(".frequency")
faqs.forEach((faq) => {
let questions = faq.querySelector(".faq")
let icon = faq.querySelector(".plus")

function toggleFaq() {
    faq.classList.toggle("active")

    // if (faq.classList.contains("active")) {
    //     icon.innerText ="x"
    // } else {
    //     icon.innerText = "+"

    // }
}

questions.addEventListener("click", toggleFaq)
icon.addEventListener("click", toggleFaq)
}
)
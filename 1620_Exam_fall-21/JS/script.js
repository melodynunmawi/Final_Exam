moder = document.querySelector(".toggle")

moder.addEventListener("click", mode_swap)

function mode_swap(event) {
    if (event.target.textContent === "Light Mode") {
        event.target.textContent = "Dark Mode"
        root = document.querySelector(":root")
        root.style.setProperty("--background", "#fff6e9")
        root.style.setProperty("--accents", "#df758c")
        root.style.setProperty("--text-main", "#683b3b")
    } else {
        event.target.textContent = "Light Mode"
        root.style.setProperty("--background", "#24141e")
        root.style.setProperty("--accents", "#940b29")
        root.style.setProperty("--text-main", "#d2e7ff")
    }

}
document.getElementById('#frm-btn').submit();

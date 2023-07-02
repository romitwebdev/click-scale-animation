// Get the element using the querySelector
const element = document.querySelector(".element");

document.addEventListener("click", (e) => {
    element.style.top = e.clientY + "px";
    element.style.left = e.clientX + "px";

    // Set a timeout to delay the appearance of the element
    setTimeout(function () {
        element.style.transition = "transform 0.3s ease-in";
        element.style.opacity = "1";
        element.style.visibility = "visible";
        element.style.transform = "scale(10)";
    }, 230);

    // Set a timeout to hide the element after a certain duration
    setTimeout(function () {
        element.style.opacity = "0";
        element.style.visibility = "hidden";
        element.style.transform = "scale(0)";
    }, 700);
});

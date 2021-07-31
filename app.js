const sidebarToggle = document.querySelector(".sidebar-toggle");
const showSidebar = document.querySelector(".show-sidebar");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", function () {
  showSidebar.classList.toggle("show-sidebar");
});


closeBtn.addEventListener("click", () => {
    if(showSidebar.classList.contains) {
        closeBtn.addEventListener('click', () => {
            showSidebar.classList.remove("show-sidebar");
            console.log("red");
        })}
})
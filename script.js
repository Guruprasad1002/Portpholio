document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.querySelector(".open_menu");
    const closeMenu = document.querySelector(".close_menu");
    const mobileMenu = document.querySelector(".mobile_menu_nav");

    function showMenu() {
        mobileMenu.classList.add("active");
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }

    function hideMenu() {
        mobileMenu.classList.remove("active");
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    }

    openMenu.addEventListener("click", function (event) {
        showMenu();
        event.stopPropagation();
    });

    closeMenu.addEventListener("click", function () {
        hideMenu();
    });

    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !openMenu.contains(event.target)) {
            hideMenu();
        }
    });

    mobileMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

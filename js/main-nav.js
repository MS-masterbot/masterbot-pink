    var nav_open_btn = document.querySelector(".main-nav__toggle");
    var main_nav = document.querySelector(".main-nav");

    main_nav.classList.add("main-nav--closed");

    nav_open_btn.addEventListener("click", function(event) {
        event.preventDefault();
        if (main_nav.classList.contains("main-nav--closed")) {
            main_nav.classList.remove("main-nav--closed");
        } else {
            main_nav.classList.add("main-nav--closed");
        }
    });

    window.onresize = function() {
        if ((window.innerWidth > 1200) &&
            !(main_nav.classList.contains("main-nav--closed"))) {
            main_nav.classList.add("main-nav--closed");
        }
    };


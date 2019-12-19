function changeTitle() {
    const message = "Buy iPhone 8";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function showHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-btn');
    const nav = document.querySelector('.navigation');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger-active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger-active'));
        nav.classList.toggle('navigation-active');
    }

    hamburger.addEventListener("click", handleClick);
}

function showPhoto() {
    const photos = document.querySelectorAll(".gallery-photo");

    for (let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", function() {
            const modal = this.querySelector(".modal");

            this.querySelector(".modal").classList.toggle("show-modal");

            window.addEventListener("click", function(e) {
                if (e.target == modal) {
                    modal.classList.toggle("show-modal");
                }
            })
        })
    }
}

function showTooltip() {
    const questionSigns = document.querySelectorAll(".tooltip-box");

    for (let i = 0; i < questionSigns.length; i++) {
        questionSigns[i].addEventListener("mouseover", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.add("show-tooltip");
        })

        questionSigns[i].addEventListener("mouseout", function() {
            const tooltip = this.querySelector(".tooltip");
            tooltip.classList.remove("show-tooltip");
        })
    }
}

function sendForm() {


}

const init = function() {
    changeTitle();
    showHamburgerMenu();
    showPhoto();
    showTooltip();
    // sendForm();
}

document.addEventListener("DOMContentLoaded", init);

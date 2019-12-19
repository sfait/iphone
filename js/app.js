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
    const form = document.getElementById("form");
    const amount = document.querySelector(".amount");
    const chooseProduct = document.querySelector('select[name="chooseProduct"]');
    const chooseColor = document.querySelector('select[name="chooseColor"]');
    const chooseCapacity = document.querySelector('select[name="chooseCapacity"]');
    let sum;

    form.addEventListener('change', function(e) {
        e.preventDefault();

        if(chooseProduct.value == "-1") {
            sum = 0;
            amount.textContent = 0;
        } else if (chooseProduct.value == "iphone") {
            sum = 99.99;
            amount.textContent = 99.99;
        } else {
            sum = 129.99;
            amount.textContent = 129.99;
        }

        if(chooseCapacity.value == "256") {
            sum += 40.00;
            amount.textContent = sum;
        }

        // if (!errors.length) {
        //     this.submit();
        // } else {
        //
        // }
    });
}

const init = function() {
    changeTitle();
    showHamburgerMenu();
    showPhoto();
    showTooltip();
    sendForm();
}

document.addEventListener("DOMContentLoaded", init);

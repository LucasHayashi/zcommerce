let btnMenu = document.querySelector(".act-menu");
let btnEnviar = document.getElementById("btn-enviar");

function alternarClasse(element, className) {
    element.classList.toggle(className);
}

function alternarBtnMenu(mobileMenu, classValidity) {
    let menuIcon = document.querySelector("#menu-control");
    if (mobileMenu.classList.contains(classValidity)) {
        menuIcon.innerText = "close";
    } else {
        menuIcon.innerText = "menu";
    }
}

function mostrarMenu(e) {
    let mobileMenu = document.querySelector(".mobile-menu");
    alternarClasse(mobileMenu, "active");
    alternarBtnMenu(mobileMenu, "active");
}

function animaSection() {
    let sections = document.querySelectorAll(".scroll-section");
    let elementsList = document.querySelectorAll(
        ".image-tag, .tag-title, .text-tag"
    );

    sections.forEach((section) => {
        let screenCalc = window.innerHeight * 0.7;
        let topDist = section.getBoundingClientRect().top - screenCalc;
        if (topDist < 0) {
            section.classList.add("scroll-ativo");
            if (section.id == "produto") {
                elementsList.forEach((item) => {
                    item.classList.add("on");
                });
            }
        } else {
            section.classList.remove("scroll-ativo");
            if (section.id == "produto") {
                elementsList.forEach((item) => {
                    item.classList.remove("on");
                });
            }
        }
    });
}

animaSection();

window.addEventListener("scroll", animaSection);

btnMenu.addEventListener("click", mostrarMenu);

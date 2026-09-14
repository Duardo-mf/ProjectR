document.getElementsByClassName("sim")[0].addEventListener("click", function () {
    var sim = document.getElementsByClassName("rsim")[0];
    sim.style.display = "grid";
    var perg = document.getElementsByClassName("perg")[0];
    perg.style.display = "none";
});

document.getElementsByClassName("nao")[0].addEventListener("click", function () {
    var sim = document.getElementsByClassName("rnao")[0];
    sim.style.display = "grid";
    var perg = document.getElementsByClassName("perg")[0];
    perg.style.display = "none";
});

document.getElementsByClassName("vamos")[0].addEventListener("click", function () {
    var sim = document.getElementsByClassName("motivos")[0];
    sim.style.display = "grid";
    var perg = document.getElementsByClassName("limpo");
    var apagar = [0, 1];
    apagar.forEach(function (index) {
        if (perg[index]) {
            perg[index].style.display = "none";
        }
    })
});

document.getElementsByClassName("vamos2")[0].addEventListener("click", function () {
    var sim = document.getElementsByClassName("motivos")[0];
    sim.style.display = "grid";
    var perg = document.getElementsByClassName("limpo");
    var apagar = [0, 1];
    apagar.forEach(function (index) {
        if (perg[index]) {
            perg[index].style.display = "none";
        }
    })
});

document.getElementsByClassName("final")[0].addEventListener("click", function () {
    var sim = document.getElementsByClassName("considera")[0];
    sim.style.display = "grid";
    var perg = document.getElementsByClassName("motivos");
    var apagar = [0, 1];
    apagar.forEach(function (index) {
        if (perg[index]) {
            perg[index].style.display = "none";
        }
    })
});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => myObserver.observe(el));
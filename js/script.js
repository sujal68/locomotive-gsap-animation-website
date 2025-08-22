function loading() {
    var tl = gsap.timeline()

    tl.to("#yellow", {
        top: "-100%",
        delay: 0.3,
        duration: 0.5,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.5,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        delay: 0.7,
        duration: 0.5,
        color: " black",
    }, "anim")
    tl.from("#nav", {
        opacity: 0,
        delay: 1,
        duration: 0.5,
        color: " black",
    }, "anim")

    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
            document.querySelector("#loader").style.display = "none";
            scroll.update(); // Locomotive scroll refresh
        }
    })
}
loading();
function loco() {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });

    document.querySelector("#footer h3").addEventListener("click", () => {
        scroll.scrollTo(0)
    })


    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page-2");
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url('${bgimg}')`;
        });
    });
}
loco();
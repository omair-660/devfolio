window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scrollToTop").classList.add("visible");
    } else {
        document.getElementById("scrollToTop").classList.remove("visible");
    }
}

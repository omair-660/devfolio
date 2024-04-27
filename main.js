window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scrollToTop").classList.add("visible");
    } else {
        document.getElementById("scrollToTop").classList.remove("visible");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    
    function startCounting(entry) {
        const target = entry.target;
        const countTo = parseInt(target.querySelector('h6').textContent);
        let currentCount = 0;
        const counter = setInterval(function () {
            target.querySelector('h6').textContent = ++currentCount;
            if (currentCount >= countTo) clearInterval(counter);
        }, 10); 
    }

    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry);
                observer.unobserve(entry.target);
            }
        });
    });

    
    document.querySelectorAll('.item').forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function startProgress(entry) {
        const target = entry.target;
        const progressValue = parseInt(target.getAttribute('aria-valuenow'));
        let currentProgress = 0;
        const progressInterval = setInterval(function () {
            target.querySelector('.progress-bar').style.width = currentProgress + '%';
            currentProgress++;
            if (currentProgress > progressValue) clearInterval(progressInterval);
        }, 20); // Adjust the interval for smoother progress animation
    }

    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(entry);
                progressObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.progress').forEach(progress => {
        progressObserver.observe(progress);
    });
});
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
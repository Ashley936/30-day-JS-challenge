let images = document.querySelectorAll('.slide-in')

window.addEventListener('scroll', debounce(checkSlide));


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};


function checkSlide() {
    images.forEach(image => {
        let imageIn = image.getBoundingClientRect().top < (window.innerHeight - image.height/4);
        let imageOut = image.getBoundingClientRect().bottom < 0;
        if (imageIn && !imageOut)
            image.classList.add('active');
        else
            image.classList.remove('active');
    })
} 
/* function checkSlide() {
    images.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
} */

/* function info() {
    images.forEach(image => {
        console.log(image.getBoundingClientRect().top);
        console.log(image.getBoundingClientRect().bottom);
        console.log(image.getBoundingClientRect().height);
        console.log(image.offsetTop);
        console.log(image.height);
    })
} */

  
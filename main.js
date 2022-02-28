function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[1].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = -1 : leftPosition = parseFloat(track.style.left.slice(0, 3) * -4);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) :  nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
    
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-0.25 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
       track.style.left = `${-2.5 * (leftPosition + slickWidth)}px`;
    }
}

// function geek() {
  document.querySelectorAll('a[href^="#ancla1"]').forEach(elem => {
    elem.addEventListener('click', e => {
      e.preventDefault();
      let block = document.querySelector(elem.getAttribute('href')),
        offset = elem.dataset.offset ? parseInt(elem.dataset.offset) : 0,
        bodyOffset = document.body.getBoundingClientRect().top;
      window.scrollTo({
        top: block.getBoundingClientRect().top - bodyOffset + offset,
        behavior: 'smooth'
      });
    });
  });
  // }
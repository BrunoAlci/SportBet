

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
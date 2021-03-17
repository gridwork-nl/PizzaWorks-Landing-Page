const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")


// check if element is in viewport
function isInViewport (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// check if the 
function isDesktop (element1, element2) {
  if(window.innerWidth > 900) {
    element1.classList.add('hide');
    element2.classList.add('hide');
  }
}

isDesktop(section1, section2);

// check if section 1 is in viewport and toggle animation
document.addEventListener('scroll', () => {
  if(isInViewport(section1)) {
    section1.classList.add('show-animation')
    section1.classList.remove('hide')
  } 
})

// check if section 2 is in viewport and toggle animation
document.addEventListener('scroll', () => {
  if (isInViewport(section2)) {
    section2.classList.add('show-animation')
    section2.classList.remove('hide')
  }
})
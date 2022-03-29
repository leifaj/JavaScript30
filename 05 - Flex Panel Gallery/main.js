const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => {
    if (panel === this) { // If the panel is the clicked one, toggle open class
      panel.classList.toggle('open');
    } else {
      panel.classList.remove('open'); // Else, remove open class
    }
  });
}

function toggleActive(e) {
  panels.forEach(panel => {
    if (panel === this) { // If the panel is the clicked one, toggle open-active class
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    } 
  });
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

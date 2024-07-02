

// changement de thème - - - - - - - - - - - - - - 

const plantButton = document.getElementById('plant');
const iceteaButton = document.getElementById('icetea');
const cloudButton = document.getElementById('cloud');
const jellyButton = document.getElementById('jelly');
const body = document.body;


function changeClass(newClass) {
    const classes = ['plant', 'icetea', 'cloud', 'jelly'];

    body.classList.remove(...classes);  
    body.classList.add(newClass);  
  }

plantButton.addEventListener('click', () => changeClass('plant'));
iceteaButton.addEventListener('click', () => changeClass('icetea'));
cloudButton.addEventListener('click', () => changeClass('cloud'));
jellyButton.addEventListener('click', () => changeClass('jelly'));


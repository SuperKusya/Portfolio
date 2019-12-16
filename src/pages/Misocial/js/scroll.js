const mainContent = document.querySelector('.main-content'),
      downArrow = document.querySelector('.down-arrow'),
      navBnt = document.querySelector('.navbar__btn');

function handleButtonClick() {
    mainContent.scrollIntoView({block: "start", behavior: "smooth"});
}

downArrow.addEventListener('click', handleButtonClick);
navBnt.addEventListener('click', handleButtonClick);
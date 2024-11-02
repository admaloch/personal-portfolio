// fake loading animation -- fade out loader after 1.5s unless it is scrolled to a different part of the page
const loader = document.querySelector(".loader");
const main = document.querySelector("#main");

function fadeLoadingAnimation() {
  let fadeOutTime = 200;
  let delayTime = 1500;
  if (window.scrollY === 0 && window.innerWidth > 600) {
    fadeOutTime = 200;
    delayTime = 1500;
  } else {
    fadeOutTime = 0;
    delayTime = 0;
  }
  setAOSDelay(delayTime); // set aos delay to 0 if page is reloaded
  setTimeout(() => {
    $(".loader").fadeOut(fadeOutTime);
    document.body.classList.remove("no-scroll");
    document.querySelector("#burger-btn").style.opacity = "1";
  }, delayTime);
}

// Loop through aos delay animations and change the delay time... there is a delay on page load when the fake loading animation runs.. get rid of the delay if the page relaods but animation doesnt
const setAOSDelay = (delayAmount) => {
  const elementsWithDelay = document.querySelectorAll(
    "#home [data-aos-delay], #navbarNav [data-aos-delay]"
  );
  elementsWithDelay.forEach((element) => {
    element.setAttribute("data-aos-delay", delayAmount);
  });
};

fadeLoadingAnimation();
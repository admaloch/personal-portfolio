// fake loading animation -- fade out loader after 1.5s unless it is scrolled to a different part of the page
const loader = document.querySelector(".loader");
const main = document.querySelector("#main");

function fadeLoadingAnimation() {

  let fadeOutTime = 200;
  let delayTime = 1500;

  let doesCookieExist = false

  if (checkCookie('port-page')) {
    doesCookieExist = true
  } else {
    setCookie('port-page', 'true', 1);
  }

  if (window.scrollY === 0 && !doesCookieExist) {
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
  const elementsWithDelay = document.querySelectorAll('[data-aos-delay]');
  elementsWithDelay.forEach((element) => {
    element.setAttribute("data-aos-delay", delayAmount);
  });
};

//func to set cookie
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Set expiration time
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

//func to check if the cookie exists
function checkCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return true; // Cookie exists
    }
  }
  return false; // Cookie does not exist
}

fadeLoadingAnimation();
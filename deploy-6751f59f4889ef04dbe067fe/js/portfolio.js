function fadeIn(item) {
  item.style.opacity = 100;
}
function fadeOut(item) {
  item.style.opacity = 0;
}

const scrollItemToTop = (item) => {
  item.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  } else {
    return;
  }
}
const button = document.querySelector("#arrow-scroll-trigger");
const tooltip = document.querySelector("#tooltip");

const popperInstance = Popper.createPopper(button, tooltip, {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
  // Make the tooltip visible
  tooltip.setAttribute("data-show", "");
  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: true },
    ],
  }));

  // Update its position
  popperInstance.update();
}

function hide() {
  // Hide the tooltip
  tooltip.removeAttribute("data-show");

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: false },
    ],
  }));
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];
// page scroll event listener.. nav/social icons/progress bar reveal
const progressbarinner = document.querySelector(".progress-bar-inner");
const progressContainer = document.querySelector(".progress-container");
const nav = document.querySelector("nav");
const navStyle = document.querySelector("#nav-ul");
const socialIcons = document.querySelector(".social-buttons");

const updateProgressBar = () => {
  // scroll progress bar
  let h = document.documentElement;
  let st = h.scrollTop || document.body.scrollTop;
  let sh = h.scrollHeight || document.body.scrollHeight;
  let percent = (st / (sh - h.clientHeight)) * 100;
  let roundedPercent = Math.floor(percent);
  progressbarinner.innerText = roundedPercent + "%";
  progressbarinner.style.width = percent + "%";
};

const fadeItemsOnScroll = () => {
  if (window.pageYOffset > 100) {
    fadeIn(progressContainer);
    nav.classList.add("bg-custom-dark", "shadow");
    navStyle.classList.add("nav-style-scroll");
    if (window.pageYOffset > 300) {
      fadeIn(socialIcons);
    }
    if (window.innerWidth < 992) {
      nav.classList.remove("bg-custom-dark", "shadow");
      navStyle.classList.remove("nav-style-scroll");
    }
  } else {
    fadeOut(progressContainer);
    nav.classList.remove("bg-custom-dark", "shadow");
    navStyle.classList.remove("nav-style-scroll");
    fadeOut(socialIcons);
  }
};
const bioBtns = document.querySelectorAll(".bio-btn");

const handleBioBtns = (btn) => {
  bioBtns.forEach((items) => items.classList.remove("active"));
  const btnDataId = btn.getAttribute("data-id");
  btn.classList.add("active");
  document.querySelectorAll(".bio-section").forEach((bio) => {
    const bioDataId = bio.getAttribute("data-id");
    if (btnDataId === bioDataId) {
      $(`.bio-section[data-id=${bioDataId}]`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    } else {
      bio.style.display = "none";
    }
  });
};
// funcs for bootstrap navbar
const fadeNavList = () => {
  document.addEventListener("click", function (event) {
    // if the clicked element isn't child of the navbar, you must close it if is open
    if (
      !event.target.closest(".nav-style") &&
      document.getElementById("navbarNav").classList.contains("show")
    ) {
      document.getElementById("burger-btn").click();
    }
  });
};

// on smaller screen hide navbar, if it is active, on scroll
const hideNavPopup = () => {
  const burgerIcon = document.querySelector("#burger-btn");
  if (!burgerIcon.classList.contains("collapsed")) {
    burgerIcon.click();
  }
};

const fadeModalOverlay = (e) => {
  const burgerIcon = document.querySelector("#burger-btn");
  if (burgerIcon.classList.contains("collapsed")) {
    $(".modal-overlay").fadeOut();
  } else {
    $(".modal-overlay").fadeIn();
  }
};

document
  .querySelector("#burger-btn")
  .addEventListener("click", fadeModalOverlay);

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    hideNavPopup();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    console.log("clicked");
    hideNavPopup();
    closeModal()
  }
});

// project section -- reveal more info btn
const moreInfoBtnHandler = (btn) => {
    
  const projectInfoOverlay = btn
    .closest(".image-overlay")
    .querySelector(".project-info");

  const biotext = projectInfoOverlay.querySelector(".bio-text");
  projectInfoOverlay.classList.add("project-info-appear");


  projectInfoOverlay.addEventListener("mouseleave", () => {
    removeProjectInfoOverlay(projectInfoOverlay, biotext);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      removeProjectInfoOverlay(projectInfoOverlay, biotext);
    }
  });

};

const removeProjectInfoOverlay = (projectItem, text) => {
  projectItem.classList.remove("project-info-appear");
  scrollItemToTop(text);
};

// open and close modal in contact section for all btns
const modalBG = document.querySelector(".modal-bg");
const contactButtons = document.querySelectorAll(".contact-btn");
const closeButton = document.querySelector(".close-btn");
const modalTitle = document.querySelector(".modal-title");
const modalParagraph = document.querySelector(".modal-paragraph");
const emailContent = document.querySelector(".form");
const contactItem = document.querySelector(".contact-item");

const showModal = (contactButton) => {
  if (contactButton.id === "email-btn") {
    contactItem.classList.add("d-none");
    emailContent.classList.remove("d-none");
  } else {
    emailContent.classList.add("d-none");
    contactItem.classList.remove("d-none");
    modalTitle.innerText = contactButton.title;
    modalParagraph.innerText = contactButton.dataset.content;
  }

  modalBG.style.width = "100vw";
  modalBG.style.height = "100vh";
  modalBG.style.opacity = 1;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modalBG.style.width = 0;
  modalBG.style.height = 0;
  modalBG.style.opacity = 0;
  document.body.style.overflow = "auto";
};
// add/remove disabled class for links/btns on project items on hover
//on mobile the hover was causing issues and css didn't fix it so it needed js
const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((item) => {
  const moreInfoBtn = item.querySelector(".project-description-btn");
  const linksToCode = item.querySelector(".code-links");
  let isHovered = false;
  item.addEventListener("mouseenter", () => {
    if (!isHovered) {
      isHovered = true;
      setTimeout(() => {
        moreInfoBtn.classList.remove("disabled");
        linksToCode.classList.remove("disabled");
      }, 150);

      console.log(moreInfoBtn, linksToCode);
    }
  });
  item.addEventListener("mouseleave", () => {
    if (isHovered) {
      isHovered = false;
      moreInfoBtn.classList.add("disabled");
      linksToCode.classList.add("disabled");
      console.log(moreInfoBtn, linksToCode);
    }
  });
});
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// tooltips/popovers etc..
showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});

// smaller screen - click sceeen to make navbar list disapear
fadeNavList();

// update/show/hide progbar and social icon bubbles + navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    updateProgressBar();
    fadeItemsOnScroll();
    hideNavPopup();
  });
});

// about section bio btns
document.querySelectorAll(".bio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    handleBioBtns(btn);
  });
});

// about me section bioBtn icons... show initial item
$("#about-section").show();

// project section -- more details btn handler -- when hovering over item
document.querySelectorAll(".project-description-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    moreInfoBtnHandler(btn);
  });
});

// contact section modal reveal + email modal blur/focus
document.querySelectorAll(".contact-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    showModal(btn);
  });
});

document.querySelector(".close-btn").addEventListener("click", closeModal);

document.querySelector(".modal-bg").addEventListener("click", function (event) {
  if (event.target === modalBG || event.target === emailContent) {
    closeModal();
  }
});

document.querySelectorAll(".contact-input").forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.querySelector("#career-btn-link").addEventListener("click", () => {
  const careerBtn = document.querySelector('div[data-id="career"]');
  careerBtn.click();
});

// Hero
const heroContentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const hero__content = entry.target.querySelector(".hero__content");

    if (entry.isIntersecting) {
      hero__content.classList.add("slideleft");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    hero__content.classList.remove("slideleft");
  });
});

heroContentObserver.observe(document.querySelector("#hero"));

const heroBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const hero__btn = entry.target.querySelector(".hero__btn");

    if (entry.isIntersecting) {
      hero__btn.classList.add("hithere");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    hero__btn.classList.remove("hithere");
  });
});

heroBtnObserver.observe(document.querySelector("#hero"));

// About
const aboutContentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const about__content = entry.target.querySelector(".about__content");

    if (entry.isIntersecting) {
      about__content.classList.add("slideright");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    about__content.classList.remove("slideright");
  });
});

aboutContentObserver.observe(document.querySelector("#about"));

const aboutBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const about__btn = entry.target.querySelector(".about__btn");

    if (entry.isIntersecting) {
      about__btn.classList.add("slideleft");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    about__btn.classList.remove("slideleft");
  });
});

aboutBtnObserver.observe(document.querySelector("#about"));

//Programs
const programsContentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const programs__content = entry.target.querySelector(".programs__content");

    if (entry.isIntersecting) {
      programs__content.classList.add("slideleft");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    programs__content.classList.remove("slideleft");
  });
});

programsContentObserver.observe(document.querySelector("#programs"));

const programsBtnObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const programs__btn = entry.target.querySelector(".programs__btn");

    if (entry.isIntersecting) {
      programs__btn.classList.add("slideright");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    programs__btn.classList.remove("slideright");
  });
});

programsBtnObserver.observe(document.querySelector("#programs"));

// Contacts
const contactInfoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const contact__info = entry.target.querySelector(".contact__info");

    if (entry.isIntersecting) {
      contact__info.classList.add("slideleft");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    contact__info.classList.remove("slideleft");
  });
});

contactInfoObserver.observe(document.querySelector("#contact"));

const contactFormObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const contact__form = entry.target.querySelector(".contact__form");

    if (entry.isIntersecting) {
      contact__form.classList.add("slideright");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    contact__form.classList.remove("slideright");
  });
});

contactFormObserver.observe(document.querySelector("#contact"));

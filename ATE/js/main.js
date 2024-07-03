
/**
 * HOME PAGE
 */
// Hero
let hero = document.querySelector("#hero");
if (hero) {
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

  heroContentObserver.observe(hero);

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

  heroBtnObserver.observe(hero);
}
//about on home page
let homeAbout = document.querySelector("#about");
if (homeAbout) {
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

  aboutContentObserver.observe(homeAbout);

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

  aboutBtnObserver.observe(homeAbout);
}

//Programs
let programs = document.querySelector("#programs");
if (programs) {
  const programsContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const programs__content =
        entry.target.querySelector(".programs__content");

      if (entry.isIntersecting) {
        programs__content.classList.add("slideleft");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      programs__content.classList.remove("slideleft");
    });
  });

  programsContentObserver.observe(programs);

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

  programsBtnObserver.observe(programs);
}

// Contacts on home page
let contact = document.querySelector("#contact");
if (contact) {
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

  contactInfoObserver.observe(contact);

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

  contactFormObserver.observe(contact);
}

/**
 * ABOUT PAGE
 */
//company info on about page
let aboutCompany = document.querySelector("#company");
if (aboutCompany) {
  const companyTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const company__title = entry.target.querySelector(".company__title");

      if (entry.isIntersecting) {
        company__title.classList.add("slideright");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      company__title.classList.remove("slideright");
    });
  });

  companyTitleObserver.observe(aboutCompany);

  const companyContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const company__content = entry.target.querySelector(".company__content");

      if (entry.isIntersecting) {
        company__content.classList.add("slideleft");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      company__content.classList.remove("slideleft");
    });
  });

  companyContentObserver.observe(aboutCompany);
}

let team = document.querySelector("#team");
if (team) {
  const teamIntroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const team__intro = entry.target.querySelector(".team__intro");

      if (entry.isIntersecting) {
        team__intro.classList.add("slideright");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      team__intro.classList.remove("slideright");
    });
  });

  teamIntroObserver.observe(team);

  const teamCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const team__cards = entry.target.querySelector(".team__cards");

      if (entry.isIntersecting) {
        team__cards.classList.add("slideleft");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      team__cards.classList.remove("slideleft");
    });
  });

  teamCardsObserver.observe(team);
}

let fWidgets = document.querySelector("#footer-widgets");
if (fWidgets) {
  const fContactFormObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let contact__form = entry.target.querySelector(".contact__form");
      if (entry.isIntersecting) {
        contact__form.classList.add("slideright");
        return;
      }
      contact__form.classList.remove("slideright");
    });
  });
  fContactFormObserver.observe(fWidgets);

  const fContactInfoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let contact__info = entry.target.querySelector(".contact");
      if (entry.isIntersecting) {
        contact__info.classList.add("slideleft");
        return;
      }
      contact__info.classList.remove("slideleft");
    });
  });
  fContactInfoObserver.observe(fWidgets);
}

// //Masonry gallery
// let gallery = document.querySelector("#gallery");

// let msnry = new Masonry(gallery, {
//   // options
//   itemSelector: ".gallery__item",
//   columnWidth: 100,
// });
// msnry.layout();

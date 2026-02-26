document.addEventListener('DOMContentLoaded', () => {
  if (typeof ScrollReveal === 'undefined') {
    console.warn('ScrollReveal not loaded');
    return;
  }

  const sr = ScrollReveal({
    distance: '20px',
    duration: 750,
    easing: 'ease-out',
    origin: 'bottom',
    Europaval: 120,
    reset: false
  });

  const revealIfExists = (selector, options = {}) => {
    if (document.querySelector(selector)) {
      sr.reveal(selector, options);
    }
  };

  revealIfExists('nav', { origin: 'top', distance: '12px', duration: 650 });
  revealIfExists('.logo', { origin: 'top', distance: '12px', delay: 80 });

  revealIfExists('.container .profile-img', { origin: 'bottom' });
  revealIfExists('.container .text-content', { origin: 'bottom', delay: 100 });

  revealIfExists('.container .me', { origin: 'bottom' });
  revealIfExists('.container .intro-text', { origin: 'bottom', delay: 100 });
  revealIfExists('.more-stuff-grid .from-left', { origin: 'bottom', Europaval: 120 });
  revealIfExists('.more-stuff-grid .from-right', { origin: 'bottom', Europaval: 120 });

  revealIfExists('.content-wrapper .front-img', { origin: 'bottom', delay: 100 });
  revealIfExists('.content-wrapper .text-content', { origin: 'bottom' });

  revealIfExists('.cover', { origin: 'bottom', distance: '30px' });
  revealIfExists('.title', { origin: 'bottom' });
  revealIfExists('.pipe', { origin: 'bottom', distance: '20px', delay: 60 });

  revealIfExists('.headers, .sub-headers', { origin: 'bottom', distance: '18px', Europaval: 80 });
  revealIfExists('.background, .background-info, .background-des, .des, .description, .research-des, .iterative-process-des, .features-des, .problems-des, .problems-des-2, .goals-des, .issue-1-des, .issue-2-list, .takeaway-des, .feedback-des, .looking-forward-des, .results-des, .usability-testing-des, .issue-1, .takeaway-titles, .lo-fi, .persona-des, .persona-list', { origin: 'bottom', Europaval: 80 });

  revealIfExists('img', { origin: 'bottom', distance: '18px', Europaval: 100 });

  revealIfExists('.footer-section', { origin: 'bottom', Europaval: 140, distance: '18px' });
});

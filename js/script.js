const sliders = document.querySelectorAll('.slider');
// modals
const sidebar = document.querySelector('.sidebar');
const burgerMenu = document.querySelector('.header__burger-menu');
// buttons
const buttonsLikes = document.querySelectorAll('.catalog__btn-like');
const buttonsFilter = document.querySelectorAll('.catalog__filter-btn');
const buttonSidebar = document.querySelector('.sidebar-button');
const buttonsPagination = document.querySelectorAll('.pagination__btn');
const buttonsPaginationTypeMore = document.querySelector(
  '.pagination__btn_type_more'
);
const burger = document.querySelector('.header__button-burger');
// footer
const footerTitles = document.querySelectorAll('.footer__title');

// All EventListener

function initPage() {
  // reset style active
  function clearBgButtons(buttons) {
    buttons.forEach((btn) => {
      btn.classList.remove(`active`);
    });
  }
  // Modal
  function openModal(modal) {
    modal.classList.add('show');
    blockedScroll();
  }
  function closeModal(modal) {
    if (modal === sidebar) buttonSidebar.classList.remove(`active`);
    modal.classList.remove('show');
    unBlockedScroll();
  }
  // modal scroll
  function blockedScroll() {
    document.body.classList.add('page-lock');
  }
  function unBlockedScroll() {
    document.body.classList.remove('page-lock');
  }
  // Close modal: overlay, esc, btn-close
  function setModalListener(modal) {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeModal(modal);
      }
    });
    modal.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('show')) {
        closeModal(modal);
      }
      if (evt.target.classList.contains('button-close')) {
        closeModal(modal);
      }
    });
  }
  // EventListener modals
  setModalListener(sidebar);
  setModalListener(burgerMenu);

  // burger
  burger.addEventListener('click', () => {
    openModal(burgerMenu);
  });

  // sidebar button
  buttonSidebar.addEventListener('click', () => {
    openModal(sidebar);
    buttonSidebar.classList.add(`active`);
  });
  // all sliders
  sliders.forEach((slider) => {
    const buttons = slider.querySelectorAll('button');
    const img = slider.querySelector('img');
    const src = img.src;
    buttons.forEach((btn, index) => {
      btn.addEventListener('mouseover', () => {
        clearBgButtons(buttons);
        btn.classList.toggle(`active`);
        if (index === 0) {
          img.src = src;
        } else {
          img.src = `./img/catalog/slide-${index}.png`;
        }
      });
    });
  });

  // all buttons like
  buttonsLikes.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle(`active`);
    });
  });

  // all buttons filter
  buttonsFilter.forEach((button) => {
    button.addEventListener('click', () => {
      clearBgButtons(buttonsFilter);
      button.classList.toggle(`active`);
    });
  });

  // all buttons pagination
  buttonsPagination.forEach((button) => {
    button.addEventListener('click', () => {
      if (button === buttonsPaginationTypeMore) {
        return;
      } else {
        clearBgButtons(buttonsPagination);
        button.classList.toggle(`active`);
      }
    });
  });
  // all footer info-title
  footerTitles.forEach((title) => {
    const footerList = document.querySelector(`#${title.id}-list`);
    title.addEventListener('click', () => {
      footerList.classList.toggle(`show`);
    });
  });
}
initPage();

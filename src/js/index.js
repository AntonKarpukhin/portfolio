import '../pages/index.css';
import 'material-icons/iconfont/material-icons.css';
import { addDarkClassHtml, checkingTheme } from "../components/dark-theme";
import { addEngRUHtml, checkingLanguage } from "../components/change-language";
import { skills, sliderNew, sliderOld } from "../components/constants";
import { renderSkills } from "../components/skill";
import { NewSlider, OldSlider, Slider } from "../components/slider";

window.addEventListener('DOMContentLoaded', function() {

  try {

    //Смена темы
    const buttonTheme = document.querySelector('.name__change-theme');
    buttonTheme.addEventListener('click', checkingTheme);
    addDarkClassHtml();
    //Смена языка
    const buttonLanguage = document.querySelectorAll('[data-change-language]');
    buttonLanguage.forEach(button => {
      button.addEventListener('click', checkingLanguage);
    })
    addEngRUHtml()

    // Создание карточек со скиллами
    skills.forEach(item => {
      const {src, name, stars} = item;
      renderSkills(src, name, stars)
    })

    //Слайдер со старыми проектами
    const wrapperOld = document.querySelector('.portfolio__wrapper_type_old');
    const backOld = wrapperOld.querySelector('.portfolio__button_type_back_old'),
          forwardOld = wrapperOld.querySelector('.portfolio__button_type_forward_old'),
          oldSlider = new NewSlider(
        '.portfolio__img_type_old',
        '.portfolio__link_type_old',
        '.portfolio__git_type_old',
        sliderOld,
        'fade'
      );

    backOld.addEventListener('click', () => {
      oldSlider.changeBack();
    })
    forwardOld.addEventListener('click', () => {
      oldSlider.changeForward();
    })
    oldSlider.changeSlide(0);

    //Слайдер с новыми проектами
    const wrapperNew = document.querySelector('.portfolio__wrapper_type_new');
    const backNew = wrapperNew.querySelector('.portfolio__button_type_back_new'),
          forwardNew = wrapperNew.querySelector('.portfolio__button_type_forward_new'),
          newSlider = new OldSlider(
            '.portfolio__img_type_new',
            '.portfolio__link_type_new',
            '.portfolio__git_type_new',
            sliderNew,
            'fade'
          );

    backNew.addEventListener('click', () => {
      newSlider.changeBack();
    })
    forwardNew.addEventListener('click', () => {
      newSlider.changeForward();
    })
    newSlider.changeSlide(0);

    // Точ события на слайдере.
    wrapperOld.querySelector('.portfolio__img_type_old')
      .addEventListener('touchstart', (evt) => {
        oldSlider.handleTouchStart(evt);
      })
    wrapperOld.querySelector('.portfolio__img_type_old')
      .addEventListener('touchmove', (evt) => {
        oldSlider.handleTouchMove(evt);
      })
    wrapperOld.querySelector('.portfolio__img_type_old')
      .addEventListener('touchend', () => {
        oldSlider.handleTouchEnd();
      })


    wrapperNew.querySelector('.portfolio__img_type_new')
      .addEventListener('touchstart', (evt) => {
        newSlider.handleTouchStart(evt);
      })
    wrapperNew.querySelector('.portfolio__img_type_new')
      .addEventListener('touchmove', (evt) => {
        newSlider.handleTouchMove(evt);
      })
    wrapperNew.querySelector('.portfolio__img_type_new')
      .addEventListener('touchend', () => {
        newSlider.handleTouchEnd();
      })

  } catch ( err ) {
    throw new Error(err)
  }
});





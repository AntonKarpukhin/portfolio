import { dataLanguage } from "./constants";

const navigateData = document.querySelectorAll('[data-lang="navigate"]');
const aboutName= document.querySelectorAll('[data-lang="name"]');
const aboutData = document.querySelectorAll('[data-lang="about"]');
const aboutSkills = document.querySelectorAll('[data-lang="skills"]');
const aboutPortfolio = document.querySelectorAll('[data-lang="portfolio"]');
const aboutFooter= document.querySelectorAll('[data-lang="footer"]');
const buttonLanguage = document.querySelectorAll('[data-change-language]');
const body = document.querySelector('body');
function changeButtonLanguage() {
  try {
    buttonLanguage.forEach(button => {
      const attribute = button.getAttribute('data-change-language').toLowerCase().slice(0, 2);
      if (localStorage.getItem('language') === attribute) {
        button.classList.add('name__language_active');
      } else {
        button.classList.remove('name__language_active');
      }
    });
  } catch (err) {
    throw new Error(`Произошла ошибка ${err}`);
  }
}

function changeLanguage(language, dataHtml, changer) {
  dataHtml.forEach((item, i) => {
    item.textContent = dataLanguage[changer][language][i];
  })
}

function addEngRUHtml () {
  try {
    if (localStorage.getItem('language') === 'en') {
      document.querySelector('html').lang = 'en'
      localStorage.setItem('language', 'en');
    } else {
      document.querySelector('html').lang = 'ru'
      localStorage.setItem('language', 'ru');
    }
  } catch (err) {
    throw new Error(`Произошла ошибка ${err}`);
  }
  const lang = localStorage.getItem('language');
  changeButtonLanguage()
  changeLanguage(lang, navigateData,'navigate')
  changeLanguage(lang, aboutName,'name')
  changeLanguage(lang, aboutData,'about')
  changeLanguage(lang, aboutSkills,'skills')
  changeLanguage(lang, aboutPortfolio,'portfolio')
  changeLanguage(lang, aboutFooter,'footer')

}

function checkingLanguage (evt) {
  evt.preventDefault();
  const data = evt.target.dataset.changeLanguage.toLowerCase();
  if (localStorage.getItem('language') === 'en' && data !== 'eng') {
    localStorage.removeItem('language');
    localStorage.setItem('language', 'ru');
  } else if (localStorage.getItem('language') === 'ru' && data !== 'ru') {
    localStorage.removeItem('language');
    localStorage.setItem('language', 'en');
  }
  addEngRUHtml()
}

export { addEngRUHtml, checkingLanguage }
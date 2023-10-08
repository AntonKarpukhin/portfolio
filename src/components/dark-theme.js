const body = document.body;
const button = document.querySelector('.material-icons-outlined');

function addDarkClassHtml () {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      body.setAttribute('dark', '');
      button.textContent = 'dark_mode';
    } else {
      body.removeAttribute('dark', '');
      button.textContent = 'wb_sunny';
    }
  } catch (err) {
    throw new Error(`Произошла ошибка ${err}`);
  }
}

function checkingTheme(evt) {
  evt.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassHtml();
}

export { addDarkClassHtml, checkingTheme }
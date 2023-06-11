const html = document.querySelector('html');
const themeToggle = document.querySelector('.themetoggle');



// Перевіряємо, якщо в ЛС збережена темна тема, то додаємо клас темний на сторінку при завантаження сторінки
addDarkClassToHTML();

// Змінюємо тему по кліку на іконку
themeToggle.addEventListener('click', changeTheme);


function changeTheme(evt) {
    evt.preventDefault();
     if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
    addDarkClassToHTML();
};


function addDarkClassToHTML() {
try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
  } catch (err) { }

};
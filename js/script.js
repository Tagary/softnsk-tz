const select = document.querySelector('.select');
const options = document.querySelector('.options');
const optionItems = document.querySelectorAll('.option_item');
const burgerBtn = document.querySelector('.header__burgerbtn_color');
const burgerMenu = document.querySelector('.header__navbarmob');
const burgerLink = document.querySelectorAll('.header__navbarlink');

select.addEventListener('click', () => {
  options.classList.toggle('active');
  select.classList.toggle('focus');
});

document.addEventListener('click', (e) => {
  if (e.target != select) {
    options.classList.remove('active');
    select.classList.remove('focus');
  }
});

optionItems.forEach((item) => {
  item.addEventListener('click', () => {
    select.innerHTML = item.querySelector('label').innerHTML;
    options.classList.remove('active');
    select.classList.remove('focus');
  });
});

const rangeValues = () => {
  document.getElementById('rangeValue').innerHTML =
    document.getElementById('formRange').value + '%';
};

document.getElementById('formRange').oninput = rangeValues;

burgerBtn.addEventListener('click', () => {
  if (burgerMenu.style.display === 'block') {
    burgerMenu.style.display = 'none';
    return;
  }
  burgerMenu.style.display = 'block';
});

burgerLink.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.style.display = 'none';
  });
});

const navbarToggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.navbar-collapse');
const navItem = document.querySelectorAll('.nav-item');
navbarToggler.addEventListener('click', () => {
  collapse.classList.toggle('show');
  navItem.forEach(item => {
    item.onclick = () => {
      collapse.classList.remove('show');
    }
  });
});
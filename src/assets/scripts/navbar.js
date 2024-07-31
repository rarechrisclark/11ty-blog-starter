/** Adds a click event listener to the navbar toggler button */

document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarCollapse = document.getElementById('navbarCollapse');

  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
});

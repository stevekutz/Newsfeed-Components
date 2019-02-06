
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.toggle('menu--open');
  console.log('this is menu inside toggleMenu ', menu);
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log('menu from QS is ', menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log('menuButton from QS is ', menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu,

  console.log('menu button event Listener is ', menuButton )
  );
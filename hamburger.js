var toggleMenu = function() {
  const menuContainer = document.querySelector('.menu-container');
  var menuContainerClasses = menuContainer.classList;

  if( menuContainerClasses.contains('show') ) {
    menuContainerClasses.remove('show');
  } else {
    menuContainerClasses.add('show');
  }
}

document.querySelector('.menu-button').addEventListener('click', toggleMenu);
document.querySelector('.backdrop').addEventListener('click', toggleMenu);

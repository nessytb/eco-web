function toggleSearch() {
  var navbar = document.getElementById('navbar');
  var searchBar = document.getElementById('searchBar');

  if (navbar.style.display !== 'none') {
      navbar.style.display = 'none';
      searchBar.style.display = 'flex';
  } else {
      navbar.style.display = 'flex';
      searchBar.style.display = 'none';
  }
}
function toggleSearchh() {
  var navbar = document.getElementById('secondnav');
  var searchbar = document.getElementById('searchbar');

  if (navbar.style.display !== 'none') {
      navbar.style.display = 'none';
      searchbar.style.display = 'flex';
  } else {
      navbar.style.display = 'flex';
      searchbar.style.display = 'none';
  }
}

document.getElementById('searchinput').addEventListener('keypress', function(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
      // Prevent the default behavior of the Enter key (form submission)
      event.preventDefault();
      
      // Get the search query
      var searchQuery = this.value.trim().toLowerCase();
      
      // Find the element with the matching text
      var elements = document.getElementsByTagName('*');
      var foundElement = null;
      for(var i = 0; i < elements.length; i++) {
          if(elements[i].textContent.trim().toLowerCase() === searchQuery) {
              foundElement = elements[i];
              break;
          }
      }
  
      if(foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
          alert('Element not found!');
      }
  }
});


function liens(){
  const lienn = document.getElementById('liens');
  if (lienn.style.display == 'none') {
    lienn.style.display = 'flex';
    lienn.classList.add("liens");
  }
  else{
    lienn.style.display = 'none';
  }
}














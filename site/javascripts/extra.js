/* Language Dropdown Toggle */
function langToggle() {
    document.getElementById("mdDropMenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.md-lang-dropbtn')) {
      var dropdowns = document.getElementsByClassName("md-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
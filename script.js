/*The first code is copied*/




/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }




//This code is NOT copied

    
  let container = document.querySelectorAll('.add')

  var cartnumber = 0;
  for (let i=0; i < container.length; i++ ) {
    /*When you click on one of the buttons that has the class add, 
    a function is executed that changes the number at the cart image to the number of times you clicked*/

    container[i].addEventListener('click',()=>{
      console.log("added to cart");
      cartnumber++
      console.log(cartnumber);
      var cartNumberText = String(cartnumber)
      // Changes the contents of the tags with the id cartnumber to the value in cartNumberText
      document.getElementById("cartnumber").innerHTML = cartNumberText;
     });
  };
  
  
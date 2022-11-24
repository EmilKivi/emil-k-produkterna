
/*Den första koden kopieras*/




/* När användaren klickar på knappen,
    växla mellan att dölja och visa rullgardinsmenyn */
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





//Denna kod är INTE kopierad
    
  let container = document.querySelectorAll('.add')

  var cartnumber = 0;
  for (let i=0; i < container.length; i++ ) {
 
/*När du klickar på en av knapparna som har klassen lagt till,
    en funktion exekveras som ändrar numret vid varukorgsbilden till antalet gånger du klickade*/

    container[i].addEventListener('click',()=>{
      console.log("added to cart");
      cartnumber++
      console.log(cartnumber);
      var cartNumberText = String(cartnumber)
// Ändrar innehållet i taggarna med id cartnumber till värdet i cartNumberText
      document.getElementById("cartnumber").innerHTML = cartNumberText;
     });
  };
  
  
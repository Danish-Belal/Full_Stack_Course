let addBtn = document.querySelector(".add-btn");
var isModalPresent = false;

addBtn.addEventListener("click", function () {
     // case1 -> if modal is empty then add new modal
     if(!isModalPresent){
          displayModal();
     }

     // case2 -> if modal is present then hide modal
     else if(isModalPresent){
          hideModal();
     }

     isModalPresent = !isModalPresent;

});
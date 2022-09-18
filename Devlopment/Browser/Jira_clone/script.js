const addBtn = document.querySelector(".action_btn");
const modalCont = document.querySelector(".modal-cont");

var uid = new ShortUniqueId();  // unique id.
const colors = ["lightpink" , "lightgreen" , "lightblue" , "black"];
const textArea = document.querySelector(".textarea-cont");
let modalPriorityColor = colors[colors.length - 1];

const allPriorityColors = document.querySelectorAll(".priority-color");
console.log(allPriorityColors);
// remove btn.
const removeButton = document.querySelector(".remove-btn");


const minCount = document.querySelector(".main-cont");

var isModalPresent = false;
addBtn.addEventListener("click", function () {
     // case1 -> if modal is empty then add new modal
     if(!isModalPresent){
          modalCont.style.display = "flex";
     }

     // case2 -> if modal is present then hide modal
     else if(isModalPresent){
          modalCont.style.display = "none";
     }

     isModalPresent = !isModalPresent;

});

modalCont.addEventListener("keydown" , function(e){
     
     if(e.key == "Shift"){
         
          createTicket(modalPriorityColor ,textArea.value);
          // 2. alert display update.
          modalCont.style.display = "none";
          isModalPresent = false;
          textArea.value = "";
     }
})

function createTicket(ticketColor , data){
     // genetare id.
     let id = uid();
     // we can create html in js file.
     let ticketCont = document.createElement("div");
     ticketCont.setAttribute("class" , "ticket-cont");
     ticketCont.innerHTML = `
          <div class="ticket-color ${ticketColor}"></div>
          <div class ="ticket-id" > #${id}</div>
          <div class ="task-area" >${data}</div>
          <div class ="ticket-lock">
               <i class="fa-solid fa-lock"></i>
          </div>

     `;
     minCount.appendChild(ticketCont);
}

allPriorityColors.forEach(colorElement => {
     colorElement.addEventListener("click", function () {
         allPriorityColors.forEach(el => {
             el.classList.remove("active");
         })
         colorElement.classList.add("active");
         modalPriorityColor = colorElement.classList[0];
     })
 });
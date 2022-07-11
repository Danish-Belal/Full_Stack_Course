document.querySelector('html').addEventListener('click', () => {
     // alert('Ouch! Stop poking me!');
     setUserName();
   });

function setUserName() {
     let myName = prompt('Please enter your name.');
     localStorage.setItem('name', myName);
     myHeading.textContent = 'Mozilla is cool, ' + myName;
}


const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const sideMenu = document.querySelector("#sidemenu");


function openTab(tabName) {
    tabLinks.forEach(tabLink => {
       tabLink.classList.remove("active-link");
        
    });

    tabContents.forEach(tabContent => {
       tabContent.classList.remove("active-tab");

    });
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
};


function openMenu() {
   sideMenu.style.right = "0";
}

function closeMenu() {
   sideMenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzQNKRiZymaKgt1EpGi_-VPWuwemWODAIWIsp2GyAtW0NqgdGNxg9KSYy9gzKcNcIQ/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
         msg.innerHTML = "";
         
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

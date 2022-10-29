import { isMobile } from "./util.js";
const hamburger = document.querySelector('.menu-button-container');
const menu = document.querySelector('#first-item');
const canceIcon = document.querySelector('#cancel-icon');
const menuIcon = document.querySelector('#menu-icon');

hamburger.addEventListener('click', (event) => {
     if(event.target.id==='menu-icon'){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active'); 
        canceIcon.classList.toggle('active');
        menuIcon.classList.toggle('active');
    }else{
        onCancel()
    }
 
  });

  document.querySelectorAll('#first-item .nav-link').forEach((item) =>
  item.addEventListener('click', () => {
    onCancel();
    console.log('xxxxxxxxxxxxxxxxxxxqqqq');

    console.log('xxxxxxxxxxxxxxxxxxxqqqqq');
  })
);

const onCancel = () =>{
    hamburger.classList.remove('active');
    menu.classList.remove('active'); 
    canceIcon.classList.remove('active');
    menuIcon.classList.remove('active');
  }

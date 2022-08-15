const btn = document.querySelector('.hamb__field');
const popup = document.querySelector('.popup');
const body = document.querySelector('#body');
const items = document.querySelectorAll('.header__link');


btn.addEventListener('click', (e)=>{
   e.preventDefault();
   popup.classList.toggle('open');
   if(popup.classList.contains('open')){
      btn.classList.add('active');
      body.classList.add('noscroll')
   }else{
      btn.classList.remove('active');
      body.classList.remove('noscroll')
   }
})


items.forEach(item => {

   item.addEventListener('click', ()=>{
      popup.classList.remove('open');
      body.classList.remove('noscroll');
      btn.classList.remove('active');
   })
})
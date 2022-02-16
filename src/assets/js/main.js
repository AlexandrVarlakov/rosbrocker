AOS.init();
let banks = new Swiper(".banks-carousel", {
    speed: 1000,
    
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 40
          },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 640px
        1140: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
  });


  let reviews = new Swiper(".reviews", {
    speed: 1000,
    
    autoplay: {
        delay: 7000,
    },
    slidesPerView: 1,
    spaceBetween: 45,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
   
});

let options = {
  //zIndex: 1000, 
  //background: 'rgba(12, 130, 121, 0.5)', 
  //displayFog: 'block', //Значение по умолчанию flex
  //displayModal: 'flex', //Значение по умолчанию block
  showModalAnimationName: 'fadeInBottom', 
  closeModalAnimationName: 'fadeOutTop', 
  closeClasses: ['close-modal'], 
  //closeModalOnFogClick: false, 
  showModalAnimationDuration: 800,
  //closeModalAnimationDuration: 300,
  showFogAnimationName: 'fadeIn',
  closeFogAnimationName: 'fadeOut',
  showFogAnimationDuration: 300,
  closeFogAnimationDuration: 300,

  documentScrolled: false, 
  //onModalClose: function(){console.log('modal close');},
  //onModalOpen: function(){console.log('modal open');}

}


let options2 = {
  //zIndex: 1000, 
  //background: 'rgba(12, 130, 121, 0.5)', 
  //displayFog: 'block', //Значение по умолчанию flex
  displayModal: 'flex', //Значение по умолчанию block
  showModalAnimationName: 'fadeInBottom', 
  closeModalAnimationName: 'fadeOutTop', 
  closeClasses: ['close-modal', 'modal-close'], 
  //closeModalOnFogClick: false, 
  showModalAnimationDuration: 800,
  //closeModalAnimationDuration: 300,
  showFogAnimationName: 'fadeIn',
  closeFogAnimationName: 'fadeOut',
  showFogAnimationDuration: 300,
  closeFogAnimationDuration: 300,

  documentScrolled: false, 
  //onModalClose: function(){console.log('modal close');},
  //onModalOpen: function(){console.log('modal open');}

}
let modalcalc;
let modalcons;


document.querySelector('.get-guarantees__btn').onclick = function(){
  modalcons = new easyModal('modal-cons', options);
}



document.querySelector('.btn-begin').onclick = function(){
  modalcalc = new easyModal('modal-calc', options);
  }

document.querySelector('.h-calc-now').onclick = function(){
  modalcalc = new easyModal('modal-calc', options);
}
  
document.querySelector('.guarantees-btn').onclick = function(){
  modalcalc = new easyModal('modal-calc', options);
}

document.querySelector('.header-call-me').onclick = function(){
  modalcons = new easyModal('modal-cons', options);
}
document.querySelector('.f-calc-btn').onclick = function(){
  modalcalc = new easyModal('modal-calc', options);
}


let hamburger = document.querySelector('.hamburger');
let mobMenu = document.querySelector('.mob-menu');



hamburger.onclick = function(){
  
    if ( this.classList.contains('active') ){
      mobMenu.classList.remove('active');
      this.classList.remove('active');
    } else{
      mobMenu.classList.add('active');
      this.classList.add('active');

      let headerHeight = document.querySelector('.header').offsetHeight;
      mobMenu.style.paddingTop = headerHeight + 'px';
    }

}



document.querySelectorAll('.d-menu__link').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      let headerHeight = document.querySelector('.header').offsetHeight;
      

      
      
      let href = this.getAttribute('href').substring(1);
     
      const scrollTarget = document.getElementById(href);
      
      const topOffset = headerHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
    

      
  });
});


document.querySelector('.mob-call-me').onclick = function(){

  mobMenu.classList.remove('active');
  hamburger.classList.remove('active');

  modalcons = new easyModal('modal-cons', options);
}

document.querySelectorAll('.mob-menu-link').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      let headerHeight = document.querySelector('.header').offsetHeight;
      

      
      
      let href = this.getAttribute('href').substring(1);
     
      const scrollTarget = document.getElementById(href);
      
      const topOffset = headerHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;


      mobMenu.classList.remove('active');
      hamburger.classList.remove('active');

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
    

      
  });
});


window.onresize = function(event){
  if (window.innerWidth > 1024){
      mobMenu.classList.remove('active');
      hamburger.classList.remove('active');
  }
}


let calcFormD = document.querySelector('.calcform-d');
let calcFormM = document.querySelector('.calcform-m');


calcFormD.onsubmit = function(event){
  event.preventDefault();

    let uName = document.querySelector('#cf-name').value;
    let uPhone = document.querySelector('#cf-phone').value;
    let uMail = document.querySelector('#cf-email').value;
    let tGuarantee = document.querySelector('#cf-guarantee').value;
    let tContract = document.querySelector('#cf-contract').value;
    let gDate = document.querySelector('#cf-date').value;
    let vSumm = document.querySelector('#cf-summ').value; 

    
    
    let data_body = "uName=" + uName + "&uPhone="+ uPhone + "&uMail=" + uMail + "&tGuarantee=" +tGuarantee+ "&tContract=" +tContract+ "&gDate=" +gDate+ "&vSumm="+vSumm;

    
    
    


    fetch("send-calc.php", { 
        method: "POST",
        body: data_body,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
        })
        
    .then( (response) => {
            if (response.status !== 200) {           
                return Promise.reject();
                
            }   
        

          document.querySelector('#cf-name').value = "";
          document.querySelector('#cf-phone').value = "";
          document.querySelector('#cf-email').value = "";
          document.querySelector('#cf-guarantee').value = "";
          document.querySelector('#cf-contract').value = "";
          document.querySelector('#cf-date').value = "";
          document.querySelector('#cf-summ').value = "";     
          let modal = new easyModal('modal-success', options2);
    
          setTimeout(()=>{
            modal.closeModal();
          }, 3000);

          

    return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка')); 




}

/** */
calcFormM.onsubmit = function(event){
  event.preventDefault();

    let uName = document.querySelector('#cf-name-m').value;
    let uPhone = document.querySelector('#cf-phone-m').value;
    let uMail = document.querySelector('#cf-email-m').value;
    let tGuarantee = document.querySelector('#cf-guarantee-m').value;
    let tContract = document.querySelector('#cf-contract-m').value;
    let gDate = document.querySelector('#cf-date-m').value;
    let vSumm = document.querySelector('#cf-summ-m').value; 

    
    
    let data_body = "uName=" + uName + "&uPhone="+ uPhone + "&uMail=" + uMail + "&tGuarantee=" +tGuarantee+ "&tContract=" +tContract+ "&gDate=" +gDate+ "&vSumm="+vSumm;


    


    fetch("send-calc.php", { 
        method: "POST",
        body: data_body,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
        })
        
    .then( (response) => {
            if (response.status !== 200) {           
                return Promise.reject();
                
            }   
        

          document.querySelector('#cf-name-m').value = "";
          document.querySelector('#cf-phone-m').value = "";
          document.querySelector('#cf-email-m').value = "";
          document.querySelector('#cf-guarantee-m').value = "";
          document.querySelector('#cf-contract-m').value = "";
          document.querySelector('#cf-date-m').value = "";
          document.querySelector('#cf-summ-m').value = "";     
          
          let modalW = this.closest('.modal-calc');
          let successMsg = modalW.querySelector('.success-msg');
          successMsg.style.display = "flex";

          setTimeout(()=>{
            modalcalc.closeModal();
            setTimeout(()=>{
              successMsg.style.display = "none";
            },500)  
          },3000)
                   

      return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка')); 




}



let fb_form = document.querySelector('.fb_form');
fb_form.addEventListener('submit', function(event){
  event.preventDefault();


    let uName = document.querySelector('#fb-name').value;
    let uPhone = document.querySelector('#fb-tel').value;
    let data_body = "uName=" + uName + "&uPhone="+ uPhone;


    fetch("send-callme.php", { 
      method: "POST",
      body: data_body,   
      headers:{"content-type": "application/x-www-form-urlencoded"} 
      })
      
    .then( (response) => {
            if (response.status !== 200) {           
                return Promise.reject();
                
            }   
        

          document.querySelector('#fb-name').value = "";
          document.querySelector('#fb-tel').value = "";
             
          let modal = new easyModal('modal-success', options2);
    
          setTimeout(()=>{
            modal.closeModal();
          }, 3000);

          

    return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка')); 


})




let feed_m = document.querySelector('.feed-m');
feed_m.addEventListener('submit', function(event){
  event.preventDefault();


    let uName = document.querySelector('#cons-name').value;
    let uPhone = document.querySelector('#cons-phone').value;
    let data_body = "uName=" + uName + "&uPhone="+ uPhone;


    fetch("send-callme.php", { 
      method: "POST",
      body: data_body,   
      headers:{"content-type": "application/x-www-form-urlencoded"} 
      })
      
    .then( (response) => {
            if (response.status !== 200) {           
                return Promise.reject();
                
            }   
        

          document.querySelector('#cons-name').value = "";
          document.querySelector('#cons-phone').value = "";
             
          let modalW = this.closest('.modal-cons');
          let successMsg = modalW.querySelector('.success-msg');
          successMsg.style.display = "flex";

          setTimeout(()=>{
            modalcons.closeModal();
            setTimeout(()=>{
              successMsg.style.display = "none";
            },500)  
          },3000)

          

    return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка')); 


})



var phoneMask = IMask(
  document.getElementById('cf-phone'), {
    mask: '+{7}(000)000-00-00'
});


var phoneMask2 = IMask(
  document.getElementById('cons-phone'), {
    mask: '+{7}(000)000-00-00'
});

var phoneMask3 = IMask(
  document.getElementById('cf-phone-m'), {
    mask: '+{7}(000)000-00-00'
});

var phoneMask4 = IMask(
  document.getElementById('fb-tel'), {
    mask: '+{7}(000)000-00-00'
});



var numberMask = IMask(
  document.getElementById('cf-summ'),
  {
    mask: Number,
    min: 0,
    max: 100000000,
    thousandsSeparator: ' '
  });


  var numberMask2 = IMask(
    document.getElementById('cf-summ-m'),
    {
      mask: Number,
      min: 0,
      max: 100000000,
      thousandsSeparator: ' '
    });



let showBanksListBtn = document.querySelector('.all-banks-btn');

showBanksListBtn.onclick = function(event){
  let modalBanks =  new easyModal('modal-banks', options2);
}

let search = document.querySelector('.search');

search.oninput = function(e){
  let results = 0;

  let btn = this.nextElementSibling;
  if (this.value.length > 0) {
    btn.classList.add('typed');    
  } else{
    btn.classList.remove('typed');    
  }



  let searchValue = this.value;
  let banksList = document.querySelectorAll('.modal-banks__item');
  if (searchValue.length > 0 ){
    banksList.forEach( (bank) => {
      let dataFind = bank.getAttribute('data-find');
      let reg = new RegExp(searchValue, "gi");
      if ( reg.test(dataFind) ) {
        bank.style.display = "block";
        results++;
      } else{
        bank.style.display = "none";
      }
    } )
  } else {
      results = -1;
      banksList.forEach( (bank) => {
      bank.style.display = "block";
      
    })
  }
  
  if ( results === 0 ){
    

    let modalParent = this.closest('.modal-banks');
    modalParent.querySelector('.modal-banks__list').classList.add('search-not-results');
  } else{
    let modalParent = this.closest('.modal-banks');
    modalParent.querySelector('.modal-banks__list').classList.remove('search-not-results');
  }


}

let searchBtn = document.querySelector('.search-btn');
searchBtn.onclick = function(e){
  if (this.classList.contains('typed')){
    this.classList.remove('typed');
    let input = this.previousElementSibling;
    input.value = "";
    input.focus();
    let modalParent = this.closest('.modal-banks');
    modalParent.querySelector('.modal-banks__list').classList.remove('search-not-results');
    let banksList = document.querySelectorAll('.modal-banks__item');
    banksList.forEach( (bank) => {
      bank.style.display = "block";
    })
  }
}
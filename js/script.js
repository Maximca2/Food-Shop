

'use strcit'




// console.log(basketaxec)
///Slider
document.addEventListener('DOMContentLoaded', () => {

  const rightBtn = document.querySelector('.right')
  const leftBtn = document.querySelector('.left')
  const sliders = document.querySelectorAll('.slider__item')
  const dots = document.querySelectorAll('.toolkit-item');





  let index = 0;
  ShowSlides(index)

  function ShowSlides(n) {
    if (n === sliders.length) {
      index = 0;
    }
    if (n < 0) {
      index = sliders.length;
    }

    sliders.forEach(it => it.style.display = 'none');
    dots.forEach(it => it.classList.remove('active'));

    sliders[index].style.display = '';
    dots[index].classList.add('active')
  }

  function plusslides(n) {
    ShowSlides(index += n)
  }





  leftBtn.addEventListener('click', () => {
    plusslides(-1)

  })
  rightBtn.addEventListener('click', () => {
    plusslides(1)
  })

  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  const headerMenu = document.querySelector('.menu__header')

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    headerMenu.classList.toggle('change-color')
  })
})

///Modal

const modal = document.querySelector('.modal__window');
const btnLocation = document.querySelector('.region-header__img text')
const imgarrow = document.querySelector('.region__arrow-img ')
const btnclose = document.querySelector('.header__content-text-img')
const logInSigIbBtn = document.querySelectorAll('.region-header__item')[1];

const btnContinue = document.querySelector('.btn__continue-modal')
const imgarrowAndBtnlocation = [btnLocation, imgarrow]
const modalinp = document.querySelectorAll('input'),
  modalForm = document.querySelector('.modal-form')
console.log(modalForm)

const arr = [modal,btnLocation,btnclose,imgarrowAndBtnlocation]



// modalinp.addEventListener('input', ()=>{


//   let value = modalinp.value;


//   const transformedvalue = takeNum(value);


//  console.log (takeNum(value))


//   return transformedvalue

// })

function checkNameandNum() {
  modalinp.forEach(it => it.addEventListener('input', (e) => {

    e.preventDefault()
    if (it.value.length === 0 || it.value === 1) {
      it.style.border = '1px solid red'
    } else if (it.value.length === 9) {
      console.log('nice')
      it.style.border = '1px solid green'
      it.value = takeNum(it.value)
      btnContinue.addEventListener('click', makeid)

      setTimeout(() => {
        btnContinue.removeEventListener('click', makeid)


      }, 1000)
      btnContinue.addEventListener('click', createWindow)

    } else if (it.value.length > 15) {
      setTimeout(() => {
        it.value = 'макс кількість символів 15';
        setTimeout(() => {
          it.value = ''

        }, 2000)

      }, 1000)

      if (it.style.border = '1px solid green') {
        it.style.border = '1px solid red'
        btnContinue.removeEventListener('click', makeid)
      }
    }

  }))


}
function makeid() {
  let length = 5
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  console.log(result)


  return result



}
const blockTyping = function () {
  document.addEventListener('keypress', (e) => {
    e.preventDefault();
  });

}
// setTimeout(()=>{
//   console.log('edwdw')
// },2000)

checkNameandNum()

// function op(){
//   console.log(cool)
// }





function checkode(code) {
  const value = 'x5Wbt';
  if (code === value) {
    console.log('yep')
  } else {
    console.log('nope')
  }
}

checkode('x5Wbt')




function takeNum(num) {
  const newNum = num.split('').join('')

  // console.log(newNum)
  const [, it1, it2, ...it] = newNum
  const newit = it.join('')
  if (num.length === 2) {
    return `+380(${it1}${it2})`
  } else if (num.length >= 3) {
    return `+380(${it1}${it2})${newit}`
  }



}


function openFullModal() {
  const modal = document.querySelector('.modal__window');

  function addEvent(btn) {

    return btn.forEach(it => it.addEventListener('click', checkModal))

  }
  addEvent(imgarrowAndBtnlocation)

  function createWindow() {
    console.log('modal')

    const newModal = document.createElement('div');
    const parentel = document.querySelector('.modal__window');
    newModal.innerHTML = `<div class="header__content">
   <div class="header__content-text">
     Вхід на Сайт
   </div>
   <div class="header__content-text-img">
     <a href="#">
       <img src="../modal__img-close/Clouse.svg" alt="close">
     </a>
   </div>
 </div>
 <div class="header__content-modal-box box-modal__content-header position-relative ">
   <div class="box-m2 ">
     <form class="modal-form">
       <div class="box1-m d-flex">
         <label class="box-modal__content-header-name" for="fname">Ім'я</label><br>
         <div class="m-box">
           <input class="input-m" type="text" id="fname" name="fname"><br>
           <div class="box-box">
             <div class="header__decores w-25">
               <img src="../header-img/header-decore.svg" alt="decore" />
              </div>
           </div>
         </div>             
       </div>
       <div class="box1-m d-flex align-content-center">
         <label class="box-modal__content-header-name" for="fname">Телефон</label><br>
         <div class="m-box2">
           <input class="input-m" type="text" id="fname" name="fname"><br>
         <div class="box-box">
             <div class="header__decores w-25">
               <img src="../header-img/header-decore.svg" alt="decore" />
              </div>
           </div>
         </div>
       </div>
       <div class="box1-m d-flex ">
         <label class="box-modal__content-header-name" for="fname">Вислати код</label><br>
         <div class="m-box2">
          <div class="modal__exepting">
             Продовжуючи Ви погоджуєтесь з угодою та політикою обробки персональних даних
          </div>
         </div>
       </div>
     </form>
   </div>
   <div class="box__continue">
     <div class="btn__continue-modal">
       <a href="#">
         <img src="../modal__img-close/continue.svg" alt="continue-btn">
       </a>
     </div>
   </div>
   
 </div>`

    parentel.appendChild(newModal)
  }






  function openModal() {
    modal.classList.add('actives')
    imgarrow.classList.add('rotates')
  }
  function checkModal() {

    if (modal.classList.contains('actives')) {
      closeModal()
    } else {
      openModal()
    }
  }

  btnclose.addEventListener('click', closeModal)


  function closeModal() {

    modal.classList.remove('actives')
    imgarrow.classList.remove('rotates')
  }
}

openFullModal()






///checkLocation











// const checkLocation=()=>{


//     const locationText = document.querySelector('.header__content-box-item-tittle-geolocation');


//     const succses = (position)=>{

//     //    console.log(position)
//         const {latitude,longitude} = position.coords

//         // console.log(latitude,longitude)


//         const geoApiurl  = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

//         fetch(geoApiurl).then(it=>it.json()).then(data=>{locationText.textContent=`Ваше місце ${data.locality} (${data.city})?`})
//     }


//     const error =()=>{
//         console.log('Не можливо встановити твою локацію')
//     }
//     navigator.geolocation.getCurrentPosition(succses,error)

// }

// checkLocation()


////slider2


const btnlefts = document.querySelector('.btn-left');
const btnright = document.querySelector('.btn-right');
const slide = document.querySelectorAll('.header__slider-items-it');




let index = 0;
Showactive(index);
function Showactive(i) {

  if (i === slide.length) {
    index = 0
    console.log('cool')
  }
  if (i < 0) {
    index = slide.length;
  }

  slide.forEach(it => it.classList.remove('active-slide'));
  slide[i].classList.add('active-slide')
}
function plus(n) {
  Showactive(index += n)
}




btnlefts.addEventListener('click', (e) => {
  e.preventDefault()
  plus(-1)

})

btnright.addEventListener('click', (e) => {
  e.preventDefault()
  plus(1)
})

//likes

const hearts = document.querySelectorAll('.heartt svg');
// console.log(hearts)

hearts.forEach(it => it.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  console.log(target)
  if (target) {
    target.classList.toggle('act');
  }




}))
// function saylikes(e){

//     hearts.forEach(it=>it.classList.add('act'))
// }
// saylikes(hearts)

var map = L.map('map').setView([49.8315223, 24.017846], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  renderer: L.canvas(),
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var greenIcon = L.icon({
  iconUrl: '',
  shadowUrl: '',
  iconSize: [18, 15], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var greenIcon = new L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/2927/2927347.png', iconSize: [48, 45], });
var readicon = new L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/2927/2927347.png', iconSize: [48, 45], });


L.marker([49.8315223, 24.017846], { icon: greenIcon }).addTo(map).bindPopup("Ми тут!");

L.marker([49.8315223, 24.057443], { icon: readicon }).addTo(map).bindPopup("Ми тут!");

// L.marker([49.8315222, 24.017845], {icon: redIcon}).addTo(map).bindPopup("I am a green leaf.");

















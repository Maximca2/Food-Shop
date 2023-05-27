
import juie from "../js/juice.js";
// const juie = [
//     { name: 'ласси', litres: "500ml",img:'../production__img/ласи.jpg', },
//     { name: 'микс', litres: "500ml",img:'../production__img/мікси.jpg' },
//     { name: 'боул', litres: "500ml",img:'../production__img/боули.jpg' },
//     { name: 'апельсиновый сок', litres: "500ml",img:'../juce__img/Orangw_juice.png' },
//     { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' },
//     { name: 'детокс', litres: "500ml",img:'../juce__img/Detoks__juice.png' },
//     { name: 'доктор', litres: "500ml",img:'../juce__img/Doktor__juice.png' },
//     { name: 'гранатовый сок', litres: "500ml",img:'../juce__img/Granat__juice.png' },
//     { name: 'грин', litres: "500ml",img:'../juce__img/Gryn-juice.png' },
//     { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' },
//     { name: 'грин', litres: "500ml",img:'../juce__img/Gryn-juice.png' },
//     { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' }


// ]


const arrayofCounter= [];
console.log(juie)







// console.log(juie)
const basketText = document.querySelector('.region-header__item'),
    parent = document.querySelector('.header__decore');
// console.log(basket,parent)

const arrOfgettingProducts = [];





const elements = document.querySelectorAll('.header__slider-items-btn-in-basket').forEach((it, i) => it.addEventListener('click', () => {
    let counter = 0;
    const id = i
    counter++
    
    const j = juie.find(it => it.id == id)
    console.log(j)
    arrOfgettingProducts.push(j)

    arrayofCounter.push(counter)
    // console.log(arrOfgettingProducts)
    console.log(arrOfgettingProducts)

    console.log(arrayofCounter)
}))



console.log(arrayofCounter)




basketText.addEventListener('click', () => {
    createBasketforProduct(parent, arrOfgettingProducts)
})








function createBasketforProduct(parent, arr) {


    // console.log(arr.map(it=>it.img))
    // console.log(arr)
    
    const element = document.createElement('div');
            element.innerHTML = `
            <div class="basket">
            <div class="basket__box">
                
            </div>
            
            </div>
             `
            //   console.log(arr.map(it=>console.log(it.img)))
 

    parent.append(element)

    
   arr.map(it=>{
        const element2 = document.createElement('div');

        element2.innerHTML = `<div class="basket__card">
        <div class="basket__img">
        <img src=${it.img} alt=${it.name}>
        </div>
        <div class="basket__content">
          <div class="basket__product-name">
            ${it.name}
          </div>
          <div class="basket__content-litres">
          ${it.litres}
          </div>
          <div class="basket__content-box d-flex justify-content-between">
            <div class="basket__content-btn">
              <a href="#">-1+</a>
            </div>
            <div class="basket__content-price">
              ${it.price}
            </div>
          </div>
          
        </div>
        
        </div>
        <div class="header__decore ">
        <img src="../header-img/header-decore.svg" alt="decore" />
    </div>
      </div>`
        
        
        // console.log(element2)
        const parentofParent = document.querySelector('.basket')
        parentofParent.append(element2)

        
    })
   

    


    // arr.length === 0 ? element.innerHTML = `
    //     <div class="basket">
    //                 корзина пуста
    //     </div>` 
    //     parent.append(element)
    //     : 
    // })
    console.log('basked kliked')



    // if(element){
    //     basketText.removeEventListener('click',createBasketforProduct())
    // }else{

    // }
    // console.log(parent)
}



// const baskettext = document.querySelector('.region-header__item text')

function showCountProducts(arr){
    if(arr.length===0){
        
    }
}

showCountProducts(arrayofCounter)

console.log(arrayofCounter)



// const index = element.forEach((it,i)=>{
//     return i
// })


// for(let i=0;i<juie.length;i++){
//     console.log(juie.indexOf(juie[i]))

//     if(index)
// }
// console.log(elements)


const allCards = document.querySelectorAll('.header__slider-items-it');




allCards.forEach(btn=>{
  btn.addEventListener('click',function(){
    console.log('click')
    allCards.forEach(btn=>{
      btn.classList.remove('actiw');



      this.classList.add('actiw')
      
      console.log(this)
      // checkId(btn)
      // console.log(btn)
      
    })
  })
})



const parentsOfCard = document.querySelector('.header__decore')

function createExpanCardProducts(parent ,i,arr){

  const otherobj =arr.find(it=>it.id==i)

   const element = document.createElement('div') 

  element.innerHTML = `
  <div class="basket__card-exp ">
  <div class="basket__card-boxxx ">
    <div class="basket__card-img">
      <img src=${otherobj.img} alt=${otherobj.img} />
    </div>
    <div class="basket__card-content">
      <div class="basket__card-content-name">
      ${otherobj.name}
      </div>
      <div class="basket__card-content-litres">
        300 мл
        500 мл
        1 л
      </div>
      <div class="basket__card-content-ingridients">
        Інгридієнти
      </div>
      <div class="basket__card-content-ingridients-list">
      ${!otherobj.ing?"Інгридієнтів не вказано":otherobj.ing}  
      </div>
      <div class="basket__card-content-data">
        Срок зберігання
        <p>12 годин</p>
      </div>
      <div class="basket__card-content-conditions">
        Умови зберігання
        <p>в холодильнику</p>
      </div>
      <div class="basket__card-content-box d-flex align-items-center ">
        <div class="basket__card-content-box-price">
          ${otherobj.price+'гр'}
        </div>
        <div class="header__slider-items-btn-in-basket btnsinbasket">
          <a href="#">
            в корзину
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  `
  parent.append(element)
  console.log(i)

} 




// console.log(allCards)



const test = document.querySelector('.juice__tittle ')


test.addEventListener('click',()=>{

})



const allImgs = document.querySelectorAll('.header__slider-items-img')
const otherListProduct = document.querySelector('.box__juice-list')



function checkId(arr){
  arr.forEach((it,i)=>{
    it.addEventListener('dblclick',(e)=>{
      const target = e.target;

      console.log(target);
      // console.log(i)
      createExpanCardProducts(parentsOfCard,i,juie)
      otherListProduct.classList.add('nonerr')
    })
  })




}



checkId(allImgs)



















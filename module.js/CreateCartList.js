function createCardList(arr,par) {
    arr.map(it => {

        const element = document.createElement('div');
        const parent = document.querySelector(par);
    
        // console.log(parent)
        element.innerHTML = `
        <div class="header__slider-items-it d-flex max-width align">
                    <div class="header__slider-items-img">
                      <img src="${it.img}" alt="Lasy">
                    </div>
                    <div class="header__slider-items-descr">
                      ${it.name.length>7?`${it.name.slice(0,8)}...`:it.name}
                    </div>
                    <div class="header__slider-items-litrs text-center">
                      ${it.litres}
                    </div>
                    <div class="header__slider-items-price text-center">
                      ${it.price}гр
                      
                      <img src="../slider2_img/heart.svg" class="heart" alt="heart-like">
                      
                    </div>
                    <div class="header__slider-items-btn-in-basket text-center ">
                      <a href="#">
                        в корзину
                      </a>
                     
                    </div>
                  </div>
        `
        // console.log(it)
    
        parent.append(element)
    })
}



export default createCardList
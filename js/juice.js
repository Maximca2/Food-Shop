import createCardList from "../module.js/CreateCartList.js"


const juie = [
    { name: 'ласси', litres: "500ml",img:'../production__img/ласи.jpg', id:0,price:452},
    { name: 'микс', litres: "500ml",img:'../production__img/мікси.jpg' ,id:1,price:453},
    { name: 'боул', litres: "500ml",img:'../production__img/боули.jpg' ,id:2,price:455},
    { name: 'апельсиновый сок', litres: "500ml",img:'../juce__img/Orangw_juice.png' ,id:3,price:457},
    { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' ,id:4,price:457},
    { name: 'детокс', litres: "500ml",img:'../juce__img/Detoks__juice.png' ,id:5,price:440},
    { name: 'доктор', litres: "500ml",img:'../juce__img/Doktor__juice.png' ,id:6,price:450},
    { name: 'гранатовый сок', litres: "500ml",img:'../juce__img/Granat__juice.png' ,id:7,price:450},
    { name: 'грин', litres: "500ml",img:'../juce__img/Gryn-juice.png' ,id:8,price:450},
    { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' ,id:9,price:456},
    { name: 'грин', litres: "500ml",img:'../juce__img/Gryn-juice.png' ,id:10,price:451},
    { name: 'смузи', litres: "500ml",img:'../juce__img/Smusi__juice.png' ,id:11,price:450},
    


]

createCardList(juie,'.box__juice-list')
const element = document.querySelectorAll('.header__slider-items-btn-in-basket')


console.log(element);
console.log('ew')


console.log('eee')



export default juie
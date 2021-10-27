const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// let contatore = 0;
// const boxLeft = document.getElementById('box-left');
// const sliderRight = document.getElementById('slider-right');

// for(let i = 0; i < items.length; i++){
//   console.log(items[i]);

//   //creo dei div per ogni singolo elemento

//   // const boxImgSmall = document.createElement('div');
//   // const layover = document.createElement('div');

//   // aggiungo la classi di defoult
//   // sliderLeft.className = 'slider-left';
//   // boxImgSmall.className = 'box-img-small';
  
//   boxLeft.innerHTML = `
//   <div id="sliderLeft" class="slider-left ${i}">
//     <img src="${items[i]}" alt="">
//     <div class="text-container">
//       <h3 class="">${title[i]}</h3>
//       <p class="">${text[i]}</p>
//     </div>
//   </div>
//   `;
  
//   // sliderRight.innerHTML = `
//   // <div id="box-img-small" class="box-img-small ${i}">
//   //   <img src="${items[i]}" alt="">
//   //   <div id="layover"  class="layover ${i}"></div>
//   // </div>
//   // `;


  
//   if(i == contatore){
//     sliderLeft.classList.add('active');
//     // layover.classList.add('active');
//   }




// }

// for(let i = 0; i < items.length; i++){
//   console.log(items[i]);

//   sliderRight.innerHTML = `
//   <div id="box-img-small" class="box-img-small ${i}">
//     <img src="${items[i]}" alt="">
//     <div id="layover"  class="layover ${i}"></div>
//   </div>
//   `;

//   if(i == contatore){
//     layover.classList.add('active');
//   }

//   console.log(sliderRight);

// }
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


let contatore = 0;

for( let i = 0; i < 5; i++){
  console.log(items[i]);

  //creo dei div per ogni singolo elemento
  const sliderLeft = document.createElement('div');
  const boxImgSmall = document.createElement('div');
  const layover = document.createElement('div');

  // aggiungo la classi di defoult
  sliderLeft.className = 'slider-left';
  boxImgSmall.className = 'box-img-small';
  layover.className = 'layover';
  
  sliderLeft.innerHTML = `
  <img src="${items[i]}" alt="">
  <div class="text-container">
    <h3 class="">${title[i]}</h3>
    <p class="">${text[i]}</p>
  </div>
  `;
  boxImgSmall.innerHTML = `
  <img class="" src="${items[i]}" alt="">
  <div class="layover ${i}"></div>
  `;
  
  if(i = contatore){
    sliderLeft.classList.add('active');
    layover.classList.add('active');
  }

  console.log(sliderLeft);
}
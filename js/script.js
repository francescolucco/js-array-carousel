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
const boxLeft = document.getElementById('box-left');
const sliderRight = document.querySelector('.slider-right');

for(let i = 0; i < items.length; i++){
  console.log(items[i]);

  const sliderLeft = document.createElement('div');
  sliderLeft.className = 'slider-left';
  
  const boxImgSmall = document.createElement('div');
  boxImgSmall.className = 'box-img-small';

  
  sliderLeft.innerHTML = `
    <img src="${items[i]}" alt="">
    <div class="text-container">
      <h3 class="active">${title[i]}</h3>
      <p class="active">${text[i]}</p>
    </div>
  `;
  
  boxImgSmall.innerHTML = `
    <img class="" src="${items[i]}" alt="">
    <div class="layover ${i}"></div>
  `;

  boxLeft.append(sliderLeft);
  sliderRight.append(boxImgSmall);

  const layover = document.querySelector('.layover');

  
  if(i == contatore){
    sliderLeft.classList.add('active');
    layover.classList.add('active');
  }
}


const arrowTop = document.querySelector('.fa-chevron-up');
const arrowBottom = document.querySelector('.fa-chevron-down');
const sliderLefts = document.getElementsByClassName('slider-left');
const layovers = document.getElementsByClassName('layover');

arrowTop.addEventListener('click', function(){
  sliderLefts[contatore].classList.remove('active');
  layovers[contatore].classList.remove('active');

  contatore--;
  if(contatore < 0) contatore = items.length - 1;

  sliderLefts[contatore].classList.add('active');
  layovers[contatore].classList.add('active');
});

arrowBottom.addEventListener('click', function(){
  sliderLefts[contatore].classList.remove('active');
  layovers[contatore].classList.remove('active');

  contatore++;
  if(contatore > items.length - 1) contatore = 0;

  sliderLefts[contatore].classList.add('active');
  layovers[contatore].classList.add('active');
});

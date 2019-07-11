const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo



let navLinks = document.querySelectorAll('header nav a');
let navArray = Array.from(navLinks);


navArray[0].textContent = 'Services';
navArray[1].textContent = 'Products';
navArray[2].textContent = 'Vision';
navArray[3].textContent = 'Features';
navArray[4].textContent = 'About';
navArray[5].textContent = 'Contact';

navArray[0].style.color = 'green';
navArray[1].style.color = 'green';
navArray[2].style.color = 'green';
navArray[3].style.color = 'green';
navArray[4].style.color = 'green';
navArray[5].style.color = 'green';
console.log(navArray);
// const newNav1 = document.createElement('a');
// newNav1.textContent = 'Create';
// newNav1.style.color = 'blue';


// newNav1.appendChild(navArray);


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const title = document.querySelector('.cta-text h1');
title.textContent = 'Dom \n Is \n Awesome';
title.style.width = '100px';
title.style.marginRight = '200px';



const btn = document.querySelector('.cta button');
btn.textContent = 'Get Started';
btn.addEventListener('click', function () {
  btn.style.background = 'blue';
  console.log('its bluuuUUUUUEEE!!');
})

const titleImg = document.querySelector('#cta-img');
titleImg.src = 'img/header-img.png';


const topConTitl = document.querySelectorAll('.text-content h4');
topConTitl[0].textContent = 'Features';
topConTitl[1].textContent = 'About';

const topConPara = document.querySelectorAll('.text-content p');
topConPara[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topConPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const midImg = document.getElementById('middle-img');
midImg.src = 'img/mid-page-accent.jpg'

const bottomTitle = document.querySelectorAll('.bottom-content h4');
bottomTitle[0].textContent = 'Services'
bottomTitle[1].textContent = 'Product'
bottomTitle[2].textContent = 'Vision'

const botText = document.querySelectorAll('.bottom-content p');
botText[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botText[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botText[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

const conTitle = document.querySelector('.contact h4');
conTitle.textContent = 'Contact'


const conAddress = document.querySelectorAll('.contact p');
conAddress[0].textContent = '123 Way 456 Street \n Somewhere, USA'
conAddress[1].textContent = '1 (888) 888-888'
conAddress[2].textContent = 'sales@greatidea.io'
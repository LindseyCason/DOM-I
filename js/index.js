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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// 
const header = document.querySelector("header");
const nav = document.querySelector("header nav");


let navItem = document.querySelectorAll('nav a');


navItem[0].textContent = siteContent.nav["nav-item-1"];
navItem[1].textContent = siteContent.nav["nav-item-2"];
navItem[2].textContent = siteContent.nav["nav-item-3"];
navItem[3].textContent = siteContent.nav["nav-item-4"];
navItem[4].textContent = siteContent.nav["nav-item-5"];
navItem[5].textContent = siteContent.nav["nav-item-6"];

siteContent.nav["nav-item-7"]="Google";
siteContent.nav["nav-item-8"]="Yahoo";

///////////////
let one = document.createElement('a');
let two = document.createElement('a');

one.setAttribute("href", "google.com");
one.textContent = "Google";
one.style.color = "green";
two.setAttribute("href", "yahoo.com");
two.textContent = "Yahoo";
two.style.color = "green";
nav.prepend(one);
nav.appendChild(two);




navItem.forEach((item) =>{item.style.color = "green";});


/////////////


let logoImg = document.querySelector("#logo-img");
logoImg.src = "img/logo.png";

let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = "DOM \n Is \n Awesome";

let button = document.querySelector("button");
button.textContent = "Get Started";

let ctaImg = document.querySelector("#cta-img");
ctaImg.src="img/header-img.png"

let MainTextContentH4 = document.querySelectorAll(".top-content .text-content h4")
let MainTextContentP = document.querySelectorAll(".text-content p")

MainTextContentH4[0].textContent = "Features";
MainTextContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
MainTextContentH4[1].textContent = "About";
MainTextContentP[1].textContent = "bout content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

let BottomTextContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
let BottomTextContentP = document.querySelectorAll(".bottom-content p");

BottomTextContentH4[0].textContent = "Services";
BottomTextContentP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
BottomTextContentH4[1].textContent = "Product";
BottomTextContentP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
BottomTextContentH4[2].textContent = "Vision";
BottomTextContentP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactH4 = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");

contactH4.textContent="Contact";
contactP[0].textContent="123 Way 45 Street Somwehere, USA";
contactP[1].textContent="1(888)888-8888";
contactP[2].textContent="sales@greatidea.io";

let footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";

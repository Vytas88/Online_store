/*
1. Globalus kintamieji PRODUCTS, CART
2. Add event listener DOMcontentloaded, jo metu nupiestu prekes
3. Function displayList
      products.forEach
      create Elements - div, image, p, button
4.Mygtuko event listeneris i ta cart array idetu paspausto produkto objekta
5.Susikurti funkcija ikoneles piesimui, skaiciuka kurti pagal array.length
*/
const myAccount = document.querySelector('.my_account');
const dropDown = document.querySelector('.dropdown-menu');
var products = [
	{id: 01, name: 'Apple iPhone', price:'€349', image:"apple-iphone.jpg"},
	{id: 02, name: 'Canon DSLR', price:'€250', image:"canon.jpg"},
	{id: 03, name: 'Apple Watch', price:'€330', image:"apple-watch.jpg"},
	{id: 04, name: 'Apple iPad', price:'€369', image:"apple-ipad.jpg"},
  {id: 05, name: 'Sony Headphone', price:'€39', image:"sony-headphones.jpg"},
  {id: 06, name: 'Macbook Air', price:'€649', image:"macbook-air.jpg"},
  {id: 07, name: 'Sony Play Station', price:'€269', image:"sony-playstation.jpg"},
  {id: 08, name: 'Bose Speaker', price:'€49', image:"bose.jpg"}
];
var cart = [];
// var count = 0;
var productCount = document.getElementById("product-count");
var shoppingCart = document.querySelector(".cart");
var cartContent = document.querySelector(".cart-content");

myAccount.addEventListener('click', function() {
    dropDown.classList.toggle('dropdown-menu--active');
});

shoppingCart.addEventListener('click', function() {
    cartContent.classList.toggle('cart-content--active');
});


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    displayList();
});

function displayList() {
  products.forEach(function(element, index) {
  console.log(element);
  var product = document.createElement("div");
  var img = document.createElement("img");
  var paragraph = document.createElement("p");
  var price = document.createElement("p");
  var button = document.createElement("button");
  // product.classList.add('div1');
  img.src = element.image;
  paragraph.textContent = element.name;
  price.textContent = element.price;
  button.textContent = "ADD TO CART";
  product.appendChild(img);
  product.appendChild(paragraph);
  product.appendChild(price);
  product.appendChild(button);

  document.getElementById("output").appendChild(product);

  button.addEventListener('click', function() {
    cart.push(products[index]);
    console.log(cart);
    console.log(cart.length);
    productCount.textContent = cart.length;
    console.log(productCount);

    })
  })
}



// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

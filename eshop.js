/*
1. Globalus kintamieji PRODUCTS, CART
2. Add event listener DOMcontentloaded, jo metu nupiestu prekes
3. Function displayList
      products.forEach
      create Elements - div, image, p, button
4.Mygtuko event listeneris i ta cart array idetu paspausto produkto objekta
5.Susikurti funkcija ikoneles piesimui, skaiciuka kurti pagal array.length
6.Pries pushinant i cart sudaryt if kuris patikrina ar reikia pushinti ar quantity padidinti
7. reiketu dinamiskai siaip kad susikurtu tas langas paspaudus carta, o ne buti pasiruosus
diva.
reiktu vengti ciklo cikle, nebent reiketu kai kokia piramide darai.
*/
const myAccount = document.querySelector('.my_account');
const dropDown = document.querySelector('.dropdown-menu');
var products = [
	{id: 01, name: 'Apple iPhone', price:349, image:"apple-iphone.jpg"},
	{id: 02, name: 'Canon DSLR', price:25, image:"canon.jpg"},
	{id: 03, name: 'Apple Watch', price:330, image:"apple-watch.jpg"},
	{id: 04, name: 'Apple iPad', price:369, image:"apple-ipad.jpg"},
  {id: 05, name: 'Sony Headphone', price:39, image:"sony-headphones.jpg"},
  {id: 06, name: 'Macbook Air', price:649, image:"macbook-air.jpg"},
  {id: 07, name: 'Sony Play Station', price:269, image:"sony-playstation.jpg"},
  {id: 08, name: 'Bose Speaker', price:49, image:"bose.jpg"}
];
var cart = [];
// var count = 0;
var productCount = document.getElementById("product-count");
// var exitBtn = document.querySelector("[data-closeMobile]");

// var shoppingCart = document.querySelector("[data-openMobile]");
var shoppingCartOpen = document.querySelector(".cart");
var cartContent = document.querySelector(".cart-content");

myAccount.addEventListener('click', function() {
    dropDown.classList.toggle('dropdown-menu--active');
});


//OPENS SHOPPING CART WINDOW
function drawShoppingCart() {
  document.querySelector('.cart-content').style.display = 'block';
  document.querySelector('.cart-content').innerHTML = null;
  var exitBtn = document.createElement("button");
  exitBtn.classList.add("exit_button");
  exitBtn.textContent = "X";
  document.querySelector(".cart-content").appendChild(exitBtn);
  //Exit shopping cart
  exitBtn.addEventListener('click', () => {
      document.querySelector('.cart-content').style.display = 'none';
      document.querySelector('.cart-content').innerHTML = null;
  });

  //tam paciam draw tik po for eachu, su reducu total amounta suskaiciuot,
  //tai ne kiekvienos iteracijos metu, todel PO for eacho

  // get sum of price across all products in array
  var totalAmount = cart.reduce(function(prev, cur) { //pirmiau apskaiciuojam kintamaji, tada galim appendinti
    return prev + (cur.price * cur.quantity);
  }, 0);

  console.log('Total Amount:', totalAmount);
  var totalPrice = document.createElement("span");
  totalPrice.classList.add("total_amount");
  totalPrice.textContent = "My total amount: €" + (totalAmount);
  document.querySelector(".cart-content").appendChild(totalPrice);


  //Loop through cart array
  cart.forEach(function(element, indx) {
  var cartDiv = document.createElement("div");
  var cartProduct = document.createElement("div");
  var cartHeading = document.createElement("h3");
  var cartImg = document.createElement("img");
  var cartParagraph = document.createElement("p");
  var cartPrice = document.createElement("p");
  var quantity = document.createElement("p");
  var removeButton = document.createElement("button");
  var plusQuantity = document.createElement("button");
  var minusQuantity = document.createElement("button");
  // var exitButton = document.createElement("button");

  cartImg.src = element.image;
  cartImg.style.width = "30%"
  cartParagraph.textContent = element.name;
  cartPrice.textContent = "€" + (element.price * element.quantity);
  quantity.textContent = "X" + (element.quantity);
  removeButton.textContent = "REMOVE ITEM";
  plusQuantity.textContent = "+";
  minusQuantity.textContent = "-";
  // inputQuantity.textContent = cart.quantity;
  // exitButton.textContent = "EXIT";
  // cartDiv.appendChild(exitButton);
  cartProduct.appendChild(cartImg);
  cartProduct.appendChild(cartParagraph);
  cartProduct.appendChild(cartPrice);
  cartProduct.appendChild(quantity);
  cartProduct.appendChild(removeButton);
  cartProduct.appendChild(minusQuantity);
  cartProduct.appendChild(plusQuantity);
  cartDiv.appendChild(cartProduct);
  cartContent.appendChild(cartDiv);

  //Remove item button
  removeButton.addEventListener("click", function() {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    // productCount.textContent = cart.length;
    // cart.splice(indx, 1);
    console.log('You pushed remove button')
  })


  //Plus quantity
  plusQuantity.addEventListener("click", function() {
    cart[indx].quantity = cart[indx].quantity + 1;
    drawShoppingCart();

  })

  //Minus quantity
  minusQuantity.addEventListener("click", function() {
    if(cart[indx].quantity > 1)
    cart[indx].quantity = cart[indx].quantity - 1;
    drawShoppingCart();

  })
})
}

shoppingCartOpen.addEventListener('click', drawShoppingCart); //callbackas

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    displayList();
});


//DISPLAY PRODUCTS ON FRONT PAGE

function displayList() {
  products.forEach(function(element, index) {
  console.log(element);
  var product = document.createElement("div");
  var img = document.createElement("img");
  var paragraph = document.createElement("p");
  var price = document.createElement("p");
  var button = document.createElement("button");
  img.src = element.image;
  paragraph.textContent = element.name;
  price.textContent = element.price;
  button.textContent = "ADD TO CART";
  product.appendChild(img);
  product.appendChild(paragraph);
  product.appendChild(price);
  product.appendChild(button);

  document.getElementById("output").appendChild(product);

   //push products to cart on "add to cart" click

   button.addEventListener('click', function() {
      const cartIndex = myFunction(element)
      if(cartIndex > -1) { //pasitikrinam ar mum grizo koks nors skaicius daugiau nei -1
        alert("Product is already added to cart")
        cart[cartIndex].quantity = cart[cartIndex].quantity + 1;
      } else {
      console.log("add to cart", button);
      cart.push({...products[index],quantity:1});

      console.log(cart);
      console.log(cart.length);
      productCount.textContent = cart.length;
      console.log(productCount);
      }
    })


  })
}

function myFunction(product) {
  console.log(product);
  const cartIndex = cart.findIndex(cartItem => cartItem.id == product.id); //surandam kelintam indexe preke yra
  return cartIndex; //find index grazina -1 kai nieko neranda
}

// var deleteBtn = document.createElement("button"); //gaunasi kaip paselectintas jau
//   deleteBtn.addEventListener("click", function() {
//           addressList.splice(i, 1);
//           console.log('You pushed delete button');
//           displayList();
//
//     }
//   )

// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

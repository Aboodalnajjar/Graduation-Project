$('.service-btn').on('click', function(){
  $('button').removeClass('selected2');
  $(this).addClass('selected2');
});
$('.main-btn').on('click', function(){
  $('button').removeClass('selected');
  $(this).addClass('selected');
});
$(".service-btn").click(function(){
  $("form").show();
});

var n = document.querySelectorAll(".menu-btn");
for (var i = 0; i < n.length; i++) {
  n[i].addEventListener("click", buttonAnimation);
}
var x = document.querySelectorAll(".service-btn");
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", pricevalue);
}
var price = 0;
var delivery = 0;
var city1 = document.getElementById("fromCity");
var city2 = document.getElementById("ToCity");
function Distance(){
  if (city1.value == city2.value){
    delivery = 25;
  }
  else{
    delivery = 50;
  }
}



function buttonAnimation(event) {
  event.preventDefault();
  switchayah(event.target.value);
}
function pricevalue(key){
  var a = document.getElementsByClassName("service-btn")

  switch(key.target.value){
    case "1":
      price = 25;

  break;
  case "2":
      price = 47;

  break;
  case "3":
      price = 73;

  break;
  case "4":
      price = 95;

  break;
  case "5":
      price = 115;

  break;
}

}

function switchayah(key) {

  var a = document.getElementById("Houses");
  var b = document.getElementById("Products");
  var d = document.getElementsByClassName("room");

  switch (key) {
    case "Houses":
      a.classList.add("shown");
      a.classList.remove("none");
      b.classList.add("none");
      for (let i = 0; i < d.length; i++) {
        d[i].classList.add("shown");
        d[i].classList.remove("none");
      }
      break;
    case "Products":
      a.classList.remove("shown");
      a.classList.add("none");
      b.classList.add("shown");
      b.classList.remove("none");

      for (let i = 0; i < d.length; i++) {
        d[i].classList.remove("shown");
        d[i].classList.add("none")
      }
      break;

    default:
    a.classList.add("none");
    b.classList.add("none");
  }
}
var c = document.getElementById("tab-3");
var z = document.querySelectorAll(".service-btn");
console.log(z);
for (var i = 0; i < z.length; i++) {
  z[i].addEventListener("click", doSomething);
}
function doSomething(event){
   console.log(event);
 event.preventDefault();
  c.classList.add("show");
  c.classList.remove("none");
}

// Get the modal
var modal = document.getElementById("priceModal");

// Get the button that opens the modal
var btn = document.getElementById("getprice");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function addProduct(target) {
  // this is just a product placeholder
  var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="assets/img/product-preview.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Product Name</a></h3><span class="cd-cart__price">$25.99</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' + productId + '">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
  cartList.insertAdjacentHTML('beforeend', productAdded);
}

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
const selectElement1 = document.querySelector('#ToCity');
selectElement1.addEventListener('change', Distance);
const selectElement2 = document.querySelector('#fromCity');
selectElement2.addEventListener('change', Distance);
function pricevalue(key){
  var a = document.getElementsByClassName("service-btn");
  Distance();
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

// Get the modal
var modal2 = document.getElementById("pricemodal");

// Get the button that opens the modal
var btn2 = document.getElementById("Ok");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function(){
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

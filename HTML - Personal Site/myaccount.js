var n = document.querySelectorAll(".menu-btn");
for (var i = 0; i < n.length; i++) {
  n[i].addEventListener("click", buttonAnimation);
}
function buttonAnimation(event) {
    event.preventDefault();
    switchayah(event.target.value);
  }

  function switchayah(key) {

    var a = document.getElementById("user-form");
    var b = document.getElementById("order-form");
    switch (key) {
      case "Account Info":
        a.classList.add("shown");
        a.classList.remove("hidden");
        b.classList.add("hidden");
        b.classList.remove("shown");

        break;
      case "My Orders":
        a.classList.remove("shown");
        a.classList.add("hidden");
        a.classList.remove("shown");
        b.classList.remove("hidden");
        break;

      default:
      a.classList.add("hidden");
      b.classList.add("hidden");
    }
  }

  function doSomething(event){
     console.log(event);
   event.preventDefault();
    c.classList.add("show");
    c.classList.remove("none");
  }

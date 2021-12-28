var a = document.querySelector(".admin-btn-users");
var b = document.querySelector(".admin-btn-employee");
var t1 = document.querySelector(".table1")
var t2 = document.querySelector(".table2")

a.addEventListener("click",()=>{
t1.classList.add("shown");
t1.classList.remove("hidden");
t2.classList.add("hidden");
t2.classList.remove("shown");
})
b.addEventListener("click",()=>{
    t2.classList.add("shown");
    t2.classList.remove("hidden");
    t1.classList.add("hidden");
    t1.classList.remove("shown");
})

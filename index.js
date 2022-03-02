// var like = document.querySelector(".fa-heart");

// like.addEventListener("click", heartClick);
// function heartClick() {
//   if (like.style.color != "red") {
//     like.style.color = "red";
//   } else {
//     like.style.color = "initial";
//   }
// }

// var like = document.getElementsByClassName("heart");

// for (let i = 0; i < like.length; i++) {
//   like[i].addEventListener("click", heartClick);
//   function heartClick() {
//     if (like[i].style.color != "red") {
//       like[i].style.color = "red";
//     } else {
//       like[i].style.color = "initial";
//     }
//   }
// }

var like = document.getElementsByClassName("fa-heart");

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", heartClick);
  function heartClick() {
    like[i].classList.toggle("like");
  }
}

// var increaseQuantity = document.getElementsByClassName("increase");
// var quantity = parseFloat(document.getElementsByTagName("input"));

// for (let i = 0; i < quantity.length; i++) {
//   quantity[i].addEventListener("click", add);
//   function add() {
//     quantity[i]++;
//   }
// }

var increaseQuantity = document.getElementsByClassName("increase");
var decreaseQuantity = document.getElementsByClassName("decrease");
var quantity = document.getElementsByClassName("adjusted_quantity");

decreaseQuantity.setAttribute("disabled", "disabled");
var valueCount;

increaseQuantity.addEventListener("click", function () {
  valueCount = quantity.value;
  valueCount++;
  quantity.value = valueCount;
});

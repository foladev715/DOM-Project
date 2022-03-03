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

let increaseQuantity = document.getElementsByClassName("increase");
let decreaseQuantity = document.getElementsByClassName("decrease");
let quantity = document.getElementsByClassName("adjusted_quantity");
let albumPrice = document.getElementsByClassName("price");
let albumTotal = document.getElementsByClassName("total");
let cartTopTotal = document.getElementById("cart_top_total");
let summaryQuantity = document.getElementById("no_of_items");
let album1Quantity = document.getElementById("album_1_quantity");
let album2Quantity = document.getElementById("album_2_quantity");
let album3Quantity = document.getElementById("album_3_quantity");
let subtotalCost = document.getElementById("subtotal_cost");
let album1Total = document.getElementById("album_1_total");
let album2Total = document.getElementById("album_2_total");
let album3Total = document.getElementById("album_3_total");
let shippingPrice = document.getElementById("shipping_price");
let finalPrice = document.getElementById("final_price");

for (let i = 0; i < increaseQuantity.length; i++) {
  increaseQuantity[i].addEventListener("click", quantityUp);
  function quantityUp() {
    quantity[i].innerHTML++;
    albumTotal[i].innerHTML = albumPrice[i].innerHTML * quantity[i].innerHTML;
    cartTopTotal.innerHTML = summaryQuantity.innerHTML =
      +album1Quantity.innerHTML +
      +album2Quantity.innerHTML +
      +album3Quantity.innerHTML;
    subtotalCost.innerHTML =
      +album1Total.innerHTML + +album2Total.innerHTML + +album3Total.innerHTML;
    finalPrice.innerHTML = +subtotalCost.innerHTML + +shippingPrice.innerHTML;
  }
}

for (let i = 0; i < decreaseQuantity.length; i++) {
  decreaseQuantity[i].addEventListener("click", quantityDown);
  function quantityDown() {
    if (quantity[i].innerHTML >= 2) {
      quantity[i].innerHTML--;
      albumTotal[i].innerHTML = albumPrice[i].innerHTML * quantity[i].innerHTML;
      cartTopTotal.innerHTML = summaryQuantity.innerHTML =
        +album1Quantity.innerHTML +
        +album2Quantity.innerHTML +
        +album3Quantity.innerHTML;
      subtotalCost.innerHTML =
        +album1Total.innerHTML +
        +album2Total.innerHTML +
        +album3Total.innerHTML;
      finalPrice.innerHTML = +subtotalCost.innerHTML + +shippingPrice.innerHTML;
    }
  }
}

let del = document.getElementsByClassName("remove");
let productDiv = document.getElementsByClassName("product");

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", () => {
    productDiv[i].classList.add("none");
    subtotalCost.innerHTML = subtotalCost.innerHTML - albumPrice[i].innerHTML;
    cartTopTotal.innerHTML = summaryQuantity.innerHTML =
      cartTopTotal.innerHTML - quantity[i].innerHTML;
    finalPrice.innerHTML = +subtotalCost.innerHTML + +shippingPrice.innerHTML;
  });
}

// for (let i = 0; i < del.length; i++) {
//   del[i].addEventListener("click", () => {
//     productDiv[i].remove();
//   });
// }
// for (let i = 0; i < albumTotal.length; i++) {
// function albumTotalPrice() {
//   albumTotal[i].innerHTML = (albumPrice[i].innerHTML)*(quantity[i].innerHTML);
// }
// decreaseQuantity.setAttribute("disabled", "disabled");
// var valueCount;

// increaseQuantity.addEventListener("click", function () {
//   valueCount = quantity.value;
//   valueCount++;
//   quantity.value = valueCount;
//

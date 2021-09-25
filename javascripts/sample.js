const priceElement = document.getElementById("product");
const countElement = document.getElementById("count");
let purchases = [];

function add() {
  const price = priceElement.value;
  const count = countElement.value;
  let purchase = {
    price: parseInt(price),
    count: parseInt(count),
  };
  let newPurchase = true;
  purchases.forEach((item) => {
    if(item.price === purchase.price) {
      newPurchase = false;
    }
  })
  if(purchases.length < 1 || newPurchase) {
    purchases.push(purchase);
  } else {
    for(let i = 0; i < purchases.length; i++) {
      if(purchases[i].price === purchase.price) {
        purchases[i].count += purchase.count;
      }
    }
  }
  priceElement.options[0].selected = true;
  countElement.value = "";
  alert(`${display()}\n小計${subtotal()}だよ`);
}


function postage(sum){
  // debugger
  if(sum >= 3000){
    return 0;
  } else if(sum < 2000){
    return 500;
  } else {
    return 250;
  }
}


function calc() {
  const sum = subtotal();
  const send_price = postage(sum);
  if(sum > 0){
    alert(`送料${send_price}円で合計:${sum + send_price}円になりやす！`)
    purchases = [];
    priceElement.options[0].selected = true;
    countElement.value = "";
  }
}


function subtotal() {
  return purchases.reduce((prev, purchases) => {
    return prev + purchases.price * purchases.count
  }, 0);
}

function display(){
  return purchases.map((purchases) => {
   return `${purchases.price}円の品が${purchases.count}点`
  }).join("\n");
}


// function tsuruno(){
//   let hey = "ばあちゃん家いってくるは"
//   alert(`${hey}`+"じゃあの");
// }

// let arr = [1,2,3];
// const mapped = arr.map(a => {
//   return a *3;
// })
// console.log(mapped);

// {
// let arr = [1, 2, 3];
// const mapped = arr.map(element => {
//   return element * 2;
// })
// console.log(mapped);
// }

// let h = [1,2,3,4,5,6];
//  h.forEach(element =>{
//    console.log(element)
//   })
// let g = [1,2,3,4];
// const maped = g.map(element => {
//   return element * 2;
// })
// console.log(maped);

// let gg = [1,2,3,4,5];
// const sam = gg.reduce((pi, pika) => {
//   return pi + pika;
// })
// console.log(sam);
// const numbers = [1, 2, 3, 4, 5, 6];
// for (const num of numbers) {
//   console.log(num * 800);
// }
// for(let num = 1; num < 5; num++) {
//   if(num == 3)break;
//   console.log(num);
// }
// let a = ["tt", "gg"];
// console.log(a[1]);
// a[2] = "aaaa";
// console.log(a);
// a[2] = "hhhhhhh";
// console.log(a);
// delete a[0];
// console.log(a[0]);
// console.log(a.length);
// a.push("kakaka");
// console.log(a);


// let person = ["tanaka", 30];
// let point = [1000, 200];
// let address = {
//   prefecture: "Tokyo",
//   city: "Shibuya-ku",
// }
// person.push(point);
// person.push(address);
// // console.log(person);
// console.log(person[2][1]);
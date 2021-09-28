// function btn_color(){
//   const a = document.querySelector('h1');
//   const btn = document.getElementById('btn');
//   btn.onclick = function(e){
//     e.currentTarget.style.backgroundColor = "red";
//     a.style.color="#ff5"
//   }
// }
// window.onload = btn_color;


function btn_color(){
  const a = $('h1');
  const btn = $('#btn');
  btn.click = function(e) {
    e.target.style.backgroundColor="red";
    e.style.color ="yellow";
  }
}
$(document).ready(btn_color);
// function h1_color_changger(){
//   const ppp = document.querySelector('p')
//   ppp.classList.toggle('change_color');
// }

  // const btn = document.getElementById('btn');
  // btn.onclick = ()=> {
  //   setTimeout(() => {
  //     window.alert('クリックされたぞ');
  //   },3000)
  // }
  // btn.onclick = () =>{
  //   console.log('jack');
  // }

// function clickAlert(){
//   const btn = document.getElementById('btn');
//   btn.addEventListener('click', alertClick);
// }
// function alertClick(e){
//   // console.log(e.timeStamp);
//   e.target.style.backgroundColor="red";
// }
// window.onload = clickAlert;



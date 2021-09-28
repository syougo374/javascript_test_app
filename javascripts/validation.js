function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      const element = document.createElement('p')
      const message = document.createTextNode("Eメールが一致しません")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element)
      }, 3000)
    } else {
      form.submit();
    }
  });
};
window.onload = emailValidation;
const forms = document.getElementById('form');
console.log(forms)

const $form = $('#form')
const $email = $("#email")[0]
const $confirm = $('#email_confirm')[0]
const bb = $('#gggg')[0]
const tbody = $('tbody')[0]
const element = document.createElement('p');
element.id = "messageId"
$confirm.addEventListener('input',check)
$email.addEventListener('input',emailCheck)

function check(){
  if($confirm.value !== $email.value){
    $confirm.classList.add('backcolor')
    element.innerText = 'メアド不一致';
    element.style.color="#d14539"
    tbody.insertBefore(element, bb)
  } else {
    emailCheck()
  }
}
function emailCheck(){
  if($confirm.value == $email.value){
    $confirm.classList.remove('backcolor')
    element.remove()
  }
}

// function boolen(){
//   if()
// }
// $(function(){
//   preventDefault();
//   const confirm = $("#email_confirm")
//   const email = $("#email")
//   if(confirm[0].value == ''){
  //     document.onkeydown = function(){
    //       if(confirm[0].value !== email[0].value){
      //         const bb = $('#gggg')
      //         const tbody = $('tbody')
      //         const element = document.createElement('p');
      //         confirm[0].style.backgroundColor="rgba(230,169,171,.5)"
      //         element.innerText = 'メアド不一致';
      //         element.style.color="#d14539"
      //         tbody[0].insertBefore(element, bb[0])
      //       } else {
        //         $('p').removeChild();
        //         forms.onsubmit
        //       }
        //     }
        //   }
        // })

// const email = $("#email")[0]

// const confirm = $("#email_confirm")
// console.log(confirm[0])
  // confirm.onselectionchange = ()=>{
  //   debugger
  //   console.log('sdfsdf')
  //   if(confirm.value !== email.value){
  //     const bb = $('#gggg')[0]
  //     const tbody = $('tbody')[0]
  //     const element = document.createElement('p');
  //     confirm.style.backgroundColor="rgba(230,169,171,.5)"
  //     element.innerText = 'メアド不一致';
  //     element.style.color="#d14539"
  //     tbody.insertBefore(element, bb)
  //   } else {
  //     // $('p').removeChild();
  //     form.onsubmit
  //   }
  // }

// window.onload = aaa;

// confirm.addEventListener('selectionchange', () => {
//   // console.log(document.getSelection());
// });

// onselectionchange version
// confirm.onselectionchange = () => {
//   // debugger
//   console.log(document.getSelection());
// };

// selectionchange
// ['shshs']("https://developer.mozilla.org/ja/docs/Web/API/Document/selectionchange_event")
// function message(){
//   this.innerText = 'メアド不一致';
//   this.style.color="#d14539"
// }

let a = [1,2,3,4,5,6];
if(a.indexOf(6) != -1){
  console.log('yes');
}
// function textAlert(){
//   const element = $('tbody tr#contact_alert');
//   const container = $('#contact tbody');
//   // console.log(element[0])
//   const message = document.createElement('p')
//   message.append('メアド不一致')
//   // element.insertBefore(message)
//   const a = $('div.ggg p')
//   console.log(a)
//   const g = $('.ggg')
//   $(".ggg p").insertBefore(message)
//   console.log(message)
  
// }
// window.onload = textAlert;

// let contact = document.getElementsByClassName('section_title');
// let p_tag = document.getElementsByTagName('p')[0];
// // let p = document.createElement('p');
// // p.innerText = '追加したよ〜';
// console.log(contact);
// let p = document.createTextNode('javascript_practice');
// contact[0].appendChild(p);
// function forms_method(){
//   let forms = document.forms;
//   // console.log(forms[0].name.value = "hi");
//   forms[0].onsubmit = function(){
//     if(confirm("ggg")){
//       // console.log('ff');
//       // contact[0].insertBefore(p, p_tag);
//       contact[0].removeChild(p);
//     } else {
//       forms[0].name.value = `ほっほー　　い`
//     }
//   }
// }
// window.onload = forms_method;



// window.onload = function(){
//   const forms = document.forms;
//   forms[0].name.value = "まいねーむいずつるの";
// };

// function confirmSubmit(){
//   const forms = document.forms;
//   forms[0].onsubmit = function(){
//     const formsName = forms[0].name.value;
//     if(!confirm(`${formsName}にほんとにする？`)){
//       alert('キャンセルされました');
//       return false;
//     }
//   }
// }
// window.onload = confirmSubmit;

// function addElement(){
//   const element = document.createElement('p');
//   element.innerText = "追加しました";
//   const parentElement = document.getElementsByTagName('div')[0];
//   const target = document.getElementsByTagName('p')[0];
//   parentElement.insertBefore(element, target);
// }

// function removeElement(){
//       const element = document.getElementsByTagName('div')[0];
//       const remove_elemnt = document.getElementsByTagName('h1')[0];
//       element.removeChild(remove_elemnt);
// }

// function addlink() {
//   const element = document.createElement('a');
//   element.setAttribute("href", "https://diveintocode.jp/");
//   element.innerText = "diveintocode";
//   const parentElement = document.getElementsByTagName('div')[0];
//   const child = document.getElementsByTagName('h1')[0];
//   parentElement.insertBefore(element, child);
// }

// window.onload = function(){
//   addlink();
//   addElement();
//   removeElement();
// }

// function loadAlert(){
//   alert('ページが読み込まれました');
// }
// window.onload = loadAlert;

// function loadAlert(){
//   if(confirm('ページを読み込みましたか？')){
//     alert('ページが読み込まれました');
//   } else {
//     alert("キャンセルされました");
//     aaa.innerHTML = "";
//   }
// }
// window.onload = loadAlert;

// function open_window() {
//   if(confirm("DICE into code に入校しますか？")){
//     open("https://diveintocode.jp/");
//   }
// }
// window.onload = open_window;

// function getElement() {
//     const element = document.getElementsByTagName("div");
//     console.log(element[0].children);
// }
// window.onload = getElement;


// function douga(){
//   if(confirm("ワンオク動画見ます？")){
//     open("https://www.youtube.com/watch?v=LWEldgoefCA");
//   }
// }

// window.onload = douga;
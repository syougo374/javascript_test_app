

function emailValidate(){
  const forms = document.forms[0];
  forms.addEventListener('submit',(e) =>{
    e.preventDefault()
    if(forms.email.value !== forms.email_confirm.value){
      const element = document.createElement('p');
      const alertMessage = document.createTextNode('メアドが一致せず');
      forms.appendChild(element);
      element.appendChild(alertMessage);
      element.classList.add("alert");
      setTimeout(()=>{
        forms.removeChild(element)
      },3000);
    } else {
      forms.submit();
    }
  })
}
window.onload = emailValidate;


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
// const parent = document.getElementById("parent");
// console.log(parent);
// console.log(parent2);

// const parent2 = $('#parent');
// $("#btn").click(() => {
//   window.alert('jqueryで初イベントハンドラ');
// })
// $(document).ready()

$(function(){
  $('div#parent h1').append('はじめます');
  $('#parent').append("<p>要素毎</p>");
})

$(function(){
  $('div').prepend('<p>jqueryについて</p>');
})

$(function(){
  $('p').remove();
})

$(function(){
  $('div#parent h1').text('書き換えました');
})
$(function(){
  $('h1.pp').html("<p>html_change</p>");
})
$(function(){
  $('#parent h1').addClass('color');
})
$(function(){
  $('#btn').on('click',()=> {
    // $('#parent h1').toggle('color');
    $('#parent').append(`<button id="btn1">新ボタン</button>`);
  })
})

$(function(){
  $('#parent').on("click",'#btn1',() =>{
    $(this.activeElement).hide("slow","swing");
  })
})

$(function(){
  $('#parent').on('click','#btn1',() =>{
    $('h1.pp').show('500', "linear");
    $('h1.pp').append("ggggggggg");
  })
})


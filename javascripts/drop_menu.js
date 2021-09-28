$(function dropMenu(){
  const dropMenuBtn = $('#drop_menu_btn');
  const dropMenuItem = $('#drop_menu');
  dropMenuBtn.click(() =>{
    dropMenuItem.toggle('500','linear');
  })
})

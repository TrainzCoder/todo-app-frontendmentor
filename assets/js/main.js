// Switch Theme
let themeToggle = document.querySelector('.switch-theme');

themeToggle.addEventListener('click',function(){
  let body = document.querySelector('body');
  body.classList.toggle('dark')
  
  if($('body').hasClass('dark')){
    themeToggle.src = "assets/images/icon-moon.svg";
  } else {
    themeToggle.src = "assets/images/icon-sun.svg";
  }   
})

// Add Element
const input = document.querySelector('.form-control');
let itemLeft = document.querySelector('.item-left span');

itemLeft.innerHTML = document.querySelectorAll(".list-group-item").length;

input.addEventListener('keydown', e => {
  if(e.keyCode == '13'){
    let inputSanitize = input.value.replace(/(<([^>]+)>)/gi, "");
    
    $('.list-group').append(showListItem(inputSanitize));

    input.value = '';
    itemLeft.innerHTML = document.querySelectorAll(".list-group-item").length;
    
  }
})

function showListItem(item){
  return `<li class="list-group-item">
            <div class="check-todo">
            </div>
            <p>${item}</p>
            <img src="assets/images/icon-cross.svg" class="close-icon ml-auto" alt="">
          </li>`
}

// delete element and Mark Done
const listGroup = document.querySelector('.list-group');

listGroup.addEventListener('click', function(el) { 
  
  if (el.target.classList.contains('close-icon')) {
      el.target.parentElement.remove();  
  } 
  if (el.target.classList.contains('check-todo')) {
      el.target.parentElement.classList.toggle('done');     
  }

  itemLeft.innerHTML = document.querySelectorAll(".list-group-item").length;
})

// Clear complete 
$('.clear').click(function(){
  $('.list-group .done').remove();
  itemLeft.innerHTML = document.querySelectorAll(".list-group-item").length;
})


// Filter make active class on filter toggle

$('.filter a').click(function(){
  $('.filter a').removeClass('active');
  $(this).addClass('active');

  let filterName = this.textContent.toLowerCase();

  if(filterName == 'active'){
    $('.list-group .done').hide();
    $('.list-group-item:not(.done)').show(); 
  } else if (filterName == 'completed'){
    $('.list-group .done').show();
    $('.list-group-item:not(.done)').hide(); 
  } else {
    $('.list-group-item').show();
  }
})
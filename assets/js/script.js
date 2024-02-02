function burgerMenu(){
  const menu = document.querySelector('.menu-mobile ul')
  const burger = document.querySelector('.burger')

  burger.addEventListener('click', ()=>{
      burger.classList.toggle('active')
      console.log(menu.classList)
      if(menu.style.display == 'flex'){
        menu.style.display = 'none'
      }
      else{
        menu.style.display = 'flex'
      }
  })
}

burgerMenu()

var map = L.map('map').setView([49.85834110837749, 23.97478162208791], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.85834110837749, 23.97478162208791]).addTo(map);
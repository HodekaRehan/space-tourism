const sourceImage = document.querySelector('.sourceImg')
const img = document.querySelector('.image')
const title = document.querySelector('.destination__title')
const para = document.querySelector('.destination__para')
const distance = document.querySelector('.avg--distance')
const travelTime = document.querySelector('.travel--time')
const destinationBtns = [...document.querySelectorAll('.destination__btn')]

const displayDestinations = function(destination) {
  destinationBtns.forEach(btn => {
    const id = btn.dataset.id

    btn.addEventListener('click', function() {
      sourceImage.srcset = destination[id].images.webp
      img.src = destination[id].images.png
      title.textContent = destination[id].name
      para.textContent = destination[id].description
      distance.textContent = destination[id].distance
      travelTime.textContent = destination[id].travel

      destinationBtns.forEach(btn => btn.classList.remove('destination__btn--active'))
      btn.classList.add('destination__btn--active')
    })
  })
}

export default displayDestinations
import get from "../getElement.js"

const sourceImage = get('.sourceImg')
const img = get('.image')
const title = get('.destination__title')
const para = get('.destination__para')
const distance = get('.avg--distance')
const travelTime = get('.travel--time')
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
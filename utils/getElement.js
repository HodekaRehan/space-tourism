const getElement = function(selection) {
   const element = document.querySelector(selection)

   if(element) {
      return element
   } else {
      throw Error('No element is selected')
   }
}

export default getElement
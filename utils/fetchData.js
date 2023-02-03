const fetchData = async function() {
   try {
      const response = await fetch('../data.json')
      const data = await response.json()
      return data
   } catch(error) {
      console.error('There was a problem with the fetch operation')
   }
}

export default fetchData
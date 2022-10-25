import axios from 'axios'

// functions
// @function getUserMainData

export const getUserMainData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    console.log('id api', id)
    console.log('id response', response)
    return response.data
  } catch (error) {
    console.log('error api', error)
  }
}

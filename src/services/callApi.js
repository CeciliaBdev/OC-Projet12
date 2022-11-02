import axios from 'axios'

// functions
// @function getUserMainData
// @function getUserActivity
// @function getUserAverageSession
// @function getUserPerformance

export const getUserMainData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${id}`)
    // console.log('id api', id)
    // console.log('id response', response)
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}
// poids - calories
export const getUserActivity = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/activity`
    )
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}
// moyenne sessions
export const getUserAverageSession = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/average-sessions`
    )
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}
//performance
export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/performance`
    )
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}

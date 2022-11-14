import { userMainData } from '../models/userMainData'
import { userActivity } from '../models/userActivity'
import { userAverageSession } from '../models/userAverageSession'
import { userPerformance } from '../models/userPerformance'

/**
 * All functions that returns the  API data depending on the id using Fetch
 * @function getUserMainData firstname - score - key figures - global informations
 * @function getUserActivity daily activity: height, calories
 * @function getUserAverageSession average sessions
 * @function getUserPerformance performance
 * @param {number} userId
 * @returns new class
 */

export async function getUserMainData(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}`
  const data = await fetch(baseUrl)
  // console.log(data)
  const dataJson = await data.json()
  // console.log(dataJson)
  return new userMainData(dataJson)
}

export async function getUserActivity(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/activity`
  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userActivity(dataJson)
}

export async function getUserAverageSession(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/average-sessions`
  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userAverageSession(dataJson)
}

export async function getUserPerformance(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/performance`
  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userPerformance(dataJson)
}

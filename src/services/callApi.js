import { userMainData } from '../models/userMainData'
import { userActivity } from '../models/userActivity'
import { userAverageSession } from '../models/userAverageSession'
import { userPerformance } from '../models/userPerformance'

/*
 * @function getUserMainData
 * @function getUserActivity
 * @function getUserAverageSession
 * @function getUserPerformance
 */

// infos user
export async function getUserMainData(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}`

  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userMainData(dataJson)
}
// poids - calories
export async function getUserActivity(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/activity`

  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userActivity(dataJson)
}

// moyenne sessions
export async function getUserAverageSession(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/average-sessions`

  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userAverageSession(dataJson)
}

//performance
export async function getUserPerformance(userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/performance`

  const data = await fetch(baseUrl)
  const dataJson = await data.json()
  return new userPerformance(dataJson)
}

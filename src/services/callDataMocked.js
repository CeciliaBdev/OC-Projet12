import { userMainData } from '../models/userMainData'
import { userActivity } from '../models/userActivity'
import { userAverageSession } from '../models/userAverageSession'
import { userPerformance } from '../models/userPerformance'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data.js'

/**
 * all the functions that returns the  mocked data depending on the id
 * @function getUserMainDataMocked firstname - score - key figures - global informations
 * @function getUserActivityMocked daily activity: height, calories
 * @function getUserAverageSessionMocked average sessions
 * @function getUserPerformanceMocked performance
 * @params {data : response}
 * @returns new class
 */

export async function getUserMainDataMocked(userId) {
  // je cherche dans USER_MAIN_DATA un element qui correspond à l'userId
  // je remonte d'un niveau dans le json (data)
  // je retourne sous la forme de la classe de modelisation déja créée
  const mockedData = USER_MAIN_DATA.find((el) => el.id == userId)
  const dataJson = { data: mockedData }
  return new userMainData(dataJson)
}

export async function getUserActivityMocked(id) {
  const mockedData = USER_ACTIVITY.find((el) => el.userId == id)
  const dataJson = { data: mockedData }
  return new userActivity(dataJson)
}

export async function getUserAverageSessionMocked(id) {
  const mockedData = USER_AVERAGE_SESSIONS.find((el) => el.userId == id)
  const dataJson = { data: mockedData }
  return new userAverageSession(dataJson)
}

export async function getUserPerformanceMocked(id) {
  const mockedData = USER_PERFORMANCE.find((el) => el.userId == id)
  const dataJson = { data: mockedData }
  return new userPerformance(dataJson)
}

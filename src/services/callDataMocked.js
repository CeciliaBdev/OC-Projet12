import { userMainData } from '../models/userMainData'
import { userActivity } from '../models/userActivity'
import { USER_MAIN_DATA, USER_ACTIVITY } from './data.js'

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

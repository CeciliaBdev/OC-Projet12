import { userMainData } from '../models/userMainData'
import { USER_MAIN_DATA } from './data.js'

export async function getUserMainDataMocked(userId) {
  // je cherche dans USER_MAIN_DATA un element qui correspond à l'userId
  // je remonte d'un niveau dans le json (data)
  // je retourne sous la forme de la classe de modelisation déja créée
  const mockedData = USER_MAIN_DATA.find((el) => el.id == userId)
  const dataJson = { data: mockedData }
  return new userMainData(dataJson)
}

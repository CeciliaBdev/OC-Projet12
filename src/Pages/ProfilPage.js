import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { allData } from '../services/allData.js'
import { getUserMainData } from '../services/callApi.js'

function Profil() {
  //hooks
  const { id } = useParams()
  const [userData, setUserData] = useState()

  useEffect(() => {
    getUserMainData(id)
      .then((values) => {
        console.log('id', id)
        console.log('values', values['data']['userInfos']['firstName'])
        setUserData(values['data']['userInfos']['firstName']) //firstname
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  if (userData === undefined) {
    console.log('error data')
  }

  return (
    <div>
      <div>
        <NavBar />
        <div className="dashboard">
          <UserInfos firstName={userData} />
        </div>
      </div>
    </div>
  )
}

export default Profil

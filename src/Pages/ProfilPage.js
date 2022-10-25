import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import FoodInfos from '../components/FoodInfos.js'
import Activity from '../components/Activity.js'
import Graph from '../components/Graph.js'
import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { allData } from '../services/allData.js'
import { getUserMainData } from '../services/callApi.js'

function Profil() {
  //hooks
  const { id } = useParams()
  const [userData, setUserData] = useState() // firstname
  const [keyData, setKeyData] = useState() // keyData

  useEffect(() => {
    getUserMainData(id)
      .then((values) => {
        console.log('id', id)
        console.log('values', values['data']['userInfos']['firstName'])
        setUserData(values['data']['userInfos']['firstName']) //firstname
        console.log(values['data']['keyData'])
        setKeyData(values['data']['keyData']) // keyData
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
        <div className="dashboard_container">
          <UserInfos firstName={userData} />
          <div className="dashboard">
            <div className="graph_container">
              <Activity />
              <Graph />
            </div>
            <FoodInfos keyData={keyData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil

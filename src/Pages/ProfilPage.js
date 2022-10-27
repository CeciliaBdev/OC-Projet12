import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import FoodInfos from '../components/FoodInfos.js'
import Bargraph from '../components/BarChart.js'
import Graph from '../components/Graph.js'
import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getUserMainData, getUserActivity } from '../services/callApi.js'

function Profil() {
  //hooks
  const { id } = useParams()
  const [userData, setUserData] = useState() // firstname
  const [keyData, setKeyData] = useState() // keyData
  const [activity, setActivity] = useState() //activité

  useEffect(() => {
    getUserMainData(id).then((values) => {
      // console.log('id', id)
      // console.log('values', values['data']['userInfos']['firstName'])
      setUserData(values['data']['userInfos']['firstName']) //firstname
      // console.log(values['data']['keyData'])
      setKeyData(values['data']['keyData']) // keyData
    })
    getUserActivity(id)
      .then((values) => {
        console.log('values', values['data']['sessions'])
        setActivity(values['data']['sessions'])
      })

      .catch((error) => {
        console.log(error)
      })
  }, [id])

  // if (userData === undefined) {
  //   console.log('error data')
  // }

  return (
    <div>
      <div>
        <NavBar />
        <div className="dashboard_container">
          <UserInfos firstName={userData} />
          <div className="dashboard">
            <div className="graph_container">
              <Bargraph activity={activity} />
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

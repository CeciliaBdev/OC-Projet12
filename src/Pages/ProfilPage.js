import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import FoodInfos from '../components/FoodInfos.js'
import Bargraph from '../components/BarChart.js'
import Radargraph from '../components/RadarChart.js'
import RadialChart from '../components/RadialBarChart.js'
import Linegraph from '../components/LineChart.js'

import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  getUserMainData,
  getUserActivity,
  getUserPerformance,
  getUserAverageSession,
} from '../services/callApi.js'

function Profil() {
  //hooks
  const { id } = useParams()
  const [userData, setUserData] = useState() // firstname
  const [keyData, setKeyData] = useState() // keyData
  const [activity, setActivity] = useState() //activité
  const [averageSessions, setAverageSessions] = useState([]) //moyenne session
  const [performance, setPerformance] = useState([])
  const [userScore, setUserScore] = useState()

  useEffect(() => {
    getUserMainData(id).then((values) => {
      // console.log('id', id)
      // console.log('values', values['data']['userInfos']['firstName'])
      setUserData(values['data']['userInfos']['firstName']) //firstname
      // console.log(values['data']['keyData'])
      setKeyData(values['data']['keyData']) // keyData
      // console.log(values['data']['todayScore'])
      setUserScore(values['data']['todayScore'] || values['data']['score'])
    })
    getUserActivity(id).then((values) => {
      // console.log('values', values['data']['sessions'])
      setActivity(values['data']['sessions'])
    })
    getUserAverageSession(id).then((values) => {
      // console.log('values sessions', values['data']['sessions'])
      setAverageSessions(values['data']['sessions'])
    })
    getUserPerformance(id)
      .then((values) => {
        // console.log(values['data']['data'])
        setPerformance(values['data']['data'])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <div>
      <div>
        <NavBar />
        <div className="dashboard_container">
          <UserInfos firstName={userData} />
          <div className="dashboard">
            <div className="graph_container">
              <Bargraph activity={activity} />
              <div className="graphs">
                <div>
                  <Linegraph averageSessions={averageSessions} />
                </div>
                <div>
                  <Radargraph performance={performance} />
                </div>

                <div>
                  <RadialChart userScore={userScore} />
                </div>
              </div>
            </div>
            <FoodInfos keyData={keyData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil

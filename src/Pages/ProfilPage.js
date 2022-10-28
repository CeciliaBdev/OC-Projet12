import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import FoodInfos from '../components/FoodInfos.js'
import Bargraph from '../components/BarChart.js'

import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  getUserMainData,
  getUserActivity,
  getUserPerformance,
} from '../services/callApi.js'

import Radargraph from '../components/RadarChart.js'

function Profil() {
  //hooks
  const { id } = useParams()
  const [userData, setUserData] = useState() // firstname
  const [keyData, setKeyData] = useState() // keyData
  const [activity, setActivity] = useState() //activité
  // const [averageSessions, setAverageSessions] = useState([]) //moyenne session
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    getUserMainData(id).then((values) => {
      // console.log('id', id)
      // console.log('values', values['data']['userInfos']['firstName'])
      setUserData(values['data']['userInfos']['firstName']) //firstname
      // console.log(values['data']['keyData'])
      setKeyData(values['data']['keyData']) // keyData
    })
    getUserActivity(id).then((values) => {
      // console.log('values', values['data']['sessions'])
      setActivity(values['data']['sessions'])
    })
    // getUserAverageSession(id)
    //   .then((values) => {
    //     console.log('values sessions', values['data']['sessions'])
    //     setAverageSessions('values', values['data']['sessions'])
    //   })
    getUserPerformance(id)
      .then((values) => {
        console.log(values['data']['data'])
        setPerformance(values['data']['data'])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  // if (userData === undefined) {
  //   console.log('error data')
  // }
  // const data = [
  //   {
  //     subject: 'Math',
  //     A: 120,
  //     B: 110,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Chinese',
  //     A: 98,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'English',
  //     A: 86,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Geography',
  //     A: 99,
  //     B: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Physics',
  //     A: 85,
  //     B: 90,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'History',
  //     A: 65,
  //     B: 85,
  //     fullMark: 150,
  //   },
  // ]
  // const USER_PERFORMANCE = [
  //   {
  //     userId: 12,
  //     kind: {
  //       1: 'cardio',
  //       2: 'energy',
  //       3: 'endurance',
  //       4: 'strength',
  //       5: 'speed',
  //       6: 'intensity',
  //     },
  //     data: [
  //       {
  //         value: 80,
  //         kind: 1,
  //       },
  //       {
  //         value: 120,
  //         kind: 2,
  //       },
  //       {
  //         value: 140,
  //         kind: 3,
  //       },
  //       {
  //         value: 50,
  //         kind: 4,
  //       },
  //       {
  //         value: 200,
  //         kind: 5,
  //       },
  //       {
  //         value: 90,
  //         kind: 6,
  //       },
  //     ],
  //   },
  //   {
  //     userId: 18,
  //     kind: {
  //       1: 'cardio',
  //       2: 'energy',
  //       3: 'endurance',
  //       4: 'strength',
  //       5: 'speed',
  //       6: 'intensity',
  //     },
  //     data: [
  //       {
  //         value: 200,
  //         kind: 1,
  //       },
  //       {
  //         value: 240,
  //         kind: 2,
  //       },
  //       {
  //         value: 80,
  //         kind: 3,
  //       },
  //       {
  //         value: 80,
  //         kind: 4,
  //       },
  //       {
  //         value: 220,
  //         kind: 5,
  //       },
  //       {
  //         value: 110,
  //         kind: 6,
  //       },
  //     ],
  //   },
  // ]

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
                <div></div>
                <div>
                  <Radargraph performance={performance} />
                </div>

                <div></div>
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

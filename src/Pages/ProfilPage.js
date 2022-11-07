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
import { getUserMainData } from '../services/callApi.js'

function Profil() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    getUserMainData(id).then((items) => {
      setData(items)
    })
  }, [id])

  return data ? (
    <div>
      <NavBar />
      <div className="dashboard_container">
        <UserInfos firstName={data.firstName} />
        <div className="dashboard">
          <div className="graph_container">
            <Bargraph />
            <div className="graphs">
              <div>
                <Linegraph />
              </div>
              <div>
                <Radargraph />
              </div>
              <div>
                <RadialChart />
              </div>
            </div>
          </div>
          <FoodInfos keyData={data} />
        </div>
      </div>
    </div>
  ) : (
    console.log('erreur')
  )
}

export default Profil

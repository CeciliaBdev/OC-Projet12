import NavBar from '../components/NavBar.js'
import UserInfos from '../components/UserInfos.js'
import FoodInfos from '../components/FoodInfos.js'
import Bargraph from '../components/BarChart.js'
import Radargraph from '../components/RadarChart.js'
import RadialChart from '../components/RadialBarChart.js'
import Linegraph from '../components/LineChart.js'
import Error from '../components/Error.js'
import Loader from '../components/Loader.js'

import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getUserMainData } from '../services/callApi.js'
import { getUserMainDataMocked } from '../services/callDataMocked.js'

function Profil() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error404, setError404] = useState(false)

  useEffect(() => {
    getUserMainData(id)
      // call dataMocked
      // getUserMainDataMocked(id)
      .then((items) => {
        setData(items)
        setLoading(false)
      })
      .catch((error) => {
        console.log('erreur api')
        setError404(true)
        setLoading(false)
      })
  }, [id])

  return (
    <>
      {(() => {
        if (error404 === true) {
          return <Error />
        } else {
          return loading ? (
            <Loader />
          ) : (
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
          )
        }
      })()}
    </>
  )
}

export default Profil

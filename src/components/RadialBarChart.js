import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from 'recharts'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { getUserMainData } from '../services/callApi'
import { getUserMainDataMocked } from '../services/callDataMocked'
import Error from '../components/Error.js'

/**
 * @name RadialChart
 * @description graph who returns progress against target
 * @param {number} userScore
 * @returns {JSX.Element}
 */
function RadialChart() {
  const { id } = useParams()
  const [userScore, setUserScore] = useState()
  const [data, setData] = useState(null)
  const [error404, setError404] = useState(false)

  useEffect(() => {
    // ** call API ** //
    getUserMainData(id)
      .then((items) => {
        // ** call dataMocked ** //
        // getUserMainDataMocked(id).then((items) => {
        const formatedData = [
          {
            name: 'Score',
            uv: items.score * 100,
            // pv: 2400,
            fill: '#FF0000',
          },
        ]
        setData(formatedData)
        setUserScore(formatedData.map((fd) => fd.uv))
      })
      .catch((error) => {
        console.log('erreur api')
        setError404(true)
      })
  }, [id])

  return (
    <>
      {(() => {
        if (error404 === true) {
          return <Error />
        } else {
          return data ? (
            <ResponsiveContainer height={'100%'}>
              <RadialBarChart
                data={data}
                innerRadius={'70%'}
                barSize={20}
                startAngle={90}
                endAngle={450}
                fill={'#E60000'}
                style={{ backgroundColor: '#FBFBFB', borderRadius: '10px' }}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar
                  dataKey="uv"
                  cornerRadius={5}
                  style={{ backgroundColor: '#FBFBFB' }}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  fill="white"
                  r="27%"
                  className="circle"
                ></circle>
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  fontSize="26"
                  fontWeight="700"
                  fill="black"
                >
                  {userScore}%
                </text>
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  fontSize="14"
                  fill="#74798C"
                  fontWeight="500"
                >
                  de votre objectif
                </text>
                <text x="10%" y="15%" fill="black" fontSize="14px">
                  Score
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          ) : null
        }
      })()}
    </>
  )
}

export default RadialChart

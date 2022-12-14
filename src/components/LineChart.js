import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
import { PropTypes } from 'prop-types'
import { getUserAverageSession } from '../services/callApi'
import { getUserAverageSessionMocked } from '../services/callDataMocked'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import Error from '../components/Error.js'

/**
 * @name Day
 * @description transform number on letter
 * @returns string ou null
 */
function Day(day) {
  switch (day) {
    case 1:
      return 'L'
    case 2:
      return 'M'
    case 3:
      return 'M'
    case 4:
      return 'J'
    case 5:
      return 'V'
    case 6:
      return 'S'
    case 7:
      return 'D'

    default:
      return null
  }
}
/**
 * @description realize the rectangle on the mouse over
 * @param {number} width
 * @param {number} height
 * @returns {JSX.Element}
 */
function CustomCursor({ points }) {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.1}
      x={points[1].x}
      width={500}
      height={280}
    />
  )
}
/**
 * @name CustomTooltip
 * @description hover effect on the graph
 * @returns {JSX.Element}
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip_linechart">
        <p>{payload[0].value}min</p>
      </div>
    )
  }
  return null
}
/**
 * @name Linegraph
 * @description average of the sessions of the user
 * @param {array} averageSessions
 * @param {string} averageSessions.day
 * @param {number} averageSessions.sessionLength
 * @returns
 */
function Linegraph() {
  const [averageSessions, setAverageSessions] = useState([])
  const { id } = useParams()
  const [error404, setError404] = useState(false)

  useEffect(() => {
    // ** call API ** //
    getUserAverageSession(id)
      .then((datas) => {
        // ** call dataMocked ** //
        // getUserAverageSessionMocked(id).then((datas) => {
        if (datas) {
          const formatData = datas.sessions.map((activity) => ({
            day: activity.day,
            sessionLength: activity.sessionLength,
          }))
          setAverageSessions(formatData)
        }
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
          return averageSessions.length > 0 ? (
            <ResponsiveContainer height={'100%'} width={'100%'}>
              <LineChart
                width={'100%'}
                height={265}
                data={averageSessions}
                margin={{ top: 50, right: 0, left: -60, bottom: 10 }}
                style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
              >
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis
                  dataKey="day"
                  tickFormatter={Day}
                  interval="preserveStartEnd"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: 12,
                  }}
                  opacity={0.5}
                />
                <YAxis
                  dataKey="sessionLength"
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                  domain={['dataMin - 10', 'dataMax + 5']}
                />
                <Tooltip
                  cursor={<CustomCursor />}
                  content={<CustomTooltip />}
                  wrapperStyle={{ outlineStyle: 'none' }}
                />
                <Line
                  type="natural"
                  dot={false}
                  dataKey="sessionLength"
                  stroke="#ffffff"
                  strokeWidth={3}
                  activeDot={{
                    stroke: 'rgba(255,255,255, 0.6)',
                    strokeWidth: 10,
                    r: 5,
                  }}
                  opacity={0.6}
                />
                <text
                  x="8%"
                  y="12%"
                  fill="#FFFFFF"
                  opacity="0.5"
                  fontSize="14px"
                >
                  Dur??e moyenne des
                </text>
                <text
                  x="8%"
                  y="20%"
                  fill="#FFFFFF"
                  opacity="0.5"
                  fontSize="14px"
                >
                  sessions
                </text>
              </LineChart>
            </ResponsiveContainer>
          ) : null
        }
      })()}
    </>
  )
}

Linegraph.proTypes = {
  averageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
}
export default Linegraph

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
import propTypes from 'prop-types'
import { getUserActivity } from '../services/callApi'
import { getUserActivityMocked } from '../services/callDataMocked'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

/**
 * datas axis X
 * @param {string} day
 * @returns {string}
 */

const customTick = (day) => {
  // console.log(day.slice(9))
  return day.slice(9)
}

/**
 * @name customTooltip
 * @description by hover: give height and calories per day
 * @returns {JSX Element}
 */
const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    )
  }
}

/**
 * @name BarGraph
 * @description - give daily weight and daily burned calories per day
 * @param {array} activityData
 * @param {string} activity.day
 * @param {number} activity.kilogram
 * @param {number} activity.calories
 * @returns {JSX.Element}
 */

function Bargraph() {
  const [activityData, setActivity] = useState([])
  const { id } = useParams()

  useEffect(() => {
    // ** call API ** //
    getUserActivity(id).then((items) => {
      // ** call dataMocked ** //
      // getUserActivityMocked(id).then((items) => {
      if (items) {
        const formatData = items.sessions.map((activity) => ({
          date: activity.day,
          kg: activity.kilogram,
          cal: activity.calories,
        }))
        setActivity(formatData)
      }
    })
  }, [id])

  return (
    <div className="activity">
      <p>Activité quotidienne</p>
      <ResponsiveContainer>
        <BarChart
          data={activityData}
          margin={{
            top: 50,
            right: 30,
            left: 40,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey={'date'}
            tickLine={false}
            axisLine={false}
            domain={['dataMin + 1', 'dataMax + 1']}
            tickFormatter={customTick}
            padding={{ left: -50, right: -50 }}
          />
          <YAxis
            orientation="right"
            yAxisId={1}
            interval="preserveStartEnd"
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
            tickLine={false}
            tickCount={4}
            dx={50}
          />
          <YAxis hide yAxisId={2} />
          <Tooltip
            content={customTooltip}
            labelStyle={{
              display: 'none',
            }}
            wrapperStyle={{ outline: 'none ' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="6px"
            wrapperStyle={{
              fontSize: '14px',
              marginTop: '-45px',
              marginRight: '10px',
            }}
          />
          <Bar
            dataKey="kg"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Poids (kg)'}
            yAxisId={1}
          />
          <Bar
            dataKey="cal"
            fill="#e60000"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Calories brûlées (kCal)'}
            yAxisId={2}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

//proptypes
Bargraph.propTypes = {
  activity: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  ),
}
export default Bargraph

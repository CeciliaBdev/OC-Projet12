import React from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import { getUserPerformance } from '../services/callApi'
import { getUserPerformanceMocked } from '../services/callDataMocked'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

/**
 * @name Radargraph
 * @description global performance for the user
 * intensity - speed - strength - endurance - energy - cardio
 * @param {array} performance
 * @param {number} performance.value
 * @param {string} performance.kind
 * @returns {JSX.Element}
 */
function Radargraph() {
  const [performance, setPerformance] = useState([])
  const { id } = useParams()

  useEffect(() => {
    // ** call API ** //
    getUserPerformance(id).then((datas) => {
      // ** call dataMocked ** //
      // getUserPerformanceMocked(id).then((datas) => {
      if (datas.data) {
        const formatData = datas.data.map((item) => ({
          kind: datas.kind[item.kind],
          value: item.value,
        }))
        // console.log(formatData)
        setPerformance(formatData)
      }
    })
  }, [id])

  return performance.length > 0 ? (
    <ResponsiveContainer height={'100%'}>
      <RadarChart
        margin={{ top: 20, right: 40, bottom: 20, left: 70 }}
        style={{
          backgroundColor: '#282D30',
          borderRadius: '5px',
        }}
        data={performance}
        width="100px"
        outerRadius={'95%'}
      >
        <PolarGrid radialLines={false} />

        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          axisLine={false}
          dy={2}
          dx={-3}
          stroke="#FFF"
          tick={{ fill: '#FFFFFF', fontSize: '12px' }}
        />

        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  ) : null
}

Radargraph.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ),
}
export default Radargraph

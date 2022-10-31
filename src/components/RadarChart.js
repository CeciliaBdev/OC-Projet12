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

function namePerf(kind) {
  switch (kind) {
    case 1:
      return 'Intensité'
    case 2:
      return 'Vitesse'
    case 3:
      return 'Force'
    case 4:
      return 'Endurance'
    case 5:
      return 'Energie'
    case 6:
      return 'Cardio'
    default:
      return null
  }
}
function Radargraph({ performance }) {
  return (
    <ResponsiveContainer height={'100%'}>
      <RadarChart
        margin={{ top: 20, right: 20, bottom: 20, left: 70 }}
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
          tickFormatter={namePerf}
          tickLine={false}
          axisLine={false}
          dy={3}
          stroke="#FFF"
          tick={{ fill: '#FFFFFF', fontSize: '12px' }}
        />

        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

Radargraph.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ),
}
export default Radargraph

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from 'recharts'
import { PropTypes } from 'prop-types'

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

function Linegraph({ averageSessions }) {
  return (
    <LineChart
      width={330}
      height={280}
      data={averageSessions}
      margin={{ top: 50, right: 10, left: -50, bottom: 10 }}
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
        activeDot={{ stroke: 'rgba(255,255,255, 0.6)', strokeWidth: 10, r: 5 }}
        opacity={0.6}
      />
    </LineChart>
  )
}
Linegraph.proTypes = {
  averageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ),
}
export default Linegraph

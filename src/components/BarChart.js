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

// données axe X - jour et non date entière
const customTick = (day) => {
  // console.log(day.slice(9))
  return day.slice(9)
}
// stylisation custonTooltip
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

function Bargraph({ activity }) {
  return (
    <div className="activity">
      <p>Activité quotidienne</p>
      <ResponsiveContainer>
        <BarChart
          data={activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey={'day'}
            tickLine={false}
            axisLine={false}
            domain={['dataMin + 1', 'dataMax + 1']}
            tickFormatter={customTick}
          />
          <YAxis
            orientation="right"
            yAxisId={1}
            interval="preserveStartEnd"
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
            tickLine={false}
            tickCount={4}
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
              fontSize: '10px',
              marginTop: '-15px',
              marginRight: '20px',
            }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Poids (kg)'}
            yAxisId={1}
          />
          <Bar
            dataKey="calories"
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

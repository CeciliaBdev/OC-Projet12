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

// données axe X - jour et non date entière
function customTick(day) {
  // console.log(day.slice(9))
  return day.slice(9)
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
          <Tooltip />
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
export default Bargraph

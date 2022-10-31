import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from 'recharts'
function RadialChart({ userScore }) {
  const scoreValueScale = [
    {
      value: userScore * 100,
    },
  ]
  const currentUserScore = userScore * 100

  return (
    <ResponsiveContainer height={'100%'}>
      <RadialBarChart
        data={scoreValueScale}
        innerRadius={'100%'}
        barSize={12}
        startAngle={90}
        endAngle={-450}
        fill={'#E60000'}
        style={{ backgroundColor: '#FBFBFB', borderRadius: '5px' }}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          dataKey="value"
          cornerRadius={5}
          style={{ backgroundColor: '#FBFBFB' }}
        />
        <circle cx="50%" cy="50%" fill="white" r="32%"></circle>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          fontSize="26"
          fontWeight="700"
          fill="black"
        >
          {currentUserScore}%
        </text>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontSize="16"
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
  )
}

export default RadialChart

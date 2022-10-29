import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Legend,
} from 'recharts'
function RadialChart({ userScore }) {
  const scoreValueScale = [
    {
      value: userScore * 100,
    },
  ]
  const currentUserScore = userScore * 100

  return (
    <ResponsiveContainer>
      <RadialBarChart
        data={scoreValueScale}
        innerRadius={80}
        barSize={10}
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
        <circle cx="50%" cy="50%" fill="white" r="75"></circle>
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
        <text x="10%" y="15%" fill="black">
          Score
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default RadialChart

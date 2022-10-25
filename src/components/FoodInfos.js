import propTypes from 'prop-types'
import calories from '../assets/calories.png'
import proteines from '../assets/proteines.png'
import glucides from '../assets/glucides.png'
import lipides from '../assets/lipides.png'
import '../styles/Dashboard.css'

function FoodInfos({ keyData }) {
  return (
    <div>
      <div className="containerInfos">
        <div className="cardInfos">
          <img src={calories} alt="" />
          <div>
            <p>{keyData?.calorieCount} Kcal</p>
            <span>Calories</span>
          </div>
        </div>
        <div className="cardInfos">
          <img src={proteines} alt="" />
          <div>
            <p>{keyData?.proteinCount}g</p>
            <span>Proteines</span>
          </div>
        </div>
        <div className="cardInfos">
          <img src={glucides} alt="" />
          <div>
            <p>{keyData?.carbohydrateCount}g</p>
            <span>Glucides</span>
          </div>
        </div>
        <div className="cardInfos">
          <img src={lipides} alt="" />
          <div>
            <p>{keyData?.lipidCount}g</p>
            <span>Lipides</span>
          </div>
        </div>
      </div>
    </div>
  )
}

//keydata - object => shape => number
FoodInfos.propTypes = {
  keyData: propTypes.shape({
    calorieCount: propTypes.number,
    proteinCount: propTypes.number,
    carbohydrateCount: propTypes.number,
    lipidCount: propTypes.number,
  }),
}

export default FoodInfos

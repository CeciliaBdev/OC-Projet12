// attention a l'écriture de propTypes
// utilisation des propTypes : validation de types des props d'un composant

import propTypes from 'prop-types'

function UserInfos({ firstName }) {
  return (
    <div>
      <h1>
        Bonjour <span style={{ color: 'red' }}>{firstName}</span>
      </h1>
      <p style={{ marginTop: '15px' }}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏{' '}
      </p>
    </div>
  )
}
UserInfos.propTypes = {
  firstName: propTypes.string,
}
export default UserInfos

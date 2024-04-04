import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {competing_team, competing_team_logo, match_status, result} = eachItem
  const cssStyling = match_status === 'Lost' ? 'red-color' : 'green-color'
  return (
    <li className="match-card-li-container">
      <div className="con">
        <img
          alt={`competing team ${competing_team}`}
          className="match-card-img"
          src={competing_team_logo}
        />
      </div>
      <p className="head-text">{competing_team}</p>
      <p>{result}</p>
      <p className={`${cssStyling} head-text`}>{match_status}</p>
    </li>
  )
}

export default MatchCard

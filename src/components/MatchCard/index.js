import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  // const {competing_team, competing_team_logo, match_status, result} = eachItem
  const updated = () => ({
    competingTeam: eachItem.competing_team,
    competingTeamLogo: eachItem.competing_team_logo,
    matchStatus: eachItem.match_status,
    result: eachItem.result,
  })
  const cssStyling =
    updated.matchStatus === 'Lost' ? 'red-color' : 'green-color'
  return (
    <li className="match-card-li-container">
      <div className="con">
        <img
          alt={`competing team ${updated.competingTeam}`}
          className="match-card-img"
          src={updated.competingTeamLogo}
        />
      </div>
      <p className="head-text">{updated.competingTeam}</p>
      <p>{updated.result}</p>
      <p className={`${cssStyling} head-text`}>{updated.matchStatus}</p>
    </li>
  )
}

export default MatchCard

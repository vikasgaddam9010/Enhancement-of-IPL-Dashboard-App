import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props
  return (
    <div>
      <div className="latest-matches-container">
        <div className="d-flex semi-container-latest-match">
          <div>
            <p>{latestMatchDetails.competing_team}</p>
            <p>{latestMatchDetails.date}</p>
            <p>{latestMatchDetails.venue}</p>
            <p>{latestMatchDetails.result}</p>
          </div>
          <img
            alt={`latest match ${latestMatchDetails.competing_team}`}
            className="latest-image"
            src={latestMatchDetails.competing_team_logo}
          />
        </div>
        <hr className="hr" />
        <div className="first-second-umpire">
          <p className="heading-text">First Innings</p>
          <p className="para">{latestMatchDetails.first_innings}</p>
          <p className="heading-text">Second Innings</p>
          <p className="para">{latestMatchDetails.second_innings}</p>
          <p className="heading-text">Man Of The Match</p>
          <p className="para">{latestMatchDetails.man_of_the_match}</p>
          <p className="heading-text">Umpires</p>
          <p className="para">{latestMatchDetails.umpires}</p>
        </div>
      </div>
      <ul className="latest-match-ul-container">
        {recentMatches.map(eachItem => (
          <MatchCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default LatestMatch

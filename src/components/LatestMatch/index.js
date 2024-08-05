import {PieChart, Pie, Cell, Legend, Tooltip} from 'recharts'
import MatchCard from '../MatchCard'
import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const LatestMatch = props => {
  const {latestMatchDetails, recentMatches} = props

  const getWinLostDrwan = () => {
    let won = 0
    let lost = 0
    let drawn = 0

    recentMatches.forEach(each => {
      if (each.match_status === 'Won') {
        won += 1
      } else if (each.match_status === 'Lost') {
        lost += 1
      } else {
        drawn += 1
      }
    })
    return [
      {name: 'won', value: won},
      {name: 'lost', value: lost},
      {name: 'drawn', value: drawn},
    ]
  }

  const data = getWinLostDrwan()

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

      <h1>Stats</h1>
      <div className="d-flex-center">
        <PieChart width={400} height={350}>
          <Pie
            data={data}
            innerRadius={0}
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map(index => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
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

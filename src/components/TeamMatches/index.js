import {Component} from 'react'
import LatestMatch from '../LatestMatch'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatches: {},
    latestMatchDetails: {},
    recentMatches: [],
    isLoaderActiveTeam: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {id} = this.props.match.params
    const rawData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await rawData.json()
    /*const updatedlatestMatchDetails = {
      competingTeam: updated.latestMatchDetails.competing_team,
      competingTeamLogo: updated.latestMatchDetails.competing_team_logo,
      date: updated.latestMatchDetails.date,
      firstInnings: updated.latestMatchDetails.first_innings,
      id: updated.latestMatchDetails.id,
      manOfTheMatch: updated.latestMatchDetails.man_of_the_match,
      matchStatus: updated.latestMatchDetails.match_status,
      result: updated.latestMatchDetails.result,
      secondInnings: updated.latestMatchDetails.second_innings,
      umpires: updated.latestMatchDetails.umpires,
      venue: updated.latestMatchDetails.venue,
    }
    const recent = updated.recentMatches

    const recentMatchUpdated = recent.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))*/
    this.setState({
      teamMatches: jsonData,
      latestMatchDetails: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
      isLoaderActiveTeam: false,
    })
  }

  render() {
    const {isLoaderActiveTeam, teamMatches, latestMatchDetails, recentMatches} =
      this.state
    console.log(latestMatchDetails)
    return (
      <div>
        {isLoaderActiveTeam ? (
          <div testid="loader" className="loader">
            <Loader type="TailSpin" color="#000000" width={50} height={50}>
              {' '}
            </Loader>
          </div>
        ) : (
          <div className="team-match-bg-container">
            <div className="semi-container">
              <img
                alt="team banner"
                className="banner-image"
                src={teamMatches.team_banner_url}
              />
              <p className="latest-match-text">Latest Matches</p>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                recentMatches={recentMatches}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

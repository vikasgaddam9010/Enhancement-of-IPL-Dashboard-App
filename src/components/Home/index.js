import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoaderActive: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const rawData = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await rawData.json()
    const temsList = jsonData.teams
    const updatedData = temsList.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id,
    }))

    this.setState({iplTeamsList: updatedData, isLoaderActive: false})
  }
  render() {
    const {iplTeamsList, isLoaderActive} = this.state

    return (
      <div className="bg-container">
        <div className="d-flex image-and-dashboard-text">
          <img
            className="img-dahshboard"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoaderActive ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#FFFFFF" width={50} height={50}>
              {' '}
            </Loader>
          </div>
        ) : (
          <div>
            <ul className="home-ul-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home

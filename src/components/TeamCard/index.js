import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, id, imageUrl} = eachTeam
    return (
      <Link to={`/team-matches/${id}`} className="text-decoration">
        <li className="d-flex link li-container">
          <img className="card-image" src={imageUrl} alt={name} />
          <p className="name text-size">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard

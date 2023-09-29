import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchDestination = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    // Filter the destinations based on the search input
    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1>Destination Search</h1>
        <div className="search-bar">
          <input
            className="search-input" // Renamed the class for clarity
            type="search"
            placeholder="Search"
            onChange={this.searchDestination}
            value={searchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="ul-card">
          {filteredDestinations.map(each => (
            <DestinationItem eachDestination={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

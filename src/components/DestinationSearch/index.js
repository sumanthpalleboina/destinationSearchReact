import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  getInputValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchedResults = initialDestinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-section">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <li className="input-bar">
              <input
                type="search"
                placeholder="search"
                className="input-e1"
                value={searchInput}
                onChange={this.getInputValue}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="icon-search"
              />
            </li>
          </div>
          <ul className="destination-cards-container">
            {searchedResults.map(each => (
              <DestinationItem destinationItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

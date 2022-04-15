import React, { Component } from 'react'

class SearchBar extends Component {
  
  state = { term: '' }

  onInputChange = (e) => {
    this.setState({ term: e.target.value})
  }

  onFormSubmit = (e) => {
      e.preventDefault()

      // TODO -- callback from parent component

    //   this.setState({ term: '' })
  }
  
    render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>ViewTube Search</label>
                <input
                type="text" 
                value={this.state.term} 
                onChange={this.onInputChange} 
                className=""
                />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

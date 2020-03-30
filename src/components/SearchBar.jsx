import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };
  handleInputChange(event) {
    const text = event.target.value;
    this.setState({ searchText: text });
  }

  handleSearchClick(event) {
    this.props.find(this.state.searchText);
  }

  onFormSubmit(event) {
    this.props.find(this.state.searchText);
    event.preventDefault();
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <div className="ui container">
              <label>Image Search:</label>
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={e => this.handleInputChange(e)}
                  value={this.state.searchText}
                />
                <i
                  className="inverted circular search link icon"
                  onClick={event => this.handleSearchClick(event)}
                ></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

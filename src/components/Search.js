import React from 'react';
import SearchContainer from '../containers/SearchContainer.js'

 
class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={mapStateToProps(state)}
          onChange={mapDispatchToProps(input)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;

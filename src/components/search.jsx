import React from 'react';
import ReactDom from 'react-dom';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
    console.log(this.state.term);
  }

  render(){
    return (<div>
      <h4>Search People</h4>
      Enter in a username: <input value={this.state.terms} onChange={this.onChange}/>
      <button>Search!</button>
    </div>)
  }
}

export default Search;

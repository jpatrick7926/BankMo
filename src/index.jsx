import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: []
    }

  }

  render () {
    return(<div>
      <h1>BankMo</h1>
      <Search />
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));

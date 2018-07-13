import React from 'react';
import ReactDom from 'react-dom';
import Search from './components/Search.jsx';
import Feed from './components/Feed.jsx';
import FriendsList from './components/FriendsList.jsx'


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
      <Feed />
      <FriendsList />
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('app'));

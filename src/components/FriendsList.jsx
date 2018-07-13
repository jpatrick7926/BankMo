import React from 'react';
import Post from './ListActivity.jsx';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['Joshua', 'Berica', 'Caleb']
    }

  }

  render() {
    return (<div>
      <h5>Friends</h5>
       {this.state.friends.map((item) => <Post item={item}/>)}
    </div>)
  }
}

export default FriendsList;

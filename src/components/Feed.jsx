import React from 'react';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activity: ['test', 'data']
    }

  }

  render() {
    return(<div>
      <h5>Friends' Activity</h5>
      {this.state.activity}
    </div>)
  }
}

export default Feed;

import React from 'react';

class Post extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {this.props.item}
    </div>)
  }
}

export default Post;

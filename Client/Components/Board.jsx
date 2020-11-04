import React from 'react';
import Champions from './Champions.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      champion: '',
    }
  }

  render () {
    return (
      <div id={this.props.id}>

      </div>
    )
  }
}

export default Board;



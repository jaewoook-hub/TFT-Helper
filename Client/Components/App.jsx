import React from 'react';
import Board from './Board.jsx';
import Champions from './Champions.jsx';
import Items from './Items.jsx';
import Title from './Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      championClicked: '',
      itemClicked: '',
    }
  }

  championClicked(championName) {
    this.setState({
      championClicked: championName,
    });
  }

  itemClicked(itemName) {
    this.setState({
      itemClicked: itemName,
    });
  }

  render () {
    return (
      <div id="App">
        <Champions id="Champions" championClicked={this.championClicked.bind(this)}></Champions>
        <Title id="Title"></Title>
        <Items id="Items" itemClicked={this.itemClicked.bind(this)}></Items>
        <Board id="Board" champion={this.state.championClicked} item={this.state.itemClicked}></Board>
      </div>
    )
  }
}

export default App;



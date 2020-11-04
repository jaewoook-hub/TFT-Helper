import React from 'react';
import Board from './Board.jsx';
import Champions from './Champions.jsx';
import Items from './Items.jsx';
import Title from './Title.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appChampionClicked: 'Aatrox',
      appItemClicked: 'B.F. Sword',
      championData: '',
      itemData: '',
    }
    this.renderItem = this.renderItem.bind(this);
    this.renderChampion = this.renderChampion.bind(this);
  }

  componentDidMount() {
    this.renderItem();
    this.renderChampion();
  }

  renderItem() {
    fetch(`http://localhost:3001/api/item/${this.state.appItemClicked}`)
      .then(res => res.json())
      .then(data => this.setState({itemData: data[0]}));
  }

  renderChampion() {
    fetch(`http://localhost:3001/api/champion/${this.state.appChampionClicked}`)
      .then(res => res.json())
      .then(data => this.setState({championData: data[0]}));
  }

  championClicked(championName) {
    this.setState({
      appChampionClicked: championName,
    }, () => {
      this.renderChampion();
    });
  }

  itemClicked(itemName) {
    this.setState({
      appItemClicked: itemName,
    }, () => {
      this.renderItem();
    });
  }

  render () {
    return (
      <div id="App">
        <Champions id="Champions" championClicked={this.championClicked.bind(this)}></Champions>
        <Title id="Title"></Title>
        <Items id="Items" itemClicked={this.itemClicked.bind(this)}></Items>
        <Board id="Board" champion={this.state.championClicked} item={this.state.itemClicked} championData={this.state.championData} itemData={this.state.itemData}></Board>
      </div>
    )
  }
}

export default App;



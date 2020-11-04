import React from 'react';
import { PageTitle, ItemRow, GoldenSpatula, BFSword, RecurveBow, NeedlesslyLargeRod, NegatronCloak, GiantsBelt, ChainVest, TearOfTheGoddess, SparringGloves } from '../Styled/Items.js';

class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.goldenSpatulaClicked = this.goldenSpatulaClicked.bind(this);
    this.BFSwordClicked = this.BFSwordClicked.bind(this);
    this.recurveBowClicked = this.recurveBowClicked.bind(this);
    this.needlesslyLargeRodClicked = this.needlesslyLargeRodClicked.bind(this);
    this.negatronCloakClicked = this.negatronCloakClicked.bind(this);
  }

  goldenSpatulaClicked() {this.props.itemClicked('Spatula');}
  BFSwordClicked() {this.props.itemClicked('B.F. Sword');}
  recurveBowClicked() {this.props.itemClicked('Recurve Bow');}
  needlesslyLargeRodClicked() {this.props.itemClicked('Needlessly Large Rod');}
  negatronCloakClicked() {this.props.itemClicked('Negatron Cloak');}

  render () {
    return (
      <div id={this.props.id}>
        <PageTitle>ITEMS</PageTitle>

        <ItemRow>
          <GoldenSpatula onClick={this.goldenSpatulaClicked}></GoldenSpatula>
          <BFSword onClick={this.BFSwordClicked}></BFSword>
          <RecurveBow onClick={this.recurveBowClicked}></RecurveBow>
          <NeedlesslyLargeRod onClick={this.needlesslyLargeRodClicked}></NeedlesslyLargeRod>
          <NegatronCloak onClick={this.negatronCloakClicked}></NegatronCloak>
          <GiantsBelt></GiantsBelt>
        </ItemRow>

        <ItemRow>
          <ChainVest></ChainVest>
          <TearOfTheGoddess></TearOfTheGoddess>
          <SparringGloves></SparringGloves>
        </ItemRow>
      </div>
    )
  }
}

export default Items;
import React from 'react';
import { PageTitle, ChampionRow, ChampionAatrox, ChampionAhri, ChampionAkali, ChampionAnnie, ChampionAphelios, ChampionAshe, ChampionAzir, ChampionCassiopia, ChampionDiana, ChampionElise, ChampionEvelynn, ChampionEzreal, ChampionFiora, ChampionGaren, ChampionHecarim, ChampionIrelia, ChampionJanna, ChampionJarvanIV, ChampionJax, ChampionJhin, ChampionJinx, ChampionKalista, ChampionKatarina, ChampionKayn, ChampionKennen, ChampionKindred, ChampionLeeSin, ChampionLilia, ChampionLissandra, ChampionLulu, ChampionLux, ChampionMaokai, ChampionMorganna, ChampionNami, ChampionNidalee, ChampionNunu, ChampionPyke, ChampionRiven, ChampionSejuani, ChampionSett, ChampionShen, ChampionSylas, ChampionTahmKench, ChampionTalon, ChampionTeemo, ChampionThresh, ChampionTwistedFate, ChampionVayne, ChampionVeigar, ChampionVi, ChampionWarwick, ChampionWukong, ChampionXinZhao, ChampionYasuo, ChampionYone, ChampionYuumi, ChampionZed, ChampionZilean } from '../Styled/Champions.js';

class Champions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.aatroxClicked = this.aatroxClicked.bind(this);
    this.ahriClicked = this.ahriClicked.bind(this);
    this.akaliClicked = this.akaliClicked.bind(this);
    this.annieClicked = this.annieClicked.bind(this);
    this.apheliosClicked = this.apheliosClicked.bind(this);
  }

  aatroxClicked() {this.props.championClicked('Aatrox');}
  ahriClicked() {this.props.championClicked('Ahri');}
  akaliClicked() {this.props.championClicked('Akali');}
  annieClicked() {this.props.championClicked('Annie');}
  apheliosClicked() {this.props.championClicked('Aphelios');}

  render () {
    return (
      <div id={this.props.id}>
        <PageTitle>CHAMPIONS</PageTitle>

        <ChampionRow>
          <ChampionAatrox onClick={this.aatroxClicked}></ChampionAatrox>
          <ChampionAhri onClick={this.ahriClicked}></ChampionAhri>
          <ChampionAkali onClick={this.akaliClicked}></ChampionAkali>
          <ChampionAnnie onClick={this.annieClicked}></ChampionAnnie>
          <ChampionAphelios onClick={this.apheliosClicked}></ChampionAphelios>
          <ChampionAshe></ChampionAshe>
        </ChampionRow>

        <ChampionRow>
          <ChampionAzir></ChampionAzir>
          <ChampionCassiopia></ChampionCassiopia>
          <ChampionDiana></ChampionDiana>
          <ChampionElise></ChampionElise>
          <ChampionEvelynn></ChampionEvelynn>
          <ChampionEzreal></ChampionEzreal>
        </ChampionRow>

        <ChampionRow>
          <ChampionFiora></ChampionFiora>
          <ChampionGaren></ChampionGaren>
          <ChampionHecarim></ChampionHecarim>
          <ChampionIrelia></ChampionIrelia>
          <ChampionJanna></ChampionJanna>
          <ChampionJarvanIV></ChampionJarvanIV>
        </ChampionRow>

        <ChampionRow>
          <ChampionJax></ChampionJax>
          <ChampionJhin></ChampionJhin>
          <ChampionJinx></ChampionJinx>
          <ChampionKalista></ChampionKalista>
          <ChampionKatarina></ChampionKatarina>
          <ChampionKayn></ChampionKayn>
        </ChampionRow>

        <ChampionRow>
          <ChampionKennen></ChampionKennen>
          <ChampionKindred></ChampionKindred>
          <ChampionLeeSin></ChampionLeeSin>
          <ChampionLilia></ChampionLilia>
          <ChampionLissandra></ChampionLissandra>
          <ChampionLulu></ChampionLulu>
        </ChampionRow>

        <ChampionRow>
          <ChampionLux></ChampionLux>
          <ChampionMaokai></ChampionMaokai>
          <ChampionMorganna></ChampionMorganna>
          <ChampionNami></ChampionNami>
          <ChampionNidalee></ChampionNidalee>
          <ChampionNunu></ChampionNunu>
        </ChampionRow>

        <ChampionRow>
          <ChampionPyke></ChampionPyke>
          <ChampionRiven></ChampionRiven>
          <ChampionSejuani></ChampionSejuani>
          <ChampionSett></ChampionSett>
          <ChampionShen></ChampionShen>
          <ChampionSylas></ChampionSylas>
        </ChampionRow>

        <ChampionRow>
          <ChampionTahmKench></ChampionTahmKench>
          <ChampionTalon></ChampionTalon>
          <ChampionTeemo></ChampionTeemo>
          <ChampionThresh></ChampionThresh>
          <ChampionTwistedFate></ChampionTwistedFate>
          <ChampionVayne></ChampionVayne>
        </ChampionRow>

        <ChampionRow>
          <ChampionVeigar></ChampionVeigar>
          <ChampionVi></ChampionVi>
          <ChampionWarwick></ChampionWarwick>
          <ChampionWukong></ChampionWukong>
          <ChampionXinZhao></ChampionXinZhao>
          <ChampionYasuo></ChampionYasuo>
        </ChampionRow>

        <ChampionRow>
          <ChampionYone></ChampionYone>
          <ChampionYuumi></ChampionYuumi>
          <ChampionZed></ChampionZed>
          <ChampionZilean></ChampionZilean>
        </ChampionRow>
      </div>
    )
  }
}

export default Champions;



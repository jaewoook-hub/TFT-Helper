import React from 'react';
import { BuildContainer } from '../Styled/ItemBuild.js';

function ItemBuild(props) {
  if(props.item === "B.F. Sword") {
    return <BuildContainer>
              <div>{props.item}</div>
              <div>B.F. Sword + B.F. Sword = Deathblade</div>
              <div>B.F. Sword + Chain Vest = Guardian Angel</div>
              <div>B.F. Sword + Giant's Belt = Zeke's Herald</div>
            </BuildContainer>
  } else if(props.item === "Spatula") {
    return <BuildContainer>
              <div>{props.item}</div>
              <div>Spatula + B.F. Sword = Sword of the Divine</div>
              <div>Spatula + Chain Vest = Vanguard's Cuirass</div>
              <div>Spatula + Giant's Belt = Warlord's Banner</div>
            </BuildContainer>
  } else if(props.item === "Recurve Bow") {
    return <BuildContainer>
              <div>{props.item}</div>
              <div>Recurve Bow + B.F. Sword = Giant Slayer</div>
              <div>Recurve Bow + Chain Vest = Titan's Resolve</div>
              <div>Recurve Bow + Giant's Belt = Zz'Rot Portal</div>
            </BuildContainer>
  } else {
    return <BuildContainer>Select an Item</BuildContainer>
  }
}


export default ItemBuild;
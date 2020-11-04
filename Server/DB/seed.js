const mongoose = require('mongoose');
const db = require('./index.js');
const Schemas = require('./Schemas.js');

const setFourChampions = [
  {
    "name": "Aatrox",
    "champion_id": "TFT4_Aatrox",
    "cost": 4,
    "traits": [
      "Cultist",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Ahri",
    "champion_id": "TFT4_Ahri",
    "cost": 4,
    "traits": [
      "Set4_Spirit",
      "Set4_Mage"
    ]
  },
  {
    "name": "Akali",
    "champion_id": "TFT4_Akali",
    "cost": 3,
    "traits": [
      "Set4_Ninja",
      "Set4_Assassin"
    ]
  },
  {
    "name": "Annie",
    "champion_id": "TFT4_Annie",
    "cost": 2,
    "traits": [
      "Fortune",
      "Set4_Mage"
    ]
  },
  {
    "name": "Aphelios",
    "champion_id": "TFT4_Aphelios",
    "cost": 2,
    "traits": [
      "Moonlight",
      "Hunter"
    ]
  },
  {
    "name": "Ashe",
    "champion_id": "TFT4_Ashe",
    "cost": 4,
    "traits": [
      "Set4_Elderwood",
      "Hunter"
    ]
  },
  {
    "name": "Azir",
    "champion_id": "TFT4_Azir",
    "cost": 5,
    "traits": [
      "Warlord",
      "Keeper",
      "Emperor"
    ]
  },
  {
    "name": "Cassiopeia",
    "champion_id": "TFT4_Cassiopeia",
    "cost": 4,
    "traits": [
      "Dusk",
      "Set4_Mystic"
    ]
  },
  {
    "name": "Diana",
    "champion_id": "TFT4_Diana",
    "cost": 1,
    "traits": [
      "Moonlight",
      "Set4_Assassin"
    ]
  },
  {
    "name": "Elise",
    "champion_id": "TFT4_Elise",
    "cost": 1,
    "traits": [
      "Cultist",
      "Keeper"
    ]
  },
  {
    "name": "Evelynn",
    "champion_id": "TFT4_Evelynn",
    "cost": 3,
    "traits": [
      "Cultist",
      "Set4_Shade"
    ]
  },
  {
    "name": "Ezreal",
    "champion_id": "TFT4_Ezreal",
    "cost": 5,
    "traits": [
      "Set4_Elderwood",
      "Set4_Dazzler"
    ]
  },
  {
    "name": "Fiora",
    "champion_id": "TFT4_Fiora",
    "cost": 1,
    "traits": [
      "Set4_Enlightened",
      "Duelist"
    ]
  },
  {
    "name": "Garen",
    "champion_id": "TFT4_Garen",
    "cost": 1,
    "traits": [
      "Warlord",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Hecarim",
    "champion_id": "TFT4_Hecarim",
    "cost": 2,
    "traits": [
      "Set4_Elderwood",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Irelia",
    "champion_id": "TFT4_Irelia",
    "cost": 3,
    "traits": [
      "Set4_Enlightened",
      "Divine",
      "Set4_Adept"
    ]
  },
  {
    "name": "Janna",
    "champion_id": "TFT4_Janna",
    "cost": 2,
    "traits": [
      "Set4_Enlightened",
      "Set4_Mystic"
    ]
  },
  {
    "name": "Jarvan IV",
    "champion_id": "TFT4_JarvanIV",
    "cost": 2,
    "traits": [
      "Warlord",
      "Keeper"
    ]
  },
  {
    "name": "Jax",
    "champion_id": "TFT4_Jax",
    "cost": 2,
    "traits": [
      "Divine",
      "Duelist"
    ]
  },
  {
    "name": "Jhin",
    "champion_id": "TFT4_Jhin",
    "cost": 4,
    "traits": [
      "Cultist",
      "Sharpshooter"
    ]
  },
  {
    "name": "Jinx",
    "champion_id": "TFT4_Jinx",
    "cost": 3,
    "traits": [
      "Fortune",
      "Sharpshooter"
    ]
  },
  {
    "name": "Kalista",
    "champion_id": "TFT4_Kalista",
    "cost": 3,
    "traits": [
      "Cultist",
      "Duelist"
    ]
  },
  {
    "name": "Katarina",
    "champion_id": "TFT4_Katarina",
    "cost": 3,
    "traits": [
      "Warlord",
      "Fortune",
      "Set4_Assassin"
    ]
  },
  {
    "name": "Kayn",
    "champion_id": "TFT4_Kayn",
    "cost": 5,
    "traits": [
      "Set4_Tormented",
      "Set4_Shade"
    ]
  },
  {
    "name": "Kennen",
    "champion_id": "TFT4_Kennen",
    "cost": 3,
    "traits": [
      "Set4_Ninja",
      "Keeper"
    ]
  },
  {
    "name": "Kindred",
    "champion_id": "TFT4_Kindred",
    "cost": 3,
    "traits": [
      "Set4_Spirit",
      "Hunter"
    ]
  },
  {
    "name": "Lee Sin",
    "champion_id": "TFT4_LeeSin",
    "cost": 5,
    "traits": [
      "Divine",
      "Duelist"
    ]
  },
  {
    "name": "Lillia",
    "champion_id": "TFT4_Lillia",
    "cost": 5,
    "traits": [
      "Dusk",
      "Set4_Mage"
    ]
  },
  {
    "name": "Lissandra",
    "champion_id": "TFT4_Lissandra",
    "cost": 1,
    "traits": [
      "Moonlight",
      "Set4_Dazzler"
    ]
  },
  {
    "name": "Lulu",
    "champion_id": "TFT4_Lulu",
    "cost": 2,
    "traits": [
      "Set4_Elderwood",
      "Set4_Mage"
    ]
  },
  {
    "name": "Lux",
    "champion_id": "TFT4_Lux",
    "cost": 3,
    "traits": [
      "Divine",
      "Set4_Dazzler"
    ]
  },
  {
    "name": "Maokai",
    "champion_id": "TFT4_Maokai",
    "cost": 1,
    "traits": [
      "Set4_Elderwood",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Morgana",
    "champion_id": "TFT4_Morgana",
    "cost": 4,
    "traits": [
      "Set4_Enlightened",
      "Set4_Dazzler"
    ]
  },
  {
    "name": "Nami",
    "champion_id": "TFT4_Nami",
    "cost": 1,
    "traits": [
      "Set4_Enlightened",
      "Set4_Mage"
    ]
  },
  {
    "name": "N_idalee",
    "champion_id": "TFT4_N_idalee",
    "cost": 1,
    "traits": [
      "Warlord",
      "Sharpshooter"
    ]
  },
  {
    "name": "Nunu & Willump",
    "champion_id": "TFT4_Nunu",
    "cost": 3,
    "traits": [
      "Set4_Elderwood",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Pyke",
    "champion_id": "TFT4_Pyke",
    "cost": 2,
    "traits": [
      "Cultist",
      "Set4_Assassin"
    ]
  },
  {
    "name": "Riven",
    "champion_id": "TFT4_Riven",
    "cost": 4,
    "traits": [
      "Dusk",
      "Keeper"
    ]
  },
  {
    "name": "Sejuani",
    "champion_id": "TFT4_Sejuani",
    "cost": 4,
    "traits": [
      "Fortune",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Sett",
    "champion_id": "TFT4_Sett",
    "cost": 5,
    "traits": [
      "Boss",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Shen",
    "champion_id": "TFT4_Shen",
    "cost": 4,
    "traits": [
      "Set4_Ninja",
      "Set4_Adept",
      "Set4_Mystic"
    ]
  },
  {
    "name": "Sylas",
    "champion_id": "TFT4_Sylas",
    "cost": 1,
    "traits": [
      "Moonlight",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Tahm Kench",
    "champion_id": "TFT4_TahmKench",
    "cost": 1,
    "traits": [
      "Fortune",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Talon",
    "champion_id": "TFT4_Talon",
    "cost": 4,
    "traits": [
      "Set4_Enlightened",
      "Set4_Assassin"
    ]
  },
  {
    "name": "Teemo",
    "champion_id": "TFT4_Teemo",
    "cost": 2,
    "traits": [
      "Set4_Spirit",
      "Sharpshooter"
    ]
  },
  {
    "name": "Thresh",
    "champion_id": "TFT4_Thresh",
    "cost": 2,
    "traits": [
      "Dusk",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Twisted Fate",
    "champion_id": "TFT4_TwistedFate",
    "cost": 1,
    "traits": [
      "Cultist",
      "Set4_Mage"
    ]
  },
  {
    "name": "Vayne",
    "champion_id": "TFT4_Vayne",
    "cost": 1,
    "traits": [
      "Dusk",
      "Sharpshooter"
    ]
  },
  {
    "name": "Veigar",
    "champion_id": "TFT4_Veigar",
    "cost": 3,
    "traits": [
      "Set4_Elderwood",
      "Set4_Mage"
    ]
  },
  {
    "name": "Vi",
    "champion_id": "TFT4_Vi",
    "cost": 2,
    "traits": [
      "Warlord",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Warwick",
    "champion_id": "TFT4_Warwick",
    "cost": 4,
    "traits": [
      "Divine",
      "Hunter",
      "Set4_Brawler"
    ]
  },
  {
    "name": "Wukong",
    "champion_id": "TFT4_Wukong",
    "cost": 1,
    "traits": [
      "Divine",
      "Set4_Vanguard"
    ]
  },
  {
    "name": "Xin Zhao",
    "champion_id": "TFT4_XinZhao",
    "cost": 3,
    "traits": [
      "Warlord",
      "Duelist"
    ]
  },
  {
    "name": "Yasuo",
    "champion_id": "TFT4_Yasuo",
    "cost": 1,
    "traits": [
      "Set4_Exile",
      "Duelist"
    ]
  },
  {
    "name": "Yone",
    "champion_id": "TFT4_Yone",
    "cost": 5,
    "traits": [
      "Set4_Exile",
      "Set4_Adept"
    ]
  },
  {
    "name": "Yuumi",
    "champion_id": "TFT4_Yuumi",
    "cost": 3,
    "traits": [
      "Set4_Spirit",
      "Set4_Mystic"
    ]
  },
  {
    "name": "Zed",
    "champion_id": "TFT4_Zed",
    "cost": 2,
    "traits": [
      "Set4_Ninja",
      "Set4_Shade"
    ]
  },
  {
    "name": "Zilean",
    "champion_id": "TFT4_Zilean",
    "cost": 5,
    "traits": [
      "Cultist",
      "Set4_Mystic"
    ]
  }
];

const setFourItems = [
  {
    "_id": 1,
    "name": "B.F. Sword",
    "description": "Gain Attack Damage."
  },
  {
    "_id": 2,
    "name": "Recurve Bow",
    "description": "Gain Attack Speed."
  },
  {
    "_id": 3,
    "name": "Needlessly Large Rod",
    "description": "Gain Spell Power."
  },
  {
    "_id": 4,
    "name": "Tear of the Goddess",
    "description": "Gain Mana."
  },
  {
    "_id": 5,
    "name": "Chain Vest",
    "description": "Gain Armor."
  },
  {
    "_id": 6,
    "name": "Negatron Cloak",
    "description": "Gain Magic Resist."
  },
  {
    "_id": 7,
    "name": "Giant's Belt",
    "description": "Gain Health."
  },
  {
    "_id": 8,
    "name": "Spatula",
    "description": "It must do something..."
  },
  {
    "_id": 9,
    "name": "Sparring Gloves",
    "description": "Gain Critical Strike Chance and Dodge Chance."
  },
  {
    "_id": 11,
    "name": "Deathblade",
    "description": "Contributing to a kill grants the holder addtional Attack Damage for the rest of combat."
  },
  {
    "_id": 12,
    "name": "Giant Slayer",
    "description": "The holder's spells and basic attacks do bonus damage. If the target has more health, the bonus damage increases."
  },
  {
    "_id": 13,
    "name": "Hextech Gunblade",
    "description": "The holder's spells heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder."
  },
  {
    "_id": 14,
    "name": "Spear of Shojin",
    "description": "The holder's basic attacks restore Mana on-hit."
  },
  {
    "_id": 15,
    "name": "Guardian Angel",
    "description": "Prevents the wearer's first death, reviving them after a short delay and sheding all negative effects."
  },
  {
    "_id": 16,
    "name": "Bloodthirster",
    "description": "Basic attacks heal the holder for a percentage of the damage dealt."
  },
  {
    "_id": 17,
    "name": "Zeke's Herald",
    "description": "When combat begins, the wearer and nearby allies in the same row gain Attack Speed for the rest of combat."
  },
  {
    "_id": 18,
    "name": "Sword of the Divine",
    "description": "The holder gains the Divine trait."
  },
  {
    "_id": 19,
    "name": "Infinity Edge",
    "description": "Grants Critical Strike Chance. Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage."
  },
  {
    "_id": 22,
    "name": "Rap_id Firecannon",
    "description": "The holder gains Attack Range, and their Basic Attacks can't miss."
  },
  {
    "_id": 23,
    "name": "Guinsoo's Rageblade",
    "description": "Basic Attacks grant bonus Attack Speed for the rest of combat."
  },
  {
    "_id": 24,
    "name": "Statikk Shiv",
    "description": "Every third Basic Attack from the wearer deals Magic Damage to nearby enemies, and true damage if they are shielded or crowd-controlled."
  },
  {
    "_id": 25,
    "name": "Titan's Resolve",
    "description": "When the wearer takes damage or inflicts a critical hit, they gain a stacking damage bonus. The damage stacks up to a limit, at which point the wearer gains Armor and Magic Resistance, and increases in size."
  },
  {
    "_id": 26,
    "name": "Runaan's Hurricane",
    "description": "Basic Attacks fire a bolt at another nearby enemy, dealing a percentage of the wearer's Attack Damage and applying on-hit effects. These bolts can critical strike."
  },
  {
    "_id": 27,
    "name": "Zz'Rot Portal",
    "description": "When the wearer dies, a Construct arises to continue the fight."
  },
  {
    "_id": 28,
    "name": "Duelist's Zeal",
    "description": "The holder gains the Duelist trait."
  },
  {
    "_id": 29,
    "name": "Last Whisper",
    "description": "When the wearer inflicts a critical hit, the target's Armor is reduced for a number of seconds."
  },
  {
    "_id": 33,
    "name": "Rabadon's Deathcap",
    "description": "The holder gains additional Spell Power."
  },
  {
    "_id": 34,
    "name": "Luden's Echo",
    "description": "When the holder casts their spell, the first target dealt magic damage and to nearby enemies are dealt additional magic damage."
  },
  {
    "_id": 35,
    "name": "Locket of the Iron Solari",
    "description": "When combat begins, the wearer and nearby allies in the same row gain a shield that blocks damage for several seconds."
  },
  {
    "_id": 36,
    "name": "Ionic Spark",
    "description": "Nearby enemies have their Magic Resist reduced. When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana."
  },
  {
    "_id": 37,
    "name": "Morellonomicon",
    "description": "When the holder deals damage with their spell, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing by a percentage for the duration of the burn."
  },
  {
    "_id": 38,
    "name": "Aspect of Dusk",
    "description": "The holder gains the Dusk trait."
  },
  {
    "_id": 39,
    "name": "Jeweled Gauntlet",
    "description": "The holder's spells can cause critical hits, and the holder gains bonus Critical Strike Damage."
  },
  {
    "_id": 44,
    "name": "Blue Buff",
    "description": "After casting their spell, the wearer gains Mana."
  },
  {
    "_id": 45,
    "name": "Frozen Heart",
    "description": "Reduces the Attack Speed of nearby enemies. Each Frozen Heart a champion carries beyond the first increases the radius of this effect."
  },
  {
    "_id": 46,
    "name": "Chalice of Power",
    "description": "When combat begins, the wearer and all nearby allies in the same row gain Spell Power for the rest of combat."
  },
  {
    "_id": 47,
    "name": "Redemption",
    "description": "When the wearer dies, allies are healed."
  },
  {
    "_id": 48,
    "name": "Mage's Hat",
    "description": "The holder gains the Mage trait."
  },
  {
    "_id": 49,
    "name": "Hand Of Justice",
    "description": "At the beginning of each planning phase, the wearer's basic attacks and spells deal additional damage or heal for a percentage of damage dealt."
  },
  {
    "_id": 55,
    "name": "Bramble Vest",
    "description": "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies."
  },
  {
    "_id": 56,
    "name": "Gargoyle Stoneplate",
    "description": "The holder gains Armor and Magic Resist for each enemy targeting them."
  },
  {
    "_id": 57,
    "name": "Sunfire Cape",
    "description": "At start of combat, and every couple seconds thereafter, a random nearby enemyis burned for a percentage of their maximum health. Any healing they receive is reduced."
  },
  {
    "_id": 58,
    "name": "Vanguard's Cuirass",
    "description": "The holder gains the Vanguard trait."
  },
  {
    "_id": 59,
    "name": "Shroud of Stillness",
    "description": "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast."
  },
  {
    "_id": 66,
    "name": "Dragon's Claw",
    "description": "Reduces incoming magic damage."
  },
  {
    "_id": 67,
    "name": "Zephyr",
    "description": "When combat begins, the wearer summons a whirlwind on the opposite s_ide of the arena that removes the closest enemy from combat for several seconds."
  },
  {
    "_id": 68,
    "name": "Elderwood Sprout",
    "description": "The holder gains the Elderwood trait."
  },
  {
    "_id": 69,
    "name": "Quicksilver",
    "description": "The wearer is immune to crowd control for the first several seconds of combat."
  },
  {
    "_id": 77,
    "name": "Warmog's Armor",
    "description": "Grants bonus Health."
  },
  {
    "_id": 78,
    "name": "Warlord's Banner",
    "description": "The wearer gains the Warlord trait."
  },
  {
    "_id": 79,
    "name": "Trap Claw",
    "description": "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for several seconds."
  },
  {
    "_id": 88,
    "name": "Force of Nature",
    "description": ""
  },
  {
    "_id": 89,
    "name": "Youmuu's Ghostblade",
    "description": "The wearer gains the Assassin trait."
  },
  {
    "_id": 99,
    "name": "Thief's Gloves",
    "description": "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level."
  }
];

const insertChampions = function() {
  Schemas.Champions.create(setFourChampions)
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err))
};

insertChampions();

const insertItems = function() {
  Schemas.Items.create(setFourItems)
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err))
};

insertItems();

// const removeChampions = function() {
//   Schemas.Champions.remove({})
//   .then(() => mongoose.disconnect())
//   .catch(err => console.log(err))
// };

// removeChampions();

// const removeItems = function() {
//   Schemas.Items.remove({})
//   .then(() => mongoose.disconnect())
//   .catch(err => console.log(err))
// };

// removeItems();
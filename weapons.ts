import type { Weapon } from '@/types';

export const bluntWeapons: Weapon[] = [
  { id: 'greatsword', name: 'Greatsword', damage: '9 Blunt', gradeReq: 'None', swingDelay: 0.78, range: '9, 7, 10', category: 'blunt' },
  { id: 'flaming_bat', name: 'Flaming Bat', damage: '7 Blunt', gradeReq: 'None', swingDelay: 0.62, range: '8, 6, 8', category: 'blunt' },
  { id: 'steam_gauntlet', name: 'Steam Gauntlet', damage: '7 Blunt', gradeReq: '1', swingDelay: 0.67, range: '7, 4, 7.5', category: 'blunt' },
  { id: 'scrap_bat', name: 'Scrap Bat', damage: '7 Blunt', gradeReq: 'None', swingDelay: 0.63, range: '11, 6, 10', category: 'blunt' },
  { id: 'brawler', name: 'Brawler', damage: '6.5 Blunt', gradeReq: '8', swingDelay: 0.60, range: '7.5, 4, 7.5', category: 'blunt' },
  { id: 'brutish_brawler', name: 'Brutish Brawler', damage: '7 Blunt', gradeReq: '1', swingDelay: 0.67, range: '7.5, 4, 7.5', category: 'blunt' },
  { id: 'beak_bat', name: 'Beak Bat', damage: '6 Blunt', gradeReq: 'None', swingDelay: 0.63, range: '11, 6, 10', category: 'blunt' },
  { id: 'rosespanner_hammer', name: 'Rosespanner Hammer', damage: '9 Blunt', gradeReq: '7', swingDelay: 0.72, range: '11, 8, 10', category: 'blunt' },
  { id: 'hardblood_gauntlets', name: 'Hardblood Gauntlets', damage: '5.5 Blunt', gradeReq: '0', swingDelay: 0.64, range: '7.5, 6, 7', category: 'blunt' },
  { id: 'hardblood_staff', name: 'Hardblood Staff', damage: '6 Blunt', gradeReq: '5', swingDelay: 0.63, range: '9.5, 6, 8.5', category: 'blunt' },
  { id: 'multicrack_charged_blades', name: 'Multicrack Charged Blades', damage: '10 Blunt', gradeReq: '6', swingDelay: 0.79, range: '11, 5, 11', category: 'blunt' },
  { id: 'dieci_kata', name: 'Dieci Association Kata', damage: '6 Blunt', gradeReq: '6', swingDelay: 0.62, range: '7.5, 4, 7', category: 'blunt' },
  { id: 'chains_loyalty', name: 'Chains of Loyalty', damage: '6 Blunt', gradeReq: '6', swingDelay: 0.60, range: '8.5, 4, 7.5', category: 'blunt' },
  { id: 'rosespanner_crusher', name: 'Rosespanner Crusher', damage: '8 Blunt', gradeReq: '5', swingDelay: 0.75, range: '11, 8, 10.5', category: 'blunt' },
  { id: 'n_corp_hammer', name: 'N Corp. Inquisitor Hammer', damage: '10 Blunt', gradeReq: '5', swingDelay: 0.75, range: '12, 8, 10', category: 'blunt' },
  { id: 'r_corp_hammer', name: 'R Corp. Hammer', damage: '10 Blunt', gradeReq: '5', swingDelay: 0.85, range: '15, 7, 11', category: 'blunt' },
  { id: 'smoke_staff', name: 'Smoke Staff', damage: '6 Blunt', gradeReq: '5', swingDelay: 0.65, range: '11, 6, 9.5', category: 'blunt' },
  { id: 'r_corp_staff', name: 'R Corp. Staff', damage: '8 Blunt', gradeReq: '5', swingDelay: 0.7, range: '11, 6, 12', category: 'blunt' },
  { id: 'dieci_key', name: 'Dieci Association Key', damage: '6 Blunt', gradeReq: '4', swingDelay: 0.65, range: '11, 6, 7.5', category: 'blunt' },
  { id: 'warp_gauntlets', name: 'WARP Corp. Gauntlets', damage: '6.5 Blunt', gradeReq: '3', swingDelay: 0.61, range: '7.5, 4, 8', category: 'blunt' },
  { id: 'knuckles_discipline', name: 'Knuckles of Discipline', damage: '6 Blunt', gradeReq: '3', swingDelay: 0.55, range: '7.5, 4, 7.5', category: 'blunt' },
  { id: 'dragons_bite', name: "Dragon's Bite", damage: '6 Blunt', gradeReq: '1', swingDelay: 0.6, range: '7.5, 4, 7.5', category: 'blunt' },
  { id: 'zelkova_workshop', name: 'Zelkova Workshop', damage: '8 Blunt', gradeReq: '1', swingDelay: 0.75, range: '9, 6, 9', category: 'blunt' },
  { id: 'old_boys_workshop', name: 'Old Boys Workshop', damage: '8 Blunt', gradeReq: '1', swingDelay: 0.62, range: '9.5, 6, 8', category: 'blunt' },
  { id: 'wheels_industry', name: "Wheel's Industry", damage: '10 Blunt (Sword) / 6 Blunt (Fist)', gradeReq: '1', swingDelay: 0.80, range: '12, 5, 12 (Sword) / 7.5, 4, 7.5 (Fist)', category: 'blunt' },
  { id: 'lheure_du_loup', name: "L'Heure du Loup", damage: '6 Blunt', gradeReq: '1', swingDelay: 0.55, range: '7.5, 4, 7.5', category: 'blunt' },
  { id: 'crying_children', name: 'The Crying Children', damage: '6 Blunt', gradeReq: '1', swingDelay: 0.65, range: '10, 6, 10', category: 'blunt' },
  { id: 'leaflet_steamgun', name: 'Leaflet Workshop Steamgun', damage: '7 Blunt', gradeReq: '3', swingDelay: 0.65, range: '9, 7, 11.5', category: 'blunt' },
  { id: 'stigma_gauntlets', name: 'Stigma Workshop Gauntlets', damage: '6 Blunt', gradeReq: '3', swingDelay: 0.58, range: '7.5, 4, 8', category: 'blunt' },
  { id: 'zwei_greatsword', name: 'Zwei Association Greatsword', damage: '7 Blunt', gradeReq: '4', swingDelay: 0.71, range: '12, 6, 10', category: 'blunt' },
  { id: 'n_corp_mittelhammer', name: 'N Corp. Mittelhammer Hammer', damage: '9 Blunt', gradeReq: '6', swingDelay: 0.73, range: '12, 8, 10', category: 'blunt' },
  { id: 'worn_sledgehammer', name: 'Worn Sledgehammer', damage: '7 Blunt', gradeReq: 'None', swingDelay: 0.75, range: '12, 7, 10', category: 'blunt' },
  { id: 'hell_and_heaven', name: 'Hell and Heaven', damage: '7 Blunt', gradeReq: '1', swingDelay: 0.65, range: '3, 3, 14', category: 'blunt' },
  { id: 'piston_gauntlets', name: 'Piston Gauntlets', damage: '6 Blunt', gradeReq: '3', swingDelay: 0.59, range: '9, 6, 9', category: 'blunt' },
  { id: 'blue_star_orb', name: 'Blue Star Orb', damage: '5 Blunt', gradeReq: '3', swingDelay: 0.65, range: '10, 6, 9', category: 'blunt' },
  { id: 'smile_hammer', name: 'Smile Hammer', damage: '8 Blunt', gradeReq: '3', swingDelay: 0.70, range: '9.5, 6, 11', category: 'blunt' },
  { id: 'smiling_mass', name: 'Smiling Mass', damage: '9 Blunt', gradeReq: '4', swingDelay: 0.75, range: '11, 9, 10', category: 'blunt' },
  { id: 'solemn_lament_pistols', name: 'Solemn Lament Pistols', damage: '6 Blunt', gradeReq: '3', swingDelay: 0.65, range: '3, 3, 16', category: 'blunt' },
  { id: 'blind_obsession_anchor', name: 'Blind Obsession Anchor', damage: '9 Blunt', gradeReq: '1', swingDelay: 0.72, range: '12, 7, 12', category: 'blunt' },
  { id: 'regret_hammer', name: 'Regret Hammer', damage: '7 Blunt', gradeReq: '3', swingDelay: 0.69, range: '11, 8, 12', category: 'blunt' },
  { id: 'furnace_hammer', name: 'Furnace Workshop Hammer', damage: '9 Blunt', gradeReq: '4', swingDelay: 0.78, range: '9, 7, 10', category: 'blunt' }
];

export const slashWeapons: Weapon[] = [
  { id: 'advanced_zweihander', name: 'Advanced Zweihander', damage: '9 Slash', gradeReq: '5', swingDelay: 0.75, range: '9.5, 6, 11', category: 'slash' },
  { id: 'butlers_briefcase', name: "Butler's Briefcase", damage: '5 Slash', gradeReq: '4', swingDelay: 0.55, range: '7, 6, 7', category: 'slash' },
  { id: 'blade_lineage_katana', name: 'Blade Lineage Katana', damage: '7 Slash', gradeReq: '5', swingDelay: 0.63, range: '10, 6, 9', category: 'slash' },
  { id: 'bloodfiend_claws', name: 'Bloodfiend Claws', damage: '6 Slash', gradeReq: 'None', swingDelay: 0.65, range: '7.5, 6, 7', category: 'slash' },
  { id: 'blade_lineage_chokuto', name: 'Blade Lineage Chokuto', damage: '9 Slash', gradeReq: '1', swingDelay: 0.69, range: '11, 6, 9', category: 'slash' },
  { id: 'backstreet_chef_knife', name: "Backstreet Chef's Knife", damage: '6 Slash', gradeReq: 'None', swingDelay: 0.57, range: '7, 6, 7', category: 'slash' },
  { id: 'crystal_atelier', name: 'Crystal Atelier', damage: '7 Slash', gradeReq: '1', swingDelay: 0.63, range: '13, 6, 9.5', category: 'slash' },
  { id: 'dagger', name: 'Dagger', damage: '6 Slash', gradeReq: 'None', swingDelay: 0.57, range: '7, 6, 7', category: 'slash' },
  { id: 'durandal', name: 'Durandal', damage: '7 Slash', gradeReq: '1', swingDelay: 0.65, range: '12.5, 6, 9.5', category: 'slash' },
  { id: 'fixer_shortsword', name: "Fixer's Shortsword", damage: '5.5 Slash', gradeReq: 'None', swingDelay: 0.55, range: '10, 6, 9', category: 'slash' },
  { id: 'fixer_battleaxe', name: "Fixer's Battleaxe", damage: '8 Slash', gradeReq: 'None', swingDelay: 0.75, range: '12, 7, 10', category: 'slash' },
  { id: 'fixer_blade', name: "Fixer's Blade", damage: '6 Slash', gradeReq: 'None', swingDelay: 0.64, range: '9, 6, 9.5', category: 'slash' },
  { id: 'fused_blade', name: 'Fused Blade of Ruined Mirror Worlds', damage: '10 Slash', gradeReq: '1', swingDelay: 0.79, range: '13, 7, 11', category: 'slash' },
  { id: 'family_heir_sabre', name: "Family Heir's Sabre", damage: '6 Slash', gradeReq: '4', swingDelay: 0.63, range: '11, 4, 10', category: 'slash' },
  { id: 'hardblood_blade', name: 'Hardblood Blade', damage: '7 Slash', gradeReq: '0', swingDelay: 0.62, range: '9, 6, 9', category: 'slash' },
  { id: 'hardblood_greatblade', name: 'Hardblood Greatblade', damage: '9 Slash', gradeReq: 'Generation 1', swingDelay: 0.73, range: '10.5, 7, 10.5', category: 'slash' },
  { id: 'hardblood_claws', name: 'Hardblood Claws', damage: '6 Slash', gradeReq: '0', swingDelay: 0.65, range: '7.5, 6, 7', category: 'slash' },
  { id: 'hardblood_scissorblades', name: 'Hardblood Scissorblades', damage: '7 Slash', gradeReq: '5', swingDelay: 0.67, range: '8, 6, 11', category: 'slash' },
  { id: 'great_hardblood_scissorblades', name: 'Great Hardblood Scissorblades', damage: '9 Slash', gradeReq: 'Generation 2', swingDelay: 0.67, range: '10, 6, 13', category: 'slash' },
  { id: 'hardblood_polearm', name: 'Hardblood Polearm', damage: '7 Slash', gradeReq: '4', swingDelay: 0.67, range: '10, 6, 9.5', category: 'slash' },
  { id: 'hardblood_whip', name: 'Hardblood Whip', damage: '4 Slash', gradeReq: 'Generation 2', swingDelay: 0.65, range: '14, 6, 14', category: 'slash' },
  { id: 'index_greatsword', name: 'Index Greatsword', damage: '9 Slash', gradeReq: '4', swingDelay: 0.73, range: '11, 10.5, 10.5', category: 'slash' },
  { id: 'index_cleaver', name: 'Index Cleaver', damage: '8 Slash', gradeReq: '4', swingDelay: 0.73, range: '9, 7, 10', category: 'slash' },
  { id: 'kurokumo_katana', name: 'Kurokumo Katana', damage: '7.5 Slash', gradeReq: '6', swingDelay: 0.63, range: '9.5, 6, 9.5', category: 'slash' },
  { id: 'kurokumo_gilded', name: 'Kurokumo Gilded Katana', damage: '7 Slash', gradeReq: '6', swingDelay: 0.64, range: '9.5, 6, 9.5', category: 'slash' },
  { id: 'mimicry_blade', name: 'Mimicry Blade', damage: '7 Slash', gradeReq: '1', swingDelay: 0.64, range: '10.5, 6, 9.5', category: 'slash' },
  { id: 'mook_workshop', name: 'Mook Workshop', damage: '7 Slash', gradeReq: '1', swingDelay: 0.65, range: '11, 6, 9', category: 'slash' },
  { id: 'reverberation_scythe', name: 'Reverberation Scythe', damage: '8 Slash', gradeReq: '1', swingDelay: 0.68, range: '11, 6, 9', category: 'slash' },
  { id: 'r_corp_sabre', name: 'R Corp. Sabre', damage: '7 Slash', gradeReq: '5', swingDelay: 0.65, range: '10.5, 6, 9.5', category: 'slash' },
  { id: 'sharp_greatsword', name: 'Sharp Greatsword', damage: '9 Slash', gradeReq: 'None', swingDelay: 0.78, range: '9, 7, 12', category: 'slash' },
  { id: 'sweeper_hooks', name: 'Sweeper Hooks', damage: '6 Slash', gradeReq: 'None', swingDelay: 0.59, range: '8, 6, 8', category: 'slash' },
  { id: 'seven_longsword', name: 'Seven Association Longsword', damage: '6 Slash', gradeReq: '7', swingDelay: 0.63, range: '11, 6, 9.5', category: 'slash' },
  { id: 'stigma_sword', name: 'Stigma Workshop Sword', damage: '7 Slash', gradeReq: '4', swingDelay: 0.61, range: '11, 6, 9', category: 'slash' },
  { id: 'shi_katana', name: 'Shi Association Katana', damage: '7 Slash', gradeReq: '4', swingDelay: 0.6, range: '9, 6, 9', category: 'slash' },
  { id: 'tanglecleaver', name: 'Tanglecleaver', damage: '7 Slash', gradeReq: '1', swingDelay: 0.67, range: '9, 7, 10', category: 'slash' },
  { id: 'twinhook', name: 'Twinhook', damage: '5 Slash', gradeReq: '7', swingDelay: 0.58, range: '8.5, 6, 8.5', category: 'slash' },
  { id: 'timetrack_pickaxe', name: 'TIMETRACK Corp. Collection Pickaxe', damage: '8 Slash', gradeReq: '5', swingDelay: 0.70, range: '12.5, 7, 12', category: 'slash' },
  { id: 'udjat_khopesh', name: 'Udjat Khopesh', damage: '6.5 Slash', gradeReq: '4', swingDelay: 0.61, range: '11, 6, 10', category: 'slash' },
  { id: 'warp_machetes', name: 'WARP Corp. Machetes', damage: '6 Slash', gradeReq: '3', swingDelay: 0.59, range: '9, 7, 8', category: 'slash' },
  { id: 'warp_odachi', name: 'WARP Corp. Odachi', damage: '7 Slash', gradeReq: '3', swingDelay: 0.63, range: '12, 7, 9', category: 'slash' },
  { id: 'zweihander', name: 'Zweihander', damage: '8 Slash', gradeReq: '6', swingDelay: 0.75, range: '8, 6, 10.5', category: 'slash' },
  { id: 'index_longsword', name: 'Index Longsword', damage: '7 Slash', gradeReq: '1', swingDelay: 0.65, range: '11, 6, 9', category: 'slash' },
  { id: 'scythe_mimicry', name: 'Scythe of Mimicry', damage: '8 Slash', gradeReq: '3', swingDelay: 0.68, range: '13, 4, 12', category: 'slash' },
  { id: 'farmwatch_scythe', name: 'Farmwatch Scythe', damage: '8 Slash', gradeReq: '3', swingDelay: 0.75, range: '13, 4, 12', category: 'slash' },
  { id: 'fourth_match_blade', name: '4th Match Blade', damage: '7 Slash', gradeReq: '3', swingDelay: 0.62, range: '9.5, 6, 10', category: 'slash' },
  { id: 'ebony_stem_cutlass', name: 'Ebony Stem Cutlass', damage: '6 Slash', gradeReq: '3', swingDelay: 0.64, range: '11, 6, 9.5', category: 'slash' },
  { id: 'flaring_brand', name: 'Flaring Brand', damage: '6 Slash', gradeReq: '3', swingDelay: 0.63, range: '10, 6, 8', category: 'slash' },
  { id: 'nine_children_guan_dao', name: 'Nine Children of the Dragon Guan Dao', damage: '9 Slash', gradeReq: '3', swingDelay: 0.70, range: '13, 6, 12', category: 'slash' },
  { id: 'red_eyes_blade', name: 'Red Eyes Blade', damage: '6 Slash', gradeReq: '3', swingDelay: 0.63, range: '12, 7, 9', category: 'slash' },
  { id: 'sanguine_desire_axe', name: 'Sanguine Desire Axe', damage: '8 Slash', gradeReq: '3', swingDelay: 0.70, range: '11, 6, 10', category: 'slash' }
];

export const pierceWeapons: Weapon[] = [
  { id: 'gasharpoon', name: 'Gasharpoon', damage: '12 Pierce', gradeReq: 'Whaling', swingDelay: 0.85, range: '14, 6, 12', category: 'pierce' },
  { id: 'seraphic_lance', name: 'Seraphic Lance', damage: '10 Pierce', gradeReq: 'Whaling', swingDelay: 0.78, range: '13, 5, 13', category: 'pierce' },
  { id: 'augmented_spear', name: 'Augmented Spear', damage: '8 Pierce', gradeReq: '4', swingDelay: 0.68, range: '11, 5, 10', category: 'pierce' },
  { id: 'cinq_rapier', name: 'Cinq Association Rapier', damage: '7 Pierce', gradeReq: '5', swingDelay: 0.58, range: '10, 4, 9', category: 'pierce' },
  { id: 'seven_rapier', name: 'Seven Association Rapier', damage: '6.5 Pierce', gradeReq: '6', swingDelay: 0.56, range: '9.5, 4, 9', category: 'pierce' }
];

export const allWeapons = [...bluntWeapons, ...slashWeapons, ...pierceWeapons];

export const getWeaponsByCategory = (category: 'blunt' | 'slash' | 'pierce') => {
  switch (category) {
    case 'blunt': return bluntWeapons;
    case 'slash': return slashWeapons;
    case 'pierce': return pierceWeapons;
    default: return allWeapons;
  }
};

import type { SinAffinity, StatusEffect, Material } from '@/types';

export const sinAffinities: SinAffinity[] = [
  {
    id: 'wrath',
    name: 'Wrath',
    description: 'Increases offensive power and critical strike damage. Enhances aggressive combat pages.',
    icon: 'flame',
    value: 0
  },
  {
    id: 'lust',
    name: 'Lust',
    description: 'Enhances mobility, evasion, and stamina management. Improves dash and dodge capabilities.',
    icon: 'wind',
    value: 0
  },
  {
    id: 'sloth',
    name: 'Sloth',
    description: 'Strengthens defensive capabilities and damage over time effects. Improves survivability.',
    icon: 'shield',
    value: 0
  },
  {
    id: 'gluttony',
    name: 'Gluttony',
    description: 'Boosts health regeneration, sanity management, and endurance in prolonged combat.',
    icon: 'heart',
    value: 0
  },
  {
    id: 'gloom',
    name: 'Gloom',
    description: 'Enhances precision, critical chance, and tactical advantages. Improves debuff application.',
    icon: 'eye',
    value: 0
  },
  {
    id: 'pride',
    name: 'Pride',
    description: 'Amplifies special abilities, charge mechanics, and unique outfit synergies.',
    icon: 'crown',
    value: 0
  },
  {
    id: 'envy',
    name: 'Envy',
    description: 'Improves resource stealing, lifesteal, and adaptive combat strategies.',
    icon: 'droplet',
    value: 0
  }
];

export const MAX_SIN_POINTS = 50;

export const statusEffects: StatusEffect[] = [
  // Buffs
  {
    id: 'poise',
    name: 'Poise',
    description: 'Buff that gives (3 x [Count]%) chance to deal 1.15x Damage as [Critical Strike]. If [Critical Strike] procs, after 3 seconds, half Count, half the Count once more for every [Critical Strike] procs',
    category: 'buff'
  },
  {
    id: 'haste',
    name: 'Haste',
    description: 'When dashing, will consume 1 haste count to enhance mobility',
    category: 'buff'
  },
  {
    id: 'regen_up',
    name: 'Regen Up',
    description: 'Increase your regen by X. Unleashing emotion level also gives regen speed increase',
    category: 'buff'
  },
  {
    id: 'value_power_up',
    name: 'Value Power Up',
    description: 'Increase your dice power by X',
    category: 'buff'
  },
  {
    id: 'volatile_passion',
    name: 'Volatile Passion',
    description: 'Enhances certain Pages/Crits tied to the Waxen Pinion E.G.O',
    category: 'buff'
  },
  {
    id: 'k_corp_ampule',
    name: 'K Corp Ampule',
    description: 'When On Decay will apply 50 Regen up and 10 Fragile on Self',
    category: 'buff'
  },
  {
    id: 'enhancement_tattoos',
    name: 'Enhancement Tattoos',
    description: '[When Hit] - Take less damage Equal to Count / On Damage - Increase Damage by 10% per count (max: 5, Decay 10)',
    category: 'buff'
  },
  {
    id: 'defense_up',
    name: 'Defense Up',
    description: 'Decreases Stamina Damage when blocking by 5% per Count',
    category: 'buff'
  },
  {
    id: 'drop_rate_up',
    name: 'Drop Rate Up',
    description: 'Increases your luck by one. Max of 3, stacks',
    category: 'buff'
  },
  {
    id: 'fanatic',
    name: 'Fanatic',
    description: 'Exclusive to "The One Who Grips" outfit. Gives 15% Damage buff to allies wearing "N Corp. Inquisitor" outfit, lasts 30 Seconds',
    category: 'buff'
  },
  {
    id: 'fluorescence_shard',
    name: 'Fluorescence Shard',
    description: 'Upon expiring applies 4 Poise',
    category: 'buff'
  },
  {
    id: 'overheated_gasharpoon',
    name: 'Overheated Gasharpoon',
    description: 'Exclusive to "Whaling Crew Captain" outfit. Gives +4 Value Power Up [On Use] of Gasharpoon and Seraphic Lance Critical Attack',
    category: 'buff'
  },
  {
    id: 'hardblood',
    name: 'Hardblood',
    description: 'Exclusive to Bloodfiends. +1 Value Power Up at 10 Count and +2 Value Power Up at 20 Count. Can be converted into Shimmering Blood',
    category: 'buff'
  },
  {
    id: 'shimmering_blood',
    name: 'Shimmering Blood',
    description: 'Exclusive to Bloodfiends. [When Hit] inflict 1 Bleed to the attacker',
    category: 'buff'
  },
  {
    id: 'protection',
    name: 'Protection',
    description: '[When Hit] reduce Damage Taken by Count % (Max 20%)',
    category: 'buff'
  },
  {
    id: 'charge_barrier',
    name: 'Charge Barrier',
    description: '[When Hit] reduce Damage Taken by 10%, then Decrease Count by 1',
    category: 'buff'
  },
  {
    id: 'manifested_armor',
    name: 'Manifested Armor',
    description: 'From Manifested Armor singularity. [On Dice Roll] rolls highest value and increases all damage by 15%. On [Stagger] or -30 Sanity, gain 1 Shattered EGO',
    category: 'buff'
  },
  {
    id: 'dullahan',
    name: 'Dullahan',
    description: 'From Wild Hunt Singularity. [On Use] Gain 1 Dullahan. Allows gaining 3 Coffin instead of 1 when using Memorial Procession and Beheading. Changes Fused Blade attacks when equipped',
    category: 'buff'
  },
  {
    id: 'struggling',
    name: 'Struggling',
    description: 'From Silencing Gloves Singularity. Gain 2 Value Power Up on Critical Attacks, and refund 1 Light off of pages',
    category: 'buff'
  },
  {
    id: 'trigram_geon',
    name: 'Trigram - Geon',
    description: 'From Hana Association. +3 Value Power Up',
    category: 'buff'
  },
  {
    id: 'trigram_gon',
    name: 'Trigram - Gon',
    description: 'From Hana Association. Gain 7 Protection',
    category: 'buff'
  },
  {
    id: 'trigram_gam',
    name: 'Trigram - Gam',
    description: 'From Hana Association. Destroy 2 Light from the target',
    category: 'buff'
  },
  {
    id: 'trigram_ri',
    name: 'Trigram - Ri',
    description: 'From Hana Association. Gain 2 Light',
    category: 'buff'
  },
  // Debuffs
  {
    id: 'permadeath',
    name: 'PERMADEATH',
    description: 'PERMADEATH IS ENABLED. Leaving in combat or dying will result in character loss',
    category: 'debuff'
  },
  {
    id: 'bound_by_light',
    name: 'Bound By Light',
    description: 'When Knocked - Turn into Pages',
    category: 'debuff'
  },
  {
    id: 'burn',
    name: 'Burn',
    description: 'DoT that Deals damage equal to Count divided by 2 every 2 seconds, afterwards the Count is halved',
    category: 'debuff'
  },
  {
    id: 'dark_flame',
    name: 'Dark Flame',
    description: 'On Burn decay, decrease stack by 1, inflicting 1.5x [Damage Modifier] with Burn',
    category: 'debuff'
  },
  {
    id: 'bleed',
    name: 'Bleed',
    description: 'Deals damage equal to 1/3 of Count when an attack action is done, afterwards the Count is halved',
    category: 'debuff'
  },
  {
    id: 'bind',
    name: 'Bind',
    description: 'Decreases your walkspeed by 4 upon sprinting',
    category: 'debuff'
  },
  {
    id: 'tremor',
    name: 'Tremor',
    description: 'Deals stamina damage equal to 2x Count when hit by a Tremor Burst',
    category: 'debuff'
  },
  {
    id: 'rupture',
    name: 'Rupture',
    description: 'Sets your Armor resistance to 1 1 1 when taking damage',
    category: 'debuff'
  },
  {
    id: 'sinking',
    name: 'Sinking',
    description: 'Deals -2 Sanity damage [When Hit], afterwards reduces Count by 1. If -45 Sanity, Sinking Deluge deals damage equal to count',
    category: 'debuff'
  },
  {
    id: 'paralyze',
    name: 'Paralyze',
    description: 'On Dice use forces the lowest dice possible, afterwards lower Count by 1',
    category: 'debuff'
  },
  {
    id: 'fragile',
    name: 'Fragile',
    description: 'Increases % Damage Taken by Count/2',
    category: 'debuff'
  },
  {
    id: 'value_power_down',
    name: 'Value Power Down',
    description: 'Decrease your dice power by X',
    category: 'debuff'
  },
  {
    id: 'tremor_decay',
    name: 'Tremor Decay',
    description: '[On Hit], take extra damage % equal to Count, then remove 1 count from target',
    category: 'debuff'
  },
  {
    id: 'smoke',
    name: 'Smoke',
    description: 'Applies 2.5% (Max 37.5%) increase to Damage taken from basic attacks per Count [On Hit]',
    category: 'debuff'
  },
  {
    id: 'nails',
    name: 'Nails',
    description: 'Unique Bleed when damaged increases Bleed Count by Nail Count then reduces Nail Count by half',
    category: 'debuff'
  },
  {
    id: 'blooming',
    name: 'Blooming',
    description: '[Stagger] the target upon reaching 7 Count, afterwards Count is reduced to 0',
    category: 'debuff'
  },
  {
    id: 'defense_down',
    name: 'Defense Down',
    description: 'Increases Stamina Damage when blocking by 5% per Count',
    category: 'debuff'
  },
  {
    id: 'red_plum_blossom',
    name: 'Red Plum Blossom',
    description: 'Unique Bleed. [On Hit] increases [Critical Strike] chance by 10%, increases [Critical Strike] damage by (Count x 3%), apply Bleed equal to 1/2 of total Count',
    category: 'debuff'
  },
  {
    id: 'test_big_brother',
    name: 'Test of The Big Brother',
    description: '[On Hit] [Stagger] Damage Taken is Multiplied by Count (5x Maximum)',
    category: 'debuff'
  },
  {
    id: 'hemorrhage',
    name: 'Hemorrhage',
    description: '[On Hit] Bleed count is divided by 6, then remove Bleed equal to damage taken',
    category: 'debuff'
  },
  {
    id: 'gaze',
    name: 'Gaze',
    description: '[On Hit] If damage type taken is Pierce or Blunt, take 10% more damage',
    category: 'debuff'
  },
  {
    id: 'concussion',
    name: 'Concussion',
    description: 'On [Stagger] raise [Stagger] level. [Stagger] going to [Stagger+] and [Stagger++]',
    category: 'debuff'
  },
  {
    id: 'shattered_ego',
    name: 'Shattered EGO',
    description: 'From Manifested Armor. [On Dice Roll] Roll lowest value and decrease all damage by 25%',
    category: 'debuff'
  },
  {
    id: 'chained',
    name: 'Chained',
    description: 'Makes All pages consume +1 Light and prevent you from increasing resonance',
    category: 'debuff'
  },
  // Resources
  {
    id: 'ammo',
    name: 'Ammo',
    description: 'Allows firearm weaponry to fire their ranged attack',
    category: 'resource'
  },
  {
    id: 'special_ammo',
    name: 'Special Ammo',
    description: 'Functions same as Ammo with additional effects: Frost, AP, Incendiary, Atelier Logic',
    category: 'resource'
  },
  {
    id: 'frost_ammo',
    name: 'Frost Ammo',
    description: 'Applies 1 Count of Paralyze',
    category: 'resource'
  },
  {
    id: 'ap_ammo',
    name: 'AP Ammo',
    description: 'Deals True Damage',
    category: 'resource'
  },
  {
    id: 'incendiary_ammo',
    name: 'Incendiary Ammo',
    description: 'Applies 7 Count of Burn',
    category: 'resource'
  },
  {
    id: 'atelier_logic_ammo',
    name: 'Atelier Logic Ammo',
    description: 'Deals True Damage and applies 25% damage increase',
    category: 'resource'
  },
  {
    id: 'bullets',
    name: 'Bullets',
    description: 'Passive status used for reloading firearm weaponry and certain pages',
    category: 'resource'
  },
  {
    id: 'magic_bullet',
    name: 'Magic Bullet',
    description: 'Used to perform special interactions/attacks with Magic Bullet',
    category: 'resource'
  },
  {
    id: 'bloodfeast',
    name: 'Bloodfeast',
    description: 'Activates conditionals for Unseal Pages and Bloodfiend Weapons. Gained [On Hit] when hitting targets with Bleed or in Frenzy',
    category: 'resource'
  },
  {
    id: 'charge',
    name: 'Charge',
    description: 'Used for certain weapon/pages with specific conditions. Expires 1 Count every 10 seconds',
    category: 'resource'
  },
  {
    id: 'coffin',
    name: 'Coffin',
    description: 'Amplifies Critical of Fused Blade of Ruined Mirror Worlds. Gained by using Pages from Fragment of Ruined Mirror Worlds while having Wild Hunt Singularity',
    category: 'resource'
  },
  {
    id: 'chefs_appetite',
    name: "Chef's Appetite",
    description: "From Chef's Blessing Singularity. Applied by applying Bleed to enemy with 6 Bleed. At 5 Count, expires all Count and gain 50% Lifesteal on M1 for 30 Seconds",
    category: 'resource'
  },
  {
    id: 'shin',
    name: 'Shin',
    description: "Once threshold reached, activates Mang: 1.5x damage and sets target's Armor resistance to 1 1 1 when hit by Mang-infused attack",
    category: 'resource'
  },
  {
    id: 'unlock_blade',
    name: 'Unlock Blade',
    description: 'Converts to Unlocked Blade at 3 Count (Max 3, Decay 60)',
    category: 'resource'
  },
  {
    id: 'unlocked_blade',
    name: 'Unlocked Blade',
    description: 'Enhances certain Pages/Crits from The Index Syndicate (Max 1, Decay 60)',
    category: 'resource'
  },
  {
    id: 'vengeance_mark',
    name: 'Vengeance Mark',
    description: 'Used to Amplify or Modify Middle weapon/pages with specific conditions',
    category: 'resource'
  },
  {
    id: 'trigram',
    name: 'Trigram',
    description: "Gained from Augury Spear's critical attack. At 3+ Trigram consume 2 to enhance Augury Spear's Crit and use True Trigram Formation. Effects switchable by Geon Gon Gam Ri",
    category: 'resource'
  },
  {
    id: 'imitation',
    name: 'Imitation',
    description: "Gained from Hello and Scythe of Mimicry's critical attack. At 5+ consume all to enhance Mimicry Blade's critical to Greater Split: Horizontal, enhances Scythe to Dense Flesh",
    category: 'resource'
  },
  {
    id: 'red_eyes_resource',
    name: 'Red Eyes',
    description: "Used as conditional effects for Red Eyes' EGO Pages",
    category: 'resource'
  },
  {
    id: 'ahn',
    name: 'Ahn',
    description: 'Main currency and resource of Archived. Used to buy items, weapons, cosmetics',
    category: 'resource'
  }
];

export const materials: Material[] = [
  { id: 'fabric', name: 'Fabric', type: 'Basic', source: 'Drops, Tailor' },
  { id: 'nuovo_fabric', name: 'Nuovo Fabric', type: 'Rare', source: 'Drops, Tailor' },
  { id: 'shimmering_fabric', name: 'Shimmering Fabric', type: 'Epic', source: 'Rare drops' },
  { id: 'rope', name: 'Rope', type: 'Basic', source: 'Drops' },
  { id: 'wiring', name: 'Wiring', type: 'Basic', source: 'Drops' },
  { id: 'scrap_metal', name: 'Scrap Metal', type: 'Basic', source: 'Drops' },
  { id: 'book', name: 'Book', type: 'Basic', source: 'Burning books, drops' },
  { id: 'book_red_mist', name: 'Book of the Red Mist', type: 'Legendary', source: 'Red Mist drop' },
  { id: 'book_reverberation', name: 'Book of Reverberation Ensemble', type: 'Legendary', source: 'Ensemble drop' },
  { id: 'book_library', name: 'Book of The Library', type: 'Legendary', source: 'Library drop' },
  { id: 'book_birds', name: 'Book of The Birds', type: 'Legendary', source: 'Birds drop' },
  { id: 'book_arbiter', name: 'Book of An Arbiter', type: 'Legendary', source: 'Arbiter drop' },
  { id: 'book_hana', name: 'Book of Hana Association', type: 'Association', source: 'Hana drop' },
  { id: 'book_zwei', name: 'Book of Zwei Association', type: 'Association', source: 'Zwei drop' },
  { id: 'book_shi', name: 'Book of Shi Association', type: 'Association', source: 'Shi drop' },
  { id: 'book_cinq', name: 'Book of Cinq Association', type: 'Association', source: 'Cinq drop' },
  { id: 'book_liu', name: 'Book of Liu Association', type: 'Association', source: 'Liu drop' },
  { id: 'book_seven', name: 'Book of Seven Association', type: 'Association', source: 'Seven drop' },
  { id: 'book_dieci', name: 'Book of Dieci Association', type: 'Association', source: 'Dieci drop' },
  { id: 'book_thumb', name: 'Book of The Thumb', type: 'Syndicate', source: 'Thumb drop' },
  { id: 'book_index', name: 'Book of The Index', type: 'Syndicate', source: 'Index drop' },
  { id: 'book_ring', name: 'Book of The Ring', type: 'Syndicate', source: 'Ring drop' },
  { id: 'book_blade_lineage', name: 'Book of Blade Lineage', type: 'Syndicate', source: 'Blade Lineage drop' },
  { id: 'book_kurokumo', name: 'Book of Kurokumo Clan', type: 'Syndicate', source: 'Kurokumo drop' },
  { id: 'book_middle', name: 'Book of The Middle', type: 'Syndicate', source: 'Middle drop' },
  { id: 'book_big_brother', name: 'Book of The Big Brother of the Middle', type: 'Syndicate', source: 'Middle boss drop' },
  { id: 'book_stray_dog', name: 'Book of Stray Dog', type: 'Syndicate', source: 'Stray Dog drop' },
  { id: 'book_one_who_grips', name: 'Book of The One Who Grips', type: 'Syndicate', source: 'N Corp drop' },
  { id: 'book_udjat', name: 'Book of The Udjat', type: 'Syndicate', source: 'Udjat drop' },
  { id: 'book_smiling_faces', name: 'Book of The Smiling Faces', type: 'Syndicate', source: 'Smiling Faces drop' },
  { id: 'book_legacy', name: 'Book of Legacy', type: 'Legendary', source: 'Legacy content' },
  { id: 'fragment_silence', name: 'Fragment of Silence', type: 'Legendary', source: 'Black Silence' },
  { id: 'fragment_mirror', name: 'Fragment of Ruined Mirror Worlds', type: 'Legendary', source: 'Mirror Worlds' },
  { id: 'fragment_destruction', name: 'Fragment of Destruction', type: 'Legendary', source: 'Destruction' },
  { id: 'hardblood_fragment', name: 'Hardblood Fragment', type: 'Bloodfiend', source: 'Bloodfiend drops' },
  { id: 'hemobar', name: 'Hemobar', type: 'Bloodfiend', source: 'Bloodfiend crafting' },
  { id: 'mermaid_skin', name: 'Mermaid Skin', type: 'Whaling', source: 'Whaling drops' },
  { id: 'gasharpoon', name: 'Gasharpoon', type: 'Whaling', source: 'Harpoon crafting' },
  { id: 'twinhook', name: 'Twinhook', type: 'Pirate', source: 'Pirate crafting' },
  { id: 'warp_core', name: 'WARP Core', type: 'WARP', source: 'WARP drops' },
  { id: 'k_corp_ampule', name: 'K Corp. Ampule', type: 'K Corp', source: 'K Corp drops' },
  { id: 'sanity_ampule', name: 'Sanity Ampule', type: 'Medical', source: 'Medical drops' },
  { id: 'vitality_ampule', name: 'Vitality Ampule', type: 'Medical', source: 'Medical drops' },
  { id: 'strength_chip', name: 'Strength Chip Board MK2', type: 'Tech', source: 'Tech drops' },
  { id: 'gears', name: 'Gears', type: 'Tech', source: 'Tech drops' },
  { id: 'seed_of_light', name: 'Seed of Light', type: 'Legendary', source: 'Rare reward' },
  { id: 'mirror_shard', name: 'Mirror Shard', type: 'Legendary', source: 'Mirror Shard use' },
  { id: 'golden_bough', name: 'Golden Bough', type: 'Legendary', source: 'E.G.O. reset' },
  { id: 'uncharged_bough', name: 'Uncharged Golden Bough', type: 'Legendary', source: 'Random E.G.O.' },
  { id: 'tigermark_round', name: 'Tigermark Round', type: 'Thumb', source: 'Thumb crafting' },
  { id: 'ammo_box', name: 'Ammo Box', type: 'Ranged', source: 'Ranged crafting' },
  { id: 'distortion_soda', name: 'Distortion Soda', type: 'Misc', source: 'Misc drops' },
  { id: 'stigma_core', name: 'Stigma Workshop Core', type: 'Workshop', source: 'Stigma drops' },
  { id: 'leaflet_steamgun', name: 'Leaflet Workshop Steamgun', type: 'Workshop', source: 'Leaflet drops' },
  { id: 'raw_meat', name: 'Raw Meat', type: 'Food', source: 'Food drops' },
  { id: 'organs', name: 'Organs', type: 'Medical', source: 'Medical drops' },
  { id: 'organ', name: 'Organ', type: 'Medical', source: 'Medical drops' }
];

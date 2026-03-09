import type { Trait, Passive } from '@/types';

export const combatTraits: Trait[] = [
  {
    id: 'agile',
    name: 'Agile',
    altName: 'Quickstep',
    effect: 'Replaces dash with longer invisible dash that leaves black trails. Slightly increases i-frames. Causes 10 stamina loss on dash. Affected by Haste. Increases dash cooldown.',
    notes: 'Alternative: "Run as fast as you can, Abandoning your group" in character creation',
    category: 'combat'
  },
  {
    id: 'bizarre',
    name: 'Bizzare',
    altName: 'Unorthodox Timing',
    effect: 'Recolors parry purple. -0.3s parry frames. -1s cooldown on parry whiff',
    category: 'combat'
  },
  {
    id: 'calm',
    name: 'Calm',
    altName: 'Composed Guard',
    effect: 'Reduced stamina damage on block. Increased stamina loss on parry whiff',
    notes: 'Mutually Exclusive with Hot-Headed/Hair-Triggered',
    category: 'combat'
  },
  {
    id: 'hot_headed',
    name: 'Hot-Headed',
    altName: 'Hair-Triggered',
    effect: 'Recolors parry red. Increased stun duration. Higher stamina damage on block',
    notes: 'Mutually Exclusive with Calm/Composed Guard. Alternative: Skip character creation',
    category: 'combat'
  },
  {
    id: 'hypoxic',
    name: 'Hypoxic',
    altName: 'Adaptive Recovery',
    effect: 'Greatly increases Health Regeneration. Greatly reduces Stamina Regeneration',
    category: 'combat'
  },
  {
    id: 'immovable',
    name: 'Immovable',
    effect: 'You will no longer be knocked back when parrying or being parried',
    category: 'combat'
  },
  {
    id: 'indomitable',
    name: 'Indomitable',
    altName: 'Iron Chin',
    effect: 'Reduces damage taken while in [Stagger]',
    category: 'combat'
  },
  {
    id: 'maniacal',
    name: 'Maniacal',
    altName: 'Manic',
    effect: 'Recover more stamina on parry. Decreased sanity recovery',
    category: 'combat'
  },
  {
    id: 'proficient',
    name: 'Proficient',
    altName: 'Lightspeed Reflexes',
    effect: 'Recolors parry to blue. +0.3s parry frames. +3s parry cooldown on whiff',
    notes: 'Alternative: "How to become Book Smart" in character creation',
    category: 'combat'
  },
  {
    id: 'reactive',
    name: 'Reactive',
    altName: 'Reflexive Instinct',
    effect: 'Allows ragdoll cancel more frequently. Lose more stamina on ragdoll cancel',
    category: 'combat'
  },
  {
    id: 'resolute',
    name: 'Resolute',
    altName: 'Iron Will',
    effect: 'Reduces speed penalty while at low HP',
    category: 'combat'
  },
  {
    id: 'resourceful',
    name: 'Resourceful',
    altName: 'Quick Recovery',
    effect: 'Increases Stamina Regeneration',
    category: 'combat'
  },
  {
    id: 'shimmering',
    name: 'Shimmering',
    effect: 'Restore 1 additional Light when parrying heavy attacks',
    category: 'combat'
  },
  {
    id: 'steadfast',
    name: 'Steadfast',
    altName: 'Tough Skin',
    effect: 'Reduces most vulnerable damage resistance by 0.1',
    notes: 'Bonus voided when changing suits',
    category: 'combat'
  }
];

export const passiveTraits: Trait[] = [
  {
    id: 'coldness',
    name: 'Coldness',
    altName: 'Heartless Execution',
    effect: 'Makes gripping/carrying uncancellable unless ragdolled',
    category: 'passive'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    altName: 'Happy Feet',
    effect: 'Reduces threshold to activate Emotion Level. Enhances Emotion Level gain',
    category: 'passive'
  },
  {
    id: 'methodical',
    name: 'Methodical',
    altName: 'Swift Execution',
    effect: 'Reduces time to grip a target',
    category: 'passive'
  },
  {
    id: 'paranoid',
    name: 'Paranoid',
    altName: 'Cautious Fury',
    effect: 'Reduces all damage dealt while not in PERMADEATH by 10%. Increases all damage in PERMADEATH by 10%',
    category: 'passive'
  }
];

export const specialTraits: Trait[] = [
  {
    id: 'chromatic',
    name: 'Chromatic',
    altName: 'Chromatic Emotion',
    effect: 'Changes most VFX to your CosmeticColor. Changes hair color to CosmeticColor while under emotion level.',
    category: 'special'
  },
  {
    id: 'garde_pardue',
    name: 'Garde Pardue',
    effect: 'Consuming food only inflicts 50% of negative status counts',
    notes: "Shadou's questline. Doesn't count toward trait cap",
    category: 'special'
  },
  {
    id: 'rojima_alliance',
    name: 'Rojima Alliance',
    effect: 'Rats no longer aggro unless attacked',
    notes: "Random Rat's questline. Doesn't count toward trait cap",
    category: 'special'
  }
];

export const allTraits = [...combatTraits, ...passiveTraits, ...specialTraits];

// Passives organized by Sin Affinity
export const wrathPassives: Passive[] = [
  { id: 'close_call_wind', name: 'Close Call Wind', investment: 0, effect: 'Default', category: 'Wrath' },
  { id: 'follow_up', name: 'Follow-Up', investment: 5, effect: 'Enhanced follow-up attacks', category: 'Wrath' },
  { id: 'smoldering_resolve', name: 'Smoldering Resolve', investment: 10, effect: 'Increased damage at low HP', category: 'Wrath' },
  { id: 'tip_toe_around', name: 'Tip-Toe Around', investment: 15, effect: 'Enhanced evasion after attacks', category: 'Wrath' },
  { id: 'inner_ardor', name: 'Inner Ardor', investment: 20, effect: 'Greatly increased crit damage', category: 'Wrath' },
  { id: 'backdraft', name: 'Backdraft', investment: 25, effect: 'Counter-attack on successful dodge', category: 'Wrath' }
];

export const lustPassives: Passive[] = [
  { id: 'fleeting_steps', name: 'Fleeting Steps', investment: 0, effect: 'Default', category: 'Lust' },
  { id: 'mastered_breaths', name: 'Mastered Breaths', investment: 5, effect: 'Reduced stamina consumption', category: 'Lust' },
  { id: 'fortified_resolve', name: 'Fortified Resolve', investment: 10, effect: 'Increased defense after dodging', category: 'Lust' },
  { id: 'shockwave', name: 'Shockwave', investment: 15, effect: 'AoE damage on dash end', category: 'Lust' },
  { id: 'break_and_punish', name: 'Break and Punish', investment: 20, effect: 'Bonus damage against staggered enemies', category: 'Lust' },
  { id: 'wasted_hours', name: 'Wasted Hours, Lying Down', investment: 25, effect: 'Rapid health regeneration when stationary', category: 'Lust' }
];

export const slothPassives: Passive[] = [
  { id: 'biting_embrace', name: 'Biting Embrace', investment: 0, effect: 'Default', category: 'Sloth' },
  { id: 'thorns', name: 'Thorns', investment: 5, effect: 'Reflect damage when hit', category: 'Sloth' },
  { id: 'tear_to_shreds', name: 'Tear To Shreds', investment: 10, effect: 'Increased damage over time effects', category: 'Sloth' },
  { id: 'lingering_pain', name: 'Lingering Pain', investment: 15, effect: 'Debuffs last longer on enemies', category: 'Sloth' },
  { id: 'inescapable_grasp', name: 'Inescapable Grasp', investment: 20, effect: 'Reduced enemy movement speed', category: 'Sloth' },
  { id: 'eternal_torment', name: 'Eternal Torment', investment: 25, effect: 'Debuffs cannot be cleansed', category: 'Sloth' }
];

export const gluttonyPassives: Passive[] = [
  { id: 'comeback_time', name: 'Comeback Time / Tap Of The Light', investment: 0, effect: 'Default', category: 'Gluttony' },
  { id: 'wail', name: 'Wail', investment: 5, effect: 'Fear effect on nearby enemies', category: 'Gluttony' },
  { id: 'no_will_to_break', name: 'No Will To Break', investment: 10, effect: 'Immunity to first stagger', category: 'Gluttony' },
  { id: 'negative_thoughts', name: 'Negative Thoughts', investment: 15, effect: 'Sanity damage on hit', category: 'Gluttony' },
  { id: 'no_mind_to_cure', name: 'No Mind To Cure', investment: 20, effect: 'Immunity to mental debuffs', category: 'Gluttony' },
  { id: 'cry_on_deaf_ears', name: 'Cry On Deaf Ears', investment: 25, effect: 'Ignore enemy defense buffs', category: 'Gluttony' },
  { id: 'pray_to_dead_gods', name: 'Pray To Dead Gods', investment: 30, effect: 'Revive once per combat', category: 'Gluttony' },
  { id: 'death_comes_for_all', name: 'Death Comes For All', investment: 15, effect: 'Execute enemies below 10% HP', category: 'Gluttony' }
];

export const gloomPassives: Passive[] = [
  { id: 'claim_their_heart', name: 'Claim Their Heart', investment: 0, effect: 'Default', category: 'Gloom' },
  { id: 'pressure_point', name: 'Pressure Point', investment: 5, effect: 'Increased critical hit chance', category: 'Gloom' },
  { id: 'shrouded_power', name: 'Shrouded Power', investment: 10, effect: 'Bonus damage while unseen', category: 'Gloom' },
  { id: 'smoke_overload', name: 'Smoke Overload', investment: 15, effect: 'Enhanced smoke-based abilities', category: 'Gloom' },
  { id: 'adrenaline_rush', name: 'Adrenaline Rush', investment: 20, effect: 'Increased stats when surrounded', category: 'Gloom' },
  { id: 'sharp_eyes', name: 'Sharp Eyes', investment: 25, effect: 'See through smoke and stealth', category: 'Gloom' },
  { id: 'overbearing', name: 'Overbearing', investment: 30, effect: 'Intimidate weaker enemies', category: 'Gloom' }
];

export const pridePassives: Passive[] = [
  { id: 'convert_physical_trauma', name: 'Convert Physical Trauma', investment: 0, effect: 'Default', category: 'Pride' },
  { id: 'blessed_by_sparks', name: 'Blessed by the Sparks', investment: 5, effect: 'Chance to negate damage', category: 'Pride' },
  { id: 'electrifying_vendetta', name: 'Electrifying Vendetta', investment: 10, effect: 'Electric damage on counter', category: 'Pride' },
  { id: 'short_circuit_trip', name: 'Short-Circuit Trip', investment: 15, effect: 'Disable enemy abilities on hit', category: 'Pride' },
  { id: 'kinetic_energy', name: 'Kinetic Energy', investment: 20, effect: 'Gain power from movement', category: 'Pride' },
  { id: 'overflowing_guard', name: 'Overflowing Guard', investment: 25, effect: 'Excess defense becomes offense', category: 'Pride' },
  { id: 'overcharged_vessel', name: 'Overcharged Vessel', investment: 30, effect: 'All stats increased at max charge', category: 'Pride' }
];

export const envyPassives: Passive[] = [
  { id: 'here_we_go_again', name: 'Here We Go Again', investment: 0, effect: 'Default', category: 'Envy' },
  { id: 'craving_synergy', name: 'Craving Synergy', investment: 5, effect: 'Copy enemy buffs on hit', category: 'Envy' },
  { id: 'thirst', name: 'Thirst', investment: 10, effect: 'Lifesteal from damage dealt', category: 'Envy' },
  { id: 'voracity', name: 'Voracity', investment: 15, effect: 'Consume enemy resources', category: 'Envy' },
  { id: 'beautiful_mess', name: 'A Beautiful Mess', investment: 20, effect: 'Chaos damage increases with debuffs', category: 'Envy' },
  { id: 'break_the_dams', name: 'Break the Dams', investment: 25, effect: 'Release stored power for massive damage', category: 'Envy' }
];

export const allPassives = [
  ...wrathPassives,
  ...lustPassives,
  ...slothPassives,
  ...gluttonyPassives,
  ...gloomPassives,
  ...pridePassives,
  ...envyPassives
];

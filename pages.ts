import type { Page } from '@/types';

export const pages: Page[] = [
  // General Pages
  {
    id: 'focused_strikes',
    name: 'Focused Strikes',
    light: 3,
    cooldown: '24s',
    effects: '[5~8] Slash, [5~8] Slash, [8~12] Pierce | [Undodgeable], [On Hit] become [Tracking]',
    category: 'General'
  },
  {
    id: 'dodge_and_strike',
    name: 'Dodge and Strike',
    light: 1,
    cooldown: '25s',
    effects: '[12~16] Slash | [Frame One] [Undodgeable], [When Hit] Evade Gain [Hyperarmor] and Counter',
    category: 'General'
  },
  {
    id: 'charge_and_cover',
    name: 'Charge and Cover',
    light: 1,
    cooldown: '20s',
    effects: '[3-7] Pierce | [Undodgeable]',
    category: 'General'
  },
  {
    id: 'thrust',
    name: 'Thrust',
    light: 2,
    cooldown: '20s',
    effects: '[4~7] Pierce | [On Hit] [Guard Break], gain 1 Light. [After Use] Set CD to 0 for 2 Seconds (Max 2 Reuses). [Combo Starter] [Combo Extender]',
    category: 'General'
  },
  {
    id: 'light_attack',
    name: 'Light Attack',
    light: 1,
    cooldown: '20s',
    effects: '[4~8] Slash | [On Hit] Gain 2 Light',
    category: 'General'
  },
  {
    id: 'alleyway_counter',
    name: 'Alleyway Counter',
    light: 2,
    cooldown: '30s',
    effects: '[7~15] Blunt | [Frame One] [On Parry] Applies 5 Fragile',
    category: 'General'
  },
  {
    id: 'right_hook',
    name: 'Right Hook',
    light: 1,
    cooldown: '15s',
    effects: '[10~14] Blunt | [On Use] Gain [Hyperarmor]. [Guard Break] [On Hit] Inflict 4 Tremor',
    category: 'General'
  },
  {
    id: 'opportunistic_slash',
    name: 'Opportunistic Slash',
    light: 2,
    cooldown: '25s',
    effects: '[5~11] Slash x2 | [On Hit] Gain 3 Haste and Inflict 3 Rupture',
    category: 'General'
  },
  {
    id: 'yolo',
    name: 'Y-you Only Live Once',
    light: 1,
    cooldown: '30s',
    effects: '[1-12] | [On Use] Gain [Hyperarmor]. [On Hit] [Guard Break] Inflict 2 Paralyze',
    category: 'General'
  },
  {
    id: 'deep_cuts',
    name: 'Deep Cuts',
    light: 3,
    cooldown: '30s',
    effects: '[5~7], [8~10], [9~12] Slash | [On Hit] Gain [Hyperarmor], Gain 3 Poise / Gain 3 Poise / Gain 4 Haste',
    category: 'General'
  },
  {
    id: 'mutilate',
    name: 'Mutilate',
    light: 3,
    cooldown: '40s',
    effects: '[1~5] Slash x3 | [Undodgeable] [Multihit] [Hits Grounded] 3 Times each hit deals 33%. 20% Chance to Roll [30~30]',
    category: 'General'
  },
  {
    id: 'sky_kick',
    name: 'Sky Kick',
    light: 1,
    cooldown: '20s',
    effects: '[3-8] Blunt | [Hits Grounded] [On Hit] [Uptilt]. [Combo Starter] [Combo Extender]',
    category: 'General'
  },
  {
    id: 'dropkick',
    name: 'Dropkick',
    light: 2,
    cooldown: '15s',
    effects: '[10~12] Blunt | [On Hit] Inflict 5 Fragile',
    category: 'General'
  },
  {
    id: 'backstreets_scramble',
    name: 'Backstreets Scramble',
    light: 3,
    cooldown: '25s',
    effects: '[3~5], [6~10], [9~15] Blunt | [On Hit] Gain [Hyperarmor] / [On Hit] Gain [Hyperarmor] / [Uncounterable] [On Hit] [Hits Grounded] [Guard Break]',
    category: 'General'
  },
  {
    id: 'youre_too_slow',
    name: "You're Too Slow",
    light: 2,
    cooldown: '15s/5s',
    effects: '[5~8] Evade / [14~23] Pierce | Evade: [Frame One] [On Parry] Gain 1 Light. Pierce: [Unblockable] [On Hit] Inflict 3 Bleed',
    category: 'General'
  },
  {
    id: 'stylish_sweeps',
    name: 'Stylish Sweeps',
    light: 3,
    cooldown: '35s',
    effects: '[5~6], [6~7], [7~8] Blunt | [Unblockable] [On Hit] [Hits Grounded] Inflict 2/4/2 Sinking',
    category: 'General'
  },
  {
    id: 'shocking_blow',
    name: 'Shocking Blow',
    light: 2,
    cooldown: '25s',
    effects: '[4~12] Blunt | [On Use] Gain [Hyperarmor]. [On Hit] Inflict 5 Fragile and Paralyze',
    category: 'General'
  },
  {
    id: 'crush',
    name: 'Crush',
    light: 2,
    cooldown: '30s',
    effects: '[3~5], [4~6] Blunt | [Undodgeable] [On Use] Gain [Hyperarmor]. [On Hit] [Hits Grounded] Inflict 2 Tremor',
    category: 'General'
  },
  {
    id: 'onslaught_command',
    name: 'Onslaught Command',
    light: 2,
    cooldown: '45s',
    effects: '[6~16] Pierce | [Unblockable] [On Use] Gain [Hyperarmor]. [On Hit] Gain 2 Value Power Up',
    category: 'General'
  },
  {
    id: 'preemptive_strike',
    name: 'Preemptive Strike',
    light: 2,
    cooldown: '20s',
    effects: '[12~14] Slash | [On Use] Gain [Hyperarmor] 1.1x [Damage Modifier]. [On Hit] [Guard Break] Inflict 4 Rupture',
    category: 'General'
  },
  // Zwei Association Pages
  {
    id: 'client_protection',
    name: 'Client Protection',
    light: 2,
    cooldown: '25s',
    effects: '[4~6]/[4~8]/[5~9] Slash. If 10+ Defense Up change rolls. [On Hit] Gain 2 Defense Up / [On Hit] Gain 2 Defense Up / [Guard Break] [Knockback] [On Hit] Gain 2 Defense Up & Inflict 6 Defense Down',
    category: 'Zwei'
  },
  {
    id: 'standoff',
    name: 'Standoff',
    light: 1,
    cooldown: '25s',
    effects: '[4~7]/[5~9] Slash. [On Hit] Gain 3 Defense Up',
    category: 'Zwei'
  },
  {
    id: 'blade_whirl',
    name: 'Blade Whirl',
    light: 3,
    cooldown: '30s',
    effects: '[4~7]x4, [9~14] Slash. [On Use] Gain 0.86x [Damage Modifier] [Hyperarmor]. [On Hit] Gain 2 Defense Up. If 10+ Defense Up, Gain 10 Shield HP',
    category: 'Zwei'
  },
  {
    id: 'law_and_order',
    name: 'Law and Order',
    light: 2,
    cooldown: '20s',
    effects: '[Frame One] Counter stance. [When Hit] [4~5] Slash [Guard Break]. [On Hit] Gain 5 Defense Up and Inflict 3 Defense Down / [5~9] Slash [On Hit] Inflict 3 Defense Down',
    category: 'Zwei'
  },
  // Shi Association Pages
  {
    id: 'catch_breath',
    name: 'Catch Breath',
    light: 2,
    cooldown: '20s',
    effects: '[8~15] Slash. [On Use] If [Below 50% HP] gain 4 Value Power Up. [On Hit] Gain 6 Poise. [Below 50% HP] [On Hit] Gain 8 Poise and 4 Haste',
    category: 'Shi'
  },
  {
    id: 'extreme_edge',
    name: 'Extreme Edge',
    light: 2,
    cooldown: '30s',
    effects: '[7~8] Slash [Unblockable] [Knockback] [On Hit] Inflict 5 Bleed and 2 Defense Down. Air: [4~7] Slash [On Hit] Inflict 5 Defense Down. Below 33%: [14~25] Slash [Guard Break] [Undodgeable] [Hits Grounded] [Grounds] [Auto Execute] [On Hit] Inflict 8 Bleed and 5 Defense Down',
    category: 'Shi'
  },
  {
    id: 'flying_sword',
    name: 'Flying Sword',
    light: 2,
    cooldown: '25s',
    effects: '[4~8]/[3~9] Slash [Unblockable] [On Hit] Inflict 2 Bleed. Air: [6~12] Slash [Undodgeable] [Uptilt] [On Hit] Inflict 5 Defense Down',
    category: 'Shi'
  },
  {
    id: 'boundary_of_death',
    name: 'Boundary Of Death',
    light: 3,
    cooldown: '40s',
    effects: '[1~4] True Damage [Auto Execute] [Unblockable]. [If die rolls 4] Change rolls to [46~49] True Damage',
    category: 'Shi'
  },
  // Liu Association Pages
  {
    id: 'perfected_death_fist',
    name: 'Perfected Death Fist',
    light: 3,
    cooldown: '18s',
    effects: '[3~6]/[6~9]/[9~12] Pierce. [Damage Modifier] x0.667. [On Hit] If target has +8 Burn inflict 3 more. If +6 Burn gain 5 Value Power Up. [Hits Grounded] [Grounds]/[Hits Grounded] [Guard Break]/[Knockback] Inflict 2 Burn',
    category: 'Liu'
  },
  {
    id: 'raging_storm',
    name: 'Raging Storm',
    light: 3,
    cooldown: '15s',
    effects: '[5~9] Slash [On Hit] Inflict 4 Burn. [14~20] Slash [Auto Execute] [Guard Break] [Knockback] [On Hit] Inflict 8 Burn',
    category: 'Liu'
  },
  {
    id: 'fiery_waltz',
    name: 'Fiery Waltz',
    light: 2,
    cooldown: '14s',
    effects: '[9~13] Pierce [On Hit] [Unblockable] Inflict 5 Burn',
    category: 'Liu'
  },
  {
    id: 'red_kick',
    name: 'Red Kick',
    light: 2,
    cooldown: '22s',
    effects: '[2~5] Blunt [On Hit] Inflict 3 Burn. [14~18] Blunt [Auto Execute] [Guard Break] [Grounds] [On Hit] Inflict 3 Burn. Gain X Value Power Up by Burn count /3 (caps at 10)',
    category: 'Liu'
  },
  {
    id: 'flowing_flame',
    name: 'Flowing Flame',
    light: 2,
    cooldown: '18s',
    effects: '[8~14] Blunt [Auto Execute] [On Hit] Inflict 4 Burn. [On Hit] at 30 Sanity Inflict 6 Burn. [On Hit] at 45 Sanity Inflict 8 Burn',
    category: 'Liu'
  },
  {
    id: 'ignite_weaponry',
    name: 'Ignite Weaponry',
    light: 1,
    cooldown: '75s',
    effects: '[2~4]. [On Use] Gain [Hyperarmor]. Every M1 applies 1 Burn for 25 Seconds. Liu Association Pages apply 1 more Burn',
    category: 'Liu'
  },
  {
    id: 'fleet_edge',
    name: 'Fleet Edge',
    light: 2,
    cooldown: '20s',
    effects: '[3~6]/[4~12] Pierce. [On Hit] gain [Hyperarmor]. [On Hit] Inflict 2/3 Burn. If target has 10+ Burn gain 2 Haste and apply 3 Defense Down',
    category: 'Liu'
  },
  {
    id: 'flow_of_sword',
    name: 'Flow of the Sword',
    light: 3,
    cooldown: '20s',
    effects: '[6~10]/[7~14] Slash [Undodgeable]. [On Use] gain [Hyperarmor]. [On Hit] Inflict 3/4 Burn. Emotion Level II: [On Hit] If target has 6+ Burn, heal 5 Health per 3 Burn (Max. 20)',
    category: 'Liu'
  },
  // Blade Lineage Pages
  {
    id: 'slash_series',
    name: 'Slash Series',
    light: 2,
    cooldown: '15s',
    effects: '[3~5]/[3~5]/[5~7] Slash. [Undodgeable] [On Hit] Gain 2 Poise',
    category: 'Blade Lineage'
  },
  {
    id: 'overthrow',
    name: 'Overthrow',
    light: 5,
    cooldown: '40s',
    effects: '[2~4]/[2~4]/[5~10] Slash. [Auto Execute] [On Use] Gain [Hyperarmor]. If at 5+ Poise, gain 2 Value Power Up. [Unparriable] [Hits Grounded] [Grounds] [Guard Break] If at 5+ Poise consume 5 Poise to gain 8. [On Hit] Inflict 10 Bleed and 5 Paralyze and Gain 5 Poise. [On Kill] Gain 3 Value Power Up',
    category: 'Blade Lineage'
  },
  {
    id: 'fare_thee_well',
    name: 'Fare-Thee Well!',
    light: 3,
    cooldown: '15s',
    effects: '[6~7]/[7~8]/[10~15] Slash. [On Use] Gain [Hyperarmor] 0.8x [Damage Modifier]. [On Hit] Gain 3 Poise & Inflict 1 Bleed. If 10+ Poise then gains 5 Value Power Up',
    category: 'Blade Lineage'
  },
  {
    id: 'red_plum_blossoms',
    name: 'Red Plum Blossoms Scatter',
    light: 4,
    cooldown: '19s',
    effects: "[5~12]/[4~7] Pierce. [Guard Break] [On Hit] Inflict 2/4 Red Plum Blossom. [On Hit] gains X Value Power Up equal to user's Poise divided by 6",
    category: 'Blade Lineage'
  },
  {
    id: 'moon_splitting_draw',
    name: 'Moon-Splitting Draw',
    light: 4,
    cooldown: '30s',
    effects: '[15~25] Slash. [On Use] Gain [Hyperarmor]. If +15 Poise gain 5 Value Power Up. [Hits Grounded] [Guard Break] [Undodgeable] [Auto Execute]. [On Hit] Inflict 3 Paralyze, Gain 5 Poise, Lose 5 HP & gain 3 Light',
    category: 'Blade Lineage'
  },
  {
    id: 'yield_my_flesh',
    name: 'Yield My Flesh / To Claim Their Bones',
    light: 2,
    cooldown: '60s',
    effects: '[Yield]: [4~7] Slash [Guard Break]. [When Hit] during [Hyperarmor] turns into [To Claim Their Bones] [On Hit] gain 2 Light. [To Claim]: [On Use] Gain [Hyperarmor] [On Hit] Gain [Tracking]. [3~4]/[4~5]/[5~6]/[6~7] Slash [Unblockable] [On Hit] Inflict 3 Bleed (last hit: and 5 Paralyze)',
    category: 'Blade Lineage'
  },
  // Seven Association Pages
  {
    id: 'dissect_target',
    name: 'Dissect Target',
    light: 2,
    cooldown: '30s',
    effects: '[3~5]/[4~6]/[5~7] Slash. [On Use] Gain [Hyperarmor]. [On Hit] Inflict 2/1/1 Rupture',
    category: 'Seven'
  },
  {
    id: 'swash',
    name: 'Swash',
    light: 3,
    cooldown: '15s',
    effects: '[3~6]x5, [6~9], [9~11] Slash. [On Use] Gain [Hyperarmor]. [On Hit] Inflict 4 Rupture / [On Hit] [Guard Break] Inflict 4 Rupture',
    category: 'Seven'
  },
  {
    id: 'profiling',
    name: 'Profiling',
    light: 4,
    cooldown: '25s',
    effects: '[6~10]/[7~11]/[13~18] Pierce. [On Use] Gain 0.75x [Damage Modifier]. [On Hit] Inflict 3/2/3 Rupture',
    category: 'Seven'
  },
  {
    id: 'investigation',
    name: 'Investigation',
    light: 1,
    cooldown: '30s',
    effects: "[On Use] Reveal target's hp",
    category: 'Seven'
  },
  {
    id: 'moulinet',
    name: 'Moulinet',
    light: 3,
    cooldown: '30s',
    effects: '[6~9]/[7~10]/[13~15] Slash. [On Use] Gain 0.71x [Damage Modifier]. [Unblockable] [On Hit] Inflict 2 Rupture',
    category: 'Seven'
  },
  // Dieci Association Pages
  {
    id: 'weight_of_knowledge',
    name: 'Weight Of Knowledge',
    light: 2,
    cooldown: '18s',
    effects: '[2~4]/[3~5]/[3~5]/[3~6] Blunt. [Hits Grounded] [On Hit] Inflict 2/1/3/3 Sinking. [On Hit] If target has 8+ Sinking gain 15 Shield HP',
    category: 'Dieci'
  },
  {
    id: 'illuminate_vacuity',
    name: 'Illuminate Thy Vacuity',
    light: 2,
    cooldown: '12s',
    effects: '[2~4]x4, [3~6] Blunt. [On Hit] Inflict 1/1/1/1/2 Sinking. [On Hit] If target has 6+ Sinking gain 25 Shield HP',
    category: 'Dieci'
  },
  {
    id: 'studious_dedication',
    name: 'Studious Dedication',
    light: 2,
    cooldown: '15s',
    effects: '[4~9]/[4~10] Blunt. [On Use] If target has +6 Sinking Inflict 1 more. [On Hit] Inflict 2/4 Sinking',
    category: 'Dieci'
  },
  {
    id: 'scorch_knowledge',
    name: 'Scorch Knowledge',
    light: 3,
    cooldown: '20s',
    effects: '[2~4]/[4~8]/[13~18] Blunt. [Hits Grounded] [On Hit] Inflict 2/1/5 Sinking',
    category: 'Dieci'
  },
  // Cinq Association Pages
  {
    id: 'contre_attaque',
    name: 'Contre Attaque',
    light: 3,
    cooldown: '20s',
    effects: '[7~10]/[3~5]/[7~13] Pierce. [On Use] Gain [Hyperarmor]. [On Hit] Gain 6 Poise / Gain 2 Haste / [Knockback] Gain 4 Haste',
    category: 'Cinq'
  },
  {
    id: 'engagement',
    name: 'Engagement',
    light: 2,
    cooldown: '15s',
    effects: '[4~6]/[5~10]/[6~8] Pierce. [On Use] Gain [Hyperarmor]. [On Hit] Gain 2 Poise',
    category: 'Cinq'
  },
  {
    id: 'balestra_fente',
    name: 'Balestra Fente',
    light: 2,
    cooldown: '13s',
    effects: '[5~8]x10, [7~11] Pierce. [On Use] Gain 0.5x [Damage Modifier]. [Multihit] 10 Times [On Hit] Gain 1 Value Power Up for every 2 Haste. [On Hit] [Grounds]',
    category: 'Cinq'
  },
  // Kurokumo Pages
  {
    id: 'sober_up',
    name: 'Sober Up',
    light: 2,
    cooldown: '25s',
    effects: "[5~7] Pierce [On Hit] [Guard Break] Inflict 6 Bleed then blur target's screen",
    category: 'Kurokumo'
  },
  {
    id: 'cloud_cutter',
    name: 'Cloud Cutter',
    light: 2,
    cooldown: '10s',
    effects: '[1~5]/[5~9] Slash. [On Hit] Gain 2 Poise & Inflict 2 Bleed. If target has less than 15 Bleed Reuse Page',
    category: 'Kurokumo'
  },
  {
    id: 'silent_mist',
    name: 'Silent Mist',
    light: 2,
    cooldown: '25s',
    effects: '[7~10] Slash. [Auto Execute] [Unblockable]. [On Use] Gain 3 Poise and [Hyperarmor]. [On Hit] Inflict 4 Bleed',
    category: 'Kurokumo'
  },
  {
    id: 'shadowcloud_kick',
    name: 'Shadowcloud Kick',
    light: 1,
    cooldown: '30s',
    effects: '[4~6]/[6~8] Slash. [On Use] Gain [Hyperarmor]. [On Hit] Inflict 3 Bleed. If 7+ Bleed Gain 3 Value Power Up / Inflict 2 Value Power Down',
    category: 'Kurokumo'
  },
  {
    id: 'sky_clearing_cut',
    name: 'Sky Clearing Cut',
    light: 3,
    cooldown: '37s',
    effects: '[4~7]/[5~9]/[6~10] Slash. [On Hit] Inflict 2/2/3 Bleed. If 7+ Bleed deal +30% more damage',
    category: 'Kurokumo'
  },
  {
    id: 'dark_cloud_cleaver',
    name: 'Dark Cloud Cleaver',
    light: 2,
    cooldown: '35s',
    effects: '[5~7]x2 Slash. [On Hit] Inflict 2 Bleed Gain 4 Poise / Inflict 3 Bleed',
    category: 'Kurokumo'
  },
  {
    id: 'shadowcloud_shattercleave',
    name: 'Shadowcloud Shattercleave',
    light: 3,
    cooldown: '40s',
    effects: "[2~5]/[2~6]/[8~10] Slash. [On Hit] Blur target's screen and Inflict 2 Bleed & Gain 2 Defense Up. Gain 1 Value Power Up for every 3 Bleed on target. If 6+ Bleed Gain 4 Defense Up",
    category: 'Kurokumo'
  },
  // Mimicry Pages
  {
    id: 'level_slash',
    name: 'Level Slash',
    light: 2,
    cooldown: '13s',
    effects: '[8~10]/[9~11] Slash. [Auto Execute] [On Hit] Inflict 3 Bleed, Gain 1 Imitation. [Grounds]. [On Kill] Gain 5 Value Power Up for 2m30s during E.G.O',
    category: 'Mimicry'
  },
  {
    id: 'onrush',
    name: 'Onrush',
    light: 3,
    cooldown: '15s',
    effects: '[14~26] Slash. [On Use] Unaffected by [Damage Modifier] [Grounds]. [On Hit] Deal 40 Stamina damage and Inflict 3 Bleed. [On Hit] Gain 1 Imitation, at 6+ Light Reuse and Consume 3 Light. [On Use] Gain 0.70x [Damage Modifier] for reuse, no stamina damage',
    category: 'Mimicry'
  },
  {
    id: 'spear',
    name: 'Spear',
    light: 2,
    cooldown: '23s',
    effects: '[4~5]/[5~6]/[6~7] Pierce. [On Use] Gain 1 Imitation, [On Hit] Gain [Hyperarmor]. [Unblockable] [On Hit] Inflict 2 Bleed (last: and Gain 1 Imitation)',
    category: 'Mimicry'
  },
  {
    id: 'focus_spirit',
    name: 'Focus Spirit',
    light: 2,
    cooldown: '44s',
    effects: '[8~16]. [On Use] Gain [Hyperarmor] for 1.5s. [On Use] Gain 2 Value Power Up for duration determined by roll in seconds',
    category: 'Mimicry'
  },
  // Thumb Pages
  {
    id: 'pistol_draw',
    name: 'Pistol Draw',
    light: 1,
    cooldown: '20s',
    effects: '[4~6]/[5~7]/[6~8] Pierce',
    category: 'Thumb'
  },
  {
    id: 'coin_trick',
    name: 'Coin Trick',
    light: 1,
    cooldown: '35s',
    effects: '[7~13] Pierce. Must have 1 Ammo and 1k Ahn. [AoE] [On Hit] Spend 1 Ahn and inflict 3 Rupture',
    category: 'Thumb'
  },
  {
    id: 'summary_judgement',
    name: 'Summary Judgement',
    light: 2,
    cooldown: '22s',
    effects: '[3~9]/[10~15] Blunt/Pierce. Must have 1 Ammo. [On Use] Gain [Hyperarmor]. [Unblockable] [On Hit] inflict 6 Tremor / [On Hit] inflict 3 Rupture',
    category: 'Thumb'
  },
  {
    id: 'reload',
    name: 'Re-Load',
    light: 3,
    cooldown: '15s',
    effects: '[On Use] gain Special Ammo based on max Ammo of weapon/2 (Frost Ammo, Incendiary Ammo). If regular ammo loaded, Refund 3 Light',
    category: 'Thumb'
  },
  // Index Pages
  {
    id: 'execute_prescript',
    name: 'Execute Prescript',
    light: 2,
    cooldown: '20s',
    effects: '[4~7]/[4~8] Slash. [On Hit] Inflict 2/3 Rupture. If [Singleton] become [8~11]/[8~12] Slash',
    category: 'Index'
  },
  {
    id: 'somber_procuration',
    name: 'Somber Procuration',
    light: 3,
    cooldown: '25s',
    effects: '[4~8]/[4~6] Pierce. If [Singleton] become [8~12]/[8~10] Pierce. [Multihit] 5 Times [2~4] Pierce. [On Last Hit] Inflict 5 Rupture and [Knockback]',
    category: 'Index'
  },
  {
    id: 'will_of_city',
    name: 'Will of The City',
    light: 1,
    cooldown: '20s',
    effects: '[Frame Three] [When Hit] Counter with [Guard Break] [5~10] Slash. If [Singleton] [On Use] Gain 1 Light. [On Hit] Gain 1 Light, becomes [7~12] Slash. [Combo Starter]',
    category: 'Index'
  },
  {
    id: 'unlock',
    name: 'Unlock',
    light: 0,
    cooldown: '20s',
    effects: 'Unlock-1: [2~4] Slash [On Hit] Gain 1 Unlock Blade. Unlock-2: [3~6]x2 Slash [Knockback] [On Hit] Gain 1 Unlock Blade. Unlock-3: [6~11]x2 Slash [Knockback] [On Hit] Lose all stacks of Unlock Blade and Gain 1 Unlocked Blade',
    category: 'Index'
  },
  // Hana Pages
  {
    id: 'rotate_trigram',
    name: 'Rotate Trigram',
    light: 0,
    cooldown: '2s',
    effects: 'Rotation: Geon -> Gon -> Gam -> Ri. Geon: +3 Value Power Up. Gon: 7 Protection. Gam: Destroy 2 Light from target. Ri: Gain 2 Light',
    category: 'Hana'
  },
  {
    id: 'augury_crusher',
    name: 'Augury Crusher',
    light: 3,
    cooldown: '20s',
    effects: '[15~21] Blunt. [On Use] Gain [Hyperarmor]. [Knockback] [Hits Grounded] [Guard Break] [On Hit] Inflict 8 Tremor',
    category: 'Hana'
  },
  {
    id: 'augury_infusion',
    name: 'Augury Infusion',
    light: 2,
    cooldown: '20s',
    effects: '[13~18] Blunt. [On Use] Gain [Hyperarmor]. [Hits Grounded] [Guard Break] [On Hit] Inflict Tremor Burst',
    category: 'Hana'
  },
  {
    id: 'augury_kick',
    name: 'Augury Kick',
    light: 4,
    cooldown: '20s',
    effects: '[5~7]/[16~22] Blunt. [On Use] Gain [Hyperarmor]. [Hits Grounded] [Guard Break] [On Hit] Inflict 4 Tremor / [Knockback] [Unparriable] [On Hit] Inflict Tremor Burst and Inflict 4 Tremor',
    category: 'Hana'
  },
  {
    id: 'celestial_sight',
    name: 'Celestial Sight',
    light: 2,
    cooldown: '40s',
    effects: '[15~17] Blunt. [Non Frame One] [When Hit] Counter with [Knockback] and Inflict Tremor Burst',
    category: 'Hana'
  },
  // Bloodfiend Pages
  {
    id: 'grovel_before_me',
    name: 'Grovel Before Me, Pathetic One',
    light: 3,
    cooldown: '35s',
    effects: '[5~14]x2 Slash. [Auto Execute] [Guard Break]. [On Use] At 7+ Stored Blood Change rolls to [8~17]. [On Hit] Gain 1 Stored Blood (Max 1) and Inflict 4/5 Bleed',
    category: 'Bloodfiend'
  },
  {
    id: 'go_go_away',
    name: 'Go… Go Away…!',
    light: 2,
    cooldown: '25s',
    effects: '[6~8]/[7~12] Slash. [Auto Execute] x0.67 [Damage Modifier]. [On Hit] Gain 1 Stored Blood (Max 1) and Inflict 3/4 Bleed',
    category: 'Bloodfiend'
  },
  {
    id: 'siphon',
    name: 'Siphon',
    light: 2,
    cooldown: '45s',
    effects: '[5~8]x2 Pierce. x0.63 [Damage Modifier] [Non Frame One] [When Hit] Counter. [On Hit] Inflict 4 Bleed. Heal Health scaling with Bleed on target',
    category: 'Bloodfiend'
  },
  {
    id: 'topple',
    name: 'Topple',
    light: 3,
    cooldown: '25s',
    effects: '[10~14]/[6~12] Blunt. [On Use] If at 40+ Bloodfeast consume 40 Bloodfeast to gain 3 Value Power Up. [Multihit] [On Hit] Inflict 6 Bleed / [Undodgeable] [Guard Break] [On Hit] Gain 20 Bloodfeast and [Knockback]',
    category: 'Bloodfiend'
  },
  {
    id: 'wound',
    name: 'Wound',
    light: 3,
    cooldown: '25s',
    effects: '[9~14]x6, [5~12] Blunt. [Undodgeable] 0.75x [Damage Modifier]. [On Use] Gain [Hyperarmor]. [On Use] If at 75+ Bloodfeast, gain 3 Value Power Up. [Multihit] 6 Times [On Hit] Inflict 7x1 Bleed / [Guard Break] [On Hit] If target has over 10 Bleed Consume 8 Bleed to gain 75 Bloodfeast and [Knockback]',
    category: 'Bloodfiend'
  },
  {
    id: 'hardblood_impact',
    name: 'Hardblood Impact',
    light: 1,
    cooldown: '35s',
    effects: '[8~12] Blunt. [On Hit] [Grounds]. [Guard Break]',
    category: 'Bloodfiend'
  },
  {
    id: 'suffocating_guilt',
    name: 'Suffocating Guilt',
    light: 2,
    cooldown: '25s',
    effects: '[4~9]/[6~12] Pierce. [Undodgeable] [On Use] Gain [Hyperarmor]. [On Use] If user is at 100+ Bloodfeast, gain 1 for this page. [On Use] Gain 8 Bleed. [On Use] Gain Bloodfeast equal to Bleed on self. [On Hit] Inflict 3 Rupture / [On Hit] [Grounds] Inflict 7 Bleed and Gain 25 Bloodfeast',
    category: 'Bloodfiend'
  },
  // Udjat Pages
  {
    id: 'sand_split',
    name: 'Sand Split',
    light: 2,
    cooldown: '20s',
    effects: '[7~13]/[7~9] Slash. [On Use] If user is at 4+ Protection, gain 3 Value Power Up. [On Use] Gain [Hyperarmor]. [Undodgeable] [On Hit] Gain 2 Protection',
    category: 'Udjat'
  },
  {
    id: 'furusiyya',
    name: 'Furūsiyya',
    light: 2,
    cooldown: '35s',
    effects: '[8~10] Blunt. [Undodgeable] [Counter]. [On Hit] Gain 5 Protection',
    category: 'Udjat'
  },
  {
    id: 'jamadhar',
    name: 'Jamadhar',
    light: 4,
    cooldown: '25s',
    effects: '[6~9]/[7~8]/[5~9] Slash. [On Use] Gain 0.5x [Damage Modifier]. [Undodgeable] [On Hit] Gain 1 Protection. [Undodgeable] [Unblockable] [Knockback]. If 5+ Protection, use [8~10] Pierce 1x [Damage Modifier] [Guard Break]',
    category: 'Udjat'
  },
  // Workshop Pages
  {
    id: 'inhale',
    name: 'Inhale',
    light: 1,
    cooldown: '60s',
    effects: '[3~5]. [On Use] Gain 1 Smoke based on dice roll every second. [After Use] Gain 1 Paralyze',
    category: 'Workshop'
  },
  {
    id: 'exhale_smoke',
    name: 'Exhale Smoke',
    light: 2,
    cooldown: '25s',
    effects: '[7-13] Blunt. [Multihit] 4 Times [On Hit] Inflict 4x1 Smoke. Gains Damage scaling with Smoke Count on Target',
    category: 'Workshop'
  },
  {
    id: 'loss_of_senses',
    name: 'Loss of Senses',
    light: 2,
    cooldown: '30s',
    effects: '[9-11] Blunt. [Counter] [Undodgeable]. [Multihit] 2 times [On Hit] Inflict 1 Paralyze, Then inflict 3 Smoke Count on Target',
    category: 'Workshop'
  },
  // R Corp Pages
  {
    id: 'rip',
    name: 'Rip',
    light: 2,
    cooldown: '18s',
    effects: '[7~13] Blunt. [On Use] At 5+ Charge gain 5 Value Power Up. [Undodgeable] [Hits Grounded] [On Hit] Gain 8 Charge and Inflict 2 Rupture',
    category: 'R Corp'
  },
  {
    id: 'charge_shield',
    name: 'Charge Shield',
    light: 2,
    cooldown: '40s',
    effects: '[5~15] Blunt. x0.7 [Damage Modifier]. [On Use] Gain [Hyperarmor]. [Guard Break] [Hits Grounded] [On Hit] Inflict 2 Rupture. [On Hit] Below 10 Charge Gain 5 Charge Barrier. [On Hit] At 10+ Charge Gain 5 Charge Barrier and Convert all Charge into Shield HP at 1/3 Efficiency',
    category: 'R Corp'
  },
  {
    id: 'leap',
    name: 'Leap',
    light: 3,
    cooldown: '14s',
    effects: '[4~8]/[8~12]/[12~16] Pierce. [On Use] Gain [Hyperarmor]. [On Use] Gain 0.65x/0.75x/0.85x [Damage Modifier]. [On Use] At 10+ Charge gain 5 Value Power Up. [On Hit] Gain 3 Charge and Inflict 2 Fragile / [Unblockable] / [Guard Break] [On Hit] Inflict 4 Fragile [Knockback]',
    category: 'R Corp'
  },
  {
    id: 'overcharged_ripple',
    name: 'Overcharged Ripple',
    light: 4,
    cooldown: '25s',
    effects: '[5~7]/[6~8]/[7~9]/[8~10] Blunt. [On Use] At 10+ Charge Gain 1.04x [Damage Modifier]. [On Hit] Gain 1 Charge (x3). [Guard Break] [Grounds] [On Hit] Gain 4 Charge',
    category: 'R Corp'
  },
  // Night Awl Pages
  {
    id: 'blade_flourish',
    name: 'Blade Flourish',
    light: 2,
    cooldown: '18s',
    effects: '[4~7]/[5~8]/[6~9] Slash. [On Use] Gain [Hyperarmor] [Unblockable]. [On Hit] [Guard Break] Gain 3 Value Power Up',
    category: 'Night Awl'
  },
  {
    id: 'waltz_in_black',
    name: 'Waltz in Black',
    light: 3,
    cooldown: '18s',
    effects: '[14~20] Slash. [Hits Grounded] [Guard Break]. If target marked by Waltz In White, gain tracking',
    category: 'Night Awl'
  },
  {
    id: 'waltz_in_white',
    name: 'Waltz In White',
    light: 3,
    cooldown: '35s',
    effects: '[13~24] Slash. [On Use] [Unblockable] [Undodgeable]. [On Hit] teleport target to user and mark',
    category: 'Night Awl'
  },
  {
    id: 'light_dash',
    name: 'Light Dash',
    light: 0,
    cooldown: '60s',
    effects: '[On Use] Gain [Hyperarmor] and 1 Light',
    category: 'Night Awl'
  },
  // Degraded Pages
  {
    id: 'degraded_fairy',
    name: 'Degraded Fairy',
    light: 2,
    cooldown: '20s',
    effects: '[4~8]x2 Pierce. [On Use] Locks camera rotation. [On Hit] Inflict 2 Fairy / Inflict 2 Fairy and Gain 1 Light (Max 1)',
    category: 'Degraded'
  },
  {
    id: 'degraded_pillar',
    name: 'Degraded Pillar',
    light: 3,
    cooldown: '34s',
    effects: '[10~23] Blunt. [On Use] Gain [Hyperarmor]. [On Use] [Undodgeable] [Knockback] anyone infront, deals no damage. [Guard Break] [On Hit] Inflict 4 Fairy',
    category: 'Degraded'
  },
  {
    id: 'degraded_lock',
    name: 'Degraded Lock',
    light: 4,
    cooldown: '50s',
    effects: '[12~20] Blunt. [Undodgeable] [On Hit] Inflict 5 Fairy and 1 Chained',
    category: 'Degraded'
  },
  {
    id: 'degraded_shockwave',
    name: 'Degraded Shockwave',
    light: 5,
    cooldown: '22.5s',
    effects: '[5~10]/[10~20]/[15~30] Blunt. [On Use] Gain 0.66x [Damage Modifier] [Hyperarmor]. [AoE] [Hits Grounded] [Undodgeable] [Uncancellable] [On Hit] Inflict 6 Tremor. [Knockback] [On Hit] Inflict 6 Tremor Then Tremor Burst. If 10+ Tremor Inflict 6 Fairy and 4 Value Power Down',
    category: 'Degraded'
  },
  // Wild Hunt Pages
  {
    id: 'greatsword_rend',
    name: 'Greatsword Rend',
    light: 1,
    cooldown: '13s',
    effects: '[7~10] Blunt. [On Use] Gain [Hyperarmor]. [On Use] if user has Wild Hunt Singularity, gain 1 Coffin. [On Hit] Inflict 5 Sinking',
    category: 'Wild Hunt'
  },
  {
    id: 'beheading',
    name: 'Beheading',
    light: 1,
    cooldown: '15s',
    effects: '[3~6]/[4~8] Slash. [On Use] Gain 0.83x [Damage Modifier]. [On Use] if user has Wild Hunt Singularity equipped gain 1 Coffin. [On Hit] Inflict 2 Sinking and gains [Tracking]. If user has Dullahan, Gain 3 Coffin and increase rolls: [8~13]/[13~16] Slash [On Hit] Inflict 1/2 Sinking and gains [Tracking]',
    category: 'Wild Hunt'
  },
  {
    id: 'smackdown',
    name: 'Smackdown',
    light: 3,
    cooldown: '35s',
    effects: '[2~4]/[4~6]/[8~10] Blunt. [On Use] Gain [Hyperarmor]. [On Use] If user has Wild Hunt Singularity, gain 1 Coffin. [On Hit] Inflict 3 Sinking / [On Hit] [Unblockable] Inflict 3 Bleed / [Guard Break] [On Hit] inflict Bleed equal to Sinking / 2 (Max 20)',
    category: 'Wild Hunt'
  },
  {
    id: 'memorial_procession',
    name: 'Memorial Procession',
    light: 3,
    cooldown: '25s',
    effects: '[4~8]/[5~9]/[11~13] Slash. [On Use] Coin 1 and 2 gain 0.594 [Damage Modifier], Coin 3 gains 0.89. [On Use] If user has Wild Hunt Singularity, gain 1 Coffin. [Undodgeable] [Unblockable] [Hits Grounded] [On Hit] Inflict 5 Sinking. If Dullahan: [5~10]/[10~20]/[14~20] Slash',
    category: 'Wild Hunt'
  },
  {
    id: 'behead_heathcliffs',
    name: 'Behead Heathcliffs',
    light: 2,
    cooldown: '30s',
    effects: '[3~13] Blunt. [On Use] Gain [Hyperarmor]. [On Use] if user has Wild Hunt Singularity, gain 1 Coffin. [On Hit] [Guard Break] Inflict 3 Paralyze and 5 Bleed',
    category: 'Wild Hunt'
  },
  // Serum Pages
  {
    id: 'serum_injection_k',
    name: 'Serum Injection K',
    light: 4,
    cooldown: '30s',
    effects: '[5~12]. [On Use] Heal Health Equal to 2x Roll. Puts Serum K on 30s CD',
    category: 'Serum'
  },
  {
    id: 'serum_injection_w',
    name: 'Serum Injection W',
    light: 4,
    cooldown: '30s',
    effects: '[15~30]. [On Use] Gain 10 Warp Dash. Puts Serum W on 30s CD',
    category: 'Serum'
  },
  {
    id: 'serum_injection_r',
    name: 'Serum Injection R',
    light: 4,
    cooldown: '30s/60s',
    effects: '[5~10]. [On Use] Gain Value Power Up Equal to Roll for 10 seconds. Puts Serum R on 60s CD',
    category: 'Serum'
  },
  // Middle Pages
  {
    id: 'lupine_onslaught',
    name: 'Lupine Onslaught',
    light: 3,
    cooldown: '15s',
    effects: '[3~5]/[3~6]/[4~7]/[4~8] Blunt. [Unblockable] [On Hit] Inflict 1 Paralyze. [If target has 5+ Tremor] [Uptilt]',
    category: 'Middle'
  },
  {
    id: 'kicks_and_stomps',
    name: 'Kicks and Stomps',
    light: 2,
    cooldown: '23s',
    effects: '[6~10]x2 Blunt. [Hits Grounded] [On Hit] Inflict 2 Paralyze / [Hits Grounded] [Grounds] [Guard Break] [On Hit] 2 Tremor',
    category: 'Middle'
  },
  {
    id: 'rapacious_assault',
    name: 'Rapacious Assault',
    light: 2,
    cooldown: '17s',
    effects: '[4~9]/[10~16] Blunt. [Hits Grounded] [On Hit] inflict 1 Paralyze and 3 Tremor / [Hits Wakeup] [Uptilt]',
    category: 'Middle'
  },
  {
    id: 'pitch_black_pulverizer',
    name: 'Pitch-Black Pulverizer',
    light: 5,
    cooldown: '25s',
    effects: '[16~23] Blunt. [On Use] Gain [Hyperarmor]. [Auto Execute] [Undodgeable] [Unblockable] [Hits Grounded]. [Multihit] 4 Times [Hits Grounded] [On Hit] Inflict 5 Tremor [Damage Modifier] of 80%. [On Last Hit] [Grounds] [On Hit] Trigger Tremor Burst',
    category: 'Middle'
  },
  // Pointilist Pages
  {
    id: 'sanguine_painting',
    name: 'Sanguine Painting',
    light: 2,
    cooldown: '25s',
    effects: '[5~9] Pierce [Unblockable]. [4~8] Pierce [Undodgeable] [Knockback] [On Hit] Inflict 2 Bleed. If target has 6+ Bleed, do not [Knockback] and use [8~12] and [12~16] Pierce [On Hit] Inflict 2 Bleed',
    category: 'Pointilist'
  },
  {
    id: 'hematic_coloring',
    name: 'Hematic Coloring',
    light: 5,
    cooldown: '45s',
    effects: '[3~6]/[6~9]/[9~12]/[12~15]/[15~18] Pierce. [Undodgeable] [On Use] Gain 0.5x [Damage Modifier]. [On Hit] gains [Tracking]. [On Hit] Randomly inflict 3 of one: Bleed, Burn, Rupture, Tremor, Paralyze, or Sinking. 1x [Damage Modifier] [Grounds]',
    category: 'Pointilist'
  },
  {
    id: 'paint_over',
    name: 'Paint Over',
    light: 3,
    cooldown: '20s',
    effects: '[Auto Execute] [Undodgeable]. [On Use] Gain 0.66x [Damage Modifier]. [Multihit] 2 Times [5~10] Pierce [On Hit] Inflict 1x2 Bleed. [Multihit] 2 Times [5~10] Pierce. [Combo Extender] [Combo Starter]',
    category: 'Pointilist'
  },
  // WARP Pages
  {
    id: 'destruction_awaits',
    name: 'Destruction Awaits',
    light: 7,
    cooldown: '50s',
    effects: '[32~35] Blunt. [On Use] Gain 1.85x [Damage Modifier]. [Auto Execute] [Unblockable] [On Hit] inflict 5 Tremor',
    category: 'WARP'
  },
  {
    id: 'extract_fuel',
    name: 'Extract Fuel',
    light: 2,
    cooldown: '38s',
    effects: '[7~12] Slash. [On Use] Gain [Hyperarmor] Restore 2 Light. [Guard Break] [On Hit] Restore Health based off dice roll (10-20)',
    category: 'WARP'
  },
  {
    id: 'trash_disposal',
    name: 'Trash Disposal',
    light: 2,
    cooldown: '12.5s',
    effects: '[4~6] Slash. [Auto Execute] [On Use] Gain [Hyperarmor]. [On First Hit] [Guard Break] Inflict 5 Fragile. Recycles the die until the minimum value is rolled (Max. 6). Each [On Hit] will restore Health by 3 at the end of the skill up to (Max. 15 Health)',
    category: 'WARP'
  },
  // Birds Pages
  {
    id: 'scales_of_judgement',
    name: 'Scales of Judgement',
    light: 3,
    cooldown: '43s',
    effects: '[0~30] Blunt. [On Use] Not affected by Sanity [Hyperarmor]. [Auto Execute]. Below 15: heals target. Above 15: damage everyone in surrounding radius equal to roll',
    category: 'Birds'
  },
  // Utility Pages
  {
    id: 'fleet_footsteps',
    name: 'Fleet Footsteps',
    light: 2,
    cooldown: '40s',
    effects: '[On Use] Gain 3 Haste, teleport to the target',
    category: 'Utility'
  },
  {
    id: 'set_fire',
    name: 'Set Fire',
    light: 2,
    cooldown: '80s',
    effects: '[On Use] Every M1 Applies 1 Burn to target for 15 Seconds',
    category: 'Utility'
  }
];

export const getPageCategories = () => {
  const categories = new Set(pages.map(p => p.category));
  return Array.from(categories);
};

export const getPagesByCategory = (category: string) => {
  return pages.filter(p => p.category === category);
};

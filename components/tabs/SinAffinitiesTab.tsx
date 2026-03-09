import { useBuildStore } from '@/store/buildStore';
import { sinAffinities, MAX_SIN_POINTS } from '@/data/sinAffinities';
import { 
  wrathPassives, 
  lustPassives, 
  slothPassives, 
  gluttonyPassives, 
  gloomPassives, 
  pridePassives, 
  envyPassives 
} from '@/data/traits';
import { Flame, Wind, Shield, Heart, Eye, Crown, Droplet, RotateCcw, Sparkles } from 'lucide-react';

const sinIcons: Record<string, React.ReactNode> = {
  wrath: <Flame className="w-5 h-5" />,
  lust: <Wind className="w-5 h-5" />,
  sloth: <Shield className="w-5 h-5" />,
  gluttony: <Heart className="w-5 h-5" />,
  gloom: <Eye className="w-5 h-5" />,
  pride: <Crown className="w-5 h-5" />,
  envy: <Droplet className="w-5 h-5" />
};

const sinPassives: Record<string, typeof wrathPassives> = {
  wrath: wrathPassives,
  lust: lustPassives,
  sloth: slothPassives,
  gluttony: gluttonyPassives,
  gloom: gloomPassives,
  pride: pridePassives,
  envy: envyPassives
};

export function SinAffinitiesTab() {
  const { 
    sinAffinities: sinValues, 
    setSinAffinity, 
    resetSinAffinities,
    getTotalSinPoints,
    getRemainingSinPoints
  } = useBuildStore();

  const totalPoints = getTotalSinPoints();
  const remainingPoints = getRemainingSinPoints();

  const handleIncrement = (sinId: string) => {
    const currentValue = sinValues[sinId] || 0;
    if (remainingPoints > 0 && currentValue < 25) {
      setSinAffinity(sinId, currentValue + 1);
    }
  };

  const handleDecrement = (sinId: string) => {
    const currentValue = sinValues[sinId] || 0;
    if (currentValue > 0) {
      setSinAffinity(sinId, currentValue - 1);
    }
  };

  const getUnlockedPassives = (sinId: string) => {
    const value = sinValues[sinId] || 0;
    const passives = sinPassives[sinId] || [];
    return passives.filter(p => value >= p.investment);
  };

  const getNextPassive = (sinId: string) => {
    const value = sinValues[sinId] || 0;
    const passives = sinPassives[sinId] || [];
    return passives.find(p => p.investment > value);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="gothic-header text-xl">Sin Affinities</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Allocate points to unlock powerful passives
          </p>
        </div>
        <button
          onClick={resetSinAffinities}
          className="btn-secondary text-xs flex items-center gap-2"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Points Display */}
      <div className="archived-card gold-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-gold" />
            <div>
              <p className="text-sm text-muted-foreground">Points Remaining</p>
              <p className={`text-2xl font-bold ${remainingPoints === 0 ? 'text-wrath' : 'text-gold'}`}>
                {remainingPoints}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Allocated</p>
            <p className="text-2xl font-bold text-parchment">{totalPoints}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold/70 transition-all duration-300"
            style={{ width: `${(totalPoints / MAX_SIN_POINTS) * 100}%` }}
          />
        </div>
      </div>

      {/* Sin Affinity Cards */}
      <div className="grid grid-cols-1 gap-4">
        {sinAffinities.map((sin) => {
          const value = sinValues[sin.id] || 0;
          const unlockedPassives = getUnlockedPassives(sin.id);
          const nextPassive = getNextPassive(sin.id);

          return (
            <div key={sin.id} className="archived-card">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded bg-secondary/50 sin-${sin.id}`}>
                    {sinIcons[sin.id]}
                  </div>
                  <div>
                    <h3 className={`gothic-header text-lg sin-${sin.id}`}>{sin.name}</h3>
                    <p className="text-xs text-muted-foreground">{sin.description}</p>
                  </div>
                </div>
                
                {/* Value Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(sin.id)}
                    disabled={value === 0}
                    className="w-8 h-8 rounded bg-secondary hover:bg-secondary/80 flex items-center justify-center text-parchment disabled:opacity-30 transition-colors"
                  >
                    -
                  </button>
                  <span className={`w-10 text-center font-bold text-lg sin-${sin.id}`}>
                    {value}
                  </span>
                  <button
                    onClick={() => handleIncrement(sin.id)}
                    disabled={remainingPoints === 0 || value >= 25}
                    className="w-8 h-8 rounded bg-secondary hover:bg-secondary/80 flex items-center justify-center text-parchment disabled:opacity-30 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Unlocked Passives */}
              {unlockedPassives.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs text-gold mb-2">Unlocked Passives:</p>
                  <div className="flex flex-wrap gap-2">
                    {unlockedPassives.map((passive) => (
                      <span
                        key={passive.id}
                        className="px-2 py-1 text-xs rounded bg-gold/20 text-gold border border-gold/30"
                      >
                        {passive.name} ({passive.investment})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Passive */}
              {nextPassive && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Next at {nextPassive.investment} points:
                  </p>
                  <p className="text-xs text-purple-light">{nextPassive.name}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

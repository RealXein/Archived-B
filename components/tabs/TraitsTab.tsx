import { useState } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { combatTraits, passiveTraits, specialTraits } from '@/data/traits';
import { Shield, Zap, Star, X, Sparkles, Swords, Eye } from 'lucide-react';

export function TraitsTab() {
  const { traits, addTrait, removeTrait } = useBuildStore();
  const [activeTab, setActiveTab] = useState<'combat' | 'passive' | 'special'>('combat');
  const [searchQuery, setSearchQuery] = useState('');

  const traitList = {
    combat: combatTraits,
    passive: passiveTraits,
    special: specialTraits
  };

  const filteredTraits = traitList[activeTab].filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.altName && t.altName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isTraitSelected = (traitId: string) => traits.some(t => t.id === traitId);
  const canAddMore = traits.length < 4;

  const getTraitIcon = (category: string) => {
    switch (category) {
      case 'combat': return <Swords className="w-4 h-4" />;
      case 'passive': return <Shield className="w-4 h-4" />;
      case 'special': return <Star className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="gothic-header text-xl">Select Traits</h2>
          <p className="text-xs text-muted-foreground mt-1">
            {traits.length}/4 traits selected
          </p>
        </div>
        {traits.length > 0 && (
          <button
            onClick={() => traits.forEach(t => removeTrait(t.id))}
            className="btn-secondary text-xs"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Selected Traits */}
      {traits.length > 0 && (
        <div className="archived-card gold-border">
          <h3 className="text-sm text-gold font-medium mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Selected Traits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {traits.map((trait) => (
              <div
                key={trait.id}
                className="flex items-start justify-between p-2 rounded bg-secondary/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getTraitIcon(trait.category)}
                    <span className="text-parchment text-sm font-medium">{trait.name}</span>
                  </div>
                  {trait.altName && (
                    <span className="text-xs text-muted-foreground italic">
                      aka {trait.altName}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => removeTrait(trait.id)}
                  className="p-1 hover:bg-destructive/20 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex gap-2">
        {(['combat', 'passive', 'special'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button flex items-center gap-2 capitalize ${
              activeTab === tab ? 'active' : ''
            }`}
          >
            {getTraitIcon(tab)}
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search traits..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="archived-select w-full"
      />

      {/* Traits List */}
      <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto p-1">
        {filteredTraits.map((trait) => {
          const selected = isTraitSelected(trait.id);
          return (
            <button
              key={trait.id}
              onClick={() => {
                if (selected) {
                  removeTrait(trait.id);
                } else if (canAddMore) {
                  addTrait(trait);
                }
              }}
              disabled={!selected && !canAddMore}
              className={`archived-card text-left transition-all duration-200 ${
                selected ? 'gold-border ring-2 ring-gold' : ''
              } ${!selected && !canAddMore ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01]'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getTraitIcon(trait.category)}
                  <span className="text-parchment font-medium text-sm">{trait.name}</span>
                </div>
                <span className="category-badge capitalize">{trait.category}</span>
              </div>
              
              {trait.altName && (
                <p className="text-xs text-purple-light italic mb-1">
                  Also known as: {trait.altName}
                </p>
              )}
              
              <p className="text-xs text-muted-foreground">{trait.effect}</p>
              
              {trait.notes && (
                <p className="text-xs text-gold/70 mt-1 italic">
                  <Eye className="w-3 h-3 inline mr-1" />
                  {trait.notes}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

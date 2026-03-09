import { useState, useMemo } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { allWeapons, bluntWeapons, slashWeapons, pierceWeapons } from '@/data/weapons';
import { Sword, Crosshair, Hammer, Clock, Ruler } from 'lucide-react';

type WeaponCategory = 'all' | 'blunt' | 'slash' | 'pierce';

export function WeaponTab() {
  const { weapon, setWeapon } = useBuildStore();
  const [selectedCategory, setSelectedCategory] = useState<WeaponCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const weapons = useMemo(() => {
    switch (selectedCategory) {
      case 'blunt': return bluntWeapons;
      case 'slash': return slashWeapons;
      case 'pierce': return pierceWeapons;
      default: return allWeapons;
    }
  }, [selectedCategory]);

  const filteredWeapons = useMemo(() => {
    if (!searchQuery) return weapons;
    return weapons.filter(w => 
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.damage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [weapons, searchQuery]);

  const getCategoryIcon = (category: WeaponCategory) => {
    switch (category) {
      case 'blunt': return <Hammer className="w-4 h-4" />;
      case 'slash': return <Sword className="w-4 h-4" />;
      case 'pierce': return <Crosshair className="w-4 h-4" />;
      default: return <Sword className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blunt': return 'text-wrath';
      case 'slash': return 'text-sloth';
      case 'pierce': return 'text-lust';
      default: return 'text-parchment';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="gothic-header text-xl">Select Weapon</h2>
        {weapon && (
          <button
            onClick={() => setWeapon(null)}
            className="btn-secondary text-xs"
          >
            Clear Selection
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['all', 'blunt', 'slash', 'pierce'] as WeaponCategory[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`tab-button flex items-center gap-2 capitalize ${
              selectedCategory === cat ? 'active' : ''
            }`}
          >
            {getCategoryIcon(cat)}
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search weapons..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="archived-select w-full"
      />

      {/* Selected Weapon Display */}
      {weapon && (
        <div className="archived-card gold-border">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className={`category-badge mb-2 inline-block capitalize ${getCategoryColor(weapon.category)}`}>
                {weapon.category}
              </span>
              <h3 className="gothic-header text-lg">{weapon.name}</h3>
            </div>
          </div>
          
          <div className="ornate-divider" />
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="stat-display">
              <span className="stat-label">Damage</span>
              <span className="stat-value">{weapon.damage}</span>
            </div>
            <div className="stat-display">
              <span className="stat-label">Grade Req</span>
              <span className="stat-value">{weapon.gradeReq}</span>
            </div>
            <div className="stat-display">
              <span className="stat-label flex items-center gap-1">
                <Clock className="w-3 h-3" /> Swing Delay
              </span>
              <span className="stat-value">{weapon.swingDelay}s</span>
            </div>
            <div className="stat-display">
              <span className="stat-label flex items-center gap-1">
                <Ruler className="w-3 h-3" /> Range
              </span>
              <span className="stat-value text-xs">{weapon.range}</span>
            </div>
          </div>
        </div>
      )}

      {/* Weapon List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto p-1">
        {filteredWeapons.map((w) => (
          <button
            key={w.id}
            onClick={() => setWeapon(w)}
            className={`archived-card text-left transition-all duration-200 hover:scale-[1.02] ${
              weapon?.id === w.id ? 'gold-border ring-2 ring-gold' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className={`category-badge capitalize ${getCategoryColor(w.category)}`}>
                {w.category}
              </span>
            </div>
            <h4 className="text-parchment font-medium text-sm mb-2">{w.name}</h4>
            <div className="flex flex-col gap-1 text-xs">
              <span className="text-gold">{w.damage}</span>
              <span className="text-purple-light">Grade: {w.gradeReq}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

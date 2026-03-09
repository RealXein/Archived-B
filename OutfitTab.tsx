import { useState, useMemo } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { outfits, getOutfitCategories } from '@/data/outfits';
import { Shield, Wind, BookOpen } from 'lucide-react';

export function OutfitTab() {
  const { outfit, setOutfit } = useBuildStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All', ...getOutfitCategories()], []);

  const filteredOutfits = useMemo(() => {
    let filtered = outfits;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(o => o.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(o => 
        o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.keypage.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="gothic-header text-xl">Select Outfit</h2>
        {outfit && (
          <button
            onClick={() => setOutfit(null)}
            className="btn-secondary text-xs"
          >
            Clear Selection
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="archived-select flex-1"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search outfits..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="archived-select flex-1"
        />
      </div>

      {/* Selected Outfit Display */}
      {outfit && (
        <div className="archived-card gold-border">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="category-badge mb-2 inline-block">{outfit.category}</span>
              <h3 className="gothic-header text-lg">{outfit.name}</h3>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-parchment">
                <Wind className="w-4 h-4" />
                <span className="text-sm">{outfit.speed}</span>
              </div>
            </div>
          </div>
          
          <div className="ornate-divider" />
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="stat-display">
              <span className="stat-label">Blunt</span>
              <span className="stat-value">{outfit.blunt.toFixed(1)}</span>
            </div>
            <div className="stat-display">
              <span className="stat-label">Pierce</span>
              <span className="stat-value">{outfit.pierce.toFixed(1)}</span>
            </div>
            <div className="stat-display">
              <span className="stat-label">Slash</span>
              <span className="stat-value">{outfit.slash.toFixed(1)}</span>
            </div>
          </div>
          
          {/* Keypage */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs text-gold font-medium">Keypage</span>
            </div>
            <p className="keypage-text">{outfit.keypage}</p>
          </div>
          
          {/* Recipe */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-purple-light" />
              <span className="text-xs text-purple-light font-medium">Recipe</span>
            </div>
            <p className="recipe-text">{outfit.recipe}</p>
          </div>
        </div>
      )}

      {/* Outfit List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto p-1">
        {filteredOutfits.map((o) => (
          <button
            key={o.id}
            onClick={() => setOutfit(o)}
            className={`archived-card text-left transition-all duration-200 hover:scale-[1.02] ${
              outfit?.id === o.id ? 'gold-border ring-2 ring-gold' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="category-badge">{o.category}</span>
              <div className="flex items-center gap-1 text-parchment text-xs">
                <Wind className="w-3 h-3" />
                {o.speed}
              </div>
            </div>
            <h4 className="text-parchment font-medium text-sm mb-2">{o.name}</h4>
            <div className="flex gap-2 text-xs">
              <span className="text-wrath">B:{o.blunt.toFixed(1)}</span>
              <span className="text-lust">P:{o.pierce.toFixed(1)}</span>
              <span className="text-sloth">S:{o.slash.toFixed(1)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

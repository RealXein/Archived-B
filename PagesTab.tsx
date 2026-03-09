import { useState, useMemo } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { pages, getPageCategories } from '@/data/pages';
import { Scroll, Zap, Clock, X, Sparkles } from 'lucide-react';

export function PagesTab() {
  const { pages: selectedPages, addPage, removePage } = useBuildStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All', ...getPageCategories()], []);

  const filteredPages = useMemo(() => {
    let filtered = pages;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.effects.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  const isPageSelected = (pageId: string) => selectedPages.some(p => p.id === pageId);
  const canAddMore = selectedPages.length < 6;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="gothic-header text-xl">Select Pages</h2>
          <p className="text-xs text-muted-foreground mt-1">
            {selectedPages.length}/6 pages selected
          </p>
        </div>
        {selectedPages.length > 0 && (
          <button
            onClick={() => selectedPages.forEach(p => removePage(p.id))}
            className="btn-secondary text-xs"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Selected Pages */}
      {selectedPages.length > 0 && (
        <div className="archived-card gold-border">
          <h3 className="text-sm text-gold font-medium mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Equipped Pages
          </h3>
          <div className="space-y-2">
            {selectedPages.map((page) => (
              <div
                key={page.id}
                className="flex items-center justify-between p-2 rounded bg-secondary/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-parchment text-sm font-medium">{page.name}</span>
                    <span className="category-badge">{page.category}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-gold" />
                      {page.light}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-light" />
                      {page.cooldown}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removePage(page.id)}
                  className="p-1 hover:bg-destructive/20 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

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
          placeholder="Search pages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="archived-select flex-1"
        />
      </div>

      {/* Pages List */}
      <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto p-1">
        {filteredPages.map((page) => {
          const selected = isPageSelected(page.id);
          return (
            <button
              key={page.id}
              onClick={() => {
                if (selected) {
                  removePage(page.id);
                } else if (canAddMore) {
                  addPage(page);
                }
              }}
              disabled={!selected && !canAddMore}
              className={`archived-card text-left transition-all duration-200 ${
                selected ? 'gold-border ring-2 ring-gold' : ''
              } ${!selected && !canAddMore ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01]'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Scroll className="w-4 h-4 text-gold" />
                  <span className="text-parchment font-medium text-sm">{page.name}</span>
                </div>
                <span className="category-badge">{page.category}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-2 text-xs">
                <span className="flex items-center gap-1 text-gold">
                  <Zap className="w-3 h-3" />
                  {page.light} Light
                </span>
                <span className="flex items-center gap-1 text-purple-light">
                  <Clock className="w-3 h-3" />
                  {page.cooldown}
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground line-clamp-2">{page.effects}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

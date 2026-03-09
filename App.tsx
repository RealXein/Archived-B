import { useState } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { OutfitTab } from '@/components/tabs/OutfitTab';
import { WeaponTab } from '@/components/tabs/WeaponTab';
import { PagesTab } from '@/components/tabs/PagesTab';
import { TraitsTab } from '@/components/tabs/TraitsTab';
import { SinAffinitiesTab } from '@/components/tabs/SinAffinitiesTab';
import { SummaryTab } from '@/components/tabs/SummaryTab';
import { 
  Shield, 
  Sword, 
  Scroll, 
  Sparkles, 
  Flame, 
  FileText,
  Menu,
  X
} from 'lucide-react';

type TabId = 'outfit' | 'weapon' | 'pages' | 'traits' | 'sins' | 'summary';

interface Tab {
  id: TabId;
  name: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'outfit', name: 'Outfit', icon: <Shield className="w-4 h-4" /> },
  { id: 'weapon', name: 'Weapon', icon: <Sword className="w-4 h-4" /> },
  { id: 'pages', name: 'Pages', icon: <Scroll className="w-4 h-4" /> },
  { id: 'traits', name: 'Traits', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'sins', name: 'Sins', icon: <Flame className="w-4 h-4" /> },
  { id: 'summary', name: 'Summary', icon: <FileText className="w-4 h-4" /> }
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('outfit');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { name, outfit, weapon, pages, traits, getTotalSinPoints } = useBuildStore();

  const renderTab = () => {
    switch (activeTab) {
      case 'outfit': return <OutfitTab />;
      case 'weapon': return <WeaponTab />;
      case 'pages': return <PagesTab />;
      case 'traits': return <TraitsTab />;
      case 'sins': return <SinAffinitiesTab />;
      case 'summary': return <SummaryTab />;
      default: return <OutfitTab />;
    }
  };

  const getBuildStatus = () => {
    const items = [];
    if (outfit) items.push('Outfit');
    if (weapon) items.push('Weapon');
    if (pages.length > 0) items.push(`${pages.length} Pages`);
    if (traits.length > 0) items.push(`${traits.length} Traits`);
    if (getTotalSinPoints() > 0) items.push(`${getTotalSinPoints()} Sin Pts`);
    return items.length > 0 ? items.join(' | ') : 'Empty Build';
  };

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <div>
              <h1 className="gothic-header text-xl leading-none">Archived</h1>
              <p className="text-xs text-muted-foreground">Slot Builder</p>
            </div>

            {/* Build Status - Desktop */}
            <div className="hidden md:block">
              <p className="text-xs text-muted-foreground">Current Build</p>
              <p className="text-sm text-parchment truncate max-w-xs">{name}</p>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gold/20">
              <p className="text-xs text-muted-foreground mb-1">Current Build</p>
              <p className="text-sm text-parchment mb-3">{name}</p>
              <p className="text-xs text-gold">{getBuildStatus()}</p>
            </div>
          )}
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gold/20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button flex items-center gap-2 ${
                  activeTab === tab.id ? 'active' : ''
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-2">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as TabId)}
              className="archived-select w-full"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Active Tab */}
          <div className="lg:col-span-2">
            <div className="archived-card min-h-[600px]">
              {renderTab()}
            </div>
          </div>

          {/* Right Panel - Build Overview */}
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="archived-card">
              <h3 className="gothic-header text-lg mb-4">Build Overview</h3>
              
              {/* Outfit */}
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Outfit</p>
                <p className="text-parchment text-sm">{outfit?.name || 'None selected'}</p>
                {outfit && (
                  <div className="flex gap-2 mt-1 text-xs">
                    <span className="text-wrath">B:{outfit.blunt.toFixed(1)}</span>
                    <span className="text-lust">P:{outfit.pierce.toFixed(1)}</span>
                    <span className="text-sloth">S:{outfit.slash.toFixed(1)}</span>
                  </div>
                )}
              </div>

              <div className="ornate-divider" />

              {/* Weapon */}
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Weapon</p>
                <p className="text-parchment text-sm">{weapon?.name || 'None selected'}</p>
                {weapon && (
                  <p className="text-xs text-gold mt-1">{weapon.damage}</p>
                )}
              </div>

              <div className="ornate-divider" />

              {/* Pages */}
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Pages ({pages.length}/6)</p>
                {pages.length > 0 ? (
                  <div className="space-y-1">
                    {pages.slice(0, 3).map((page) => (
                      <p key={page.id} className="text-parchment text-xs truncate">
                        • {page.name}
                      </p>
                    ))}
                    {pages.length > 3 && (
                      <p className="text-muted-foreground text-xs">
                        +{pages.length - 3} more...
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-xs">None selected</p>
                )}
              </div>

              <div className="ornate-divider" />

              {/* Traits */}
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Traits ({traits.length}/4)</p>
                {traits.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {traits.map((trait) => (
                      <span
                        key={trait.id}
                        className="px-2 py-0.5 text-xs rounded bg-secondary text-parchment"
                      >
                        {trait.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-xs">None selected</p>
                )}
              </div>

              <div className="ornate-divider" />

              {/* Sin Points */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">Sin Affinities</p>
                <p className="text-gold text-sm">{getTotalSinPoints()}/50 points</p>
              </div>
            </div>

            {/* Tips */}
            <div className="archived-card">
              <h3 className="gothic-header text-sm mb-3">Tips</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Select an Outfit to define your base resistances and Keypage ability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Weapons determine your basic attack damage type and range</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Pages are combat abilities with Light costs and cooldowns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  <span>Allocate up to 50 points across 7 Sin Affinities for powerful passives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 mt-8 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            Archived Slot Builder - Inspired by Library of Ruina / Limbus Company
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Not affiliated with Project Moon or Roblox
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

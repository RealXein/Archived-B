import { useState } from 'react';
import { useBuildStore } from '@/store/buildStore';
import { sinAffinities } from '@/data/sinAffinities';
import { 
  Download, 
  Upload, 
  Copy, 
  Check, 
  Shield, 
  Sword, 
  Scroll, 
  Sparkles,
  Wind,
  Flame,
  Heart,
  Eye,
  Crown,
  Droplet,
  RotateCcw,
  Share2
} from 'lucide-react';

const sinIcons: Record<string, React.ReactNode> = {
  wrath: <Flame className="w-4 h-4" />,
  lust: <Wind className="w-4 h-4" />,
  sloth: <Shield className="w-4 h-4" />,
  gluttony: <Heart className="w-4 h-4" />,
  gloom: <Eye className="w-4 h-4" />,
  pride: <Crown className="w-4 h-4" />,
  envy: <Droplet className="w-4 h-4" />
};

export function SummaryTab() {
  const { 
    name, 
    setName,
    outfit, 
    weapon, 
    pages, 
    traits, 
    sinAffinities: sinValues,
    exportBuild,
    importBuild,
    resetBuild,
    getTotalSinPoints
  } = useBuildStore();

  const [copied, setCopied] = useState(false);
  const [importData, setImportData] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [importError, setImportError] = useState('');

  const handleExport = () => {
    const data = exportBuild();
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    if (!importData.trim()) return;
    
    const success = importBuild(importData);
    if (success) {
      setImportData('');
      setShowImport(false);
      setImportError('');
    } else {
      setImportError('Invalid build data. Please check and try again.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportData(content);
    };
    reader.readAsText(file);
  };

  const downloadBuild = () => {
    const data = exportBuild();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}_build.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="gothic-header text-xl">Build Summary</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowImport(!showImport)}
            className="btn-secondary text-xs flex items-center gap-2"
          >
            <Upload className="w-3 h-3" />
            Import
          </button>
          <button
            onClick={handleExport}
            className="btn-primary text-xs flex items-center gap-2"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={downloadBuild}
            className="btn-secondary text-xs flex items-center gap-2"
          >
            <Download className="w-3 h-3" />
            Download
          </button>
        </div>
      </div>

      {/* Import Section */}
      {showImport && (
        <div className="archived-card">
          <h3 className="text-sm text-gold mb-3">Import Build</h3>
          <textarea
            value={importData}
            onChange={(e) => setImportData(e.target.value)}
            placeholder="Paste build JSON here..."
            className="archived-select w-full h-24 mb-3 resize-none"
          />
          <div className="flex gap-2 mb-3">
            <label className="btn-secondary text-xs flex items-center gap-2 cursor-pointer">
              <Upload className="w-3 h-3" />
              Upload File
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={handleImport}
              disabled={!importData.trim()}
              className="btn-primary text-xs flex items-center gap-2 disabled:opacity-50"
            >
              <Share2 className="w-3 h-3" />
              Import
            </button>
          </div>
          {importError && (
            <p className="text-xs text-destructive">{importError}</p>
          )}
        </div>
      )}

      {/* Build Name */}
      <div className="archived-card gold-border">
        <label className="text-xs text-gold mb-2 block">Build Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="archived-select w-full text-lg"
          placeholder="Enter build name..."
        />
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="archived-card text-center">
          <Shield className="w-5 h-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Outfit</p>
          <p className="text-parchment font-medium">{outfit ? 'Selected' : 'None'}</p>
        </div>
        <div className="archived-card text-center">
          <Sword className="w-5 h-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Weapon</p>
          <p className="text-parchment font-medium">{weapon ? 'Selected' : 'None'}</p>
        </div>
        <div className="archived-card text-center">
          <Scroll className="w-5 h-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Pages</p>
          <p className="text-parchment font-medium">{pages.length}/6</p>
        </div>
        <div className="archived-card text-center">
          <Sparkles className="w-5 h-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Traits</p>
          <p className="text-parchment font-medium">{traits.length}/4</p>
        </div>
      </div>

      {/* Selected Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Outfit */}
        {outfit && (
          <div className="archived-card">
            <h3 className="text-sm text-gold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Outfit
            </h3>
            <p className="text-parchment font-medium">{outfit.name}</p>
            <div className="flex gap-3 mt-2 text-xs">
              <span className="text-wrath">B: {outfit.blunt.toFixed(1)}</span>
              <span className="text-lust">P: {outfit.pierce.toFixed(1)}</span>
              <span className="text-sloth">S: {outfit.slash.toFixed(1)}</span>
              <span className="text-purple-light">SPD: {outfit.speed}</span>
            </div>
          </div>
        )}

        {/* Weapon */}
        {weapon && (
          <div className="archived-card">
            <h3 className="text-sm text-gold mb-2 flex items-center gap-2">
              <Sword className="w-4 h-4" />
              Weapon
            </h3>
            <p className="text-parchment font-medium">{weapon.name}</p>
            <div className="flex gap-3 mt-2 text-xs">
              <span className="text-gold">{weapon.damage}</span>
              <span className="text-purple-light">Delay: {weapon.swingDelay}s</span>
            </div>
          </div>
        )}

        {/* Pages */}
        {pages.length > 0 && (
          <div className="archived-card lg:col-span-2">
            <h3 className="text-sm text-gold mb-2 flex items-center gap-2">
              <Scroll className="w-4 h-4" />
              Pages ({pages.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pages.map((page) => (
                <div key={page.id} className="p-2 rounded bg-secondary/30">
                  <p className="text-parchment text-sm">{page.name}</p>
                  <p className="text-xs text-muted-foreground">{page.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Traits */}
        {traits.length > 0 && (
          <div className="archived-card">
            <h3 className="text-sm text-gold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Traits ({traits.length})
            </h3>
            <div className="space-y-1">
              {traits.map((trait) => (
                <p key={trait.id} className="text-parchment text-sm">{trait.name}</p>
              ))}
            </div>
          </div>
        )}

        {/* Sin Affinities */}
        {getTotalSinPoints() > 0 && (
          <div className="archived-card">
            <h3 className="text-sm text-gold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Sin Affinities ({getTotalSinPoints()} pts)
            </h3>
            <div className="space-y-1">
              {sinAffinities.map((sin) => {
                const value = sinValues[sin.id] || 0;
                if (value === 0) return null;
                return (
                  <div key={sin.id} className="flex items-center gap-2">
                    <span className={`sin-${sin.id}`}>{sinIcons[sin.id]}</span>
                    <span className={`text-sm sin-${sin.id}`}>{sin.name}:</span>
                    <span className="text-parchment">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Reset Build */}
      <div className="ornate-divider" />
      
      <button
        onClick={resetBuild}
        className="w-full btn-secondary text-sm flex items-center justify-center gap-2 text-destructive hover:bg-destructive/10"
      >
        <RotateCcw className="w-4 h-4" />
        Reset Build
      </button>
    </div>
  );
}

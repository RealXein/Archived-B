import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Outfit, Weapon, Page, Trait } from '@/types';
import { sinAffinities as defaultSinAffinities, MAX_SIN_POINTS } from '@/data/sinAffinities';

interface BuildState {
  // Build Name
  name: string;
  setName: (name: string) => void;

  // Selected Items
  outfit: Outfit | null;
  weapon: Weapon | null;
  pages: Page[];
  traits: Trait[];
  sinAffinities: Record<string, number>;

  // Actions
  setOutfit: (outfit: Outfit | null) => void;
  setWeapon: (weapon: Weapon | null) => void;
  addPage: (page: Page) => void;
  removePage: (pageId: string) => void;
  clearPages: () => void;
  addTrait: (trait: Trait) => void;
  removeTrait: (traitId: string) => void;
  clearTraits: () => void;
  setSinAffinity: (sinId: string, value: number) => void;
  resetSinAffinities: () => void;
  getTotalSinPoints: () => number;
  getRemainingSinPoints: () => number;

  // Export/Import
  exportBuild: () => string;
  importBuild: (json: string) => boolean;
  resetBuild: () => void;
}

export const useBuildStore = create<BuildState>()(
  persist(
    (set, get) => ({
      // Initial State
      name: 'New Build',
      outfit: null,
      weapon: null,
      pages: [],
      traits: [],
      sinAffinities: defaultSinAffinities.reduce((acc, sin) => {
        acc[sin.id] = 0;
        return acc;
      }, {} as Record<string, number>),

      // Actions
      setName: (name) => set({ name }),

      setOutfit: (outfit) => set({ outfit }),

      setWeapon: (weapon) => set({ weapon }),

      addPage: (page) => {
        const { pages } = get();
        if (pages.length < 6 && !pages.find(p => p.id === page.id)) {
          set({ pages: [...pages, page] });
        }
      },

      removePage: (pageId) => {
        const { pages } = get();
        set({ pages: pages.filter(p => p.id !== pageId) });
      },

      clearPages: () => set({ pages: [] }),

      addTrait: (trait) => {
        const { traits } = get();
        if (traits.length < 4 && !traits.find(t => t.id === trait.id)) {
          set({ traits: [...traits, trait] });
        }
      },

      removeTrait: (traitId) => {
        const { traits } = get();
        set({ traits: traits.filter(t => t.id !== traitId) });
      },

      clearTraits: () => set({ traits: [] }),

      setSinAffinity: (sinId, value) => {
        const { sinAffinities } = get();
        const currentTotal = Object.values(sinAffinities).reduce((a, b) => a + b, 0);
        const currentValue = sinAffinities[sinId];
        const diff = value - currentValue;

        // Only allow if we have enough points or we're reducing
        if (diff <= 0 || currentTotal + diff <= MAX_SIN_POINTS) {
          set({
            sinAffinities: { ...sinAffinities, [sinId]: Math.max(0, value) }
          });
        }
      },

      resetSinAffinities: () => {
        set({
          sinAffinities: defaultSinAffinities.reduce((acc, sin) => {
            acc[sin.id] = 0;
            return acc;
          }, {} as Record<string, number>)
        });
      },

      getTotalSinPoints: () => {
        const { sinAffinities } = get();
        return Object.values(sinAffinities).reduce((a, b) => a + b, 0);
      },

      getRemainingSinPoints: () => {
        const { sinAffinities } = get();
        const total = Object.values(sinAffinities).reduce((a, b) => a + b, 0);
        return MAX_SIN_POINTS - total;
      },

      exportBuild: () => {
        const state = get();
        const buildData = {
          name: state.name,
          outfit: state.outfit,
          weapon: state.weapon,
          pages: state.pages,
          traits: state.traits,
          sinAffinities: state.sinAffinities,
          version: '1.0'
        };
        return JSON.stringify(buildData);
      },

      importBuild: (json) => {
        try {
          const data = JSON.parse(json);
          if (data.version === '1.0') {
            set({
              name: data.name || 'Imported Build',
              outfit: data.outfit || null,
              weapon: data.weapon || null,
              pages: data.pages || [],
              traits: data.traits || [],
              sinAffinities: data.sinAffinities || defaultSinAffinities.reduce((acc, sin) => {
                acc[sin.id] = 0;
                return acc;
              }, {} as Record<string, number>)
            });
            return true;
          }
          return false;
        } catch {
          return false;
        }
      },

      resetBuild: () => {
        set({
          name: 'New Build',
          outfit: null,
          weapon: null,
          pages: [],
          traits: [],
          sinAffinities: defaultSinAffinities.reduce((acc, sin) => {
            acc[sin.id] = 0;
            return acc;
          }, {} as Record<string, number>)
        });
      }
    }),
    {
      name: 'archived-build-storage',
      partialize: (state) => ({
        name: state.name,
        outfit: state.outfit,
        weapon: state.weapon,
        pages: state.pages,
        traits: state.traits,
        sinAffinities: state.sinAffinities
      })
    }
  )
);

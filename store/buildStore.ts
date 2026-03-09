import { create } from 'zustand';

interface BuildState {
  // Add your state properties here
  [key: string]: any;
}

export const useBuildStore = create<BuildState>(() => ({
  // Add your default state here
}));

export default useBuildStore;

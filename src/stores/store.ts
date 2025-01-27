import { RadioItem } from "@/features/radio/types";
import { create } from "zustand";
interface RadioState {
  currentPlaying: RadioItem | null;
  setCurrentPlaying: (state: RadioItem) => void;
  clearCurrentPlaying: () => void;
}
interface AuthState {
  isAuthed: boolean | null;
  setIsAuthed: (state: boolean | null) => void;
}

interface RssState {
  feedURL: string | null;
  setFeedURL: (state: string | null) => void;
  clearFeed: () => void;
}
export const useRadioStore = create<RadioState>((set) => ({
  currentPlaying: null,
  setCurrentPlaying: (newState) => set(() => ({ currentPlaying: newState })),
  clearCurrentPlaying: () => set(() => ({ currentPlaying: null })),
}));

export const useAuthStore = create<AuthState>((set) => ({
  isAuthed: null,
  setIsAuthed: (newState) => set(() => ({ isAuthed: newState })),
}));

export const useRssStore = create<RssState>((set) => ({
  feedURL: null,
  setFeedURL: (newState) => set(() => ({ feedURL: newState })),
  clearFeed: () => set(() => ({ feedURL: null })),
}));

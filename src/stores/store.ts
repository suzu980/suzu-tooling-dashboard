import { RadioItem } from "@/features/radio/types";
import { create } from "zustand";
interface RadioState {
  currentPlaying: RadioItem | null;
  setCurrentPlaying: (state: RadioItem) => void;
}
export const useRadioStore = create<RadioState>((set) => ({
  currentPlaying: null,
  setCurrentPlaying: (newState) => set(() => ({ currentPlaying: newState })),
}));

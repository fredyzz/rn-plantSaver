import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";


type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHasFinishedOnboarding: () => void;
};

export const useUserStore = create(persist<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasFinishedOnboarding: () =>
    set((state) => ({
      ...state,
      hasFinishedOnboarding: !state.hasFinishedOnboarding,
    })),
}),{
    name:"plantSaver-user-store",
    storage:createJSONStorage(() => AsyncStorage),
}));

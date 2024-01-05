import { create } from "zustand";

export const useAppStore = create<AppStoreProps>((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
}));

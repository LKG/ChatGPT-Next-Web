import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreKey } from "../constant";
import { getHeaders } from "../client/api";

export interface AuthControlStore {
  token: string;
  openaiUrl: string;
  updateToken: (_: string) => void;
  isAuthorized: () => boolean;
}

export const useAuthStore = create<AuthControlStore>()(
  persist(
    (set, get) => ({
      token: "",
      hideUserApiKey: false,
      openaiUrl: "/api/openai/",
      updateToken(token: string) {
        set(() => ({ token }));
      },
      isAuthorized() {
        get().fetch();

        // has token or has code or disabled access control
        return false;
      },
    }),
    {
      name: StoreKey.Access,
      version: 1,
    },
  ),
);

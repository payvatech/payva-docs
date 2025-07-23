import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const LINK_TOKEN_KEY = 'link-token'

type LinkTokenState = {
  linkToken: string | null
  setLinkToken: (token: string | null) => void
  removeLinkToken: () => void
}

export const useLinkTokenStore = create(
  persist<LinkTokenState>(
    (set) => ({
      linkToken: null,
      setLinkToken: (token) => set({ linkToken: token }),
      removeLinkToken: () => set({ linkToken: null }),
    }),
    {
      name: LINK_TOKEN_KEY,
    }
  )
)

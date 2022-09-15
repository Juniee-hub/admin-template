import create       from 'zustand'
import { devtools } from 'zustand/middleware'

import { getLocalStorage } from '../service/customFunction'

export const adminAuthStore = create(devtools((set) => ({
    isLogin: (getLocalStorage('isLogin') === 'true'),
    changeLogin: () => set((state) => ({ isLogin: !state.isLogin })),
    auth: {},
    setAuth: () => set((state) => ({ auth: state })),
    clearAuth: () => set(() => ({ auth: {} }))
})))

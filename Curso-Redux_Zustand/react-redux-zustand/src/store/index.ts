import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { player } from './slices/player'

export const store = configureStore({
  reducer: {
    player,
  },
})

export type RootState = ReturnType<typeof store.getState> // retorna todo o estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

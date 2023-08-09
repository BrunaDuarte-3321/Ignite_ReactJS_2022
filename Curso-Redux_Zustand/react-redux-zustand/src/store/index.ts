import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
  },
})
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState> // retorna todo o estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

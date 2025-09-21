import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'light', 
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
     
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', state.mode === 'dark')
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', action.payload === 'dark')
      }
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer

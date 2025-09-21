import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCollapsed: false,
  isMobileOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed
    },
    setSidebarCollapsed: (state, action) => {
      state.isCollapsed = action.payload
    },
    toggleMobileSidebar: (state) => {
      state.isMobileOpen = !state.isMobileOpen
    },
    setMobileSidebar: (state, action) => {
      state.isMobileOpen = action.payload
    }
  }
})

export const { 
  toggleSidebar, 
  setSidebarCollapsed, 
  toggleMobileSidebar, 
  setMobileSidebar 
} = sidebarSlice.actions
export default sidebarSlice.reducer

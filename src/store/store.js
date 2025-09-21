import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import sidebarSlice from './slices/sidebarSlice'
// import dashboardSlice from './slices/dashboardSlice'
// import tableSlice from './slices/tableSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sidebarSlice,
    // dashboard: dashboardSlice,
    // tables: tableSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export default store

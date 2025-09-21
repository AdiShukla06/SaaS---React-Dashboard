import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentView: 'dashboard', // 'dashboard' or 'orders'
  stats: [
    { 
      id: 1, 
      title: 'Customers', 
      value: '3,781', 
      change: '+11.01%', 
      trend: 'up',
      previousValue: '3,400'
    },
    { 
      id: 2, 
      title: 'Orders', 
      value: '1,219', 
      change: '-0.03%', 
      trend: 'down',
      previousValue: '1,220'
    },
    { 
      id: 3, 
      title: 'Revenue', 
      value: '$695', 
      change: '+15.03%', 
      trend: 'up',
      previousValue: '$604'
    },
    { 
      id: 4, 
      title: 'Growth', 
      value: '30.1%', 
      change: '+6.08%', 
      trend: 'up',
      previousValue: '28.4%'
    }
  ],
  chartData: {
    projections: [
      { month: 'Jan', projections: 20, actuals: 18 },
      { month: 'Feb', projections: 25, actuals: 22 },
      { month: 'Mar', projections: 22, actuals: 20 },
      { month: 'Apr', projections: 28, actuals: 25 },
      { month: 'May', projections: 18, actuals: 16 },
      { month: 'Jun', projections: 24, actuals: 22 }
    ],
    revenue: [
      { month: 'Jan', currentWeek: 15, previousWeek: 12 },
      { month: 'Feb', currentWeek: 12, previousWeek: 15 },
      { month: 'Mar', currentWeek: 8, previousWeek: 18 },
      { month: 'Apr', currentWeek: 16, previousWeek: 14 },
      { month: 'May', currentWeek: 18, previousWeek: 16 },
      { month: 'Jun', currentWeek: 22, previousWeek: 20 }
    ]
  },
  loading: false,
  error: null
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setStats: (state, action) => {
      state.stats = action.payload
    },
    updateStat: (state, action) => {
      const { id, updates } = action.payload
      const statIndex = state.stats.findIndex(stat => stat.id === id)
      if (statIndex !== -1) {
        state.stats[statIndex] = { ...state.stats[statIndex], ...updates }
      }
    },
    setChartData: (state, action) => {
      state.chartData = { ...state.chartData, ...action.payload }
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    refreshData: (state) => {
      state.loading = true
      // Simulate data refresh
      setTimeout(() => {
        state.loading = false
      }, 1000)
    }
  }
})

export const { 
  setCurrentView,
  setLoading, 
  setStats, 
  updateStat, 
  setChartData, 
  setError,
  refreshData 
} = dashboardSlice.actions

export default dashboardSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

// Mock data for orders table matching your exact design
const mockOrders = [
  { 
    id: '#CM9801', 
    user: 'Natali Craig', 
    email: 'natali.craig@example.com',
    avatar: 'https://i.pravatar.cc/32?img=1',
    project: 'Landing Page', 
    address: 'Meadow Lane Oakland', 
    date: 'Just now', 
    status: 'In Progress',
    statusColor: 'blue'
  },
  { 
    id: '#CM9802', 
    user: 'Kate Morrison', 
    email: 'kate.morrison@example.com',
    avatar: 'https://i.pravatar.cc/32?img=2',
    project: 'CRM Admin pages', 
    address: 'Larry San Francisco', 
    date: 'A minute ago', 
    status: 'Complete',
    statusColor: 'green'
  },
  { 
    id: '#CM9803', 
    user: 'Drew Cano', 
    email: 'drew.cano@example.com',
    avatar: 'https://i.pravatar.cc/32?img=3',
    project: 'Client Project', 
    address: 'Bagwell Avenue Ocala', 
    date: '1 hour ago', 
    status: 'Pending',
    statusColor: 'blue'
  },
  { 
    id: '#CM9804', 
    user: 'Orlando Diggs', 
    email: 'orlando.diggs@example.com',
    avatar: 'https://i.pravatar.cc/32?img=4',
    project: 'Admin Dashboard', 
    address: 'Washburn Baton Rouge', 
    date: 'Yesterday', 
    status: 'Approved',
    statusColor: 'yellow'
  },
  { 
    id: '#CM9805', 
    user: 'Andi Lane', 
    email: 'andi.lane@example.com',
    avatar: 'https://i.pravatar.cc/32?img=5',
    project: 'App Landing Page', 
    address: 'Nest Lane Olivette', 
    date: 'Feb 2, 2023', 
    status: 'Rejected',
    statusColor: 'gray'
  }
]

const initialState = {
  orders: {
    data: mockOrders,
    filteredData: mockOrders,
    searchQuery: '',
    sortBy: 'date',
    sortOrder: 'desc',
    currentPage: 1,
    itemsPerPage: 10,
    loading: false,
    selectedOrders: [],
    filters: {
      status: 'all',
      dateRange: 'all'
    }
  },
  users: {
    data: [],
    filteredData: [],
    searchQuery: '',
    sortBy: 'name',
    sortOrder: 'asc',
    currentPage: 1,
    itemsPerPage: 10,
    loading: false
  }
}

const tableSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    // Search functionality
    setSearchQuery: (state, action) => {
      const { table, query } = action.payload
      state[table].searchQuery = query
      
      // Filter data based on search query
      const originalData = state[table].data
      if (query.trim() === '') {
        state[table].filteredData = originalData
      } else {
        state[table].filteredData = originalData.filter(item =>
          Object.values(item).some(value =>
            String(value).toLowerCase().includes(query.toLowerCase())
          )
        )
      }
      
      // Reset to first page after search
      state[table].currentPage = 1
    },
    
    // Sorting functionality
    setSortBy: (state, action) => {
      const { table, sortBy, sortOrder } = action.payload
      state[table].sortBy = sortBy
      state[table].sortOrder = sortOrder
      
      // Sort the filtered data
      state[table].filteredData.sort((a, b) => {
        const aVal = a[sortBy]
        const bVal = b[sortBy]
        
        // Handle different data types
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          const comparison = aVal.localeCompare(bVal)
          return sortOrder === 'asc' ? comparison : -comparison
        }
        
        if (sortOrder === 'asc') {
          return aVal > bVal ? 1 : -1
        } else {
          return aVal < bVal ? 1 : -1
        }
      })
    },
    
    // Pagination
    setCurrentPage: (state, action) => {
      const { table, page } = action.payload
      state[table].currentPage = page
    },
    
    setItemsPerPage: (state, action) => {
      const { table, itemsPerPage } = action.payload
      state[table].itemsPerPage = itemsPerPage
      state[table].currentPage = 1 // Reset to first page
    },
    
    // Order selection
    toggleOrderSelection: (state, action) => {
      const orderId = action.payload
      const currentSelected = state.orders.selectedOrders
      
      if (currentSelected.includes(orderId)) {
        state.orders.selectedOrders = currentSelected.filter(id => id !== orderId)
      } else {
        state.orders.selectedOrders = [...currentSelected, orderId]
      }
    },
    
    toggleSelectAllOrders: (state) => {
      const allOrderIds = state.orders.filteredData.map(order => order.id)
      const currentSelected = state.orders.selectedOrders
      
      if (currentSelected.length === allOrderIds.length) {
        state.orders.selectedOrders = []
      } else {
        state.orders.selectedOrders = allOrderIds
      }
    },
    
    // Filters
    setStatusFilter: (state, action) => {
      const status = action.payload
      state.orders.filters.status = status
      
      // Apply status filter
      let filteredData = state.orders.data
      
      if (status !== 'all') {
        filteredData = filteredData.filter(order => 
          order.status.toLowerCase() === status.toLowerCase()
        )
      }
      
      // Apply search if exists
      if (state.orders.searchQuery.trim() !== '') {
        const query = state.orders.searchQuery
        filteredData = filteredData.filter(item =>
          Object.values(item).some(value =>
            String(value).toLowerCase().includes(query.toLowerCase())
          )
        )
      }
      
      state.orders.filteredData = filteredData
      state.orders.currentPage = 1
    },
    
    // Loading states
    setLoading: (state, action) => {
      const { table, loading } = action.payload
      state[table].loading = loading
    }
  }
})

export const { 
  setSearchQuery, 
  setSortBy, 
  setCurrentPage, 
  setItemsPerPage,
  toggleOrderSelection,
  toggleSelectAllOrders,
  setStatusFilter,
  setLoading
} = tableSlice.actions

export default tableSlice.reducer

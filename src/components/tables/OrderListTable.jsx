import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  ChevronLeft, 
  ChevronRight,
  MoreHorizontal,
  Plus,
  Calendar,
  ArrowUp,
  ArrowDown,
  X,
  ChevronDown
} from 'lucide-react'

const OrderListTable = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrders, setSelectedOrders] = useState(['#CM9804'])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })
  const [showFilters, setShowFilters] = useState(false)
  const [statusFilter, setStatusFilter] = useState('all')

  // Extended mock data for better pagination demonstration
  const allOrdersData = [
    { id: '#CM9801', user: 'Natali Craig', avatar: 'https://i.pravatar.cc/32?img=1', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'blue' },
    { id: '#CM9802', user: 'Kate Morrison', avatar: 'https://i.pravatar.cc/32?img=2', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'green' },
    { id: '#CM9803', user: 'Drew Cano', avatar: 'https://i.pravatar.cc/32?img=3', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'blue' },
    { id: '#CM9804', user: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/32?img=4', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'yellow' },
    { id: '#CM9805', user: 'Andi Lane', avatar: 'https://i.pravatar.cc/32?img=5', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'gray' },
    { id: '#CM9806', user: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/32?img=6', project: 'E-commerce Site', address: 'Main Street Boston', date: '2 hours ago', status: 'In Progress', statusColor: 'blue' },
    { id: '#CM9807', user: 'John Smith', avatar: 'https://i.pravatar.cc/32?img=7', project: 'Mobile App', address: 'Broadway New York', date: '3 hours ago', status: 'Complete', statusColor: 'green' },
    { id: '#CM9808', user: 'Emma Davis', avatar: 'https://i.pravatar.cc/32?img=8', project: 'Dashboard Redesign', address: 'Silicon Valley', date: '1 day ago', status: 'Pending', statusColor: 'blue' },
    { id: '#CM9809', user: 'Michael Brown', avatar: 'https://i.pravatar.cc/32?img=9', project: 'API Integration', address: 'Tech District Austin', date: '2 days ago', status: 'Approved', statusColor: 'yellow' },
    { id: '#CM9810', user: 'Lisa Johnson', avatar: 'https://i.pravatar.cc/32?img=10', project: 'Website Optimization', address: 'Downtown Seattle', date: '3 days ago', status: 'Rejected', statusColor: 'gray' },
    { id: '#CM9811', user: 'David Wilson', avatar: 'https://i.pravatar.cc/32?img=11', project: 'Cloud Migration', address: 'Tech Hub Denver', date: '4 days ago', status: 'In Progress', statusColor: 'blue' },
    { id: '#CM9812', user: 'Jennifer Lee', avatar: 'https://i.pravatar.cc/32?img=12', project: 'Security Audit', address: 'Cyber District Miami', date: '5 days ago', status: 'Complete', statusColor: 'green' },
    { id: '#CM9813', user: 'Robert Taylor', avatar: 'https://i.pravatar.cc/32?img=13', project: 'Database Upgrade', address: 'Innovation Park Chicago', date: '1 week ago', status: 'Pending', statusColor: 'blue' },
    { id: '#CM9814', user: 'Amanda White', avatar: 'https://i.pravatar.cc/32?img=14', project: 'UI/UX Design', address: 'Design District Portland', date: '1 week ago', status: 'Approved', statusColor: 'yellow' },
    { id: '#CM9815', user: 'Chris Martinez', avatar: 'https://i.pravatar.cc/32?img=15', project: 'Performance Testing', address: 'Tech Center Phoenix', date: '2 weeks ago', status: 'Rejected', statusColor: 'gray' }
  ]

  // Filter data based on search and status filter
  const filteredData = useMemo(() => {
    let filtered = allOrdersData

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(order =>
        Object.values(order).some(value =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter)
    }

    return filtered
  }, [searchQuery, statusFilter])

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredData, sortConfig])

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return sortedData.slice(startIndex, startIndex + itemsPerPage)
  }, [sortedData, currentPage, itemsPerPage])

  // Calculate pagination info
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage + 1
  const endIndex = Math.min(currentPage * itemsPerPage, sortedData.length)

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return <ArrowUpDown className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-50" />
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="w-4 h-4 ml-1 text-blue-500" />
      : <ArrowDown className="w-4 h-4 ml-1 text-blue-500" />
  }

  const getStatusBadge = (status, color) => {
    const colorClasses = {
      blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
      green: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
      yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300',
      gray: 'bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
    }

    const dotColors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      gray: 'bg-gray-500'
    }

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClasses[color]}`}>
        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${dotColors[color]}`}></div>
        {status}
      </span>
    )
  }

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const toggleSelectAll = () => {
    setSelectedOrders(prev => 
      prev.length === paginatedData.length ? [] : paginatedData.map(order => order.id)
    )
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setSelectedOrders([]) // Clear selections when changing pages
  }

  const statusOptions = ['all', 'In Progress', 'Complete', 'Pending', 'Approved', 'Rejected']

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </button>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            
            {showFilters && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <div className="p-3">
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status}>
                        {status === 'all' ? 'All Statuses' : status}
                      </option>
                    ))}
                  </select>
                  {statusFilter !== 'all' && (
                    <button
                      onClick={() => {
                        setStatusFilter('all')
                        setCurrentPage(1)
                      }}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-700 flex items-center"
                    >
                      <X className="w-3 h-3 mr-1" />
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setSortConfig({ key: null, direction: null })}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1) // Reset to first page when searching
            }}
            className="pl-10 pr-4 py-2 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('')
                setCurrentPage(1)
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>
          Showing {sortedData.length > 0 ? startIndex : 0} to {endIndex} of {sortedData.length} results
          {searchQuery && ` for "${searchQuery}"`}
          {statusFilter !== 'all' && ` filtered by ${statusFilter}`}
        </span>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="w-12 px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === paginatedData.length && paginatedData.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </th>
                {[
                  { key: 'id', label: 'Order ID' },
                  { key: 'user', label: 'User' },
                  { key: 'project', label: 'Project' },
                  { key: 'address', label: 'Address' },
                  { key: 'date', label: 'Date' },
                  { key: 'status', label: 'Status' }
                ].map(column => (
                  <th 
                    key={column.key}
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="flex items-center">
                      {column.label}
                      {getSortIcon(column.key)}
                    </div>
                  </th>
                ))}
                <th className="w-16 px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <AnimatePresence>
                {paginatedData.length > 0 ? (
                  paginatedData.map((order, index) => (
                    <motion.tr
                      key={`${order.id}-${currentPage}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                        selectedOrders.includes(order.id) ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => toggleOrderSelection(order.id)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {order.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full object-cover mr-3"
                            src={order.avatar}
                            alt={order.user}
                          />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {order.user}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {order.project}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        {order.address}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          {order.date}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(order.status, order.statusColor)}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                      No orders found matching your criteria.
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-end space-x-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderListTable

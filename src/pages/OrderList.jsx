import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, ArrowUpDown, Search, Calendar, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'

const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState(['#CM9804']) // Pre-select one row
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const orders = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'https://i.pravatar.cc/32?img=1' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { label: 'In Progress', color: 'blue' }
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/32?img=2' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { label: 'Complete', color: 'green' }
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'https://i.pravatar.cc/32?img=3' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { label: 'Pending', color: 'blue' }
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/32?img=4' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { label: 'Approved', color: 'yellow' }
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'https://i.pravatar.cc/32?img=5' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { label: 'Rejected', color: 'gray' }
    },
    // Duplicate for pagination demo
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'https://i.pravatar.cc/32?img=1' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: { label: 'In Progress', color: 'blue' }
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/32?img=2' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: { label: 'Complete', color: 'green' }
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: 'https://i.pravatar.cc/32?img=3' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: { label: 'Pending', color: 'blue' }
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/32?img=4' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: { label: 'Approved', color: 'yellow' }
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: 'https://i.pravatar.cc/32?img=5' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: { label: 'Rejected', color: 'gray' }
    }
  ]

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const toggleSelectAll = () => {
    setSelectedOrders(prev =>
      prev.length === orders.length ? [] : orders.map(order => order.id)
    )
  }

  const getStatusBadge = (status) => {
    const statusStyles = {
      blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
      green: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
      yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300',
      gray: 'bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
    }

    const dotStyles = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      gray: 'bg-gray-500'
    }

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status.color]}`}>
        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${dotStyles[status.color]}`}></div>
        {status.label}
      </span>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 max-w-[1600px] mx-auto min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Order List
        </h1>

        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors duration-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors duration-200">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
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
                    checked={selectedOrders.length === orders.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Address</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="w-16 px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order, index) => (
                <motion.tr
                  key={`${order.id}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full object-cover mr-3"
                        src={order.user.avatar}
                        alt={order.user.name}
                      />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.user.name}
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
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-end space-x-2">
            <button 
              className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors duration-200"
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors duration-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default OrderList

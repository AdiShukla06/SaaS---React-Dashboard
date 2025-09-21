import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, BarChart3 } from 'lucide-react'

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      trend: 'up',
      icon: Users,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 2,
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      trend: 'down',
      icon: ShoppingCart,
      bgColor: 'bg-white dark:bg-gray-800',
      iconColor: 'text-gray-600 dark:text-gray-400'
    },
    {
      id: 3,
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      trend: 'up',
      icon: DollarSign,
      bgColor: 'bg-white dark:bg-gray-800',
      iconColor: 'text-gray-600 dark:text-gray-400'
    },
    {
      id: 4,
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      trend: 'up',
      icon: BarChart3,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ]

  return (
    
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${stat.bgColor} rounded-2xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
        >
          {/* Icon at top center */}
          {/* <div className="flex justify-center mb-3">
            <div className={`p-2 rounded-xl ${stat.iconColor} bg-white dark:bg-gray-800 shadow-sm`}>
              <stat.icon className="w-5 h-5" />
            </div>
          </div> */}
          
          {/* Content */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mb-1">
              {stat.title}
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </p>
            
            {/* Change indicator */}
            <div className="flex items-center justify-center">
              {stat.trend === 'up' ? (
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
              )}
              <span className={`text-xs font-semibold ${
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCards

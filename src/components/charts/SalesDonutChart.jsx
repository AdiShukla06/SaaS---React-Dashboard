import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const SalesDonutChart = () => {
  const salesData = [
    { name: 'Direct', value: 38.6, amount: '$300.56', color: '#1F2937' },
    { name: 'Affiliate', value: 22.1, amount: '$135.18', color: '#10B981' },
    { name: 'Sponsored', value: 25.2, amount: '$154.02', color: '#8B5CF6' },
    { name: 'E-mail', value: 14.1, amount: '$48.96', color: '#60A5FA' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-fit"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Total Sales
      </h3>
      
      <div className="relative mb-6">
        <div className="h-48 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={40}
                dataKey="value"
                strokeWidth={0}
                animationBegin={500}
                animationDuration={800}
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Center percentage display */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">38.6%</div>
          </div>
        </motion.div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {salesData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {item.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default SalesDonutChart

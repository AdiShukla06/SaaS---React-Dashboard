import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const RevenueChart = () => {
  const data = [
    { month: 'Jan', currentWeek: 15, previousWeek: 12 },
    { month: 'Feb', currentWeek: 12, previousWeek: 17 },
    { month: 'Mar', currentWeek: 8, previousWeek: 15 },
    { month: 'Apr', currentWeek: 16, previousWeek: 12 },
    { month: 'May', currentWeek: 22, previousWeek: 18 },
    { month: 'Jun', currentWeek: 20, previousWeek: 22 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue
        </h3>
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Current Week $58,211
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Previous Week $68,768
            </span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              domain={[0, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <Line 
              type="monotone" 
              dataKey="currentWeek" 
              stroke="#1F2937" 
              strokeWidth={3}
              dot={{ fill: '#1F2937', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#1F2937', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="previousWeek" 
              stroke="#60A5FA" 
              strokeWidth={3}
              strokeDasharray="8 8"
              dot={{ fill: '#60A5FA', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#60A5FA', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default RevenueChart

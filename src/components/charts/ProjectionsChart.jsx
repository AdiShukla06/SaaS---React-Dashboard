import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const ProjectionsChart = () => {
  const data = [
    { month: 'Jan', projections: 18, actuals: 20 },
    { month: 'Feb', projections: 22, actuals: 25 },
    { month: 'Mar', projections: 20, actuals: 22 },
    { month: 'Apr', projections: 25, actuals: 28 },
    { month: 'May', projections: 16, actuals: 18 },
    { month: 'Jun', projections: 22, actuals: 24 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 h-full"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Projections vs Actuals
      </h3>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }} barCategoryGap="15%">
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#6B7280' }}
              domain={[0, 30]}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar 
              dataKey="projections" 
              fill="#93C5FD" 
              radius={[2, 2, 0, 0]}
              barSize={12}
            />
            <Bar 
              dataKey="actuals" 
              fill="#3B82F6" 
              radius={[2, 2, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ProjectionsChart

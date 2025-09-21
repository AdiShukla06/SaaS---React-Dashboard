import { motion } from 'framer-motion'

const RevenueMapChart = () => {
  const locationData = [
    { city: 'New York', revenue: '72K' },
    { city: 'San Francisco', revenue: '39K' },
    { city: 'Sydney', revenue: '25K' },
    { city: 'Singapore', revenue: '61K' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-fit"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Revenue by Location
      </h3>
      
      {/* Simple Map Visualization */}
      <div className="relative h-32 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl mb-6 overflow-hidden">
        {/* Simple world silhouette using CSS shapes */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Continent shapes using simple divs */}
          <div className="relative w-full h-full">
            {/* North America */}
            <div className="absolute top-6 left-6 w-16 h-12 bg-gray-300 dark:bg-gray-500 rounded-lg opacity-40 transform rotate-12"></div>
            
            {/* Europe/Africa */}
            <div className="absolute top-4 left-1/2 w-12 h-16 bg-gray-300 dark:bg-gray-500 rounded-lg opacity-40 transform -translate-x-1/2"></div>
            
            {/* Asia */}
            <div className="absolute top-2 right-8 w-20 h-14 bg-gray-300 dark:bg-gray-500 rounded-xl opacity-40 transform -rotate-6"></div>
            
            {/* Australia */}
            <div className="absolute bottom-4 right-6 w-8 h-6 bg-gray-300 dark:bg-gray-500 rounded-lg opacity-40"></div>
            
            {/* Data points with simple positioning */}
            <div className="absolute top-8 left-10 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute top-10 left-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-6 right-8 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Location Revenue List */}
      <div className="space-y-3">
        {locationData.map((location, index) => (
          <div
            key={location.city}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {location.city}
              </span>
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {location.revenue}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default RevenueMapChart

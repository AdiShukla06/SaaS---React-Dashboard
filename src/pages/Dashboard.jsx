import { motion } from 'framer-motion'
import StatsCards from '../components/dashboard/StatsCards'
import ProjectionsChart from '../components/charts/ProjectionsChart'
import RevenueChart from '../components/charts/RevenueChart'
import RevenueMapChart from '../components/charts/RevenueMapChart'
import SalesDonutChart from '../components/charts/SalesDonutChart'
import ProductsTable from '../components/tables/ProductsTable'

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" max-w-[1600px] mx-auto" // Increased width and padding
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-left text-lg font-semibold text-gray-700 dark:text-white">
            eCommerce
          </h1>
        </motion.div>

        {/* Combined Row: Stats Cards + Projections Chart (50:50 Ratio) */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Stats Cards Container - Takes 1 column (50%) */}
          <div className="xl:col-span-1">
            <StatsCards />
          </div>
          
          {/* Projections Chart - Takes 1 column (50%) */}
          <div className="xl:col-span-1">
            <ProjectionsChart />
          </div>
        </motion.div>

        {/* Revenue Chart + Map Row */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div className="xl:col-span-1">
            <RevenueMapChart />
          </div>
        </motion.div>

        {/* Bottom Row - Table and Donut Chart */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <ProductsTable />
          </div>
          <div className="xl:col-span-1">
            <SalesDonutChart />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dashboard

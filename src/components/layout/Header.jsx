import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/slices/themeSlice'
import { toggleMobileSidebar } from '../../store/slices/sidebarSlice'
import { 
  Menu, 
  Sun, 
  Moon, 
  Search, 
  Bell, 
  Grid3X3,
  RotateCcw,
  Star,
  ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const Header = ({ onNotificationsClick }) => {
  const dispatch = useDispatch()
  const { mode } = useSelector((state) => state.theme)
  const { isCollapsed } = useSelector((state) => state.sidebar)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 right-0 z-20 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-200`}
      style={{
        left: window.innerWidth >= 1024 ? (isCollapsed ? '4rem' : '16rem') : '0'
      }}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section - Breadcrumb Navigation */}
        <div className="flex items-center space-x-4 min-w-0">
          {/* Mobile menu button */}
          <button
            onClick={() => dispatch(toggleMobileSidebar())}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <Star className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-gray-500 dark:text-gray-400">Dashboards</span>
            <ChevronRight className="w-3 h-3 text-gray-400 dark:text-gray-500" />
            <span className="text-gray-900 dark:text-white font-medium">Default</span>
          </div>
        </div>

        {/* Center Section - Large Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-16 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                ⌘/
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Action Icons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title="Toggle theme"
          >
            {mode === 'light' ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </motion.button>

          {/* History/Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title="History"
          >
            <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNotificationsClick && onNotificationsClick()}
            className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
          </motion.button>

          {/* Apps Grid */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title="Apps"
          >
            <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

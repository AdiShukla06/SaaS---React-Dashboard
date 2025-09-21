import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar, setMobileSidebar } from '../../store/slices/sidebarSlice'
import { 
  Home, 
  FolderOpen,
  Menu,
  X,
  ChevronRight,
  User,
  UserCheck,
  Building,
  FileText,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  BookOpen
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isCollapsed, isMobileOpen } = useSelector((state) => state.sidebar)
  const [activeTab, setActiveTab] = useState('favorites') // Default to favorites
  const [expandedSections, setExpandedSections] = useState(['user-profile'])
  
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const sidebarVariants = {
    expanded: { width: '16rem' },
    collapsed: { width: '4rem' }
  }

  // Shared tab content (same items in both Favorites and Recently)
  const tabContent = (
    <div className="space-y-1">
      <SidebarLink 
        icon={Home} 
        label="Overview" 
        href="/dashboard"
      />
      <SidebarLink 
        icon={FolderOpen} 
        label="Projects" 
        href="/projects"
      />
    </div>
  )

  const SidebarContent = () => (
    <div className="py-4 px-3 space-y-5">
      {/* Tab System - Favorites and Recently */}
      <div>
        {/* Tab Headers */}
        <div className="flex space-x-1 mb-4">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-2 py-1 text-base font-normal rounded transition-colors duration-200 ${
              activeTab === 'favorites'
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('recently')}
            className={`px-2 py-1 text-base font-normal rounded transition-colors duration-200 ${
              activeTab === 'recently'
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            Recently
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabContent}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dashboards Section */}
      <div>
        <h3 className="text-xs font-normal text-gray-400 dark:text-gray-500 mb-3 px-1">
          Dashboards
        </h3>
        <div className="space-y-1">
          <SidebarLink 
            icon={BarChart3} 
            label="Default" 
            href="/dashboard"
            isActive={true}
          />
          <SidebarLink 
            icon={ShoppingCart} 
            label="eCommerce" 
            href="/"
          />
          <SidebarLink 
            icon={FolderOpen} 
            label="Projects" 
            href="/projects"
          />
          <SidebarLink 
            icon={BookOpen} 
            label="Online Courses" 
            href="/courses"
          />
        </div>
      </div>

      {/* Pages Section */}
      <div>
        <h3 className="text-xs font-normal text-gray-400 dark:text-gray-500 mb-3 px-1">
          Pages
        </h3>
        <div className="space-y-1">
          {/* User Profile with Dropdown */}
          <div>
            <button
              onClick={() => toggleSection('user-profile')}
              className="w-full flex items-center justify-between px-1 py-1.5 text-base font-normal text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2.5 flex-shrink-0" />
                <span>User Profile</span>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.includes('user-profile') ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSections.includes('user-profile') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-7 mt-1 space-y-1 overflow-hidden"
                >
                  <SubMenuItem label="Overview" href="/profile/overview" />
                  <SubMenuItem label="Projects" href="/profile/projects" />
                  <SubMenuItem label="Campaigns" href="/profile/campaigns" />
                  <SubMenuItem label="Documents" href="/profile/documents" />
                  <SubMenuItem label="Followers" href="/profile/followers" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <SidebarLink 
            icon={UserCheck} 
            label="Account" 
            href="/account"
          />
          <SidebarLink 
            icon={Building} 
            label="Corporate" 
            href="/corporate"
          />
          <SidebarLink 
            icon={FileText} 
            label="Blog" 
            href="/blog"
          />
          <SidebarLink 
            icon={MessageSquare} 
            label="Social" 
            href="/social"
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => dispatch(setMobileSidebar(false))}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isCollapsed ? 'collapsed' : 'expanded'}
        className="hidden lg:flex flex-col fixed left-0 top-0 h-full bg-white dark:bg-gray-900 z-30"
      >
        {/* Compact Header */}
        <div className="flex items-center h-14 px-3 py-3">
          <div className="flex items-center w-full">
            {/* Profile Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <img 
                src="https://i.pravatar.cc/32?img=7" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {!isCollapsed && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-base font-medium text-gray-900 dark:text-white"
              >
                Aditya
              </motion.h1>
            )}
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto">
          {!isCollapsed && <SidebarContent />}

          {/* Collapsed State Icons */}
          {isCollapsed && (
            <div className="px-2 py-3 space-y-1">
              <CollapsedIcon icon={BarChart3} isActive={true} />
              <CollapsedIcon icon={ShoppingCart} />
              <CollapsedIcon icon={FolderOpen} />
              <CollapsedIcon icon={User} />
            </div>
          )}
        </div>

        {/* Compact Toggle Button */}
        <div className="p-2">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="w-full p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Menu className="w-4 h-4 mx-auto text-gray-400" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 z-50 lg:hidden overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-14 px-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://i.pravatar.cc/32?img=7" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-base font-medium text-gray-900 dark:text-white">
                  ByeWind
                </h1>
              </div>
              <button
                onClick={() => dispatch(setMobileSidebar(false))}
                className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Compact Sidebar Link Component
const SidebarLink = ({ icon: Icon, label, href, isActive = false }) => (
  <motion.a
    href={href}
    whileHover={{ x: 1 }}
    className={`flex items-center px-1 py-1.5 text-base font-normal transition-colors duration-200 group ${
      isActive 
        ? 'text-gray-900 dark:text-white' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }`}
  >
    <Icon className="w-4 h-4 mr-2.5 flex-shrink-0" />
    <span className="truncate">{label}</span>
  </motion.a>
)

// Compact Sub Menu Item
const SubMenuItem = ({ label, href }) => (
  <motion.a
    href={href}
    whileHover={{ x: 1 }}
    className="block px-1 py-1 text-xs font-normal text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
  >
    {label}
  </motion.a>
)

// Compact Collapsed Icon
const CollapsedIcon = ({ icon: Icon, isActive = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`flex items-center justify-center w-8 h-8 rounded transition-colors duration-200 ${
      isActive 
        ? 'text-gray-900 dark:text-white' 
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
    }`}
  >
    <Icon className="w-4 h-4" />
  </motion.div>
)

export default Sidebar

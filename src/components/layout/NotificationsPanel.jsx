import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bug, User, Radio, UserPlus } from 'lucide-react'

const NotificationsPanel = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      icon: Bug,
      iconBg: 'bg-gray-100 dark:bg-gray-700',
      iconColor: 'text-gray-600 dark:text-gray-400',
      message: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      id: 2,
      icon: User,
      iconBg: 'bg-gray-100 dark:bg-gray-700',
      iconColor: 'text-gray-600 dark:text-gray-400',
      message: 'New user registered',
      time: '59 minutes ago'
    },
    {
      id: 3,
      icon: Bug,
      iconBg: 'bg-gray-100 dark:bg-gray-700',
      iconColor: 'text-gray-600 dark:text-gray-400',
      message: 'You have a bug that needs...',
      time: '12 hours ago'
    },
    {
      id: 4,
      icon: Radio,
      iconBg: 'bg-gray-100 dark:bg-gray-700',
      iconColor: 'text-gray-600 dark:text-gray-400',
      message: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM'
    }
  ]

  const activities = [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/32?img=1',
      name: 'You',
      message: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/32?img=2',
      name: 'System',
      message: 'Released a new version',
      time: '59 minutes ago'
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/32?img=3',
      name: 'User',
      message: 'Submitted a bug',
      time: '12 hours ago'
    },
    {
      id: 4,
      avatar: 'https://i.pravatar.cc/32?img=4',
      name: 'Admin',
      message: 'Modified A data in Page X',
      time: 'Today, 11:59 AM'
    },
    {
      id: 5,
      avatar: 'https://i.pravatar.cc/32?img=5',
      name: 'Admin',
      message: 'Deleted a page in Project X',
      time: 'Feb 5, 2023'
    }
  ]

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: 'https://i.pravatar.cc/32?img=1', online: true },
    { id: 2, name: 'Drew Cano', avatar: 'https://i.pravatar.cc/32?img=3', online: false },
    { id: 3, name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/32?img=4', online: true },
    { id: 4, name: 'Andi Lane', avatar: 'https://i.pravatar.cc/32?img=5', online: false },
    { id: 5, name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/32?img=2', online: true },
    { id: 6, name: 'Koray Okumus', avatar: 'https://i.pravatar.cc/32?img=6', online: true }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-25"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notifications
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Notifications Section */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 -m-2 rounded-lg transition-colors duration-200"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${notification.iconBg} flex items-center justify-center`}>
                      <notification.icon className={`w-4 h-4 ${notification.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activities Section */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Activities
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 -m-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={activity.avatar}
                        alt={activity.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.message}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contacts Section */}
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Contacts
              </h3>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 -m-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={contact.avatar}
                        alt={contact.name}
                        loading="lazy"
                      />
                      {contact.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {contact.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default NotificationsPanel

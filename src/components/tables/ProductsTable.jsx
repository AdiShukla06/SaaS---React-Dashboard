import { motion } from 'framer-motion'

const ProductsTable = () => {
  const productsData = [
    { id: 1, name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { id: 2, name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { id: 3, name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { id: 4, name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { id: 5, name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-fit"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Top Selling Products
        </h3>
      </div>
      
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 pb-3">Name</th>
              <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 pb-3">Price</th>
              <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 pb-3">Quantity</th>
              <th className="text-right text-sm font-medium text-gray-500 dark:text-gray-400 pb-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="border-b border-gray-50 dark:border-gray-700 last:border-b-0"
              >
                <td className="py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {product.price}
                  </span>
                </td>
                <td className="py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {product.quantity}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {product.amount}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default ProductsTable

'use client'

import { useState } from 'react'
import { Users, Package, Plus } from 'lucide-react'
import { UsersTab } from './UsersTab'
import { ProductsTab } from './ProductsTab'

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'users' | 'products'>('users')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard
        </h2>
        <p className="text-gray-600">
          Manage your users and products with ease
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'users'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Users</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'products'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Products</span>
            </div>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        {activeTab === 'users' ? <UsersTab /> : <ProductsTab />}
      </div>
    </div>
  )
}






import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary focus:ring-primary',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100 focus:ring-primary'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18
  
  return (
<button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
<div className="flex items-center justify-center">
        {loading && (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
        )}
        {icon && iconPosition === 'left' && !loading && (
          <ApperIcon name={icon} size={iconSize} className="mr-2" />
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <ApperIcon name={icon} size={iconSize} className="ml-2" />
        )}
      </div>
    </button>
  )
}

export default Button
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
const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none transform hover:scale-[0.98] active:scale-95 focus-ring'
  
  const variants = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-neumorph hover:shadow-neumorph-lg hover:from-primary-600 hover:to-primary-700',
    secondary: 'bg-neumorphic-base text-gray-700 shadow-neumorph hover:shadow-neumorph-inset hover:text-primary',
    outline: 'bg-neumorphic-base border-2 border-primary/20 text-primary shadow-neumorph-sm hover:shadow-neumorph hover:border-primary/40',
    ghost: 'text-gray-600 hover:text-primary hover:bg-neumorphic-base hover:shadow-neumorph-sm'
  }
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg'
  }
  
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 20
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed shadow-neumorph-inset transform-none hover:scale-100' : ''} ${className}`}
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
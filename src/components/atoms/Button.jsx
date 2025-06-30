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
const baseClasses = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none'
  
const variants = {
    primary: 'bg-neumorphic-base text-primary shadow-neumorph hover:shadow-neumorph-inset active:shadow-neumorph-inset',
    secondary: 'bg-neumorphic-base text-primary shadow-neumorph hover:shadow-neumorph-sm',
    outline: 'bg-neumorphic-base text-gray-600 shadow-neumorph hover:text-primary hover:shadow-neumorph-inset',
    ghost: 'text-gray-600 hover:text-primary hover:bg-neumorphic-base hover:shadow-neumorph-sm'
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18
  
return (
<button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed shadow-neumorph-inset' : ''} ${className}`}
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
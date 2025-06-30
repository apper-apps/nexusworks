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
    primary: 'bg-gradient-to-r from-primary via-secondary to-accent text-white focus:ring-primary shadow-2xl hover:shadow-3xl hover:from-accent hover:via-primary hover:to-secondary relative overflow-hidden',
    secondary: 'border-3 border-transparent bg-gradient-to-r from-primary to-accent bg-clip-border hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:text-white focus:ring-primary shadow-xl',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 focus:ring-primary',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 focus:ring-primary'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18
  
  return (
<motion.button
      whileHover={{ 
        scale: disabled ? 1 : 1.05, 
        rotate: disabled ? 0 : Math.random() > 0.5 ? 2 : -2 
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className} transform-gpu`}
      disabled={disabled || loading}
      {...props}
    >
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      )}
      <div className="relative z-10 flex items-center justify-center">
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
    </motion.button>
  )
}

export default Button
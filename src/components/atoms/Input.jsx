import React from 'react'

const Input = ({
  label,
  type = 'text',
  error,
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
<input
        type={type}
className={`w-full px-4 py-3 bg-neumorphic-base rounded-2xl shadow-neumorph-inset focus:shadow-neumorph transition-all duration-300 border-none focus:outline-none ${
          error 
            ? 'text-red-600' 
            : 'text-primary'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Input
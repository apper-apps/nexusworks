import React from 'react'

const Textarea = ({
  label,
  error,
  className = '',
  required = false,
  rows = 4,
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
<textarea
        rows={rows}
className={`w-full px-4 py-3 bg-neumorphic-base rounded-2xl shadow-neumorph-inset focus:shadow-neumorph transition-all duration-300 resize-vertical border-none focus:outline-none ${
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

export default Textarea
import React from 'react'

export function Button({ children, className = '', size, variant, onClick, ...props }) {
  let base = "inline-flex items-center justify-center rounded-full font-semibold transition"
  let sizeClass = size === 'lg' ? 'px-6 py-3 text-lg' : 'px-3 py-2 text-sm'
  let variantClass = "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
  if (variant === 'outline') variantClass = "bg-transparent border-2 border-purple-500/50 text-purple-300"
  return (
    <button onClick={onClick} className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
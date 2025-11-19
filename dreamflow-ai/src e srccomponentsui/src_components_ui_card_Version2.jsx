import React from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-slate-900/50 border-slate-800 p-4 rounded-xl ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
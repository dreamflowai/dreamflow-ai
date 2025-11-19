import React from 'react'

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`w-full bg-slate-800/60 border border-slate-700 rounded-md px-3 py-2 text-slate-200 ${props.className || ''}`}
    />
  )
}

export default Textarea
import React from 'react'

function Button({
    children='button',
    type = '',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    ClassName,
    ...props
}) {
  return (
    <button 
    type = {type}
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${ClassName} `}
    {...props}
    >{children}</button>
  )
}

export default Button; 
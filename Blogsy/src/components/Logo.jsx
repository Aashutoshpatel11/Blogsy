import React from 'react'
import ShinyText from './Animation/ShinyText'

function Logo({ className }) {
  return (
    <ShinyText
      text="Blogsy"
      disabled={false}
      speed={3}
      className={`font-bold text-3xl ${className}  `}
    />
  );
}

export default Logo
